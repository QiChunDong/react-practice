import {useState} from 'react'
import './app.css'

function Square({value, clickHandler}) {
    return (<button className="square" onClick={clickHandler}>{value}</button>)
}


function Board({isNext, squares, onPlay}) {
    function clickHandler(i) {
        if (squares[i] || calcWinner(squares)) {
            return
        }
        let sqBak = squares.slice()
        if (isNext) {
            sqBak[i] = 'X'
        } else {
            sqBak[i] = 'O'
        }
        onPlay(sqBak)
    }

    let status = ''
    const winner = calcWinner(squares)
    if (winner) {
        status = 'Winner' + winner
    } else {
        status = 'Next Player is ' + (isNext ? 'X' : 'O')
    }

    const rows = Array(3).fill(null)
    let sqEls = rows.map((_, idx) => {
        let innerEls = squares.map((sq, i) => {
            if (idx * 3 <= i && (idx + 1) * 3 > i) {
                return <Square key={i} clickHandler={() => clickHandler(i)} value={sq}></Square>
            }
            return null
        })
        return (
            <div className="board-row" key={idx}>
                {innerEls}
            </div>
        )
    })

    return (
        <div>
            <div>{status}</div>
            {sqEls}
        </div>
    )
}

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState((0))
    const currentSquare = history[currentMove]
    const isNext = currentMove % 2 === 0

    function handlePlay(nextSquare) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquare]
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1)
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove)
    }

    const moves = history.map((squares, move) => {
        let description = ''
        if (move > 0 ) {
            description = 'go to game #' + move
        } else {
            description = 'go to game start'
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    })

    return (
        <div className="game">
            <div className="game-board">
                <Board isNext={isNext} squares={currentSquare} onPlay={handlePlay}></Board>
            </div>
            <div className="game-info">
                {moves}
            </div>
        </div>
    )
}

function calcWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (const i in lines) {
        const [a, b, c] = lines[i]
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
    return null
}