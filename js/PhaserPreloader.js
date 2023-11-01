var CSI = CSI || {};

//loading the game assets
CSI.PhaserPreloader = function() {


    this.objScreenView = this;
};

CSI.PhaserPreloader.prototype = {
    preload: function() {
        console.log("preload............ ");
        var _deviceType = "desktop"; //""objModel.getDeviceType();
        var _obj = objModel.getParseJSON();
        var currentScreen = objModel.getcurrentScreenIndex();
        var commonPath = "";
        if (currentScreen == 1) {
            if (String(objModel.currentMysteryName) == "mystery2") {

                this.load.atlasJSONHash('smoke', 'assets/images/desktop/smoke.png', 'assets/json/smoke.json');
            }
        }

        for (var i = 0; i < _obj.screens["screen" + currentScreen].assets.length; i++) {
            commonPath = "";
            if (_obj.screens["screen" + currentScreen].assets[i].source == "common") {
                //	
                commonPath = "../" + _obj.screens["screen" + currentScreen].assets[i].source + "/";
            }
            // console.log(i+" ssssssssssssss "+_obj.screens["screen"+currentScreen].assets[i].filename);
            if (_obj.screens["screen" + currentScreen].assets[i].type == ".mp3") {
                this.load.audio(_obj.screens["screen" + currentScreen].assets[i].filename, commonPath + 'assets/audios/' + _obj.screens["screen" + currentScreen].assets[i].filename + _obj.screens["screen" + currentScreen].assets[i].type);
            } else if (_obj.screens["screen" + currentScreen].assets[i].type == ".png" || _obj.screens["screen" + currentScreen].assets[i].type == ".jpg") {
                //console.log("aaa ",_obj.screens["screen"+currentScreen].assets[i].filename, commonPath+'assets/images/'+_deviceType+'/'+_obj.screens["screen"+currentScreen].assets[i].filename+_obj.screens["screen"+currentScreen].assets[i].type)
                //alert(_obj.screens["screen"+currentScreen].assets[i].filename)
                this.load.image(_obj.screens["screen" + currentScreen].assets[i].filename, commonPath + 'assets/images/' + _deviceType + '/' + _obj.screens["screen" + currentScreen].assets[i].filename + _obj.screens["screen" + currentScreen].assets[i].type);
            } else if (String(_obj.screens["screen" + currentScreen].assets[i].type).indexOf(".spritesheet") != -1) {

                var imgType = "." + String(_obj.screens["screen" + currentScreen].assets[i].type).split("|")[1];
                var frmWidth = Number(_obj.screens["screen" + currentScreen].assets[i].frameWidth);
                var frmHeight = Number(_obj.screens["screen" + currentScreen].assets[i].frameHeight);
                this.load.spritesheet(_obj.screens["screen" + currentScreen].assets[i].filename, commonPath + 'assets/images/' + _deviceType + '/' + _obj.screens["screen" + currentScreen].assets[i].filename + imgType, frmWidth, frmHeight);
            } else if (_obj.screens["screen" + currentScreen].assets[i].type == ".json") {
                //console.log("josn name-- ",_obj.screens["screen"+currentScreen].assets[i].filename)
                this.load.json(_obj.screens["screen" + currentScreen].assets[i].filename, commonPath + 'assets/json/' + _obj.screens["screen" + currentScreen].assets[i].filename + _obj.screens["screen" + currentScreen].assets[i].type);
            }





            //this.load.atlasJSONHash('bot', 'assets/images/desktop/smoke.png', 'assets/images/desktop/smoke.json');
        }


        if (objModel._mysteryTrophyData) {
            var totalTrophyToDisplay = Object.keys(objModel._mysteryTrophyData).length;

            for (var i = 0; i < totalTrophyToDisplay; i++) {

                this.load.spritesheet("trophy" + i, "../" + objModel._mysteryTrophyData[Object.keys(objModel._mysteryTrophyData)[i]].folder_name + '/assets/images/' + _deviceType + '/' + "trophy.png", 100, 100);

                this.load.image("trophy-popup" + i, "../" + objModel._mysteryTrophyData[Object.keys(objModel._mysteryTrophyData)[i]].folder_name + '/assets/images/' + _deviceType + '/' + "trophy-pop.png");

                this.load.image("reportcard-thumb" + i, "../" + objModel._mysteryTrophyData[Object.keys(objModel._mysteryTrophyData)[i]].folder_name + '/assets/images/' + _deviceType + '/' + "reportcard-thumb.jpg");
            }
        }
    },
    create: function() {

        console.log("create function-----  ");


        var _deviceType = "desktop"; //""objModel.getDeviceType();
        var _obj = objModel.getParseJSON();
        var currentScreen = objModel.getcurrentScreenIndex();
        var commonPath = "";
        var counter = 0;
        objModel.audioArr = new Array();
        var _root = this;
        var tmr = 5000;
        if (CSI.game.device.desktop) {
            tmr = 0;
        }

        for (var i = 0; i < _obj.screens["screen" + currentScreen].assets.length; i++) {
            if (_obj.screens["screen" + currentScreen].assets[i].type == ".mp3") {
                var strAudioName = String(_obj.screens["screen" + currentScreen].assets[i].filename);
                objController[strAudioName] = CSI.game.add.audio(_obj.screens["screen" + currentScreen].assets[i].filename);
                console.log("audio decode... ", strAudioName)

                objModel.audioArr.push(objController[strAudioName]);



            }
        }
        if (objModel.audioArr.length == 0) {
            _root.state.start('ScreenManager');
            return;
        }
        CSI.game.sound.setDecodedCallback(objModel.audioArr, audioDecodedComplete, this);

        function audioDecodedComplete() {

            _root.state.start('ScreenManager');

        }


    }
};