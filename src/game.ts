export function preloadGame(game: Phaser.Game) {
    game.load.image('logo', 'assets/logo.png');
}
    

export function createGame(game: Phaser.Game) {
    const logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);
}

export function updateGame(game: Phaser.Game) {
    // TODO
}