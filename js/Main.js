var controller;
var objPhaserManager;
var appScaleRatio = 1;
var pm = new Preloader();
pm.reload();

var objController = new CSI.Controller();
var objModel = new Model();


function loadConfig() {
    $.ajax({
        'async': false,
        'global': false,
        'url': "assets/json/config.txt",
        'dataType': "json",
        'success': function(data) {


            var obj = new PhserObj();
            objModel.parseJSON(data);

            objModel.setCurrentScreenIndex(2);
            objModel._currentScreen = 2;


            var url = window.location.protocol + '//' + window.location.hostname + "/webservices/getmystry";
            //	var url= objModel.getMysteryURL;
            //alert("getmystery url ",url);
            var d = {};
            var newData = {};
            //newData.data='{"pageid":"'+objModel._currentScreen+'"}';		
            newData.data = '{"pageid":""}';
            d.data = newData.data;

            CSI.game.state.start('Boot');

        }


    });
}



$(document).ready(function() {


    loadConfig();
    resizeWindow();

    /*  var d ={};
		var newData = {};
		
		newData.data='{"currentscreen":"s'+objModel._currentScreen+'"}';		
	 	d.data=newData.data;
		var setUrl= window.location.protocol +'//'+ window.location.hostname +"/webservices/currentscreen";			
		objController.callWebService4CurrentScreen(setUrl, d); */


});






$(window).resize(function() {

    resizeWindow();
});



function resizeWindow() {

    $("#phaser-container").css({
        "height": window.innerHeight
    });
    $("#phaser-container").find("canvas").css({
        "margin-top": "0px!important"
    });

}