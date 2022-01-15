import React from 'react';
import Square from './Square';

function PlayField({ squares, onClick }) {
	return (
		<div className="PlayField">
			{squares.map((square, i) => (
				<Square key={i} value={square} onClick={() => onClick(i)} />
			))}
		</div>
	);
}

export default PlayField;
