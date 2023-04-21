import Phaser from 'phaser'
//need to import the grid class from @jbernard3396/grid-bound
//export statement looks like exports.Grid = Grid;
import { Grid } from '@jbernard3396/grid-bound'
import Board from './Board'
import Piece from './Piece'


enum ImageNames
{
	Knight = 'knight',
	Board = 'board'
}

export default class HelloWorldScene extends Phaser.Scene
{
	constructor()
	{
		super('hello-world')
	}

	preload()
    {
		this.load.image(ImageNames.Knight, './assets/units/knight.png');
		this.load.image(ImageNames.Board, './assets/ui/board_tile.png');
    }

    create()
    {
		var board = new Board(this, 400, 300, 8, ImageNames.Board);
		// var knight = new Piece("knight", ImageNames.Knight);
		// board.addPiece(knight, 0, 0);
		var knight = this.add.image(400, 300, ImageNames.Knight);
	}
}