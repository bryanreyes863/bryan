var socket = io();

var assets = [];
var spriteSheet;
var dogContainer;
var container;
var scene = [];
var dog1obj;
var dog2obj;
var dog3obj;
var dog4obj;
var dog5obj;
var dog6obj;

var dog1_rank;
var dog2_rank;
var dog3_rank;
var dog4_rank;
var dog5_rank;
var dog6_rank;

var flag1;
var flag2;
var flag3;
var flag4;
var flag5;
var flag6;

var win1;
var win2;
var win3;
var win4;
var win5;
var win6;
var count;

var win_name1;
var win_name2;
var win_name3;
var win_name4;
var win_name5;
var win_name6;

var panel_wins

var finish = false;

var round;
var count;
var time_count;
var count_down;

var dog_place_y = [3.93,3.55,3.25,2.97,2.74,2.54];

var shouldStart = false;
// var screen_name1;
// var screen_name2;
// var screen_name3;
// var screen_name4;
// var screen_name5;
// var screen_name6;

// var namesss = ["skustaklee","kingbadger","abdul","Aginaya","Agimat","Alakdanesa","Alamid","Asero","Bagwis","Batang X","Batang Z","Maria Ozawa","Bryan","Tubul","kupal","tangina","malupit","shivalManyan","loooonie","mr.PEPE","RATBU","SHIVAL","DAWNLUD ANYA ?"];

// A first approximation
var images = [
	'assets/images/tinyfier/bg_track_0.png',
	'assets/images/tinyfier/bg_track_1.png',
	'assets/images/tinyfier/bg_track_2.png',
	'assets/images/tinyfier/bg_track_3.png',
	'assets/images/tinyfier/bg_track_4.png',
	'assets/images/tinyfier/bg_track_5.png',
	'assets/images/tinyfier/bg_track_6.png',
	'assets/images/tinyfier/bg_track_7.png',
	'assets/images/tinyfier/bg_track_8.png',
	'assets/images/tinyfier/bg_track_9.png',
	'assets/images/tinyfier/bg_track_10.png',
	'assets/images/tinyfier/bg_track_11.png',
	'assets/images/tinyfier/bg_track_12.png',
	'assets/images/tinyfier/bg_track_13.png',
	'assets/images/tinyfier/bg_track_14.png',
	'assets/images/tinyfier/bg_track_15.png',
	'assets/images/tinyfier/bg_track_16.png',
	'assets/images/tinyfier/bg_track_17.png',
	'assets/images/tinyfier/bg_track_18.png',
	'assets/images/tinyfier/bg_track_19.png',
	'assets/images/tinyfier/bg_track_20.png',
	'assets/images/tinyfier/bg_track_21.png',
	'assets/images/tinyfier/bg_track_22.png',
	'assets/images/tinyfier/bg_track_23.png',
	'assets/images/tinyfier/bg_track_24.png',
	'assets/images/tinyfier/bg_track_25.png',
	'assets/images/tinyfier/bg_track_26.png',
	'assets/images/tinyfier/bg_track_27.png',
	'assets/images/tinyfier/bg_track_28.png',
	'assets/images/tinyfier/bg_track_29.png',
	'assets/images/tinyfier/bg_track_30.png',
	'assets/images/tinyfier/bg_track_31.png',
	'assets/images/tinyfier/bg_track_32.png',
	'assets/images/tinyfier/bg_track_33.png',
	'assets/images/tinyfier/bg_track_34.png',
	'assets/images/tinyfier/bg_track_35.png',
	'assets/images/tinyfier/bg_track_36.png',
	'assets/images/tinyfier/bg_track_37.png',
	'assets/images/tinyfier/bg_track_38.png',
	'assets/images/tinyfier/bg_track_39.png',
	'assets/images/tinyfier/bg_track_40.png',
	'assets/images/tinyfier/bg_track_41.png',
	'assets/images/tinyfier/bg_track_42.png',
	'assets/images/tinyfier/bg_track_43.png',
	'assets/images/tinyfier/bg_track_44.png',
	'assets/images/tinyfier/bg_track_45.png',
	'assets/images/tinyfier/bg_track_46.png',
	'assets/images/tinyfier/bg_track_47.png',
	'assets/images/tinyfier/bg_track_48.png',
	'assets/images/tinyfier/bg_track_48.png',
	'assets/images/tinyfier/bg_track_50.png',
	'assets/images/tinyfier/bg_track_51.png',
	'assets/images/tinyfier/bg_track_52.png',
	'assets/images/tinyfier/bg_track_53.png',
	'assets/images/tinyfier/bg_track_54.png',
	'assets/images/tinyfier/bg_track_55.png',
	'assets/images/tinyfier/bg_track_56.png',
	'assets/images/bg_table.jpg',
	'assets/images/bg_track_0.png',
	'assets/images/bib_gui_1.png',
	'assets/images/bib_gui_2.png',
	'assets/images/bib_gui_3.png',
	'assets/images/bib_gui_4.png',
	'assets/images/bib_gui_5.png',
	'assets/images/bib_gui_6.png',
	'assets/images/bib_gui_1.png',
	'assets/images/dog1.png',
	'assets/images/dog2.png',
	'assets/images/dog3.png',
	'assets/images/dog4.png',
	'assets/images/dog5.png',
	'assets/images/dog6.png',
	'assets/images/DOGLOADING.png',
	'assets/images/error-img.png',
	'assets/images/flags1.png',
	'assets/images/flags2.png',
	'assets/images/flags3.png',
	'assets/images/flags4.png',
	'assets/images/flags5.png',
	'assets/images/flags6.png',
	'assets/images/hashimage.png',
	'assets/images/loading.gif',
	'assets/images/panel_arrival.png',
	'assets/images/pattern_bg.png',
	'assets/images/rank.png',
	'assets/images/tableres.png',
	'assets/images/time-bet.png',
	'assets/images/white.png',
	'assets/images/white.png',
	'assets/images/white.png'
],
    preload = new Image();
// Since you're using jQuery...
$.each(images, function(index, value) {
    preload.src = value;     // Changing the src requests the corresponding file
});

var ranks = [
	{
		"name" : "dog1_rank",
		"position" : "",
		"dog_name" : ""
	},
	{
		"name" : "dog2_rank",
		"position" : "",
		"dog_name" : ""
	},
	{
		"name" : "dog3_rank",
		"position" : "",
		"dog_name" : ""
	},
	{
		"name" : "dog4_rank",
		"position" : "",
		"dog_name" : ""
	},
	{
		"name" : "dog5_rank",
		"position" : "",
		"dog_name" : ""
	},
	{
		"name" : "dog6_rank",
		"position" : "",
		"dog_name" : ""
	}
];


var line;
var dog_arr = [
	{
		"name": "",
		"animation" : "",
		"last_move" : "",
		"position" : ""
	},
	{
		"name": "",
		"animation" : "",
		"last_move" : "",
		"position" : ""
	},
	{
		"name": "",
		"animation" : "",
		"last_move" : "",
		"position" : ""
	},
	{
		"name": "",
		"animation" : "",
		"last_move" : "",
		"position" : ""
	},
	{
		"name": "",
		"animation" : "",
		"last_move" : "",
		"position" : ""
	},
	{
		"name": "",
		"animation" : "",
		"last_move" : "",
		"position" : ""
	}
];
var final;

