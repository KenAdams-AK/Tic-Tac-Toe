import React, { useEffect, useState } from 'react';
import { calculateWinner } from '../calculateWinner';
import PlayField from './PlayField';

function Game() {
	const [move, setMove] = useState([Array(9).fill(null)]);
	const [moveNumber, setMoveNumber] = useState(0);
	const [xIsNext, setXIsNext] = useState(true);
	const [isDraw, setIsDraw] = useState(false);

	const winner = calculateWinner(move[moveNumber]);
	const xO = xIsNext ? 'X' : 'O';

	useEffect(() => {
		if (moveNumber > 8 && !winner) {
			setIsDraw(true);
		}
	}, [moveNumber, winner]);

	const handleClick = (i) => {
		const movePoint = move.slice(0, moveNumber + 1);
		const current = movePoint[moveNumber];
		const squares = [...current];

		if (winner || squares[i]) return;

		squares[i] = xO;
		setMove([...movePoint, squares]);
		setMoveNumber(movePoint.length);
		setXIsNext(!xIsNext);
	};

	return (
		<div className="Game">
			{isDraw ? (
				<h2>Draw!</h2>
			) : (
				<h2>{winner ? `Winner: ${winner}!` : `Next Player: ${xO}`}</h2>
			)}

			<PlayField squares={move[moveNumber]} onClick={handleClick} />
			<button className="restart" onClick={() => window.location.reload()}>
				Restart
			</button>
		</div>
	);
}

export default Game;
