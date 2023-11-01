function Model() {
    this.clrTimeoutForpopupBtn;
    this.popupButtonDelay = 0000;
    this.showWelcomeScreen = false;
    this.buidStatus = false; //false means offline build

    //this.getMysteryURL=window.location.protocol +'//'+ window.location.hostname +"/webservices/getmystry";
    //this.setMysteryURL=window.location.protocol +'//'+ window.location.hostname +"/webservices/setmystry";


    this.goBtnClkNum = 0; //it indicate how much attempt you take to correct
    this.magnifyHiddenObjNum = 0; //it indicate how much attempt you take to find hidden object
    this.sceretDoorFoundNum = 0;
    this.timeToFindHiddenKey = 0;
    this.screen6MathProblem = 0; //incorrect answer count
    this.screen7WrgMoves = 0; //screen7
    this.screen7TakeHint = 0; //if taken hint is zero means no hint and 1 means take hint
    this.screen10WrgMoves = 0;

    this.screen7Wrg1stAttempt = 0;
    this.screen7Wrg2ndAttempt = 0;
    this.screen7Wrgtryagain = 0; //0 means false


    this.screen6Wrg1stAttempt = 0; //for input text only
    this.screen6Wrg2ndAttempt = 0; //for input text only
    this.screen6Wrgtryagain = 0; //0 means false
    this.caseCloseDate;
    this.isLoadedFirstTime = true;


    this._saveJSON;
    this.notepadNumber = 0;
    this.currentScreenSave = false;
    this.backBtnCounter = 0;
    this.currentThumb;
    this.timeTravelAttempt = 0;
    this._currentScreen;
    this.clrInt;
    this.clrInt1;
    this.clrIntAnim1;
    this.clrIntAnim2;

    this.clrIntVideo;
    this.clrIntHilt; //for screen 7 highlight drag1 item only
    this.currentBtnId;
    this.videoname;
    this.tween;
    this.isBCEBtnClk = false;
    this.isCEBtnClk = false;
    this.isTimeType = "";
    this.isMagnifyClk = false;
    this.isFlashLightClk = false;
    this.counter = 0;
    this.dummyImgScale;
    this.popUpClkCounter = 0;
    this.isNotePadSaved = false;
    this.isWrongClkCounter = 0;
    this.isDragabble = false;
    this.isRightHit = false;
    this.isLeftHit = false;
    this.isAnyScreen4InnerPopUpOpened = false; //it would be true if we click on any inner object of screen 4  excluding traffic light
    this.isScrollPopup = false;
    this.windowClk = 0;
    this.initX = 0;
    this.initY = 0;
    this.buttonSaveArr = new Array();
    this.btnYPosArr = new Array();
    this.hitCounter = 0;
    this.correctCounter = 0;
    this.correctArr = [6, 5, 8, 3, 7, 4, 9] //screen7 correct answers
    this.timeTravelSeqAttempt = 0;
    this.hiltBtnAfterIncorrect = "";
    this.incorrectCounter = 0;

    this.timeTravelPopUpOpen = false;
    this.previousButtonId;
    this.previousButtonCoutner;
    this.ansArr = new Array();


    this.timetype = "";
    this.timenum = "";
    this.totalseq = "";
    this.attempinseq = 0;

    this.buttonRef;

    this.windowClkscreen4 = false;


    //For currentNotepad data
    this.totalLayout;
    this.jsonObj;

    //

    this.totalBtnInCrtScreen; //total button in current screen;

    var _glowClkCounter = 0;
    var _wrongClkCounter = 0;
    var _deviceType = "unknown"
    var _strJSON = "null";


    this.setCurrentScreenIndex = function(indexNumber) {

        this._currentScreen = indexNumber;
    }
    this.getcurrentScreenIndex = function() {
        return this._currentScreen;
    }

    setGlowClkCoutner = function(glowClkNum) {
        _glowClkCounter = glowClkNum;
    }
    getGlowClkCoutner = function() {
        return _currentScreen;
    }

    set_wrongClkCounter = function(wrongClkNum) {
        _wrongClkCounter = wrongClkNum;
    }

    get_wrongClkCounter = function() {
        return _currentScreen;
    }

    this.setDeviceType = function(deviceType) {
        _deviceType = (deviceType) ? "desktop" : "mobile";
        //_deviceType ="desktop";
    }

    this.getDeviceType = function() {
        return _deviceType;
        //return "desktop";
    }
    this.parseJSON = function(strJSON) {
        _strJSON = strJSON;
    }
    this.getParseJSON = function() {
        return _strJSON;
    }
}