stage = new createjs.Stage('gameCanvas');
maniFest = [
	{
		"src" : "assets/images/time-bet.png" ,
		"id" : "time" 
	},

	{
		"src" : "assets/images/panel_arrival.png" ,
		"id" : "panel_arr" 
	},
	{
		"src" : "assets/images/white.png" ,
		"id" : "white" 
	},
	{
		"src" : "assets/images/rank.png" ,
		"id" : "rank_panel" 
	},

	{
		"src" : "assets/images/bg_track_0.png" ,
		"id" : "game_bg"
	},

	{
		"src" : "assets/spriteSheet/dogSheet.json" ,
		"id" : "dog" ,
		"type" : "spritesheet" 
	},

	{
		"src" : "assets/images/bib_gui_1.png" ,
		"id" : "bib_gui_1" 
	},
	{
		"src" : "assets/images/bib_gui_2.png" ,
		"id" : "bib_gui_2" 
	},
	{
		"src" : "assets/images/bib_gui_3.png" ,
		"id" : "bib_gui_3" 
	},
	{
		"src" : "assets/images/bib_gui_4.png" ,
		"id" : "bib_gui_4" 
	},
	{
		"src" : "assets/images/bib_gui_5.png" ,
		"id" : "bib_gui_5" 
	},
	{
		"src" : "assets/images/bib_gui_6.png" ,
		"id" : "bib_gui_6" 
	},
	{
		"src" : "assets/images/flags1.png" ,
		"id" : "flag1" 
	},
	{
		"src" : "assets/images/flags2.png" ,
		"id" : "flag2" 
	},
	{
		"src" : "assets/images/flags3.png" ,
		"id" : "flag3" 
	},
	{
		"src" : "assets/images/flags4.png" ,
		"id" : "flag4" 
	},
	{
		"src" : "assets/images/flags5.png" ,
		"id" : "flag5" 
	},
	{
		"src" : "assets/images/flags6.png" ,
		"id" : "flag6" 
	},
	{
		"src" : "assets/images/tinyfier/bg_track_0.png" ,
		"id" : "bgTrack_0" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_1.png" ,
		"id" : "bgTrack_1" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_2.png" ,
		"id" : "bgTrack_2" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_3.png" ,
		"id" : "bgTrack_3" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_4.png" ,
		"id" : "bgTrack_4" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_5.png" ,
		"id" : "bgTrack_5" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_6.png" ,
		"id" : "bgTrack_6" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_7.png" ,
		"id" : "bgTrack_7" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_8.png" ,
		"id" : "bgTrack_8" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_9.png" ,
		"id" : "bgTrack_9" 
	},

	
	{
		"src" : "assets/images/tinyfier/bg_track_10.png" ,
		"id" : "bgTrack_10" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_11.png" ,
		"id" : "bgTrack_11" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_12.png" ,
		"id" : "bgTrack_12" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_13.png" ,
		"id" : "bgTrack_13" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_14.png" ,
		"id" : "bgTrack_14" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_15.png" ,
		"id" : "bgTrack_15" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_16.png" ,
		"id" : "bgTrack_16" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_17.png" ,
		"id" : "bgTrack_17" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_18.png" ,
		"id" : "bgTrack_18" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_19.png" ,
		"id" : "bgTrack_19" 
	},


	{
		"src" : "assets/images/tinyfier/bg_track_20.png" ,
		"id" : "bgTrack_20" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_21.png" ,
		"id" : "bgTrack_21" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_22.png" ,
		"id" : "bgTrack_22" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_23.png" ,
		"id" : "bgTrack_23" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_24.png" ,
		"id" : "bgTrack_24" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_25.png" ,
		"id" : "bgTrack_25" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_26.png" ,
		"id" : "bgTrack_26" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_27.png" ,
		"id" : "bgTrack_27" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_28.png" ,
		"id" : "bgTrack_28" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_29.png" ,
		"id" : "bgTrack_29" 
	},


	{
		"src" : "assets/images/tinyfier/bg_track_30.png" ,
		"id" : "bgTrack_30" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_31.png" ,
		"id" : "bgTrack_31" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_32.png" ,
		"id" : "bgTrack_32" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_33.png" ,
		"id" : "bgTrack_33" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_34.png" ,
		"id" : "bgTrack_34" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_35.png" ,
		"id" : "bgTrack_35" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_36.png" ,
		"id" : "bgTrack_36" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_37.png" ,
		"id" : "bgTrack_37" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_38.png" ,
		"id" : "bgTrack_38" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_39.png" ,
		"id" : "bgTrack_39" 
	},


	{
		"src" : "assets/images/tinyfier/bg_track_40.png" ,
		"id" : "bgTrack_40" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_41.png" ,
		"id" : "bgTrack_41" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_42.png" ,
		"id" : "bgTrack_42" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_43.png" ,
		"id" : "bgTrack_43" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_44.png" ,
		"id" : "bgTrack_44" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_45.png" ,
		"id" : "bgTrack_45" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_46.png" ,
		"id" : "bgTrack_46" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_47.png" ,
		"id" : "bgTrack_47" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_48.png" ,
		"id" : "bgTrack_48" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_49.png" ,
		"id" : "bgTrack_49" 
	},


	{
		"src" : "assets/images/tinyfier/bg_track_50.png" ,
		"id" : "bgTrack_50" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_51.png" ,
		"id" : "bgTrack_51" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_52.png" ,
		"id" : "bgTrack_52" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_53.png" ,
		"id" : "bgTrack_53" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_54.png" ,
		"id" : "bgTrack_54" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_55.png" ,
		"id" : "bgTrack_55" 
	},

	{
		"src" : "assets/images/tinyfier/bg_track_56.png" ,
		"id" : "bgTrack_56" 
	}

]

// maniFest2 = [
	
// ]



loader = new createjs.LoadQueue(false);
loader.on('fileload' , handleFile);
loader.on('progress', handleProgress, this);
loader.addEventListener("complete" , loadingComplete);

loader.loadManifest(maniFest,true);

// loader2 = new createjs.LoadQueue(false);
// loader2.loadManifest(maniFest2,true);


window.addEventListener("resize" , resize);

function handleProgress() {
	total = Math.round(loader.progress / 1 * 100);

	if (total == 100) {
		setTimeout(function(){

			shouldStart = true;
			setInterval(function(){
					getRank();
			},1500);
			
			socket.emit('newVisitors');
			$('.loading_animation_con').animate({
				'opacity': '0'
			},100);

			$('#track_bg').animate({
				'opacity': '1'
			},1000);

			$('#gameCanvas').animate({
				'opacity': '1'
			},1000);
		},2000);
	}

	$('#percent').html(total+'%');
    // $('.loader p').html(Math.round(loader.progress / 1 * 100) + "%")
}


// function getRandomName(name){
// 	// console.log(name[0])
//   var num = Math.floor(Math.random() * name.length);
//   // console.log(num)
//   // console.log(name[num])
//   return name[num];
// }

function handleFile(event){
	assets.push(event);
}


