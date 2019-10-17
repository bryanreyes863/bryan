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

// var screen_name1;
// var screen_name2;
// var screen_name3;
// var screen_name4;
// var screen_name5;
// var screen_name6;

// var namesss = ["skustaklee","kingbadger","abdul","Aginaya","Agimat","Alakdanesa","Alamid","Asero","Bagwis","Batang X","Batang Z","Maria Ozawa","Bryan","Tubul","kupal","tangina","malupit","shivalManyan","loooonie","mr.PEPE","RATBU","SHIVAL","DAWNLUD ANYA ?"];


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
		"src" : "assets/images/bg_track_0.jpg" ,
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
	}
	
];

loader = new createjs.LoadQueue(false);
loader.on('fileload' , handleFile);
loader.on('progress', handleProgress, this);
loader.addEventListener("complete" , loadingComplete);
loader.loadManifest(maniFest,true);


window.addEventListener("resize" , resize);


function handleProgress() {
	total = Math.round(loader.progress / 1 * 100);

	if (total == 100) {
		setTimeout(function(){

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

	dog1_name = new createjs.Text("MABOY","20px Arial","#fefefe");
	dog2_name = new createjs.Text("COWBOY", "20px Arial", "#fefefe");
	dog3_name = new createjs.Text("BUNGAL", "20px Arial", "#fefefe");
	dog4_name = new createjs.Text("ABDUL", "20px Arial", "#fefefe");
	dog5_name = new createjs.Text("LAPUK", "20px Arial", "#fefefe");
	dog6_name = new createjs.Text("AGNATS", "20px Arial", "#fefefe");

	round = new createjs.Text("ROUND", "40px Bold", "#ffbb33");
	count = new createjs.Text("00", "40px Bold", "#ffffff");
	time_count = new createjs.Text("TIME", "40px Bold", "#ffbb33");
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

	win_name1 = new createjs.Text("MABOY","40px bold","#fefefe");
	win_name2 = new createjs.Text("COWBOY","40px bold","#fefefe");
	win_name3 = new createjs.Text("BUNGAL","40px bold","#fefefe");
	win_name4 = new createjs.Text("ABDUL","40px bold","#fefefe");
	win_name5 = new createjs.Text("LAPUK","40px bold","#fefefe");
	win_name6 = new createjs.Text("AGNATS","40px bold","#fefefe");

	ranks[0]['name'] = dog1_rank;
	ranks[1]['name'] = dog2_rank;
	ranks[2]['name'] = dog3_rank;
	ranks[3]['name'] = dog4_rank;
	ranks[4]['name'] = dog5_rank;
	ranks[5]['name'] = dog6_rank;


	container = new createjs.Container();
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
		stage.addChild(container,rank,dog1_rank,dog2_rank,dog3_rank,dog4_rank,dog5_rank,dog6_rank,line,dog1_name,dog2_name,dog3_name,dog4_name,dog5_name,dog6_name,panel_arrival,flag1,flag2,flag3,flag4,flag5,flag6,win_name1,win_name2,win_name3,win_name4,win_name5,win_name6,time_bet,round,count,time_count,count_down);
		tick(); 
		resize();
	}

var speed = 1;


createjs.Ticker.addEventListener("tick", stage);
createjs.Ticker.setFPS(speed);

function tick(){
	createjs.Ticker.setFPS(60);
	resize();
	stage.update();
}


function resize(){

	var windowH =  window.innerHeight;
	var windowW = window.innerWidth;

	stage.canvas.width = $('#track_bg').width();
	stage.canvas.height = window.innerHeight - 50;



		time_bet.scaleX = (windowW - (windowW * 2.5)) / bg.image.height;
		time_bet.scaleY = (windowW - (windowW / 2.4)) / bg.image.height;
		time_bet.x = $('#track_bg').width() / 1.05;//position
		time_bet.y = windowW / 55;

		round.scaleX = round.scaleY =  (windowW - (windowW / 1.7)) / bg.image.height;
		round.x = $('#track_bg').width() / 1.17;
		round.y =  windowW / 30;

		count.scaleX = count.scaleY =  (windowW - (windowW / 1.7)) / bg.image.height;
		count.x = $('#track_bg').width() / 1.14;
		count.y =  windowW / 18;

		time_count.scaleX = time_count.scaleY =  (windowW - (windowW / 1.7)) / bg.image.height;
		time_count.x = $('#track_bg').width() / 1.15;
		time_count.y =  windowW / 13;

		count_down.scaleX = count_down.scaleY =  (windowW - (windowW / 1.7)) / bg.image.height;
		count_down.x = $('#track_bg').width() / 1.16;
		count_down.y =  windowW / 10;

		panel_arrival.scaleX = panel_arrival.scaleY =  (windowW - (windowW / 3)) / bg.image.height;
		panel_arrival.x =  $('#track_bg').width() * 2;
		panel_arrival.y = windowW / 4;

		flag1.scaleX = flag1.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
		flag1.x =  panel_arrival.x + 20;
		flag1.y = panel_arrival.y + 8;
		win_name1.x = flag1.x + 65;
		win_name1.y = flag1.y + 10;

		flag2.scaleX = flag2.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
		flag2.x =  panel_arrival.x + 20;
		flag2.y = panel_arrival.y + 62;
		win_name2.x = flag2.x + 65;
		win_name2.y = flag2.y + 10;

		flag3.scaleX = flag3.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
		flag3.x =  panel_arrival.x + 20 ;
		flag3.y = panel_arrival.y + 116;
		win_name3.x = flag3.x + 65;
		win_name3.y = flag3.y + 10;

		flag4.scaleX = flag4.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
		flag4.x =  panel_arrival.x + 20 ;
		flag4.y = panel_arrival.y + 168;
		win_name4.x = flag4.x + 65;
		win_name4.y = flag4.y + 10;

		flag5.scaleX = flag5.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
		flag5.x =  panel_arrival.x + 20;
		flag5.y = panel_arrival.y + 222;
		win_name5.x = flag5.x + 65;
		win_name5.y = flag5.y + 10;

		flag6.scaleX = flag6.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
		flag6.x =  panel_arrival.x + 20;
		flag6.y = panel_arrival.y + 278;
		win_name6.x = flag6.x + 65;
		win_name6.y = flag6.y + 10;

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
		dog3_name.x = dog3_rank.x;
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
		dog5_name.x = dog5_rank.x + 15;
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

			if (innerpos[0] == ranks[i]['position']) {
				createjs.Tween.get(ranks[i]['name'])
				.to({x: ($('#track_bg').width() / 1.38)}, 100, createjs.Ease.linear)

				createjs.Tween.get(ranks[i]['dog_name'])
				.to({x: ($('#track_bg').width() / 1.38)}, 100, createjs.Ease.linear)

			} else if (innerpos[1] == ranks[i]['position']) {
				createjs.Tween.get(ranks[i]['name'])
				.to({x: ($('#track_bg').width() / 1.63)}, 100, createjs.Ease.linear)

				createjs.Tween.get(ranks[i]['dog_name'])
				.to({x: ($('#track_bg').width() / 1.63)}, 100, createjs.Ease.linear)

			} else if (innerpos[2] == ranks[i]['position']) {
				createjs.Tween.get(ranks[i]['name'])
				.to({x: ($('#track_bg').width() / 2.01)}, 100, createjs.Ease.linear)

				createjs.Tween.get(ranks[i]['dog_name'])
				.to({x: ($('#track_bg').width() / 2.01)}, 100, createjs.Ease.linear)

			} else if (innerpos[3] == ranks[i]['position']) {
				createjs.Tween.get(ranks[i]['name'])
				.to({x: ($('#track_bg').width() / 2.7)}, 100, createjs.Ease.linear)

				createjs.Tween.get(ranks[i]['dog_name'])
				.to({x: ($('#track_bg').width() / 2.7)}, 100, createjs.Ease.linear)

			} else if (innerpos[4] == ranks[i]['position']) {
				createjs.Tween.get(ranks[i]['name'])
				.to({x: ($('#track_bg').width() / 3.98)}, 100, createjs.Ease.linear)

				createjs.Tween.get(ranks[i]['dog_name'])
				.to({x: ($('#track_bg').width() / 3.98)}, 100, createjs.Ease.linear)

			} else if (innerpos[5] == ranks[i]['position']) {
				createjs.Tween.get(ranks[i]['name'])
				.to({x: ($('#track_bg').width() / 7.5)}, 100, createjs.Ease.linear)

				createjs.Tween.get(ranks[i]['dog_name'])
				.to({x: ($('#track_bg').width() / 7.5)}, 100, createjs.Ease.linear)

			}


		}

		// console.log(rank[0]['name']['currentAnimation']);

		// createjs.Tween.get(dog_arr[]"rank")
		// .to({x: ($('#track_bg').width() / 7.5 )}, 500, createjs.Ease.linear)
	}
}


socket.on('loadDataGame', function(data){

		if (data[0].rounds < 10 ) {
			count.text = "00"+data[0].rounds;
		}else {
			count.text = ""+(data[0].rounds + 1);
		}


});

var num = 0;
var newnum;

socket.on('sec',function(seconds){
	var windowW = window.innerWidth;

	if(count_down != null){

		if (seconds < 10 ) {
			count_down.text = '00:0'+seconds;
		}else {
			count_down.text = '00:'+seconds;
		}

		if (seconds == 1) {

			runTrack(num);
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

})

function startLine(){

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

function runTrack(num){

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
		}

		if (num < 415) {
			num++;
			changeTrack(num);
		} else {

			setTimeout(function(){

				finish = true;
			},2500)


			$('#track_bg').attr("src" , "../assets/images/bg_track/bg_track_"+num+".jpg");

		}
}

	function changeTrack(num) {
		$('#track_bg').attr("src" , "../assets/images/bg_track/bg_track_"+num+".jpg");

		setTimeout(function(){
			return runTrack(num);
		},80)
	}

// function getMove(){

// 	var max = $('#track_bg').width();
// 	return (Math.random() * 4) + 1.2;
// }



	function completeRun(obj) {

		var windowW = window.innerWidth;


		if (win1 == null || win2 == null || win3 == null) {

			if (win1 == null) {
				createjs.Tween.get(panel_arrival)
				.to({x : $('#track_bg').width() * 0.85 }, 100 , createjs.Ease.easeOutExpo)

			}

			setTimeout(function(){
				spriteSheet.framerate = 0.0001;
				createjs.Ticker.paused = true;


				$('#track_bg').css('filter' , 'grayscale(100%)');
				if (win1 == null) {


					if (obj['target']['currentAnimation'] == 'dog1') {
						flag1.scaleX = flag1.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
						flag1.x = panel_arrival.x + 20 ;
						flag1.y = panel_arrival.y + 8;
						win_name1.x = flag1.x + 65;
						win_name1.y = flag1.y + 10;

					} else if (obj['target']['currentAnimation'] == 'dog2'){
						flag2.scaleX = flag2.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
						flag2.x = panel_arrival.x + 20 ;
						flag2.y = panel_arrival.y + 8;
						win_name2.x = flag2.x + 65;
						win_name2.y = flag2.y + 10;

					} else if (obj['target']['currentAnimation'] == 'dog3'){
						flag3.scaleX = flag3.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
						flag3.x = panel_arrival.x + 20 ;
						flag3.y = panel_arrival.y + 8;
						win_name3.x = flag3.x + 65;
						win_name3.y = flag3.y + 10;

					} else if (obj['target']['currentAnimation'] == 'dog4'){
						flag4.scaleX = flag4.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
						flag4.x = panel_arrival.x + 20 ;
						flag4.y = panel_arrival.y + 8;
						win_name4.x = flag4.x + 65;
						win_name4.y = flag4.y + 10;

					} else if (obj['target']['currentAnimation'] == 'dog5'){
						flag5.scaleX = flag5.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
						flag5.x = panel_arrival.x + 20 ;
						flag5.y = panel_arrival.y + 8;
						win_name5.x = flag5.x + 65;
						win_name5.y = flag5.y + 10;

					} else if (obj['target']['currentAnimation'] == 'dog6'){
						flag6.scaleX = flag6.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
						flag6.x = panel_arrival.x + 20 ;
						flag6.y = panel_arrival.y + 8;
						win_name6.x = flag6.x + 65;
						win_name6.y = flag6.y + 10;

					}

					win1 = obj['target']['currentAnimation'];

				} else if (win2 == null) {

					if (obj['target']['currentAnimation'] == 'dog1') {
						flag1.scaleX = flag1.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
						flag1.x = panel_arrival.x + 20 ;
						flag1.y = panel_arrival.y + 62;
						win_name1.x = flag1.x + 65;
						win_name1.y = flag1.y + 10;

					} else if (obj['target']['currentAnimation'] == 'dog2'){
						flag2.scaleX = flag2.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
						flag2.x = panel_arrival.x + 20 ;
						flag2.y = panel_arrival.y + 62;
						win_name2.x = flag2.x + 65;
						win_name2.y = flag2.y + 10;

					} else if (obj['target']['currentAnimation'] == 'dog3'){
						flag3.scaleX = flag3.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
						flag3.x = panel_arrival.x + 20 ;
						flag3.y = panel_arrival.y + 62;
						win_name3.x = flag3.x + 65;
						win_name3.y = flag3.y + 10;

					} else if (obj['target']['currentAnimation'] == 'dog4'){
						flag4.scaleX = flag4.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
						flag4.x = panel_arrival.x + 20 ;
						flag4.y = panel_arrival.y + 62;
						win_name4.x = flag4.x + 65;
						win_name4.y = flag4.y + 10;

					} else if (obj['target']['currentAnimation'] == 'dog5'){
						flag5.scaleX = flag5.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
						flag5.x = panel_arrival.x + 20 ;
						flag5.y = panel_arrival.y + 62;
						win_name5.x = flag5.x + 65;
						win_name5.y = flag5.y + 10;

					} else if (obj['target']['currentAnimation'] == 'dog6'){
						flag6.scaleX = flag6.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
						flag6.x = panel_arrival.x + 20 ;
						flag6.y = panel_arrival.y + 62;
						win_name6.x = flag6.x + 65;
						win_name6.y = flag6.y + 10;

					}

					win2 = obj['target']['currentAnimation'];

				} else if (win3 == null) {

					if (obj['target']['currentAnimation'] == 'dog1') {
						flag1.scaleX = flag1.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
						flag1.x = panel_arrival.x + 20 ;
						flag1.y = panel_arrival.y + 116;
						win_name1.x = flag1.x + 65;
						win_name1.y = flag1.y + 10;

					} else if (obj['target']['currentAnimation'] == 'dog2'){
						flag2.scaleX = flag2.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
						flag2.x = panel_arrival.x + 20 ;
						flag2.y = panel_arrival.y + 116;
						win_name2.x = flag2.x + 65;
						win_name2.y = flag2.y + 10;

					} else if (obj['target']['currentAnimation'] == 'dog3'){
						flag3.scaleX = flag3.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
						flag3.x = panel_arrival.x + 20 ;
						flag3.y = panel_arrival.y + 116;
						win_name3.x = flag3.x + 65;
						win_name3.y = flag3.y + 10;

					} else if (obj['target']['currentAnimation'] == 'dog4'){
						flag4.scaleX = flag4.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
						flag4.x = panel_arrival.x + 20 ;
						flag4.y = panel_arrival.y + 116;
						win_name4.x = flag4.x + 65;
						win_name4.y = flag4.y + 10;

					} else if (obj['target']['currentAnimation'] == 'dog5'){
						flag5.scaleX = flag5.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
						flag5.x = panel_arrival.x + 20 ;
						flag5.y = panel_arrival.y + 116;
						win_name5.x = flag5.x + 65;
						win_name5.y = flag5.y + 10;

					} else if (obj['target']['currentAnimation'] == 'dog6'){
						flag6.scaleX = flag6.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
						flag6.x = panel_arrival.x + 20 ;
						flag6.y = panel_arrival.y + 116;
						win_name6.x = flag6.x + 65;
						win_name6.y = flag6.y + 10;

					}

					win3 = obj['target']['currentAnimation'];

				}

				setTimeout(function(){
					createjs.Ticker.paused = false;
					spriteSheet.framerate = 35;
					$('#track_bg').css('filter' , 'grayscale(0%)');
					createjs.Tween.get(obj['target'])
					.to({x: (obj['target']['x'] + ($('#track_bg').width() * 1.2))}, 1500, createjs.Ease.linear)
				},1000)

			},100)
		} else {
			createjs.Tween.get(obj['target'])
			.to({x: (obj['target']['x'] + ($('#track_bg').width() * 1.2))}, 1500, createjs.Ease.linear)

			if (win4 == null) {

				if (obj['target']['currentAnimation'] == 'dog1') {
					flag1.scaleX = flag1.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
					flag1.x = panel_arrival.x + 20 ;
					flag1.y = panel_arrival.y + 168;
					win_name1.x = flag1.x + 65;
					win_name1.y = flag1.y + 10;

				} else if (obj['target']['currentAnimation'] == 'dog2'){
					flag2.scaleX = flag2.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
					flag2.x = panel_arrival.x + 20 ;
					flag2.y = panel_arrival.y + 168;
					win_name2.x = flag2.x + 65;
					win_name2.y = flag2.y + 10;

				} else if (obj['target']['currentAnimation'] == 'dog3'){
					flag3.scaleX = flag3.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
					flag3.x = panel_arrival.x + 20 ;
					flag3.y = panel_arrival.y + 168;
					win_name3.x = flag3.x + 65;
					win_name3.y = flag3.y + 10;

				} else if (obj['target']['currentAnimation'] == 'dog4'){
					flag4.scaleX = flag4.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
					flag4.x = panel_arrival.x + 20 ;
					flag4.y = panel_arrival.y + 168;
					win_name4.x = flag4.x + 65;
					win_name4.y = flag4.y + 10;

				} else if (obj['target']['currentAnimation'] == 'dog5'){
					flag5.scaleX = flag5.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
					flag5.x = panel_arrival.x + 20 ;
					flag5.y = panel_arrival.y + 168;
					win_name5.x = flag5.x + 65;
					win_name5.y = flag5.y + 10;

				} else if (obj['target']['currentAnimation'] == 'dog6'){
					flag6.scaleX = flag6.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
					flag6.x = panel_arrival.x + 20 ;
					flag6.y = panel_arrival.y + 168;
					win_name6.x = flag6.x + 65;
					win_name6.y = flag6.y + 10;

				}

				win4 = obj['target']['currentAnimation'];

			} else if (win5 == null) {


				if (obj['target']['currentAnimation'] == 'dog1') {
					flag1.scaleX = flag1.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
					flag1.x = panel_arrival.x + 20 ;
					flag1.y = panel_arrival.y + 222;
					win_name1.x = flag1.x + 65;
					win_name1.y = flag1.y + 10;

				} else if (obj['target']['currentAnimation'] == 'dog2'){
					flag2.scaleX = flag2.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
					flag2.x = panel_arrival.x + 20 ;
					flag2.y = panel_arrival.y + 222;
					win_name2.x = flag2.x + 65;
					win_name2.y = flag2.y + 10;

				} else if (obj['target']['currentAnimation'] == 'dog3'){
					flag3.scaleX = flag3.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
					flag3.x = panel_arrival.x + 20 ;
					flag3.y = panel_arrival.y + 222;
					win_name3.x = flag3.x + 65;
					win_name3.y = flag3.y + 10;

				} else if (obj['target']['currentAnimation'] == 'dog4'){
					flag4.scaleX = flag4.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
					flag4.x = panel_arrival.x + 20 ;
					flag4.y = panel_arrival.y + 222;
					win_name4.x = flag4.x + 65;
					win_name4.y = flag4.y + 10;

				} else if (obj['target']['currentAnimation'] == 'dog5'){
					flag5.scaleX = flag5.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
					flag5.x = panel_arrival.x + 20 ;
					flag5.y = panel_arrival.y + 222;
					win_name5.x = flag5.x + 65;
					win_name5.y = flag5.y + 10;

				} else if (obj['target']['currentAnimation'] == 'dog6'){
					flag6.scaleX = flag6.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
					flag6.x = panel_arrival.x + 20 ;
					flag6.y = panel_arrival.y + 222;
					win_name6.x = flag6.x + 65;
					win_name6.y = flag6.y + 10;

				}

				win5 = obj['target']['currentAnimation'];

			} else if (win6 == null) {

				if (obj['target']['currentAnimation'] == 'dog1') {
					flag1.scaleX = flag1.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
					flag1.x = panel_arrival.x + 20 ;
					flag1.y = panel_arrival.y + 278;
					win_name1.x = flag1.x + 65;
					win_name1.y = flag1.y + 10;

				} else if (obj['target']['currentAnimation'] == 'dog2'){
					flag2.scaleX = flag2.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
					flag2.x = panel_arrival.x + 20 ;
					flag2.y = panel_arrival.y + 278;
					win_name2.x = flag2.x + 65;
					win_name2.y = flag2.y + 10;

				} else if (obj['target']['currentAnimation'] == 'dog3'){
					flag3.scaleX = flag3.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
					flag3.x = panel_arrival.x + 20 ;
					flag3.y = panel_arrival.y + 278;
					win_name3.x = flag3.x + 65;
					win_name3.y = flag3.y + 10;

				} else if (obj['target']['currentAnimation'] == 'dog4'){
					flag4.scaleX = flag4.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
					flag4.x = panel_arrival.x + 20 ;
					flag4.y = panel_arrival.y + 278;
					win_name4.x = flag4.x + 65;
					win_name4.y = flag4.y + 10;

				} else if (obj['target']['currentAnimation'] == 'dog5'){
					flag5.scaleX = flag5.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
					flag5.x = panel_arrival.x + 20 ;
					flag5.y = panel_arrival.y + 278;
					win_name5.x = flag5.x + 65;
					win_name5.y = flag5.y + 10;

				} else if (obj['target']['currentAnimation'] == 'dog6'){
					flag6.scaleX = flag6.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
					flag6.x = panel_arrival.x + 20 ;
					flag6.y = panel_arrival.y + 278;
					win_name6.x = flag6.x + 65;
					win_name6.y = flag6.y + 10;

				}

				win6 = obj['target']['currentAnimation'];
			}


		}



	}



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

		var getRanking = setInterval(function(){
			getRank();
		},1500);

		win1 = null;
		win2 = null;
		win3 = null;
		win4 = null;
		win5 = null;
		win6 = null;
    
	})

	socket.on('dog1' , function(data){
	console.log(data)

		createjs.Tween.get(dog_arr[0][ 'name'])
	        .to({x: ($('#track_bg').width() / data.move1 )}, 7500, createjs.Ease.linear)
	        .to({x: ( $('#track_bg').width() / data.move2 )}, 8000, createjs.Ease.linear)
	        .to({x: ( $('#track_bg').width() / data.move3 )}, 8000, createjs.Ease.linear)
	        .to({x: ( $('#track_bg').width() / data.move4 )}, 5000, createjs.Ease.linear)
	        .to({x:($('#track_bg').width() / data.win_res )}, 3000, createjs.Ease.linear) // 4
	        .to({x: ($('#track_bg').width() / 2.5)}, data.speed1, createjs.Ease.linear).call(completeRun)
	})


	socket.on('dog2' , function(data){
    
		createjs.Tween.get(dog_arr[1]['name'])
        .to({x: ($('#track_bg').width() / data.move1 )}, 7500, createjs.Ease.linear)
        .to({x: ( $('#track_bg').width() / data.move2 )}, 8000, createjs.Ease.linear)
        .to({x: ( $('#track_bg').width() / data.move3 )}, 8000, createjs.Ease.linear)
        .to({x: ( $('#track_bg').width() / data.move4 )}, 5000, createjs.Ease.linear)
        .to({x:($('#track_bg').width() / data.win_res )}, 3000, createjs.Ease.linear) // 8
        .to({x: ($('#track_bg').width() / 2.5)}, data.speed2, createjs.Ease.linear).call(completeRun)


	})
	socket.on('dog3' , function(data){

		createjs.Tween.get(dog_arr[2]['name'])
        .to({x: ($('#track_bg').width() / data.move1 )}, 7500, createjs.Ease.linear)
        .to({x: ( $('#track_bg').width() / data.move2 )}, 8000, createjs.Ease.linear)
        .to({x: ( $('#track_bg').width() / data.move3 )}, 8000, createjs.Ease.linear)
        .to({x: ( $('#track_bg').width() / data.move4 )}, 5000, createjs.Ease.linear)
        .to({x:($('#track_bg').width() / data.win_res )}, 3000, createjs.Ease.linear) // 10
        .to({x: ($('#track_bg').width() / 2.5 )}, data.speed3, createjs.Ease.linear).call(completeRun)
	})
	socket.on('dog4' , function(data){

		createjs.Tween.get(dog_arr[3]['name'])
        .to({x: ($('#track_bg').width() / data.move1 )}, 7500, createjs.Ease.linear)
        .to({x: ( $('#track_bg').width() / data.move2 )}, 8000, createjs.Ease.linear)
        .to({x: ( $('#track_bg').width() / data.move3 )}, 8000, createjs.Ease.linear)
        .to({x: ( $('#track_bg').width() / data.move4 )}, 5000, createjs.Ease.linear)
        .to({x:($('#track_bg').width() / data.win_res )}, 3000, createjs.Ease.linear) // -6.6
        .to({x: ($('#track_bg').width() / 2.5 )}, data.speed4, createjs.Ease.linear).call(completeRun)
	})
	socket.on('dog5' , function(data){

		createjs.Tween.get(dog_arr[4]['name'])
        .to({x: ($('#track_bg').width() / data.move1 )}, 7500, createjs.Ease.linear)
        .to({x: ( $('#track_bg').width() / data.move2 )}, 8000, createjs.Ease.linear)
        .to({x: ( $('#track_bg').width() / data.move3 )}, 8000, createjs.Ease.linear)
        .to({x: ( $('#track_bg').width() / data.move4 )}, 5000, createjs.Ease.linear)
        .to({x:($('#track_bg').width() / data.win_res )}, 3000, createjs.Ease.linear) // -7
        .to({x: ($('#track_bg').width() / 2.5 )}, data.speed5, createjs.Ease.linear).call(completeRun)
	})
	socket.on('dog6' , function(data){
		
		createjs.Tween.get(dog_arr[5]['name'])
        .to({x: ($('#track_bg').width() / data.move1 )}, 7500, createjs.Ease.linear)
        .to({x: ( $('#track_bg').width() / data.move2 )}, 8000, createjs.Ease.linear)
        .to({x: ( $('#track_bg').width() / data.move3 )}, 8000, createjs.Ease.linear)
        .to({x: ( $('#track_bg').width() / data.move4 )}, 5000, createjs.Ease.linear)
        .to({x:($('#track_bg').width() / data.win_res )}, 3000, createjs.Ease.linear) // -7.4
        .to({x: ($('#track_bg').width() / 2.5)},data.speed6, createjs.Ease.linear).call(completeRun)
	})