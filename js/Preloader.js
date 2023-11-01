function Preloader() {
    var self = this;
    var map = {};
    var preload;
    var loader;
    self.count = 0;
    self.specialcount = null;
    self.status = 1;
    self.audioList = [];
    var soundCount = 1;
    var bAllPageContentPreloaded = true;
    self.pageassets = [
        [


        ],
        [

        ]
    ];

    self.init = function() {
        //alert("load");
        self.reload();
        loadAll();
    }

    // Reset everything
    this.reload = function() {
        //reset loader percent
        // If there is an open preload queue, close it.
        if (preload != null) {
            preload.close();
        }

        // Create a preloader. There is no manifest added to it up-front, we will add items on-demand.
        preload = new createjs.LoadQueue(true);

        preload.addEventListener("complete", onPageLoadComplete);
        preload.addEventListener("fileload", handleFileLoad);
        preload.addEventListener("progress", handleOverallProgress);
        preload.addEventListener("fileprogress", handleFileProgress);
        preload.addEventListener("error", handleFileError);
        preload.setMaxConnections(1);

    }

    function stop() {
        if (preload != null) {
            preload.close();
        }
    }

    function loadAll() {


        while (self.pageassets[self.count].length > 0 && self.count < self.pageassets.length) {
            loadAnother();
        }
    }

    function loadAnother() {
        // Get the next manifest item, and load it
        //console.log("load another");
        var item = self.pageassets[self.count].shift();
        //	console.log("---item---   "+item);
        preload.loadFile({
            id: "abc",
            src: item
        });
        // preload.loadFile(item);


    }

    // File progress handler
    function handleFileProgress(event) {
        //console.log("process item : ", event.item.src);
        //console.log("progress : ", event.progress);
    }

    // Overall progress handler
    function handleOverallProgress(event) {
        /* $(".asset-loader > #percent").text(parseInt(preload.progress*100)+"%");
            $("#loading-bar > #loading-percent").width(preload.progress * $("#loading-bar").width()); */
    }

    // An error happened on a file
    function handleFileError(event) {

    }

    // File complete handler
    function handleFileLoad(event) {

        //console.log("FILE LOOOOOOOOOOOO");

    }


    // page complete handler

    function onPageLoadComplete(event) {
        //console.log("page loaddddddddddddddddddded");
    }


    this.loadPageonDemand = function(nIndex) {
        self.count = nIndex;
        loadAll();
    }

    this.resumePreloading = function(nIndex) {
        self.count = nIndex;
        loadAll();
    }

    function audioBuffering() {

    }
}