function loadingComplete(){

	stage.canvas.width = $('#track_bg').width();
	stage.canvas.height =  window.innerHeight - 50;

	// screen_name1 = getRandomName(namesss)
	// screen_name2 = getRandomName(namesss)
	// screen_name3 = getRandomName(namesss)
	// screen_name4 = getRandomName(namesss)
	// screen_name5 = getRandomName(namesss)
	// screen_name6 = getRandomName(namesss)

	// num = 2;
	imageBackground = new createjs.Bitmap(loader.getResult("bgTrack_0"));

	

	dog1_name = new createjs.Text("콜호","20px Arial","#fefefe");
	dog2_name = new createjs.Text("민호", "20px Arial", "#fefefe");
	dog3_name = new createjs.Text("정", "20px Arial", "#fefefe");
	dog4_name = new createjs.Text("한울", "20px Arial", "#fefefe");
	dog5_name = new createjs.Text("시아버지", "20px Arial", "#fefefe");
	dog6_name = new createjs.Text("혼합", "20px Arial", "#fefefe");

	round = new createjs.Text("라운드", "40px Bold", "#ffbb33");
	count = new createjs.Text("00", "40px Bold", "#ffffff");
	time_count = new createjs.Text("시각", "40px Bold", "#ffbb33");
	count_down = new createjs.Text("00:00", "50px Bold", "#ffffff");

	line = new createjs.Bitmap(loader.getResult("white"));
	panel_arrival = new createjs.Bitmap(loader.getResult("panel_arr"));

	bg = new createjs.Bitmap(loader.getResult("game_bg"));
	rank = new createjs.Bitmap(loader.getResult("rank_panel"));
	time_bet = new createjs.Bitmap(loader.getResult("time"));

	dog1_rank = new createjs.Bitmap(loader.getResult("bib_gui_1"));
	dog2_rank = new createjs.Bitmap(loader.getResult("bib_gui_2"));
	dog3_rank = new createjs.Bitmap(loader.getResult("bib_gui_3"));
	dog4_rank = new createjs.Bitmap(loader.getResult("bib_gui_4"));
	dog5_rank = new createjs.Bitmap(loader.getResult("bib_gui_5"));
	dog6_rank = new createjs.Bitmap(loader.getResult("bib_gui_6"));

	flag1 = new createjs.Bitmap(loader.getResult("flag1"));
	flag2 = new createjs.Bitmap(loader.getResult("flag2"));
	flag3 = new createjs.Bitmap(loader.getResult("flag3"));
	flag4 = new createjs.Bitmap(loader.getResult("flag4"));
	flag5 = new createjs.Bitmap(loader.getResult("flag5"));
	flag6 = new createjs.Bitmap(loader.getResult("flag6"));

	win_name1 = new createjs.Text("콜호","40px bold","#fefefe");
	win_name2 = new createjs.Text("민호","40px bold","#fefefe");
	win_name3 = new createjs.Text("정","40px bold","#fefefe");
	win_name4 = new createjs.Text("한울","40px bold","#fefefe");
	win_name5 = new createjs.Text("시아버지","40px bold","#fefefe");
	win_name6 = new createjs.Text("혼합","40px bold","#fefefe");

	ranks[0]['name'] = dog1_rank;
	ranks[1]['name'] = dog2_rank;
	ranks[2]['name'] = dog3_rank;
	ranks[3]['name'] = dog4_rank;
	ranks[4]['name'] = dog5_rank;
	ranks[5]['name'] = dog6_rank;

	bgContainer = new createjs.Container();
	container = new createjs.Container();
	bgContainer.addChild(imageBackground);

	dogContainer = new createjs.Container();

	for( var i = 0; i < assets.length; i++){
		var event = assets[i];
		var result = event.result;

		switch (event.item.id) {
			case "dog":
			spriteSheet = result;
			break;
		}
	}
		dog1obj = new createjs.Sprite(spriteSheet , "dog1");
		dog2obj = new createjs.Sprite(spriteSheet , "dog2");
		dog3obj = new createjs.Sprite(spriteSheet , "dog3");
		dog4obj = new createjs.Sprite(spriteSheet , "dog4");
		dog5obj = new createjs.Sprite(spriteSheet , "dog5");
		dog6obj = new createjs.Sprite(spriteSheet , "dog6");

		// dog2obj.alpha = 0;
		// dog3obj.alpha = 0;
		// dog4obj.alpha = 0;
		// dog5obj.alpha = 0;
		// dog6obj.alpha = 0;
		dog_arr[0]['name'] = dog1obj; 
		dog_arr[1]['name'] = dog2obj; 
		dog_arr[2]['name'] = dog3obj; 
		dog_arr[3]['name'] = dog4obj; 
		dog_arr[4]['name'] = dog5obj; 
		dog_arr[5]['name'] = dog6obj; 


		line.scaleX = 1;
		stage.addChild(bgContainer,container,rank,dog1_rank,dog2_rank,dog3_rank,dog4_rank,dog5_rank,dog6_rank,line,dog1_name,dog2_name,dog3_name,dog4_name,dog5_name,dog6_name,panel_arrival,flag1,flag2,flag3,flag4,flag5,flag6,win_name1,win_name2,win_name3,win_name4,win_name5,win_name6,time_bet,round,count,time_count,count_down);
		tick(); 
		resize();
	}

var speed = 1;

createjs.Ticker.addEventListener("tick", stage);
createjs.Ticker.setFPS(speed);

window.mobilecheck = function() {

  var check = false;

  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;

};

function tick(){
	createjs.Ticker.setFPS(60);
	resize();
	stage.update();
}


