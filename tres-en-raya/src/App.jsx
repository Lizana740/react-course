import './App.css'
import confetti from 'canvas-confetti'
import {useState} from 'react'
import { Square } from './components/Square'
import { TURNS } from './constants'


const checkWinner = (tablero) => {
 // Verificar filas
 for (let i = 0; i < 3; i += 3) {
    if (tablero[i] !== '-' && tablero[i] === tablero[i + 1] && tablero[i] === tablero[i + 2]) {
        return tablero[i]; // Devuelve el jugador que ganó
    }
}

// Verificar columnas
for (let i = 0; i < 3; i++) {
    if (tablero[i] !== '-' && tablero[i] === tablero[i + 3] && tablero[i] === tablero[i + 6]) {
        return tablero[i]; // Devuelve el jugador que ganó
    }
}

// Verificar diagonales
if (tablero[0] !== '-' && tablero[0] === tablero[4] && tablero[0] === tablero[8]) {
    return tablero[0]; // Devuelve el jugador que ganó
}
if (tablero[2] !== '-' && tablero[2] === tablero[4] && tablero[2] === tablero[6]) {
    return tablero[2]; // Devuelve el jugador que ganó
}

// Si no hay ganador, devolver null
return null;
}

const endGame = (t) => {
    return t.every((s)=> s != null)
}

export function App(){
    const [board,setBoard] = useState(()=>{
        const board = localStorage.getItem('board')
        return board? JSON.parse(board):Array(9).fill(null)
    })

    const [turn,setTurn] = useState(()=> {
        const  state = localStorage.getItem('state')
        return state ?? TURNS.x
    })

    const [winner,setWinner] = useState(null)
    
    const updateBoard = (index)=>{
        if(board[index] || winner)return
        const auxBoard = [... board]
        auxBoard[index] = turn
        setBoard(auxBoard)
        localStorage.setItem('board', JSON.stringify(auxBoard))
        let ganador = checkWinner(auxBoard)

        if(ganador){
            setWinner(ganador)
            confetti()
            return
        }else{
            let empate = endGame(auxBoard)
            if(empate){
                setWinner('Empate')
            }
        }
        setTurn(turn==TURNS.x?TURNS.o:TURNS.x)

    }

    const resetBoard = ()=>{
        setBoard(Array(9).fill(null))
        setTurn('X')
        setWinner(null)
        localStorage.removeItem('board')
        localStorage.removeItem('state')
    }

    return(
        <main className="board">
            <h1>Game Gato</h1>
            <section>
                <button onClick={resetBoard}> Reset </button>
            </section>
            <section className="game">
                {
                    board.map((_,index)=>{
                        return(
                            <Square
                                key={index}
                                index={index}
                                updateBoard={updateBoard}
                            >
                               {board[index]} 
                            </Square>
                        )
                    })
                }
            </section>
            <section className="turn">
                <Square isSelected={turn ==TURNS.x}>
                    {TURNS.x}
                </Square>
                <Square isSelected={turn ==TURNS.o}>
                    {TURNS.o}
                </Square>
            </section>
            {
                winner != null && (
                    <section className='winner'>
                        <div className='text'>
                            <h2>Ganador</h2>
                        <header className='win'>
                            {winner && <Square>{winner}</Square>}
                        </header>
                        <footer>
                            <button onClick={resetBoard}> Reset </button>
                        </footer>
                        </div>
                    </section>
                )
            }
        </main>
    )
}