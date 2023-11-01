var CSI = CSI || {};

CSI.Boot = function() {};

//setting game configuration and loading the assets for the loading screen
CSI.Boot.prototype = {
    preload: function() {

    },
    create: function() {

        objModel.setDeviceType(CSI.game.device.desktop);
        this.game.stage.backgroundColor = "#cdcbfc";

        $("#phaser-container").css({
            "height": window.innerHeight
        });
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.refresh();

        //objModel._currentScreen=5;

        objModel.isMouseStatus = "";
        this.state.start('PhaserPreloader');
    }
};