function resize(){

	var windowH =  window.innerHeight;
	var windowW = window.innerWidth;

	stage.canvas.width = windowW;
	stage.canvas.height = window.innerHeight - 10;

		imageBackground.scaleX = (windowW - (windowW / 5)) / bg.image.height;
		imageBackground.scaleY = (windowW - (windowW / 5)) / bg.image.height;

		time_bet.scaleX = (windowW - (windowW * 2.5)) / bg.image.height;
		time_bet.scaleY = (windowW - (windowW / 2.4)) / bg.image.height;
		time_bet.x = $('#track_bg').width() / 1.05;//position
		time_bet.y = windowW / 55;

		round.scaleX = round.scaleY =  (windowW - (windowW / 1.7)) / bg.image.height;
		round.x = $('#track_bg').width() / 1.16;
		round.y =  windowW / 32;

		count.scaleX = count.scaleY =  (windowW - (windowW / 1.7)) / bg.image.height;
		count.x = $('#track_bg').width() / 1.14;
		count.y =  windowW / 18;

		time_count.scaleX = time_count.scaleY =  (windowW - (windowW / 1.7)) / bg.image.height;
		time_count.x = $('#track_bg').width() / 1.15;
		time_count.y =  windowW / 12;

		count_down.scaleX = count_down.scaleY =  (windowW - (windowW / 1.7)) / bg.image.height;
		count_down.x = $('#track_bg').width() / 1.16;
		count_down.y =  windowW / 9.5;

		panel_arrival.scaleX = panel_arrival.scaleY =  (windowW - (windowW / 3)) / bg.image.height;
		panel_arrival.x =  $('#track_bg').width() * 2;
		panel_arrival.y = windowW / 4;

		flag1.scaleX = flag1.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
		flag1.x =  $('#track_bg').width() * 2;
		flag1.y =   windowW / 2;
		win_name1.scaleX = win_name1.scaleY =  (windowW - (windowW / 1.55)) / bg.image.height;
		win_name1.x = flag1.x + 30;
		win_name1.y =  flag1.y + 3;

		flag2.scaleX = flag2.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
		flag2.x =  $('#track_bg').width() * 2;
		flag2.y =   windowW / 3.5;
		win_name2.scaleX = win_name2.scaleY =  (windowW - (windowW / 1.55)) / bg.image.height;
		win_name2.x = flag2.x + 30;
		win_name2.y =  flag2.y + 3;


		flag3.scaleX = flag3.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
		flag3.x =  $('#track_bg').width() * 2;
		flag3.y =   windowW / 3.25;
		win_name3.scaleX = win_name3.scaleY =  (windowW - (windowW / 1.55)) / bg.image.height;
		win_name3.x = flag3.x + 30;
		win_name3.y =  flag3.y + 3;

		flag4.scaleX = flag4.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
		flag4.x =  $('#track_bg').width() * 2;
		flag4.y =   windowW / 2.97;
		win_name4.scaleX = win_name4.scaleY =  (windowW - (windowW / 1.55)) / bg.image.height;
		win_name4.x = flag4.x + 30;
		win_name4.y =  flag4.y + 3;

		flag5.scaleX = flag5.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
		flag5.x =  $('#track_bg').width() * 2;
		flag5.y =   windowW / 2.74;
		win_name5.scaleX = win_name5.scaleY =  (windowW - (windowW / 1.55)) / bg.image.height;
		win_name5.x = flag5.x + 30;
		win_name5.y =  flag5.y + 3;

		flag6.scaleX = flag6.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
		flag6.x =  $('#track_bg').width() * 2;
		flag6.y =   windowW / 2.54;
		win_name6.scaleX = win_name6.scaleY =  (windowW - (windowW / 1.55)) / bg.image.height;
		win_name6.x = flag6.x + 30;
		win_name6.y =  flag6.y + 3;

		line.scaleX = line.scaleY =  (windowW - (windowW / 1.2)) / bg.image.height;
		line.scaleX  = 0;
		line.x = $('#track_bg').width() / 6.8;
		line.y = windowW / 8.3;

		dog1_rank.scaleX = dog1_rank.scaleY =  (windowW - (windowW / 3)) / bg.image.height;
		dog1_rank.x = $('#track_bg').width() / 7.5;
		dog1_rank.y = windowW / 17;
		dog1_name.scaleX = dog1_name.scaleY =  (windowW - (windowW / 1.7)) / bg.image.height;
		dog1_name.x = dog1_rank.x + 15;
		dog1_name.y = dog1_rank.y;

		dog2_rank.scaleX = dog2_rank.scaleY =  (windowW - (windowW / 3)) / bg.image.height;
		dog2_rank.x = $('#track_bg').width() / 3.98;
		dog2_rank.y = windowW / 17;
		dog2_name.scaleX = dog2_name.scaleY =  (windowW - (windowW / 1.7)) / bg.image.height;
		dog2_name.x = dog2_rank.x + 12;
		dog2_name.y = dog2_rank.y;

		dog3_rank.scaleX = dog3_rank.scaleY =  (windowW - (windowW / 3)) / bg.image.height;
		dog3_rank.x = $('#track_bg').width() / 2.7;
		dog3_rank.y = windowW / 17;
		dog3_name.scaleX = dog3_name.scaleY =  (windowW - (windowW / 1.7)) / bg.image.height;
		dog3_name.x = dog3_rank.x + 20;
		dog3_name.y = dog3_rank.y;

		dog4_rank.scaleX = dog4_rank.scaleY =  (windowW - (windowW / 3)) / bg.image.height;
		dog4_rank.x = $('#track_bg').width() / 2.01;
		dog4_rank.y = windowW / 17;
		dog4_name.scaleX = dog4_name.scaleY =  (windowW - (windowW / 1.7)) / bg.image.height;
		dog4_name.x = dog4_rank.x + 15;
		dog4_name.y = dog4_rank.y;

		dog5_rank.scaleX = dog5_rank.scaleY =  (windowW - (windowW / 3)) / bg.image.height;
		dog5_rank.x = $('#track_bg').width() / 1.63;
		dog5_rank.y = windowW / 17;
		dog5_name.scaleX = dog5_name.scaleY =  (windowW - (windowW / 1.7)) / bg.image.height;
		dog5_name.x = dog5_rank.x + 2;
		dog5_name.y = dog5_rank.y;

		dog6_rank.scaleX = dog6_rank.scaleY =  (windowW - (windowW / 3)) / bg.image.height;
		dog6_rank.x = $('#track_bg').width() / 1.38;
		dog6_rank.y = windowW / 17;
		dog6_name.scaleX = dog6_name.scaleY =  (windowW - (windowW / 1.7)) / bg.image.height;
		dog6_name.x = dog6_rank.x + 15;
		dog6_name.y = dog6_rank.y;

		rank.scaleX = rank.scaleY =  (windowW - (windowW / 3)) / bg.image.height;// scale
		rank.x = $('#track_bg').width() / 18;//position
		rank.y = windowW / 50;

		dog1obj.scaleY = dog1obj.scaleX = (windowW - (windowW / 3)) / bg.image.height;
		dog1obj.x = $('#track_bg').width() / 4.5;//position
		dog1obj.y = windowW / 3.5;

		dog2obj.scaleY = dog2obj.scaleX = (windowW - (windowW / 3.3)) / bg.image.height;
		dog2obj.x = $('#track_bg').width() / 4.8;//position
		dog2obj.y = windowW / 3.4;

		dog3obj.scaleY = dog3obj.scaleX = (windowW - (windowW / 3.6)) / bg.image.height;
		dog3obj.x = $('#track_bg').width() / 5.3;//position
		dog3obj.y = windowW / 3.3;

		dog4obj.scaleY = dog4obj.scaleX = (windowW - (windowW / 3.9)) / bg.image.height;
		dog4obj.x = $('#track_bg').width() / 5.8;//position
		dog4obj.y = windowW / 3.2;

		dog5obj.scaleY = dog5obj.scaleX = (windowW - (windowW / 4.2)) / bg.image.height;
		dog5obj.x = $('#track_bg').width() / 6.7;//position
		dog5obj.y = windowW / 3.1;

		dog6obj.scaleY = dog6obj.scaleX = (windowW - (windowW / 4.5)) / bg.image.height;
		dog6obj.x = $('#track_bg').width() / 7.5;//position
		dog6obj.y = windowW / 3;

	// tick();
}

function getRank(){



	if (finish == false) {

		innerpos = [];
		ranks[0]['dog_name'] = dog1_name;
		ranks[1]['dog_name'] = dog2_name;
		ranks[2]['dog_name'] = dog3_name;
		ranks[3]['dog_name'] = dog4_name;
		ranks[4]['dog_name'] = dog5_name;
		ranks[5]['dog_name'] = dog6_name;

		rpos = [1.38,1.63,2.01,2.7,3.98,7.5];
		for(i = 0; i < ranks.length; i++) {
			ranks[i]['position'] = dog_arr[i]['name']['x'];
			innerpos.push( dog_arr[i]['name']['x'])
			// console.log(ranks[i]['position']);
		}


		innerpos.sort(function (a, b) {
	   		return  b - a;
		});

		for(i = 0; i < ranks.length; i++) {

			var windowW = window.innerWidth;

			if (innerpos[0] == ranks[i]['position']) {
				createjs.Tween.get(ranks[i]['name'])
				.to({x: ($('#track_bg').width() / 1.38)}, 50, createjs.Ease.linear)

				createjs.Tween.get(ranks[i]['dog_name'])
				.to({x: ($('#track_bg').width() / 1.35)}, 50, createjs.Ease.linear)

			} else if (innerpos[1] == ranks[i]['position']) {
				createjs.Tween.get(ranks[i]['name'])
				.to({x: ($('#track_bg').width() / 1.63)}, 50, createjs.Ease.linear)

				createjs.Tween.get(ranks[i]['dog_name'])
				.to({x: ($('#track_bg').width() / 1.59)}, 50, createjs.Ease.linear)

			} else if (innerpos[2] == ranks[i]['position']) {
				createjs.Tween.get(ranks[i]['name'])
				.to({x: ($('#track_bg').width() / 2.01)}, 50, createjs.Ease.linear)

				createjs.Tween.get(ranks[i]['dog_name'])
				.to({x: ($('#track_bg').width() / 1.95)}, 50, createjs.Ease.linear)

			} else if (innerpos[3] == ranks[i]['position']) {
				createjs.Tween.get(ranks[i]['name'])
				.to({x: ($('#track_bg').width() / 2.7)}, 50, createjs.Ease.linear)

				createjs.Tween.get(ranks[i]['dog_name'])
				.to({x: ($('#track_bg').width() / 2.6)}, 50, createjs.Ease.linear)

			} else if (innerpos[4] == ranks[i]['position']) {
				createjs.Tween.get(ranks[i]['name'])
				.to({x: ($('#track_bg').width() / 3.98)}, 50, createjs.Ease.linear)

				createjs.Tween.get(ranks[i]['dog_name'])
				.to({x: ($('#track_bg').width() / 3.98)}, 50, createjs.Ease.linear)

			} else if (innerpos[5] == ranks[i]['position']) {
				createjs.Tween.get(ranks[i]['name'])
				.to({x: ($('#track_bg').width() / 7.5)}, 50, createjs.Ease.linear)

				createjs.Tween.get(ranks[i]['dog_name'])
				.to({x: ($('#track_bg').width() / 6.9)}, 50, createjs.Ease.linear)

			}


		}

	}
}


