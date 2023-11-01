var CSI = CSI || {};

CSI.ScreenManager = function() {
    this.objScreenView = this;
    this.deviceType;
    this.currentScreenName;
    var obj;

};



CSI.ScreenManager.prototype = {

    preload: function() {

    },
    create: function() {

        objModel.popUpClkCounter = 0;
        objController.setScreenBackground(this.objScreenView);


        objController.setToolScreen();
        /* objController.setTimeSlider();	
        objController.setGlowOnScreen(); */

        /* 	if(objModel._currentScreen==1)
        	{
        		objController.createHitButtons();
        	}
        	if(objModel._currentScreen>=2)
        	{
        		objController.setToolScreen();
        		objController.createHitButtons();		
        	}	 */

        //objController.createHitButtons();	
        objController.hideLoader();
    },

    toolNavHandler: function(button) {
        console.log(button.type + "  --button id--  " + button.btnId)

        button.clicked = true;
        switch (button.type) {
            case "url":
                objController.openURL(button)
                break;

            case "popup":
                objController.createPopUp(button);
                break;

            case "back":
                objController.createBackPopUp(button);
                break;

            case "quit":
                objController.createQuitPopUp(button);
                break;

            case "scrollpopup":
                button.animtype = "scrollpopup";
                objController.createPopUp(button);
                break;

            case "popup|notepad":
                if (button.type.split("|")[button.popupCounter] == "popup") {
                    var _button = button;
                    _button.animtype = "normal";
                    objController.createPopUp(_button);
                } else {
                    var _button = button;
                    _button.animtype = "notepad";
                    objController.createPopUp(_button);
                }
                break;

            case "popup|timetravel":
                if (button.type.split("|")[button.popupCounter] == "popup") {
                    var _button = button;
                    _button.animtype = "normal";
                    objController.createPopUp(_button);
                } else {
                    var _button = button;
                    _button.animtype = "timetravel";
                    objController.createPopUp(_button);
                }
                break;

            case "timetravel":
                var _button = button;
                _button.animtype = "timetravel";
                objController.createPopUp(_button);

                break;

            case "notepad":
                var _button = button;
                _button.animtype = "notepad";

                objController.createPopUp(_button);
                break;

            case "magnifyglass":
                var _button = button;
                _button.animtype = "magnifyglass";
                objController.createPopUp(_button);
                break;

            case "flashlight":
                var _button = button;
                _button.animtype = "flashlight";
                objController.createPopUp(_button);
                break;

            case "counter":
                var _button = button;
                _button.animtype = "counter";
                objController.createCounter(_button);
                break;

            case "nextscreen":
                var _button = button;
                objController.gotoNextScreen();
                break;

            case "changeScreen":
                var _button = button;
                objController.changeScreen(_button);
                break;

            case "drag-ref":
                var _button = button;
                objController.createRef(_button);
                break;

            case "drag":
                objController.createDragNDrop(button);
                break;

            case "video":
                objController.openVideoPopup(button);
                break;

            case "windowclk":
                objModel.windowClk++;
                console.log(button.numofclk + " --numofclk  -- total window clk-- " + objModel.windowClk)
                if (button.numofclk == objModel.windowClk) {
                    objModel.windowClk = 0;
                    button.visible = false;

                    console.log(button.clk, " --- button hilt --- ", button.hilt);

                    if (button.hilt) {
                        objController.glowButtons(button);
                    }
                    if (button.clk) {
                        objController.clkButtons(button.clk);
                    }
                }
                objController.chkOverlapInMagnify();
                break;

            case "higlight":
                button.visible = false;
                break;



                break;
        }
    },
    createTitleTxt: function(button) {
        objController.createTitleTxt(button);
    },

    gotoVideoScreen: function() {
        clearInterval(objModel.clrInt);
        objModel._currentScreen++;
        objController.createVideoScreen();
    },


    activeTimeSlider: function() {
        objController.activeTimeSlider();
    },
    timeTravelBtnHandler: function(button) {
        objController.timeTravelBtnHandler(button);
    },
    onWindowClk: function() {
        //alert("click");
    },
    render: function() {}

};