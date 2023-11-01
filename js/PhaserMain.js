var CSI = CSI || {};

function PhserObj() {

    CSI.game = new Phaser.Game(1024, 768, Phaser.CANVAS, 'phaser-container');

    CSI.game.canvasWidth = 1024;
    CSI.game.canvasHeight = 768;

    CSI.game.state.add('Boot', CSI.Boot);
    CSI.game.state.add('PhaserPreloader', CSI.PhaserPreloader);
    CSI.game.state.add('Screen', CSI.Screen);
    CSI.game.state.add('ScreenManager', CSI.ScreenManager);
    //CSI.game.state.start('Boot');

}