socket.on('loadDataGame', function(data){

	if (shouldStart) {

		if (data[0].rounds < 10 ) {
			count.text = "00"+(data[0].rounds + 1);
		}else {
			count.text = ""+(data[0].rounds + 1);
		}
	}


});

socket.on('sec',function(seconds){
	if (shouldStart) {

		var windowW = window.innerWidth;

		if(count_down != null){

			if (seconds < 10 ) {
				count_down.text = '00:0'+seconds;
			}else {
				count_down.text = '00:'+seconds;
			}

			if (seconds == 1) {

				runTrack(num,num2);
				startLine();
			} 

			if (seconds == 10) {

				dog1obj.alpha = 0;
				dog2obj.alpha = 0;
				dog3obj.alpha = 0;
				dog4obj.alpha = 0;
				dog5obj.alpha = 0;
				dog6obj.alpha = 0;
				resize();
			}

		}
	}

})

function startLine(){

	if (shouldStart) {

		var windowW = window.innerWidth;

		createjs.Tween.get(line)
		.to({scaleX: (windowW * 1)  / bg.image.height}, 4200, createjs.Ease.linear)
		.to({scaleX: (windowW * 2)  / bg.image.height}, 4200, createjs.Ease.linear)
		.to({scaleX: (windowW * 3)  / bg.image.height}, 4200, createjs.Ease.linear)
		.to({scaleX: (windowW * 4)  / bg.image.height}, 4200, createjs.Ease.linear)
		.to({scaleX: (windowW * 5)  / bg.image.height}, 4200, createjs.Ease.linear)
		.to({scaleX: (windowW * 6)  / bg.image.height}, 4200, createjs.Ease.linear)
		.to({scaleX: (windowW * 7)  / bg.image.height}, 4200, createjs.Ease.linear)
		.to({scaleX: (windowW * 8.4)  / bg.image.height}, 5000, createjs.Ease.linear);
	}

}

var num = 0;
var newnum;

var num2 = 22;

function runTrack(num,num2){

	if (shouldStart) {

		 win1 = null;
		 win2 = null;
		 win3 = null;
		 win4 = null;
		 win5 = null;
		 win6 = null;

		finish = false;

			newnum = num;

			if (num == 17) {

				dog1obj.alpha = 1;
				dog2obj.alpha = 1;
				dog3obj.alpha = 1;
				dog4obj.alpha = 1;
				dog5obj.alpha = 1;
				dog6obj.alpha = 1;
				rundog(dog_arr[0]['name'],dog_arr[1]['name'],dog_arr[2]['name'],dog_arr[3]['name'],dog_arr[4]['name'],dog_arr[5]['name'])
				imageBackground.alpha = 1;
				$('#track_bg').css('opacity' , 0);
			}

			if (window.mobilecheck()) {

				if (num < 406 && count_down.text != '00:28') {

						num++;
						num2++;

					if (num > 25) {
						if (num2 == 48) {
							num2 = 22;
						}
						loopTrack(num,num2);

					} else {
						changeTrack(num,num2);
					}

				} else {

					setTimeout(function(){
						finish = true;
					},2500)

					setTimeout(function(){
						
						imageBackground = new createjs.Bitmap(loader.getResult("bgTrack_"+49));
						bgContainer.removeAllChildren();
						bgContainer.addChild(imageBackground);

						var windowW = window.innerWidth;
						imageBackground.scaleX = (windowW - (windowW / 5)) / bg.image.height;
						imageBackground.scaleY = (windowW - (windowW / 5)) / bg.image.height;
						stage.update();
					},80)
					setTimeout(function(){
						
						imageBackground = new createjs.Bitmap(loader.getResult("bgTrack_"+50));
						bgContainer.removeAllChildren();
						bgContainer.addChild(imageBackground);

						var windowW = window.innerWidth;
						imageBackground.scaleX = (windowW - (windowW / 5)) / bg.image.height;
						imageBackground.scaleY = (windowW - (windowW / 5)) / bg.image.height;
						stage.update();
					},160)
					setTimeout(function(){
						
						imageBackground = new createjs.Bitmap(loader.getResult("bgTrack_"+51));
						bgContainer.removeAllChildren();
						bgContainer.addChild(imageBackground);

						var windowW = window.innerWidth;
						imageBackground.scaleX = (windowW - (windowW / 5)) / bg.image.height;
						imageBackground.scaleY = (windowW - (windowW / 5)) / bg.image.height;
						stage.update();
					},240)
					setTimeout(function(){
						
						imageBackground = new createjs.Bitmap(loader.getResult("bgTrack_"+52));
						bgContainer.removeAllChildren();
						bgContainer.addChild(imageBackground);

						var windowW = window.innerWidth;
						imageBackground.scaleX = (windowW - (windowW / 5)) / bg.image.height;
						imageBackground.scaleY = (windowW - (windowW / 5)) / bg.image.height;
						stage.update();
					},320)
					setTimeout(function(){
						
						imageBackground = new createjs.Bitmap(loader.getResult("bgTrack_"+53));
						bgContainer.removeAllChildren();
						bgContainer.addChild(imageBackground);

						var windowW = window.innerWidth;
						imageBackground.scaleX = (windowW - (windowW / 5)) / bg.image.height;
						imageBackground.scaleY = (windowW - (windowW / 5)) / bg.image.height;
						stage.update();
					},400)
					setTimeout(function(){
						
						imageBackground = new createjs.Bitmap(loader.getResult("bgTrack_"+54));
						bgContainer.removeAllChildren();
						bgContainer.addChild(imageBackground);

						var windowW = window.innerWidth;
						imageBackground.scaleX = (windowW - (windowW / 5)) / bg.image.height;
						imageBackground.scaleY = (windowW - (windowW / 5)) / bg.image.height;
						stage.update();
					},480)
					setTimeout(function(){
						
						imageBackground = new createjs.Bitmap(loader.getResult("bgTrack_"+55));
						bgContainer.removeAllChildren();
						bgContainer.addChild(imageBackground);

						var windowW = window.innerWidth;
						imageBackground.scaleX = (windowW - (windowW / 5)) / bg.image.height;
						imageBackground.scaleY = (windowW - (windowW / 5)) / bg.image.height;
						stage.update();
					},560)
					setTimeout(function(){
						
						imageBackground = new createjs.Bitmap(loader.getResult("bgTrack_"+56));
						bgContainer.removeAllChildren();
						bgContainer.addChild(imageBackground);

						var windowW = window.innerWidth;
						imageBackground.scaleX = (windowW - (windowW / 5)) / bg.image.height;
						imageBackground.scaleY = (windowW - (windowW / 5)) / bg.image.height;
						stage.update();
					},640)
						
					
					$('#track_bg').css('opacity' , 1);

				}

			}else{

				if (num < 406) {

						num++;
						num2++;

					if (num > 25) {
						if (num2 == 48) {
							num2 = 22;
						}
						loopTrack(num,num2);

					} else {
						changeTrack(num,num2);
					}

				} else {

					setTimeout(function(){
						finish = true;
					},2500)

					setTimeout(function(){
						
						imageBackground = new createjs.Bitmap(loader.getResult("bgTrack_"+49));
						bgContainer.removeAllChildren();
						bgContainer.addChild(imageBackground);

						var windowW = window.innerWidth;
						imageBackground.scaleX = (windowW - (windowW / 5)) / bg.image.height;
						imageBackground.scaleY = (windowW - (windowW / 5)) / bg.image.height;
						stage.update();
					},80)
					setTimeout(function(){
						
						imageBackground = new createjs.Bitmap(loader.getResult("bgTrack_"+50));
						bgContainer.removeAllChildren();
						bgContainer.addChild(imageBackground);

						var windowW = window.innerWidth;
						imageBackground.scaleX = (windowW - (windowW / 5)) / bg.image.height;
						imageBackground.scaleY = (windowW - (windowW / 5)) / bg.image.height;
						stage.update();
					},160)
					setTimeout(function(){
						
						imageBackground = new createjs.Bitmap(loader.getResult("bgTrack_"+51));
						bgContainer.removeAllChildren();
						bgContainer.addChild(imageBackground);

						var windowW = window.innerWidth;
						imageBackground.scaleX = (windowW - (windowW / 5)) / bg.image.height;
						imageBackground.scaleY = (windowW - (windowW / 5)) / bg.image.height;
						stage.update();
					},240)
					setTimeout(function(){
						
						imageBackground = new createjs.Bitmap(loader.getResult("bgTrack_"+52));
						bgContainer.removeAllChildren();
						bgContainer.addChild(imageBackground);

						var windowW = window.innerWidth;
						imageBackground.scaleX = (windowW - (windowW / 5)) / bg.image.height;
						imageBackground.scaleY = (windowW - (windowW / 5)) / bg.image.height;
						stage.update();
					},320)
					setTimeout(function(){
						
						imageBackground = new createjs.Bitmap(loader.getResult("bgTrack_"+53));
						bgContainer.removeAllChildren();
						bgContainer.addChild(imageBackground);

						var windowW = window.innerWidth;
						imageBackground.scaleX = (windowW - (windowW / 5)) / bg.image.height;
						imageBackground.scaleY = (windowW - (windowW / 5)) / bg.image.height;
						stage.update();
					},400)
					setTimeout(function(){
						
						imageBackground = new createjs.Bitmap(loader.getResult("bgTrack_"+54));
						bgContainer.removeAllChildren();
						bgContainer.addChild(imageBackground);

						var windowW = window.innerWidth;
						imageBackground.scaleX = (windowW - (windowW / 5)) / bg.image.height;
						imageBackground.scaleY = (windowW - (windowW / 5)) / bg.image.height;
						stage.update();
					},480)
					setTimeout(function(){
						
						imageBackground = new createjs.Bitmap(loader.getResult("bgTrack_"+55));
						bgContainer.removeAllChildren();
						bgContainer.addChild(imageBackground);

						var windowW = window.innerWidth;
						imageBackground.scaleX = (windowW - (windowW / 5)) / bg.image.height;
						imageBackground.scaleY = (windowW - (windowW / 5)) / bg.image.height;
						stage.update();
					},560)
					setTimeout(function(){
						
						imageBackground = new createjs.Bitmap(loader.getResult("bgTrack_"+56));
						bgContainer.removeAllChildren();
						bgContainer.addChild(imageBackground);

						var windowW = window.innerWidth;
						imageBackground.scaleX = (windowW - (windowW / 5)) / bg.image.height;
						imageBackground.scaleY = (windowW - (windowW / 5)) / bg.image.height;
						stage.update();
					},640)
						
					
					$('#track_bg').css('opacity' , 1);

				}

			}

	}
}


