var CSI = CSI || {};
CSI.Controller = function() {
    var _objSV
    this.objController = this
};
CSI.Controller.prototype = {
    setScreenBackground: function(objScreenView) {
        _objSV = objScreenView;
        _objSV.pegCounter = 0;
        _objSV.allGraphicsLineGrp = _objSV.add.group();
        _objSV.currentBoardType = "circle";
        _objSV.undoArr = new Array();
        _objSV.currentBoardArr = new Array();
        _objSV.sqareBoardArr = new Array({
            xPos: 230,
            yPos: 52
        }, {
            xPos: 282,
            yPos: 52
        }, {
            xPos: 334,
            yPos: 52
        }, {
            xPos: 386,
            yPos: 52
        }, {
            xPos: 438,
            yPos: 52
        }, {
            xPos: 490,
            yPos: 52
        }, {
            xPos: 542,
            yPos: 52
        }, {
            xPos: 594,
            yPos: 52
        }, {
            xPos: 646,
            yPos: 52
        }, {
            xPos: 698,
            yPos: 52
        }, {
            xPos: 750,
            yPos: 52
        }, {
            xPos: 230,
            yPos: 104
        }, {
            xPos: 282,
            yPos: 104
        }, {
            xPos: 334,
            yPos: 104
        }, {
            xPos: 386,
            yPos: 104
        }, {
            xPos: 438,
            yPos: 104
        }, {
            xPos: 490,
            yPos: 104
        }, {
            xPos: 542,
            yPos: 104
        }, {
            xPos: 594,
            yPos: 104
        }, {
            xPos: 646,
            yPos: 104
        }, {
            xPos: 698,
            yPos: 104
        }, {
            xPos: 750,
            yPos: 104
        }, {
            xPos: 230,
            yPos: 156
        }, {
            xPos: 282,
            yPos: 156
        }, {
            xPos: 334,
            yPos: 156
        }, {
            xPos: 386,
            yPos: 156
        }, {
            xPos: 438,
            yPos: 156
        }, {
            xPos: 490,
            yPos: 156
        }, {
            xPos: 542,
            yPos: 156
        }, {
            xPos: 594,
            yPos: 156
        }, {
            xPos: 646,
            yPos: 156
        }, {
            xPos: 698,
            yPos: 156
        }, {
            xPos: 750,
            yPos: 156
        }, {
            xPos: 230,
            yPos: 208
        }, {
            xPos: 282,
            yPos: 208
        }, {
            xPos: 334,
            yPos: 208
        }, {
            xPos: 386,
            yPos: 208
        }, {
            xPos: 438,
            yPos: 208
        }, {
            xPos: 490,
            yPos: 208
        }, {
            xPos: 542,
            yPos: 208
        }, {
            xPos: 594,
            yPos: 208
        }, {
            xPos: 646,
            yPos: 208
        }, {
            xPos: 698,
            yPos: 208
        }, {
            xPos: 750,
            yPos: 208
        }, {
            xPos: 230,
            yPos: 260
        }, {
            xPos: 282,
            yPos: 260
        }, {
            xPos: 334,
            yPos: 260
        }, {
            xPos: 386,
            yPos: 260
        }, {
            xPos: 438,
            yPos: 260
        }, {
            xPos: 490,
            yPos: 260
        }, {
            xPos: 542,
            yPos: 260
        }, {
            xPos: 594,
            yPos: 260
        }, {
            xPos: 646,
            yPos: 260
        }, {
            xPos: 698,
            yPos: 260
        }, {
            xPos: 750,
            yPos: 260
        }, {
            xPos: 230,
            yPos: 312
        }, {
            xPos: 282,
            yPos: 312
        }, {
            xPos: 334,
            yPos: 312
        }, {
            xPos: 386,
            yPos: 312
        }, {
            xPos: 438,
            yPos: 312
        }, {
            xPos: 490,
            yPos: 312
        }, {
            xPos: 542,
            yPos: 312
        }, {
            xPos: 594,
            yPos: 312
        }, {
            xPos: 646,
            yPos: 312
        }, {
            xPos: 698,
            yPos: 312
        }, {
            xPos: 750,
            yPos: 312
        }, {
            xPos: 230,
            yPos: 364
        }, {
            xPos: 282,
            yPos: 364
        }, {
            xPos: 334,
            yPos: 364
        }, {
            xPos: 386,
            yPos: 364
        }, {
            xPos: 438,
            yPos: 364
        }, {
            xPos: 490,
            yPos: 364
        }, {
            xPos: 542,
            yPos: 364
        }, {
            xPos: 594,
            yPos: 364
        }, {
            xPos: 646,
            yPos: 364
        }, {
            xPos: 698,
            yPos: 364
        }, {
            xPos: 750,
            yPos: 364
        }, {
            xPos: 230,
            yPos: 416
        }, {
            xPos: 282,
            yPos: 416
        }, {
            xPos: 334,
            yPos: 416
        }, {
            xPos: 386,
            yPos: 416
        }, {
            xPos: 438,
            yPos: 416
        }, {
            xPos: 490,
            yPos: 416
        }, {
            xPos: 542,
            yPos: 416
        }, {
            xPos: 594,
            yPos: 416
        }, {
            xPos: 646,
            yPos: 416
        }, {
            xPos: 698,
            yPos: 416
        }, {
            xPos: 750,
            yPos: 416
        }, {
            xPos: 230,
            yPos: 468
        }, {
            xPos: 282,
            yPos: 468
        }, {
            xPos: 334,
            yPos: 468
        }, {
            xPos: 386,
            yPos: 468
        }, {
            xPos: 438,
            yPos: 468
        }, {
            xPos: 490,
            yPos: 468
        }, {
            xPos: 542,
            yPos: 468
        }, {
            xPos: 594,
            yPos: 468
        }, {
            xPos: 646,
            yPos: 468
        }, {
            xPos: 698,
            yPos: 468
        }, {
            xPos: 750,
            yPos: 468
        }, {
            xPos: 230,
            yPos: 520
        }, {
            xPos: 282,
            yPos: 520
        }, {
            xPos: 334,
            yPos: 520
        }, {
            xPos: 386,
            yPos: 520
        }, {
            xPos: 438,
            yPos: 520
        }, {
            xPos: 490,
            yPos: 520
        }, {
            xPos: 542,
            yPos: 520
        }, {
            xPos: 594,
            yPos: 520
        }, {
            xPos: 646,
            yPos: 520
        }, {
            xPos: 698,
            yPos: 520
        }, {
            xPos: 750,
            yPos: 520
        }, {
            xPos: 230,
            yPos: 572
        }, {
            xPos: 282,
            yPos: 572
        }, {
            xPos: 334,
            yPos: 572
        }, {
            xPos: 386,
            yPos: 572
        }, {
            xPos: 438,
            yPos: 572
        }, {
            xPos: 490,
            yPos: 572
        }, {
            xPos: 542,
            yPos: 572
        }, {
            xPos: 594,
            yPos: 572
        }, {
            xPos: 646,
            yPos: 572
        }, {
            xPos: 698,
            yPos: 572
        }, {
            xPos: 750,
            yPos: 572
        }, )
        _objSV.circleBoardArr = new Array({
            xPos: 489.55,
            yPos: 48.55
        }, {
            xPos: 557.8,
            yPos: 58.3
        }, {
            xPos: 620.2,
            yPos: 84.3
        }, {
            xPos: 675.45,
            yPos: 126.55
        }, {
            xPos: 716.4,
            yPos: 180.5
        }, {
            xPos: 744.35,
            yPos: 244.2
        }, {
            xPos: 752.15,
            yPos: 311.8
        }, {
            xPos: 743.05,
            yPos: 380.05
        }, {
            xPos: 716.4,
            yPos: 442.45
        }, {
            xPos: 676.1,
            yPos: 497.7
        }, {
            xPos: 620.2,
            yPos: 539.3
        }, {
            xPos: 557.8,
            yPos: 565.3
        }, {
            xPos: 489.55,
            yPos: 574.4
        }, {
            xPos: 421.3,
            yPos: 565.3
        }, {
            xPos: 357.6,
            yPos: 538.65
        }, {
            xPos: 304.3,
            yPos: 497.7
        }, {
            xPos: 261.4,
            yPos: 442.45
        }, {
            xPos: 236.05,
            yPos: 380.05
        }, {
            xPos: 226.3,
            yPos: 311.8
        }, {
            xPos: 235.4,
            yPos: 244.2
        }, {
            xPos: 261.4,
            yPos: 180.5
        }, {
            xPos: 304.3,
            yPos: 125.9
        }, {
            xPos: 421.95,
            yPos: 58.3
        }, {
            xPos: 489.55,
            yPos: 311.8
        }, {
            xPos: 229.4,
            yPos: 50.05
        }, {
            xPos: 753.95,
            yPos: 50.05
        }, {
            xPos: 229.4,
            yPos: 574.45
        }, {
            xPos: 753.95,
            yPos: 574.45
        }, {
            xPos: 358.25,
            yPos: 84.3
        });
        _objSV.rubberBandPosArr = new Array({
            xPos: 207.8,
            yPos: 692.75
        }, {
            xPos: 346.25,
            yPos: 692.75
        }, {
            xPos: 495.1,
            yPos: 692.75
        }, {
            xPos: 643.95,
            yPos: 692.75
        }, {
            xPos: 782.4,
            yPos: 692.75
        });
        _objSV.bandNameArr = new Array("redband", "orangeband", "yellowband", "greenband", "blueband");
        _objSV.pegColorNameArr = new Array("red", "orange", "yellow", "green", "blue");
        _objSV.colorNameArr = new Array("0xFF3333", "0xFF7727", "0xFFCC00", "0x339900", "0x269ED3");
        _objSV.toolBoxArr = new Array({
            xPos: 65,
            yPos: 217
        }, {
            xPos: 130,
            yPos: 217
        }, {
            xPos: 192,
            yPos: 214
        }, {
            xPos: 67,
            yPos: 257
        }, {
            xPos: 130,
            yPos: 257
        }, {
            xPos: 193,
            yPos: 257
        }, {
            xPos: 67,
            yPos: 298
        }, {
            xPos: 130,
            yPos: 302
        }, {
            xPos: 192,
            yPos: 302
        }, {
            xPos: 65,
            yPos: 340
        });
        _objSV.bg = _objSV.add.button(0, 0, 'reset');
        _objSV.bg.width = 1024;
        _objSV.bg.height = 768;
        _objSV.bg.alpha = 0;
        _objSV.bg.events.onInputDown.add(this.objController.onSVMoseUpHandler, this);
        objController.createSquareBoard();
        objController.createCircleBoard();
        objController.makeRubberBandDraggable();

        //**** 
        _objSV.bandsData = new Array();
        _objSV.bandsContext = CSI.game.add.graphics(0, 0);
        _objSV.curBand = -1;

        _objSV.undoData = new Array();


    },
    setToolScreen: function() {
        _objSV.toolRefGrp = _objSV.add.group();
        _objSV.toolBg = _objSV.add.sprite(0, 0, 'toolbg');
        _objSV.resetBtn = _objSV.add.button(18, 235, 'reset');
        _objSV.resetBtn.type = "reset";
        _objSV.undoBtn = _objSV.add.button(85, 235, 'undo');
        _objSV.undoBtn.type = "undo";
        _objSV.circleBtn = _objSV.add.button(48, 135, 'toolbtns');
        _objSV.circleBtn.type = "circleBoard";
        _objSV.squareBtn = _objSV.add.button(50, 45, 'toolbtns');
        _objSV.squareBtn.setFrames(3, 3, 3);
        _objSV.squareBtn.type = "squareBoard";
        _objSV.resetBtn.events.onInputDown.add(this.objController.toolBtnClkHandler, this);
        _objSV.undoBtn.events.onInputDown.add(this.objController.toolBtnClkHandler, this);
        _objSV.circleBtn.events.onInputDown.add(this.objController.toolBtnClkHandler, this);
        _objSV.squareBtn.events.onInputDown.add(this.objController.toolBtnClkHandler, this);
        _objSV.toolRefGrp.addChild(_objSV.toolBg);
        _objSV.toolRefGrp.addChild(_objSV.resetBtn);
        _objSV.toolRefGrp.addChild(_objSV.undoBtn);
        _objSV.toolRefGrp.addChild(_objSV.squareBtn);
        _objSV.toolRefGrp.addChild(_objSV.circleBtn);
        _objSV.toolRefGrp.x = 830;
        _objSV.toolRefGrp.y = 20;
        objController.toggleUndoBtn(false);
    },
    onSVMoseUpHandler: function() {
        for (var i = 0; i < _objSV.bandsData.length; i++) {
            //_objSV["pegGrp" + i].alpha = 0
        }
    },
    onSVBringPegsToTop: function() {
        CSI.game.world.bringToTop(_objSV["pegGrp" + _objSV.pegCounter])

    },
    renderOldLine: function() {
        console.log("renderOldLine");
        if (_objSV.lineGraphicsTemp1) {
            _objSV.lineGraphicsTemp1.clear();
            _objSV.lineGraphicsTemp2.clear()
        }
        _objSV.lineGraphicsTemp1 = CSI.game.add.graphics(0, 0);
        _objSV.lineGraphicsTemp1.lineStyle(2, _objSV.currentBand.colorRef, 1);

        var bulletIndex = _objSV.currentBulletMc.index;
        var p1 = bulletIndex - 1;
        var p2 = bulletIndex + 1;
        if (p1 < 0) p1 = _objSV.currentBand.points.length - 1;
        if (p2 == _objSV.currentBand.points.length) p2 = 0;

        objController.updateLines(bulletIndex, -1);

        _objSV.lineGraphicsTemp1.moveTo(_objSV.currentBand.points[p1].x, _objSV.currentBand.points[p1].y);
        _objSV.lineGraphicsTemp1.lineTo(_objSV.currentBulletMc.x, _objSV.currentBulletMc.y);
        _objSV.lineGraphicsTemp1.lineTo(_objSV.currentBand.points[p2].x, _objSV.currentBand.points[p2].y);


        //_objSV.lineGraphicsTemp1.endFill();
        _objSV.lineGraphicsTemp2 = CSI.game.add.graphics(0, 0);
        _objSV.lineGraphicsTemp2.lineStyle(2, _objSV.currentBand.colorRef, 1);
        //objController.drawParellelLine(_objSV.lineGraphicsTemp2, _objSV.currentBulletMc.x, _objSV.currentBulletMc.y, _objSV.currentBulletMc.connectedBullet1.x, _objSV.currentBulletMc.connectedBullet1.y, 0)
        CSI.game.world.bringToTop(_objSV.currentBulletMc);
        // CSI.game.world.bringToTop(_objSV.currentBulletMc.connectedBullet1)
    },
    toolBtnClkHandler: function(button) {
        if (button.type == "squareBoard") {
            _objSV.currentBoardType = "square";
            objController.clearAllGraphics();
            _objSV.squareBtn.setFrames(1, 1, 1);
            _objSV.circleBtn.setFrames(2, 2, 2);
            objController.createSquareBoard();
            objController.resetAll();
            objController.updateDisplay(false);
        } else if (button.type == "circleBoard") {

            _objSV.currentBoardType = "circle";
            objController.clearAllGraphics();
            _objSV.squareBtn.setFrames(3, 3, 3);
            _objSV.circleBtn.setFrames(0, 0, 0);
            objController.createCircleBoard();
            objController.resetAll();
            objController.updateDisplay(false);
        } else if (button.type == "undo") {
            /* 
                        if (_objSV.undoArr[_objSV.undoArr.length - 1].type = "singleBand") {
                            _objSV.undoArr[_objSV.undoArr.length - 1].refMc.pegCircleRef.destroy();
                            _objSV.undoArr[_objSV.undoArr.length - 1].refMc.destroy();
                            _objSV.undoArr.pop()
                        }
                        if (_objSV.currentBoardType == "circle") {
                            objController.createCircleBoard()
                        } else if (_objSV.currentBoardType == "square") {
                            objController.createSquareBoard()
            			} */

            objController.restoreState();

        } else if (button.type == "reset") {
            /*
            if (_objSV.currentBoardType == "circle") {
                objController.createCircleBoard()
            } else if (_objSV.currentBoardType == "square") {
                objController.createSquareBoard()
			}
			*/

            objController.resetAll();
        }
    },
    resetAll: function() {
        objController.resetBoard();
        _objSV.bandsData = [];
        objController.updateDisplay(false);
        _objSV.undoData = new Array();
        objController.toggleUndoBtn(false);

    },
    clearAllGraphics: function() {
        if (_objSV.allGraphicsLineGrp) {
            _objSV.allGraphicsLineGrp.destroy()
        }
        _objSV.allGraphicsLineGrp = _objSV.add.group()
    },
    createCircleBoard: function() {
        if (_objSV.squareBoardGrp) {
            _objSV.squareBoardGrp.destroy()
        }
        if (_objSV.circleBoardGrp) {
            _objSV.circleBoardGrp.destroy()
        }
        if (_objSV.bulletGrps) {
            _objSV.bulletGrps.destroy();
        }
        _objSV.circleBoardGrp = _objSV.add.group();
        _objSV.circleBoardBG = _objSV.add.sprite(0, 0, 'board');
        _objSV.circleBoardBG.x = 192;
        _objSV.circleBoardBG.y = 15;
        _objSV.circleBoardBG.width = 600;
        _objSV.circleBoardBG.height = 600;
        _objSV.circleBoardGrp.addChild(_objSV.circleBoardBG);
        _objSV.currentBoardArr = _objSV.circleBoardArr

        _objSV.bulletGrps = _objSV.add.group();

        for (var i = 1; i <= _objSV.circleBoardArr.length; i++) {
            _objSV["bullet" + i] = _objSV.add.sprite(0, 0, 'bullet');
            _objSV["bullet" + i].inputEnabled = !0;
            _objSV["bullet" + i].anchor.x = 0.5;
            _objSV["bullet" + i].anchor.y = 0.5;
            _objSV["bullet" + i].ID = i;
            _objSV["bullet" + i].name = i;
            _objSV["bullet" + i].x = _objSV.circleBoardArr[i - 1].xPos;
            _objSV["bullet" + i].y = _objSV.circleBoardArr[i - 1].yPos;
            _objSV["bullet" + i].input.priorityID = -1;
            _objSV.bulletGrps.addChild(_objSV["bullet" + i])
            //_objSV.circleBoardGrp.addChild(_objSV["bullet" + i]);;


        }
        _objSV.circleBoardBG.inputEnabled = !0;
        _objSV.circleBoardBG.useHandCursor = !0;
        _objSV.circleBoardBG.events.onInputDown.add(this.objController.onSVMoseUpHandler, this);
        _objSV.input.addMoveCallback(this.objController.myMove, this);
        objController.makeRubberBandDraggable()


    },
    createSquareBoard: function() {
        if (_objSV.squareBoardGrp) {
            _objSV.squareBoardGrp.destroy()
        }
        if (_objSV.circleBoardGrp) {
            _objSV.circleBoardGrp.destroy()
        }

        if (_objSV.bulletGrps) {
            _objSV.bulletGrps.destroy();
        }
        _objSV.squareBoardGrp = _objSV.add.group();
        _objSV.squareBoardBG = _objSV.add.sprite(0, 0, 'board');
        _objSV.squareBoardBG.x = 192;
        _objSV.squareBoardBG.y = 15;
        _objSV.squareBoardBG.width = 600;
        _objSV.squareBoardBG.height = 600;
        _objSV.squareBoardGrp.addChild(_objSV.squareBoardBG);
        _objSV.currentBoardArr = _objSV.sqareBoardArr
        _objSV.bulletGrps = _objSV.add.group();
        for (var i = 1; i <= _objSV.sqareBoardArr.length; i++) {
            _objSV["bullet" + i] = _objSV.add.sprite(0, 0, 'bullet');
            _objSV["bullet" + i].inputEnabled = !0;
            _objSV["bullet" + i].anchor.x = 0.5;
            _objSV["bullet" + i].anchor.y = 0.5;
            _objSV["bullet" + i].input.priorityID = -1;
            _objSV["bullet" + i].ID = i;
            _objSV["bullet" + i].name = i;
            _objSV["bullet" + i].x = _objSV.sqareBoardArr[i - 1].xPos;
            _objSV["bullet" + i].y = _objSV.sqareBoardArr[i - 1].yPos;
            _objSV.bulletGrps.addChild(_objSV["bullet" + i])
        }
        _objSV.squareBoardBG.inputEnabled = !0;
        _objSV.squareBoardBG.useHandCursor = !0;
        _objSV.squareBoardBG.events.onInputDown.add(this.objController.onSVMoseUpHandler, this);
        _objSV.input.addMoveCallback(this.objController.myMove, this);
        objController.makeRubberBandDraggable()
    },
    makeRubberBandDraggable: function() {
        if (_objSV.rubberBandGrp) {
            _objSV.rubberBandGrp.destroy()
        }
        _objSV.rubberBandGrp = _objSV.add.group();
        for (var i = 1; i <= _objSV.bandNameArr.length; i++) {
            _objSV["_rubberBand" + _objSV.bandNameArr[i - 1]] = _objSV.add.sprite(0, 0, _objSV.bandNameArr[i - 1]);
            _objSV["_rubberBand" + _objSV.bandNameArr[i - 1]].x = _objSV.rubberBandPosArr[i - 1].xPos;
            _objSV["_rubberBand" + _objSV.bandNameArr[i - 1]].y = _objSV.rubberBandPosArr[i - 1].yPos;
            _objSV.rubberBandGrp.addChild(_objSV["_rubberBand" + _objSV.bandNameArr[i - 1]]);
            _objSV["_rubberBand" + _objSV.bandNameArr[i - 1]].anchor.x = 0.5;
            _objSV["_rubberBand" + _objSV.bandNameArr[i - 1]].anchor.y = 0.5;
            _objSV["rubberBand" + _objSV.bandNameArr[i - 1]] = _objSV.add.sprite(0, 0, _objSV.bandNameArr[i - 1]);
            _objSV["rubberBand" + _objSV.bandNameArr[i - 1]].x = _objSV.rubberBandPosArr[i - 1].xPos;
            _objSV["rubberBand" + _objSV.bandNameArr[i - 1]].y = _objSV.rubberBandPosArr[i - 1].yPos;
            _objSV["rubberBand" + _objSV.bandNameArr[i - 1]].anchor.x = 0.5;
            _objSV["rubberBand" + _objSV.bandNameArr[i - 1]].anchor.y = 0.5;
            _objSV["rubberBand" + _objSV.bandNameArr[i - 1]].originalPosition = _objSV["rubberBand" + _objSV.bandNameArr[i - 1]].position.clone();
            _objSV.rubberBandGrp.addChild(_objSV["rubberBand" + _objSV.bandNameArr[i - 1]]);
            _objSV["rubberBand" + _objSV.bandNameArr[i - 1]].inputEnabled = !0;
            _objSV["rubberBand" + _objSV.bandNameArr[i - 1]].input.useHandCursor = !0;
            _objSV["rubberBand" + _objSV.bandNameArr[i - 1]].input.enableDrag();
            _objSV["rubberBand" + _objSV.bandNameArr[i - 1]].name = _objSV.bandNameArr[i - 1]
            _objSV["rubberBand" + _objSV.bandNameArr[i - 1]].colorRef = _objSV.colorNameArr[i - 1]
            _objSV["rubberBand" + _objSV.bandNameArr[i - 1]].ID = i - 1;
            _objSV["rubberBand" + _objSV.bandNameArr[i - 1]].events.onDragStart.add(this.objController.onBandDragStart, this);
            _objSV["rubberBand" + _objSV.bandNameArr[i - 1]].events.onDragStop.add(this.objController.onBandDragStop, this)
        }
    },
    onBandDragStart: function(rubberBandMc) {
        rubberBandMc.scale.set(0.6)
        objController.onSVMoseUpHandler();

    },
    onBandDragStop: function(rubberBandMc) {
        var isFound = !1;
        for (var i = 1; i <= _objSV.currentBoardArr.length; i++) {
            if (this.objController.checkOverlap(rubberBandMc, _objSV["bullet" + i])) {
                if (isFound == !1) {
                    isFound = !0;
                    _objSV.currentBullet = _objSV["bullet" + i];

                    //**** ani
                    _objSV.currentBand = {};
                    _objSV.currentBand.points = [];
                    _objSV.currentBand.colorRef = rubberBandMc.colorRef;
                    _objSV.currentBand.id = _objSV.curBand;
                    _objSV.currentBand.bandId = rubberBandMc.ID;
                    _objSV.currentBand.bandName = rubberBandMc.name;
                    _objSV.currentBand.points.push({
                        x: _objSV.currentBullet.x,
                        y: _objSV.currentBullet.y
                    });
                    _objSV.currentBand.pegs = [];
                    _objSV.currentBand.selectorLines = [];
                    _objSV.bandsData.push(_objSV.currentBand);
                    _objSV.curBand = _objSV.bandsData.length - 1;

                    _objSV["pegGrp" + _objSV.curBand] = _objSV.add.group();

                    objController.createAPegHook(_objSV.curBand, rubberBandMc.colorRef, rubberBandMc.ID, rubberBandMc.name);
                    objController.saveState();
                }
            }
        }
        rubberBandMc.scale.set(1)
        rubberBandMc.position.copyFrom(rubberBandMc.originalPosition)
    },
    resetBoard: function() {
        _objSV.bandsContext.clear();
        CSI.game.world.bringToTop(_objSV.bandsContext);
        for (var i = 0; i < _objSV.bandsData.length; i++) {
            if (_objSV["pegGrp" + i]) {
                _objSV["pegGrp" + i].destroy();
                delete _objSV["pegGrp" + i];
            }
            if (_objSV.bandsData[i]) {
                if (_objSV.bandsData[i].pegs)
                    for (var j = 0; j < _objSV.bandsData[i].pegs.length; j++) {
                        if (_objSV.bandsData[i].pegs[j]) {


                            if (j == 0 && _objSV.bandsData[i].pegs[j].bandRef != undefined) {
                                _objSV.bandsData[i].pegs[j].bandRef.destroy();
                                delete _objSV.bandsData[i].pegs[j].bandRef;
                            }
                            _objSV.bandsData[i].pegs[j].destroy();
                            delete _objSV.bandsData[i].pegs[j];
                        }
                    }
                if (_objSV.bandsData[i].selectorLines)
                    for (var j = 0; j < _objSV.bandsData[i].selectorLines.length; j++) {
                        if (_objSV.bandsData[i].selectorLines[j]) {
                            _objSV.bandsData[i].selectorLines[j].destroy();
                            delete _objSV.bandsData[i].selectorLines[j];
                        }
                    }
            }
        }

    },
    restoreState: function() {

        objController.resetBoard();
        console.log(_objSV.undoData.length);
        _objSV.undoData.pop();
        if (_objSV.undoData.length == 0) objController.toggleUndoBtn(false);
        if (_objSV.undoData.length > 0) {
            var savedData = _objSV.undoData[_objSV.undoData.length - 1];
            _objSV.bandsData = [];
            for (var i = 0; i < savedData.bands.length; i++) {
                console.log(savedData.bands.length);
                console.log(savedData.bands[i].points);
                _objSV.currentBand = {};
                _objSV.currentBand.points = savedData.bands[i].points;
                _objSV.currentBand.colorRef = savedData.bands[i].colorRef;
                _objSV.currentBand.id = savedData.bands[i].id;
                _objSV.currentBand.bandId = savedData.bands[i].bandId;
                _objSV.currentBand.bandName = savedData.bands[i].bandName;


                _objSV.currentBand.pegs = [];
                _objSV.currentBand.selectorLines = [];

                _objSV.bandsData.push(_objSV.currentBand);
                //_objSV.curBand=_objSV.bandsData.length-1;

            }
            _objSV.curBand = savedData.curBand;
            console.log("_objSV.curBand", _objSV.curBand);

            _objSV.currentBand = _objSV.bandsData[_objSV.curBand];




        } else {
            objController.resetAll();

        }
        objController.updateDisplay(false);
        objController.updatePegVisiblity();


    },
    saveState: function() {
        var appState = {};
        appState.curBand = _objSV.curBand;
        appState.bands = [];

        for (var i = 0; i < _objSV.bandsData.length; i++) {
            if (_objSV.bandsData[i] != undefined) {
                var band = {};
                band.points = [];
                band.colorRef = _objSV.bandsData[i].colorRef;
                band.id = _objSV.bandsData[i].id;
                band.bandId = _objSV.bandsData[i].bandId;
                band.bandName = _objSV.bandsData[i].bandName;
                for (var j = 0; j < _objSV.bandsData[i].points.length; j++) {
                    band.points.push({
                        x: _objSV.bandsData[i].points[j].x,
                        y: _objSV.bandsData[i].points[j].y
                    });
                }
                appState.bands.push(band);
            }

        }
        _objSV.undoData.push(appState);
        console.log(_objSV.undoData.length);
        objController.toggleUndoBtn(true);

        CSI.game.world.bringToTop(_objSV.bulletGrps)


    },
    toggleUndoBtn: function(enable) {
        if (enable) {
            _objSV.undoBtn.alpha = 1;
            _objSV.undoBtn.inputEnabled = true;
        } else {
            _objSV.undoBtn.alpha = 0.5;
            _objSV.undoBtn.inputEnabled = false;
        }


    },
    setPegPos: function(bandIndex, pegIndex, x, y) {
        console.log("setpegpos");
        if (_objSV.bandsData[bandIndex].pegs[pegIndex] == undefined) {

            if (pegIndex == 0 && _objSV.bandsData[bandIndex].points.length == 1) {
                console.log("will be creating a peg HOOK");
                objController.createAPegHook(bandIndex, _objSV.bandsData[bandIndex].colorRef, _objSV.bandsData[bandIndex].bandId, _objSV.bandsData[bandIndex].bandName);
            } else {
                console.log("will be creating a peg");
                objController.createAPeg(bandIndex, pegIndex);

            }

        } else {
            console.log("**will be moving a peg ", x, y);
            _objSV.bandsData[bandIndex].pegs[pegIndex].x = x;
            _objSV.bandsData[bandIndex].pegs[pegIndex].y = y;

        }

    },
    updateLines: function(pointIndex, lineIndex) {
        _objSV.bandsContext.clear();

        for (var i = 0; i < _objSV.bandsData.length; i++) {
            if (_objSV.bandsData[i] != undefined) {
                _objSV.bandsContext.lineStyle(2, _objSV.bandsData[i].colorRef, 1);
                if (_objSV.bandsData[i].points.length > 1) {
                    _objSV.bandsContext.moveTo(_objSV.bandsData[i].points[0].x, _objSV.bandsData[i].points[0].y);
                    for (var j = 1; j < _objSV.bandsData[i].points.length; j++) {
                        var skip = false;
                        if (i == _objSV.curBand && (lineIndex != -1 && lineIndex == j - 1)) skip = true;
                        if (i == _objSV.curBand && pointIndex != -1 && (pointIndex == j - 1 || pointIndex == j)) skip = true;


                        if (skip)
                            _objSV.bandsContext.moveTo(_objSV.bandsData[i].points[j].x, _objSV.bandsData[i].points[j].y);
                        else
                            _objSV.bandsContext.lineTo(_objSV.bandsData[i].points[j].x, _objSV.bandsData[i].points[j].y);
                    }
                    skip = false;
                    if (i == _objSV.curBand && (lineIndex != -1 && lineIndex == j - 1)) skip = true;
                    if (i == _objSV.curBand && pointIndex != -1 && (pointIndex == j - 1 || pointIndex == 0)) skip = true;
                    if (!skip)
                        _objSV.bandsContext.lineTo(_objSV.bandsData[i].points[0].x, _objSV.bandsData[i].points[0].y); //close the figure
                }
            }

        }
    },
    updatePegVisiblity: function() {
        console.log("updatePegVisiblity");
        for (var i = 0; i < _objSV.bandsData.length; i++) {
            if (i == _objSV.curBand) {
                _objSV["pegGrp" + i].alpha = 1;
                console.log("updatePegVisiblity 111");
            } else _objSV["pegGrp" + i].alpha = 0;
        }
        if (_objSV.bulletGrps) {
            CSI.game.world.bringToTop(_objSV.bulletGrps)
        }
    },
    //linesonly means it will only redraw the ines
    //bandid means redraw only the given band, give -1 to redraw all
    updateDisplay: function(linesOnly) {
        console.log("_objSV.bandsData.length", _objSV.bandsData.length, _objSV.curBand);
        console.log("bandsData", _objSV.bandsData);
        _objSV.bandsContext.clear();
        for (var i = 0; i < _objSV.bandsData.length; i++) {
            console.log("1");
            if (_objSV.bandsData[i] != undefined) {
                if (_objSV["pegGrp" + i] == undefined) {
                    _objSV["pegGrp" + i] = _objSV.add.group();
                }
                console.log("2");
                _objSV.bandsContext.lineStyle(2, _objSV.bandsData[i].colorRef, 1);
                //if (_objSV.bandsData[i].points.length>1) {
                console.log("_objSV.bandsData[i].points[0].x, _objSV.bandsData[i].points[0].y", _objSV.bandsData[i].points[0].x, _objSV.bandsData[i].points[0].y);
                _objSV.bandsContext.moveTo(_objSV.bandsData[i].points[0].x, _objSV.bandsData[i].points[0].y);
                console.log("3", _objSV.bandsData[i].points);

                if (_objSV.bandsData[i].points.length > 0) objController.setPegPos(i, 0, _objSV.bandsData[i].points[0].x, _objSV.bandsData[i].points[0].y);

                for (var j = 1; j < _objSV.bandsData[i].points.length; j++) {
                    console.log("_objSV._objSV.bandsData[i].points.length.length", _objSV.bandsData[i].points.length);
                    console.log("lineTo", _objSV.bandsData[i].points[j].x, _objSV.bandsData[i].points[j].y);
                    _objSV.bandsContext.lineTo(_objSV.bandsData[i].points[j].x, _objSV.bandsData[i].points[j].y);

                    objController.setPegPos(i, j, _objSV.bandsData[i].points[j].x, _objSV.bandsData[i].points[j].y);
                    objController.updateSelectorLines(i, j - 1);


                }
                objController.updateSelectorLines(i, j - 1);
                _objSV.bandsContext.lineTo(_objSV.bandsData[i].points[0].x, _objSV.bandsData[i].points[0].y); //close the figure
                //}
            }

        }

        for (var i = 0; i < _objSV.bandsData.length; i++) {
            CSI.game.world.bringToTop(_objSV["pegGrp" + i]);
            //for (var j=0; j<_objSV.bandsData[i].points.length; j++) {
            //	CSI.game.world.bringToTop(_objSV.bandsData[i].pegs[j]);
            //}

        }



    },
    updateSelectorLines: function(bandIndex, lineIndex) {
        var p2 = lineIndex + 1;
        if (p2 == _objSV.bandsData[bandIndex].points.length) p2 = 0;
        if (_objSV.bandsData[bandIndex].selectorLines[lineIndex] == undefined) {
            objController.createSelectorLine(bandIndex, lineIndex, _objSV.bandsData[bandIndex].points[lineIndex].x, _objSV.bandsData[bandIndex].points[lineIndex].y, _objSV.bandsData[bandIndex].points[p2].x, _objSV.bandsData[bandIndex].points[p2].y);
        } else {
            objController.updateSelectorLine(bandIndex, lineIndex, _objSV.bandsData[bandIndex].points[lineIndex].x, _objSV.bandsData[bandIndex].points[lineIndex].y, _objSV.bandsData[bandIndex].points[p2].x, _objSV.bandsData[bandIndex].points[p2].y);
        }
    },
    updateSelectorLine: function(bandIndex, lineIndex, x1, y1, x2, y2) {

        //x1=x1+Math.random()*30;

        var tempLine1 = _objSV.bandsData[bandIndex].selectorLines[lineIndex];

        var angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
        tempLine1.angle = angle - 90; //Math.random()*50*180/Math.PI; /

        tempLine1.anchor.x = 0.5
        tempLine1.visible = !0;

        var a = x1 - x2
        var b = y1 - y2;
        var c = Math.sqrt(a * a + b * b);
        tempLine1.height = c;
        //tempLine1.alpha = 0.05;
        tempLine1.x = x1;
        tempLine1.y = y1;
        //tempLine1.inputEnabled = !0;
        //tempLine1.input.useHandCursor = !0;
        //tempLine1.colorRef = _objSV.bandsData[bandIndex].colorRef;

        tempLine1.bandIndex = bandIndex;
        tempLine1.lineIndex = lineIndex;

        //_objSV.bandsData[bandIndex].selectorLines[lineIndex] = tempLine1;

    },
    createSelectorLine: function(bandIndex, lineIndex, x1, y1, x2, y2) {

        //x1=x1+Math.random()*50;

        var tempLine1 = _objSV.add.sprite(x1, y1, 'fakeline');
        var angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
        tempLine1.width = 50;
        tempLine1.angle = angle - 90;
        tempLine1.anchor.x = 0.5
        //tempLine1.tint=(20+Math.random()*100);
        var a = x1 - x2
        var b = y1 - y2;
        var c = Math.sqrt(a * a + b * b);
        tempLine1.height = c;
        tempLine1.alpha = 0;
        tempLine1.inputEnabled = !0;
        tempLine1.input.useHandCursor = !0;
        tempLine1.colorRef = _objSV.bandsData[bandIndex].colorRef;

        tempLine1.bandIndex = bandIndex;
        tempLine1.lineIndex = lineIndex;

        tempLine1.events.onInputDown.add(this.objController.onSelectorLineTapHandler, this);

        tempLine1.events.onInputUp.add(this.objController.onMoseUpHandler, this);


        _objSV.bandsData[bandIndex].selectorLines[lineIndex] = tempLine1;

    },
    createAPeg: function(bandIndex, index) {
        console.log("createAPeg ", bandIndex, index, 'pegcircle_' + _objSV.pegColorNameArr[_objSV.bandsData[bandIndex].bandId], _objSV["pegGrp" + bandIndex]);
        console.log("x,y", _objSV.bandsData[bandIndex].points[index].x, _objSV.bandsData[bandIndex].points[index].y);
        var redBullet2 = _objSV.add.sprite(_objSV.bandsData[bandIndex].points[index].x, _objSV.bandsData[bandIndex].points[index].y, 'pegcircle_' + _objSV.pegColorNameArr[_objSV.bandsData[bandIndex].bandId]);
        redBullet2.anchor.x = 0.5;
        redBullet2.anchor.y = 0.5;
        redBullet2.ID = bandIndex;
        redBullet2.bandIndex = bandIndex;
        redBullet2.index = index;
        _objSV["pegGrp" + bandIndex].addChild(redBullet2);
        _objSV.bandsData[bandIndex].pegs[index] = redBullet2;
        redBullet2.inputEnabled = !0;
        redBullet2.input.useHandCursor = !0;
        redBullet2.input.enableDrag();

        redBullet2.events.onDragStart.add(this.objController.onDragRedBullet, this);


    },

    createAPegHook: function(bandIndex, col, id, name) {
        console.log("pegged");
        var pegCircle = _objSV.add.sprite(_objSV.bandsData[bandIndex].points[0].x, _objSV.bandsData[bandIndex].points[0].y, 'pegcircle_' + _objSV.pegColorNameArr[id]);
        pegCircle.anchor.x = 0.5;
        pegCircle.anchor.y = 0.5;
        pegCircle.inputEnabled = !0;
        pegCircle.input.useHandCursor = !0;
        pegCircle.input.enableDrag();
        pegCircle.events.onDragStart.add(this.objController.onDragPegCircle, this);
        pegCircle.events.onDragStop.add(this.objController.onDragStopPegCircle, this);
        var singleBand = _objSV.add.sprite(_objSV.bandsData[bandIndex].points[0].x, _objSV.bandsData[bandIndex].points[0].y - 20, name);
        pegCircle.bandIndex = bandIndex;
        singleBand.bandIndex = bandIndex;
        singleBand.anchor.x = 0.5;
        singleBand.anchor.y = 0;
        singleBand.width = 20;
        singleBand.height = 62;
        singleBand.inputEnabled = !0;
        singleBand.colorRef = col;
        singleBand.pegHookColorRef = _objSV.pegColorNameArr[id];
        singleBand.pegCircleRef = _objSV.currentPegCircle;
        singleBand.input.enableDrag();
        singleBand.events.onInputDown.add(this.objController.onBandDownHandler, this);
        singleBand.originalPosition = singleBand.position.clone();
        singleBand.startBulletID = _objSV.currentBullet.ID;
        pegCircle.bandRef = singleBand;
        singleBand.pegCircleRef = pegCircle;
        CSI.game.world.bringToTop(pegCircle);
        _objSV.bandsData[bandIndex].pegs[0] = pegCircle;
        _objSV["pegGrp" + bandIndex].addChild(pegCircle);
        CSI.game.world.bringToTop(_objSV["pegGrp" + bandIndex]);
    },
    onDragPegCircle: function(currentPegCircle) {
        _objSV.currentPegCircle = currentPegCircle;
        _objSV.input.addMoveCallback(this.objController.pegMoveHandler, this)
    },
    pegMoveHandler: function() {
        _objSV.currentPegCircle.bandRef.x = _objSV.pointerX;
        _objSV.currentPegCircle.bandRef.y = _objSV.pointerY - 20
    },
    onDragStopPegCircle: function() {
        _objSV.input.deleteMoveCallback(this.objController.pegMoveHandler, this);
        var isFound = !1;
        for (var i = 1; i <= _objSV.currentBoardArr.length; i++) {
            if (this.objController.checkOverlap(_objSV.currentPegCircle, _objSV["bullet" + i])) {
                if (isFound == !1) {
                    isFound = !0;
                    _objSV.currentPegCircle.bandRef.x = _objSV["bullet" + i].x;
                    _objSV.currentPegCircle.bandRef.y = _objSV["bullet" + i].y - 20;
                    _objSV.currentPegCircle.x = _objSV["bullet" + i].x;
                    _objSV.currentPegCircle.y = _objSV["bullet" + i].y
                    _objSV.currentBand.points[0] = {
                        x: _objSV["bullet" + i].x,
                        y: _objSV["bullet" + i].y
                    };
                    objController.saveState();
                }
            }
        }
        if (!isFound) {
            _objSV.currentPegCircle.bandRef.destroy();
            _objSV.currentPegCircle.destroy();
            //remove from bands array
            delete _objSV.bandsData[_objSV.curBand];
        }
    },
    onBandDownHandler: function(singleBand) {
        console.log("onBandDownHandler")
        //_objSV.pegCounter = _objSV.pegCounter + 1;
        //_objSV["pegGrp" + _objSV.pegCounter] = _objSV.add.group();
        _objSV.currentSingleBand = singleBand;
        _objSV.currentSingleBand.alpha = 0
        _objSV.curBand = singleBand.bandIndex;
        _objSV.currentBand = _objSV.bandsData[singleBand.bandIndex];
        objController.updatePegVisiblity();
        //_objSV.currentSingleBand.pegGrpCounter = _objSV.pegCounter;
        _objSV.input.addMoveCallback(this.objController.mouseMove4BandsLine, this);
        _objSV.currentSingleBand.events.onInputUp.add(this.objController.onSingleBandMoseUp, this)
    },
    mouseMove4BandsLine: function(pointer, x, y) {
        _objSV.currentSingleBand.endx = x;
        _objSV.currentSingleBand.endy = y;
        if (_objSV.lineGraphicsTemp1) {
            _objSV.lineGraphicsTemp1.clear();
            _objSV.lineGraphicsTemp2.clear();
            _objSV.redBulletTemp1.destroy();
            _objSV.redBulletTemp2.destroy()
        }
        _objSV.lineGraphicsTemp1 = CSI.game.add.graphics(0, 0);
        _objSV.lineGraphicsTemp1.lineStyle(2, _objSV.currentSingleBand.colorRef, 1);
        _objSV.lineGraphicsTemp1.moveTo(_objSV.currentSingleBand.pegCircleRef.x, _objSV.currentSingleBand.pegCircleRef.y);
        _objSV.lineGraphicsTemp1.lineTo(_objSV.currentSingleBand.endx, _objSV.currentSingleBand.endy);
        _objSV.lineGraphicsTemp1.endFill();
        _objSV.lineGraphicsTemp2 = CSI.game.add.graphics(0, 0);
        _objSV.lineGraphicsTemp2.lineStyle(2, _objSV.currentSingleBand.colorRef, 1);
        objController.drawParellelLine(_objSV.lineGraphicsTemp2, _objSV.currentSingleBand.pegCircleRef.x, _objSV.currentSingleBand.pegCircleRef.y, _objSV.currentSingleBand.endx, _objSV.currentSingleBand.endy, 0)

        _objSV.redBulletTemp1 = _objSV.add.sprite(_objSV.currentSingleBand.pegCircleRef.x, _objSV.currentSingleBand.pegCircleRef.y, 'pegcircle_' + _objSV.currentSingleBand.pegHookColorRef);
        _objSV.redBulletTemp2 = _objSV.add.sprite(_objSV.currentSingleBand.endx - 5, _objSV.currentSingleBand.endy - 5, 'pegcircle_' + _objSV.currentSingleBand.pegHookColorRef);
        _objSV.redBulletTemp1.anchor.x = 0.5;
        _objSV.redBulletTemp1.anchor.y = 0.5;
        _objSV.redBulletTemp2.anchor.x = 0.5;
        _objSV.redBulletTemp2.anchor.y = 0.5;
        //_objSV["pegGrp" + _objSV.pegCounter].addChild(_objSV.redBulletTemp1)

    },
    onSingleBandMoseUp: function() {
        console.log("onSingleBandMoseUp");
        var isFound = !1;
        for (var i = 1; i <= _objSV.currentBoardArr.length; i++) {
            if (this.objController.checkOverlap(_objSV.currentSingleBand, _objSV["bullet" + i])) {
                isFound = !0;
                _objSV.currentSingleBand.endx = _objSV["bullet" + i].x;
                _objSV.currentSingleBand.endy = _objSV["bullet" + i].y;
                _objSV.currentSingleBand.endBulletID = i
            }
        }
        _objSV.input.deleteMoveCallback(this.objController.mouseMove4BandsLine, this);
        if (_objSV.lineGraphicsTemp1) {
            _objSV.lineGraphicsTemp1.clear();
            _objSV.lineGraphicsTemp2.clear();
            _objSV.redBulletTemp1.destroy();
            _objSV.redBulletTemp2.destroy()
        }
        if (!isFound) {
            _objSV.currentSingleBand.alpha = 1;
            _objSV.currentSingleBand.position.copyFrom(_objSV.currentSingleBand.originalPosition)
            return !0
        }
        _objSV.currentSingleBand.pegCircleRef.destroy();

        //***** ANI */
        _objSV.currentBand.pegs = [];

        _objSV.currentBand.points.push({
            x: _objSV.currentSingleBand.endx,
            y: _objSV.currentSingleBand.endy
        });
        objController.updateDisplay(false);
        _objSV.currentSingleBand.input.disableDrag();
        _objSV.currentSingleBand.destroy();
        objController.saveState();
    },
    onMoseUpHandler: function() {
        _objSV.input.deleteMoveCallback(this.objController.splitALineIntoTwoPartsOnMoseMove, this);
        _objSV.currentRedBulletMiddle.alpha = 0
    },
    onDragRedBullet: function(currentBulletMc) {
        console.log("onDragRedBullet");
        _objSV.curBand = currentBulletMc.bandIndex;
        _objSV.currentBand = _objSV.bandsData[_objSV.curBand];
        objController.updatePegVisiblity();
        _objSV.currentBulletMc = currentBulletMc;
        _objSV.input.addMoveCallback(this.objController.renderOldLine, this);
        _objSV.currentBulletMc.events.onInputUp.add(this.objController.onMoseUpFrmRedBullet, this)
        objController.updateDisplay(false);
    },
    onMoseUpFrmRedBullet: function(currentBulletMc) {
        console.log("onMoseUpFrmRedBullet");
        if (_objSV.lineGraphicsTemp1) {
            _objSV.lineGraphicsTemp1.clear();
            _objSV.lineGraphicsTemp2.clear()
        }
        _objSV.input.deleteMoveCallback(this.objController.renderOldLineFromMiddleBullet, this);
        _objSV.input.deleteMoveCallback(this.objController.renderOldLine, this);
        var isFound = !1;
        for (var i = 1; i <= _objSV.currentBoardArr.length; i++) {
            if (this.objController.checkOverlap(_objSV.currentBulletMc, _objSV["bullet" + i])) {
                isFound = !0;
                _objSV.currentBulletMc.x = _objSV["bullet" + i].x;
                _objSV.currentBulletMc.y = _objSV["bullet" + i].y
            }
        }
        if (!isFound) {
            objController.updateDisplay(false);
            return !0
        }
        var bulletIndex = _objSV.currentBulletMc.index;
        var p1 = bulletIndex - 1;
        var p2 = bulletIndex + 1;
        if (p1 < 0) p1 = _objSV.currentBand.points.length - 1;
        if (p2 == _objSV.currentBand.points.length) p2 = 0;

        _objSV.currentBand.points[bulletIndex].x = _objSV.currentBulletMc.x;
        _objSV.currentBand.points[bulletIndex].y = _objSV.currentBulletMc.y;

        objController.updateDisplay(false);
        objController.saveState();
        //objController.createTwoLines();
        objController.onSVBringPegsToTop()
    },

    onSelectorLineTapHandler: function(currentTempLine) {
        //objController.onSVMoseUpHandler();
        //_objSV["pegGrp" + currentTempLine.pegGrpCounter].alpha = 1;
        _objSV.curBand = currentTempLine.bandIndex;
        _objSV.currentBand = _objSV.bandsData[_objSV.curBand];
        objController.updatePegVisiblity();
        console.log("onSelectorLineTapHandler p ", currentTempLine.pegGrpCounter)
        _objSV.bullet = "middle"
        _objSV.currentTempLine = currentTempLine;
        _objSV.currentRedBulletMiddle = _objSV.add.sprite(_objSV.pointerX, _objSV.pointerY, 'pegcircle_' + _objSV.pegColorNameArr[_objSV.bandsData[currentTempLine.bandIndex].bandId]);
        _objSV.currentRedBulletMiddle.anchor.x = 0.5;
        _objSV.currentRedBulletMiddle.anchor.y = 0.5;
        // _objSV["pegGrp" + _objSV.pegCounter].addChild(_objSV.currentRedBulletMiddle)
        _objSV.input.addMoveCallback(this.objController.splitALineIntoTwoPartsOnMoseMove, this);
        objController.updateDisplay(false);
    },
    splitALineIntoTwoPartsOnMoseMove: function(pointer, x, y) {
        //console.log("splitALineIntoTwoPartsOnMoseMove")
        //_objSV.currentTempLine.lineMc1.alpha = 0;
        if (_objSV.lineGraphicsTemp1) {
            _objSV.lineGraphicsTemp1.clear();
            _objSV.lineGraphicsTemp2.clear()
        }
        var bandIndex = _objSV.currentTempLine.bandIndex;
        var lineIndex = _objSV.currentTempLine.lineIndex;
        var p2 = lineIndex + 1;
        if (p2 == _objSV.bandsData[bandIndex].points.length) p2 = 0;

        _objSV.lineGraphicsTemp1 = CSI.game.add.graphics(0, 0);
        _objSV.lineGraphicsTemp1.lineStyle(2, _objSV.currentBand.colorRef, 1);
        _objSV.lineGraphicsTemp1.moveTo(_objSV.bandsData[bandIndex].points[lineIndex].x, _objSV.bandsData[bandIndex].points[lineIndex].y);
        _objSV.lineGraphicsTemp1.lineTo(x, y);
        _objSV.lineGraphicsTemp1.endFill();
        _objSV.lineGraphicsTemp2 = CSI.game.add.graphics(0, 0);
        _objSV.lineGraphicsTemp2.lineStyle(2, _objSV.currentBand.colorRef, 1);

        _objSV.lineGraphicsTemp2.moveTo(_objSV.bandsData[bandIndex].points[p2].x, _objSV.bandsData[bandIndex].points[p2].y);
        _objSV.lineGraphicsTemp2.lineTo(x, y);
        _objSV.lineGraphicsTemp2.endFill();
        _objSV.currentRedBulletMiddle.x = pointer.x;
        _objSV.currentRedBulletMiddle.y = pointer.y;
        CSI.game.world.bringToTop(_objSV.currentRedBulletMiddle);
        _objSV.currentTempLine.events.onInputUp.add(this.objController.onMoseUpFrmNewSplitLine, this)
        objController.updateLines(-1, lineIndex);
    },
    onMoseUpFrmNewSplitLine: function() {
        console.log("onMoseUpFrmNewSplitLine")
        if (_objSV.lineGraphicsTemp1) {
            _objSV.lineGraphicsTemp1.clear();
            _objSV.lineGraphicsTemp2.clear()
        }
        _objSV.input.deleteMoveCallback(this.objController.splitALineIntoTwoPartsOnMoseMove, this);
        var isFound = !1;
        for (var i = 1; i <= _objSV.currentBoardArr.length; i++) {
            if (this.objController.checkOverlap(_objSV.currentRedBulletMiddle, _objSV["bullet" + i])) {
                _objSV.currentRedBulletMiddle.x = _objSV["bullet" + i].x;
                _objSV.currentRedBulletMiddle.y = _objSV["bullet" + i].y;
                isFound = !0
            }
        }
        if (!isFound) {
            _objSV.currentRedBulletMiddle.destroy();
            objController.updateDisplay(false);
            //_objSV.currentTempLine.lineMc1.alpha = 1
            return !0
        }

        //_objSV.currentTempLine.lineMc1.clear()
        //_objSV.currentTempLine.destroy();


        var bandIndex = _objSV.currentTempLine.bandIndex;
        var lineIndex = _objSV.currentTempLine.lineIndex;

        _objSV.bandsData[bandIndex].points.splice(lineIndex + 1, 0, {
            x: _objSV.currentRedBulletMiddle.x,
            y: _objSV.currentRedBulletMiddle.y
        });
        objController.updateDisplay(false);
        objController.saveState();
        //objController.createALineForNewMiddlePoint()
    },

    drawParellelLine: function(context, ax, ay, bx, by, offset) {
        var dx = ax - bx;
        var dy = ay - by;
        var dist = Math.sqrt(dx * dx + dy * dy);
        var offset = offset;
        var normX = dx / dist;
        var normY = dy / dist;
        var xPerp = offset * normX;
        var yPerp = offset * normY;
        var dx = ax - yPerp;
        var dy = ay + xPerp;
        var ex = bx - yPerp;
        var ey = by + xPerp;
        context.moveTo(dx, dy);
        context.lineTo(ex, ey);
        context.endFill()
    },
    hideLoader: function() {
        $("#loader").hide()
    },
    checkOverlap: function(spriteA, spriteB) {
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();
        return Phaser.Rectangle.intersects(boundsA, boundsB)
    },
    myMove: function(pointer) {
        _objSV.pointerX = pointer.x;
        _objSV.pointerY = pointer.y;
        if (pointer.targetObject != null) {}
    }
}