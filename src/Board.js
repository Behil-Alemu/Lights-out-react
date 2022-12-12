import React, { useState } from 'react';
import Cell from './Cell';
import './Board.css';
import { choice } from './helper';

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows = 5, ncols = 5, chanceLightStartsOn }) {
	const [ board, setBoard ] = useState(createBoard());

	/** create a board nrows high/ncols wide, each cell randomly lit or unlit */
	function createBoard() {
		let initialBoard = [];
		// TODO: create array-of-arrays of true/false values
		const arrBoard = Array.from({ length: ncols }, () =>
			Array.from({ length: nrows }, () => choice([ true, false ]))
		);
		return arrBoard;
	}
	// const arrEx = [
	//   [true, true, true],
	//   [true, false, true],
	//   [true, true, true],

	// ];

	function hasWon(arr) {
		// TODO: check the board in state to determine whether the player has won.
		const allTrue = arr.every((subArr) => subArr.every(Boolean));

		if (allTrue === true || allTrue === false)
			return (
				<div>
					<h1>You won!</h1>
				</div>
			);
	}

	function flipCellsAround(coord) {
		setBoard((oldBoard) => {
			const [ y, x ] = coord.split('-').map(Number);

			const flipCell = (y, x, boardCopy) => {
				// if this coord is actually on board, flip it

				if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
					boardCopy[y][x] = !boardCopy[y][x];
				}
			};

			// TODO: Make a (deep) copy of the oldBoard

			// TODO: in the copy, flip this cell and the cells around it

			// TODO: return the copy
			return boardCopy;
		});
	}

	// if the game is won, just show a winning msg & render nothing else

	hasWon(board);
  // return (
  //   <div>
  //     {hasWon(arr) ? hasWon(arr) : null}
  //   </div>
  // );

	// TODO

	// make table board


	return (
		<div>
			<table>
				<tbody>
					{board.map((b) => (
						<tr>
              {b.map((val) => (
              <td>
                <Cell isLit={val} flipCellsAroundMe={flipCellsAround} />
                </td>
              ))}
            </tr>
					))}
				</tbody>
			</table>
		</div>
	);
	// TODO
}

export default Board;

// function flipCellsAround(coord) {
//   setBoard(oldBoard => {
//     const [y, x] = coord.split("-").map(Number);

//     const flipCell = (y, x, boardCopy) => {
//       // if this coord is actually on board, flip it

//       if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
//         boardCopy[y][x] = !boardCopy[y][x];
//       }
//     };

//     // Make a (deep) copy of the oldBoard

//     const boardCopy = JSON.parse(JSON.stringify(oldBoard));

//     // In the copy, flip this cell and the cells around it

//     flipCell(y, x, boardCopy);
//     flipCell(y - 1, x, boardCopy);
//     flipCell(y + 1, x, boardCopy);
//     flipCell(y, x - 1, boardCopy);
//     flipCell(y, x + 1, boardCopy);

//     // Return the copy

//     return boardCopy;
//   });
// }