// window.mobilecheck = function() {
//   var check = false;
//   (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
//   return check;
// };

	function changeTrack(num,num2) {
		// console.log(num)
		// if (shouldStart) {
			// if (num == 22) {
				imageBackground = new createjs.Bitmap(loader.getResult("bgTrack_"+num));
				bgContainer.removeAllChildren();
				bgContainer.addChild(imageBackground);

				var windowW = window.innerWidth;
				imageBackground.scaleX = (windowW - (windowW / 5)) / bg.image.height;
				imageBackground.scaleY = (windowW - (windowW / 5)) / bg.image.height;
				stage.update();

			// }
				setTimeout(function(){
					return runTrack(num,num2);
				},80)
		// }
	}

	function loopTrack(num,num2){
		// console.log(num2)
		// if (shouldStart) {
			
			imageBackground = new createjs.Bitmap(loader.getResult("bgTrack_"+num2));
			bgContainer.removeAllChildren();
			bgContainer.addChild(imageBackground);

			var windowW = window.innerWidth;
			imageBackground.scaleX = (windowW - (windowW / 5)) / bg.image.height;
			imageBackground.scaleY = (windowW - (windowW / 5)) / bg.image.height;
			stage.update();

			setTimeout(function(){
				return runTrack(num,num2);
			},80)
		// }
	}


	function completeRun(obj) {
		if (shouldStart) {

			var windowW = window.innerWidth;


			if (win1 == null || win2 == null || win3 == null) {

				if (win1 == null) {
					createjs.Tween.get(panel_arrival)
					.to({x : $('#track_bg').width() * 0.85 }, 100 , createjs.Ease.easeOutExpo)

				}

				setTimeout(function(){
					spriteSheet.framerate = 0.0001;
					createjs.Ticker.paused = true;

					if (win1 == null) {

						setTimeout(function(){

						

							if (obj['target']['currentAnimation'] == 'dog1') {

								flag1.x =  $('#track_bg').width() * 0.87;
								flag1.y =   windowW / dog_place_y[0];
								win_name1.x = flag1.x + 30;
								win_name1.y =  flag1.y + 3;

							} else if (obj['target']['currentAnimation'] == 'dog2'){

								flag2.x =  $('#track_bg').width() * 0.87;
								flag2.y =   windowW / dog_place_y[0];
								win_name2.x = flag2.x + 30;
								win_name2.y =  flag2.y + 3;

							} else if (obj['target']['currentAnimation'] == 'dog3'){

								flag3.x =  $('#track_bg').width() * 0.87;
								flag3.y =   windowW / dog_place_y[0];
								win_name3.x = flag3.x + 30;
								win_name3.y =  flag3.y + 3;

							} else if (obj['target']['currentAnimation'] == 'dog4'){

								flag4.x =  $('#track_bg').width() * 0.87;
								flag4.y =   windowW / dog_place_y[0];
								win_name4.x = flag4.x + 30;
								win_name4.y =  flag4.y + 3;

							} else if (obj['target']['currentAnimation'] == 'dog5'){

								flag5.x =  $('#track_bg').width() * 0.87;
								flag5.y =   windowW / dog_place_y[0];
								win_name5.x = flag5.x + 30;
								win_name5.y =  flag5.y + 3;

							} else if (obj['target']['currentAnimation'] == 'dog6'){

								flag6.x =  $('#track_bg').width() * 0.87;
								flag6.y =   windowW / dog_place_y[0];
								win_name6.x = flag6.x + 30;
								win_name6.y =  flag6.y + 3;

							}

							win1 = obj['target']['currentAnimation'];

						},300)

					} else if (win2 == null) {

						setTimeout(function(){

							if (obj['target']['currentAnimation'] == 'dog1') {

								flag1.x =  $('#track_bg').width() * 0.87;
								flag1.y =   windowW / dog_place_y[1];
								win_name1.x = flag1.x + 30;
								win_name1.y =  flag1.y + 3;

							} else if (obj['target']['currentAnimation'] == 'dog2'){

								flag2.x =  $('#track_bg').width() * 0.87;
								flag2.y =   windowW / dog_place_y[1];
								win_name2.x = flag2.x + 30;
								win_name2.y =  flag2.y + 3;

							} else if (obj['target']['currentAnimation'] == 'dog3'){

								flag3.x =  $('#track_bg').width() * 0.87;
								flag3.y =   windowW / dog_place_y[1];
								win_name3.x = flag3.x + 30;
								win_name3.y =  flag3.y + 3;

							} else if (obj['target']['currentAnimation'] == 'dog4'){

								flag4.x =  $('#track_bg').width() * 0.87;
								flag4.y =   windowW / dog_place_y[1];
								win_name4.x = flag4.x + 30;
								win_name4.y =  flag4.y + 3;

							} else if (obj['target']['currentAnimation'] == 'dog5'){

								flag5.x =  $('#track_bg').width() * 0.87;
								flag5.y =   windowW / dog_place_y[1];
								win_name5.x = flag5.x + 30;
								win_name5.y =  flag5.y + 3;

							} else if (obj['target']['currentAnimation'] == 'dog6'){

								flag6.x =  $('#track_bg').width() * 0.87;
								flag6.y =   windowW / dog_place_y[1];
								win_name6.x = flag6.x + 30;
							  	win_name6.y =  flag6.y + 3;

							}

							win2 = obj['target']['currentAnimation'];

						},500)

					} else if (win3 == null) {

						setTimeout(function(){


							if (obj['target']['currentAnimation'] == 'dog1') {

								flag1.x =  $('#track_bg').width() * 0.87;
								flag1.y =   windowW / dog_place_y[2];
								win_name1.x = flag1.x + 30;
								win_name1.y =  flag1.y + 3;

							} else if (obj['target']['currentAnimation'] == 'dog2'){

								flag2.x =  $('#track_bg').width() * 0.87;
								flag2.y =   windowW / dog_place_y[2];
								win_name2.x = flag2.x + 30;
								win_name2.y =  flag2.y + 3;

							} else if (obj['target']['currentAnimation'] == 'dog3'){

								flag3.x =  $('#track_bg').width() * 0.87;
								flag3.y =   windowW / dog_place_y[2];
								win_name3.x = flag3.x + 30;
								win_name3.y =  flag3.y + 3;

							} else if (obj['target']['currentAnimation'] == 'dog4'){

								flag4.x =  $('#track_bg').width() * 0.87;
								flag4.y =   windowW / dog_place_y[2];
								win_name4.x = flag4.x + 30;
								win_name4.y =  flag4.y + 3;

							} else if (obj['target']['currentAnimation'] == 'dog5'){

								flag5.x =  $('#track_bg').width() * 0.87;
								flag5.y =   windowW / dog_place_y[2];
								win_name5.x = flag5.x + 30;
								win_name5.y =  flag5.y + 3;

							} else if (obj['target']['currentAnimation'] == 'dog6'){

								flag6.x =  $('#track_bg').width() * 0.87;
								flag6.y =   windowW / dog_place_y[2];
								win_name6.x = flag6.x + 30;
								win_name6.y =  flag6.y + 3;

							}

							win3 = obj['target']['currentAnimation'];

						},700)
					}

					setTimeout(function(){
						createjs.Ticker.paused = false;
						spriteSheet.framerate = 35;

						createjs.Tween.get(obj['target'])
						.to({x: (obj['target']['x'] + ($('#track_bg').width() * 1.2))}, 1500, createjs.Ease.linear)
					},1000)

				},100)
			} else {
				createjs.Tween.get(obj['target'])
				.to({x: (obj['target']['x'] + ($('#track_bg').width() * 1.2))}, 1500, createjs.Ease.linear)

				if (win4 == null) {

					if (obj['target']['currentAnimation'] == 'dog1') {
						flag1.x =  $('#track_bg').width() * 0.87;
						flag1.y =   windowW / dog_place_y[3];
						win_name1.x = flag1.x + 30;
						win_name1.y =  flag1.y + 3;

					} else if (obj['target']['currentAnimation'] == 'dog2'){
						flag2.x =  $('#track_bg').width() * 0.87;
						flag2.y =   windowW / dog_place_y[3];
						win_name2.x = flag2.x + 30;
						win_name2.y =  flag2.y + 3;

					} else if (obj['target']['currentAnimation'] == 'dog3'){
						flag3.x =  $('#track_bg').width() * 0.87;
						flag3.y =   windowW / dog_place_y[3];
						win_name3.x = flag3.x + 30;
						win_name3.y =  flag3.y + 3;

					} else if (obj['target']['currentAnimation'] == 'dog4'){
						flag4.x =  $('#track_bg').width() * 0.87;
						flag4.y =   windowW / dog_place_y[3];
						win_name4.x = flag4.x + 30;
						win_name4.y =  flag4.y + 3;

					} else if (obj['target']['currentAnimation'] == 'dog5'){
						flag5.x =  $('#track_bg').width() * 0.87;
						flag5.y =   windowW / dog_place_y[3];
						win_name5.x = flag5.x + 30;
						win_name5.y =  flag5.y + 3;

					} else if (obj['target']['currentAnimation'] == 'dog6'){
						flag6.x =  $('#track_bg').width() * 0.87;
						flag6.y =   windowW / dog_place_y[3];
						win_name6.x = flag6.x + 30;
						win_name6.y =  flag6.y + 3;

					}

					win4 = obj['target']['currentAnimation'];

				} else if (win5 == null) {


					if (obj['target']['currentAnimation'] == 'dog1') {
						flag1.x =  $('#track_bg').width() * 0.87;
						flag1.y =   windowW / dog_place_y[4]; // 2.74
						win_name1.x = flag1.x + 30;
						win_name1.y =  flag1.y + 3;

					} else if (obj['target']['currentAnimation'] == 'dog2'){
						flag2.x =  $('#track_bg').width() * 0.87;
						flag2.y =   windowW / dog_place_y[4];
						win_name2.x = flag2.x + 30;
						win_name2.y =  flag2.y + 3;

					} else if (obj['target']['currentAnimation'] == 'dog3'){
						flag3.x =  $('#track_bg').width() * 0.87;
						flag3.y =   windowW / dog_place_y[4];
						win_name3.x = flag3.x + 30;
						win_name3.y =  flag3.y + 3;

					} else if (obj['target']['currentAnimation'] == 'dog4'){
						flag4.x =  $('#track_bg').width() * 0.87;
						flag4.y =   windowW / dog_place_y[4];
						win_name4.x = flag4.x + 30;
						win_name4.y =  flag4.y + 3;

					} else if (obj['target']['currentAnimation'] == 'dog5'){
						flag5.x =  $('#track_bg').width() * 0.87;
						flag5.y =   windowW / dog_place_y[4];
						win_name5.x = flag5.x + 30;
						win_name5.y =  flag5.y + 3;

					} else if (obj['target']['currentAnimation'] == 'dog6'){
						flag6.x =  $('#track_bg').width() * 0.87;
						flag6.y =   windowW / dog_place_y[4];
						win_name6.x = flag6.x + 30;
						win_name6.y =  flag6.y + 3;

					}

					win5 = obj['target']['currentAnimation'];

				} else if (win6 == null) {

					if (obj['target']['currentAnimation'] == 'dog1') {
						flag1.x =  $('#track_bg').width() * 0.87;
						flag1.y =   windowW / dog_place_y[5];
						win_name1.x = flag1.x + 30;
						win_name1.y =  flag1.y + 3;

					} else if (obj['target']['currentAnimation'] == 'dog2'){
						flag2.x =  $('#track_bg').width() * 0.87;
						flag2.y =   windowW / dog_place_y[5];
						win_name2.x = flag2.x + 30;
						win_name2.y =  flag2.y + 3;

					} else if (obj['target']['currentAnimation'] == 'dog3'){
						flag3.x =  $('#track_bg').width() * 0.87;
						flag3.y =   windowW / dog_place_y[5];
						win_name3.x = flag3.x + 30;
						win_name3.y =  flag3.y + 3;

					} else if (obj['target']['currentAnimation'] == 'dog4'){
						flag4.x =  $('#track_bg').width() * 0.87;
						flag4.y =   windowW / dog_place_y[5];
						win_name4.x = flag4.x + 30;
						win_name4.y =  flag4.y + 3;

					} else if (obj['target']['currentAnimation'] == 'dog5'){
						flag5.x =  $('#track_bg').width() * 0.87;
						flag5.y =   windowW / dog_place_y[5];
						win_name5.x = flag5.x + 30;
						win_name5.y =  flag5.y + 3;

					} else if (obj['target']['currentAnimation'] == 'dog6'){
						flag6.x =  $('#track_bg').width() * 0.87;
						flag6.y =   windowW / dog_place_y[5];
						win_name6.x = flag6.x + 30;
						win_name6.y =  flag6.y + 3;

					}

					win6 = obj['target']['currentAnimation'];
				}


			}

		} //shouldStrat


			
	} //completeRun



	function rundog(param1,param2,param3,param4,param5,param6){
		setTimeout(function(){
			container.addChild(param1);
		},50);
		setTimeout(function(){
			container.addChild(param2);
		},100);
		setTimeout(function(){
			container.addChild(param3);
		},150);
		setTimeout(function(){
			container.addChild(param4);
		},200);
		setTimeout(function(){
			container.addChild(param5);
		},250);
		setTimeout(function(){
			container.addChild(param6);
		},300);

	}


	socket.on('result' , function(data){
		if (shouldStart) {


			var getRanking = setInterval(function(){
				getRank();
			},1500);

			win1 = null;
			win2 = null;
			win3 = null;
			win4 = null;
			win5 = null;
			win6 = null;
		}
    
	})

	socket.on('dog1' , function(data){
	
		if (shouldStart) {

			createjs.Tween.get(dog_arr[0][ 'name'])
		        .to({x: ($('#track_bg').width() / data.move1 )}, 7500, createjs.Ease.linear)
		        .to({x: ( $('#track_bg').width() / data.move2 )}, 8000, createjs.Ease.linear)
		        .to({x: ( $('#track_bg').width() / data.move3 )}, 8000, createjs.Ease.linear)
		        .to({x: ( $('#track_bg').width() / data.move4 )}, 5000, createjs.Ease.linear)
		        .to({x:($('#track_bg').width() / data.win_res )}, 3000, createjs.Ease.linear) // 4
		        .to({x: ($('#track_bg').width() / 2.5)}, data.speed1, createjs.Ease.linear).call(completeRun)
		}
	})


	socket.on('dog2' , function(data){
	    if (shouldStart) {

			createjs.Tween.get(dog_arr[1]['name'])
	        .to({x: ($('#track_bg').width() / data.move1 )}, 7500, createjs.Ease.linear)
	        .to({x: ( $('#track_bg').width() / data.move2 )}, 8000, createjs.Ease.linear)
	        .to({x: ( $('#track_bg').width() / data.move3 )}, 8000, createjs.Ease.linear)
	        .to({x: ( $('#track_bg').width() / data.move4 )}, 5000, createjs.Ease.linear)
	        .to({x:($('#track_bg').width() / data.win_res )}, 3000, createjs.Ease.linear) // 8
	        .to({x: ($('#track_bg').width() / 2.5)}, data.speed2, createjs.Ease.linear).call(completeRun)
	    }


	})
	socket.on('dog3' , function(data){
		if (shouldStart) {

			createjs.Tween.get(dog_arr[2]['name'])
	        .to({x: ($('#track_bg').width() / data.move1 )}, 7500, createjs.Ease.linear)
	        .to({x: ( $('#track_bg').width() / data.move2 )}, 8000, createjs.Ease.linear)
	        .to({x: ( $('#track_bg').width() / data.move3 )}, 8000, createjs.Ease.linear)
	        .to({x: ( $('#track_bg').width() / data.move4 )}, 5000, createjs.Ease.linear)
	        .to({x:($('#track_bg').width() / data.win_res )}, 3000, createjs.Ease.linear) // 10
	        .to({x: ($('#track_bg').width() / 2.5 )}, data.speed3, createjs.Ease.linear).call(completeRun)
		}
	})
	socket.on('dog4' , function(data){
		if (shouldStart) {

			createjs.Tween.get(dog_arr[3]['name'])
	        .to({x: ($('#track_bg').width() / data.move1 )}, 7500, createjs.Ease.linear)
	        .to({x: ( $('#track_bg').width() / data.move2 )}, 8000, createjs.Ease.linear)
	        .to({x: ( $('#track_bg').width() / data.move3 )}, 8000, createjs.Ease.linear)
	        .to({x: ( $('#track_bg').width() / data.move4 )}, 5000, createjs.Ease.linear)
	        .to({x:($('#track_bg').width() / data.win_res )}, 3000, createjs.Ease.linear) // -6.6
	        .to({x: ($('#track_bg').width() / 2.5 )}, data.speed4, createjs.Ease.linear).call(completeRun)
		}
	})
	socket.on('dog5' , function(data){
		if (shouldStart) {

			createjs.Tween.get(dog_arr[4]['name'])
	        .to({x: ($('#track_bg').width() / data.move1 )}, 7500, createjs.Ease.linear)
	        .to({x: ( $('#track_bg').width() / data.move2 )}, 8000, createjs.Ease.linear)
	        .to({x: ( $('#track_bg').width() / data.move3 )}, 8000, createjs.Ease.linear)
	        .to({x: ( $('#track_bg').width() / data.move4 )}, 5000, createjs.Ease.linear)
	        .to({x:($('#track_bg').width() / data.win_res )}, 3000, createjs.Ease.linear) // -7
	        .to({x: ($('#track_bg').width() / 2.5 )}, data.speed5, createjs.Ease.linear).call(completeRun)
		}
	})
	socket.on('dog6' , function(data){
		if (shouldStart) {

			createjs.Tween.get(dog_arr[5]['name'])
	        .to({x: ($('#track_bg').width() / data.move1 )}, 7500, createjs.Ease.linear)
	        .to({x: ( $('#track_bg').width() / data.move2 )}, 8000, createjs.Ease.linear)
	        .to({x: ( $('#track_bg').width() / data.move3 )}, 8000, createjs.Ease.linear)
	        .to({x: ( $('#track_bg').width() / data.move4 )}, 5000, createjs.Ease.linear)
	        .to({x:($('#track_bg').width() / data.win_res )}, 3000, createjs.Ease.linear) // -7.4
	        .to({x: ($('#track_bg').width() / 2.5)},data.speed6, createjs.Ease.linear).call(completeRun)
		}
	})