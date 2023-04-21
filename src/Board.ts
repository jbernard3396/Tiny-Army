import Phaser from 'phaser'
import { Grid } from '@jbernard3396/grid-bound'
import Piece from './Piece'
import { Coordinate } from '@jbernard3396/grid-bound/dist/coordinate';

export default class Board {

    private board: Phaser.GameObjects.Image;
    private grid: Grid;

    constructor(scene: Phaser.Scene, x: number, y: number, numSquares:number, texture: string) {
        //create grid of size numSquares x numSquares
        var numXSquares = numSquares;
        var numYSquares = numSquares;
        this.grid = new Grid(numXSquares, numYSquares);
        //for each square in the grid, create a new image
        for (var i = 0; i < numXSquares; i++) {
            for (var j = 0; j < numYSquares; j++) {
                this.board = scene.add.image(x + (j * 32), y + (i * 32), texture);
            }
        }
    }

    get display() {
        return this.board;
    }

    addPiece(piece: Piece, x: number, y: number) {
        // this.grid.addCellObject(new Coordinate(x, y), piece);
        
    }
}