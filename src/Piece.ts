import Phaser from 'phaser'
import { Grid } from '@jbernard3396/grid-bound'

export default class Piece {
    private texture: string;
    private type : string;
    private image: Phaser.GameObjects.Image;

    constructor(unitType: string, texture: string) {
        this.type = unitType;
        this.texture = texture;
    }

    get display() {
        return this.image;
    }
}