export default function Gameboard({ onSelectSquare, board }) {
    // const [gameBoard, setGameBoard] = useState(initialGameboard);

    // function handleSelectSquare(rowIndex, colIndex){
    //     setGameBoard((prevGameboard) => {
    //         const updateBoard = [...prevGameboard.map(innerArray => [...innerArray])];
    //         updateBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updateBoard;
    //     });

    //     onSelectSquare();
    // }

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                        <button 
                            onClick={() => onSelectSquare(rowIndex, colIndex)}
                            disabled={playerSymbol}
                        >{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    );
}