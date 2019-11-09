var socket = io();

var already = false;

var assets = [];
var spriteSheet;
var container;

var rounds;
var first;
var second;
var third;
var round_count;
var dogs_text;

var object_con;

stage = new createjs.Stage('tableCanvas');

var arr_resize = [];

var dog_res = [2.4,1.64,1.26];

var pos_dog = [15,5.4,3.3,2.4,1.9,1.56];

var rounds_y = [10,4.7,3,2.25,1.78,1.48];

var dog_place_width = [7,5.4,4.4,3.7,3.2,2.82];

var dog_place_arr = [11,4.98,3.1,2.3,1.81,1.5];


maniFest = [
	{
		"src" : "assets/images/bg_table.jpg" ,
		"id" : "game_bg"
	},

	{
		"src" : "assets/images/tableres.png" ,
		"id" : "table" 
	},

	{
		"src" : "assets/images/dog1.png" ,
		"id" : "dog1" 
	},

	{
		"src" : "assets/images/dog2.png" ,
		"id" : "dog2" 
	},

	{
		"src" : "assets/images/dog3.png" ,
		"id" : "dog3" 
	},

	{
		"src" : "assets/images/dog4.png" ,
		"id" : "dog4" 
	},

	{
		"src" : "assets/images/dog5.png" ,
		"id" : "dog5" 
	},

	{
		"src" : "assets/images/dog6.png" ,
		"id" : "dog6" 
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
loader.addEventListener("complete" , loadingComplete);
loader.loadManifest(maniFest,true);


window.addEventListener("resize" , resize);


function handleFile(event){
	assets.push(event);
}


function loadingComplete(){

	stage.canvas.width = $('#table_bg').width();
	stage.canvas.height =  window.innerHeight - 50;

	object_con = new createjs.Container();

	bg = new createjs.Bitmap(loader.getResult("game_bg"));

	dog_place1 = new createjs.Bitmap(loader.getResult("flag1"));
	dog_place2 = new createjs.Bitmap(loader.getResult("flag2"));
	dog_place3 = new createjs.Bitmap(loader.getResult("flag3"));
	dog_place4 = new createjs.Bitmap(loader.getResult("flag4"));
	dog_place5 = new createjs.Bitmap(loader.getResult("flag5"));
	dog_place6 = new createjs.Bitmap(loader.getResult("flag6"));

	res_dog_1 = new createjs.Bitmap(loader.getResult("dog1"));
	res_dog_2 = new createjs.Bitmap(loader.getResult("dog2"));
	res_dog_3 = new createjs.Bitmap(loader.getResult("dog3"));
	res_dog_4 = new createjs.Bitmap(loader.getResult("dog4"));
	res_dog_5 = new createjs.Bitmap(loader.getResult("dog5"));
	res_dog_6 = new createjs.Bitmap(loader.getResult("dog6"));


	tableres = new createjs.Bitmap(loader.getResult("table"));

	dogs_text = new createjs.Text("DOG-SEQUENCE", "bold 15px Comic Sans", "#fefefe");
	round_count = new createjs.Text("00", "20px Arial", "#fefefe");
	rounds = new createjs.Text("ROUNDS", "bold 15px Comic Sans", "#fefefe");
	first = new createjs.Text("1st", "bold 40px Impact", "#ffbb33");
	second = new createjs.Text("2nd", "bold 40px Impact", "#ffbb33");
	third = new createjs.Text("3rd", "bold 40px Impact", "#ffbb33");


	stage.addChild(tableres,first,second,third,rounds,round_count,res_dog_1,res_dog_2,res_dog_3,res_dog_4,res_dog_5,res_dog_6,dog_place1,dog_place2,dog_place3,dog_place4,dog_place5,dog_place6,dogs_text,object_con);
	resize();
	already = true;

	socket.emit('newVisitors');


}

createjs.Ticker.addEventListener("tick", stage);

function tick(){
	createjs.Ticker.setFPS(60);
	resize();
	stage.update();
}

function resize(){

	var windowH =  window.innerHeight;
	var windowW = window.innerWidth;
	var arr_length = arr_resize.length;

	stage.canvas.width = windowW;

	for(i = 0; i < arr_length; i++){


		arr_resize[i]['rounds'].y = windowW / arr_resize[i]['roundsy']
		arr_resize[i]['rounds'].x = $('#table_bg').width() / 25;
		arr_resize[i]['rounds'].scaleX = (windowW - (windowW / 20)) / bg.image.height * 1.5;
		arr_resize[i]['rounds'].scaleY = (windowW - (windowW / 20)) / bg.image.height * 1.05;

		arr_resize[i]['winres1'].x = $('#table_bg').width() / arr_resize[i]['win_res1x']
		arr_resize[i]['winres1'].y = windowW / arr_resize[i]['win_resy']
		arr_resize[i]['winres2'].x = $('#table_bg').width() / arr_resize[i]['win_res2x']
		arr_resize[i]['winres2'].y = windowW / arr_resize[i]['win_resy']
		arr_resize[i]['winres3'].x = $('#table_bg').width() / arr_resize[i]['win_res3x']
		arr_resize[i]['winres3'].y = windowW / arr_resize[i]['win_resy']
		arr_resize[i]['run1'].x = $('#table_bg').width() / arr_resize[i]['run1x']
		arr_resize[i]['run1'].y = windowW / arr_resize[i]['runy']
		arr_resize[i]['run2'].x = $('#table_bg').width() / arr_resize[i]['run2x']
		arr_resize[i]['run2'].y = windowW / arr_resize[i]['runy']
		arr_resize[i]['run3'].x = $('#table_bg').width() / arr_resize[i]['run3x']
		arr_resize[i]['run3'].y = windowW / arr_resize[i]['runy']
		arr_resize[i]['run4'].x = $('#table_bg').width() / arr_resize[i]['run4x']
		arr_resize[i]['run4'].y = windowW / arr_resize[i]['runy']
		arr_resize[i]['run5'].x = $('#table_bg').width() / arr_resize[i]['run5x']
		arr_resize[i]['run5'].y = windowW / arr_resize[i]['runy']
		arr_resize[i]['run6'].x = $('#table_bg').width() / arr_resize[i]['run6x']
		arr_resize[i]['run6'].y = windowW / arr_resize[i]['runy']

		arr_resize[i]['run6'].scaleX = arr_resize[i]['run6'].scaleY = (windowW - (windowW / 20)) / bg.image.height * 0.6;
		arr_resize[i]['run5'].scaleX = arr_resize[i]['run5'].scaleY = (windowW - (windowW / 20)) / bg.image.height * 0.6;
		arr_resize[i]['run4'].scaleX = arr_resize[i]['run4'].scaleY = (windowW - (windowW / 20)) / bg.image.height * 0.6;
		arr_resize[i]['run3'].scaleX = arr_resize[i]['run3'].scaleY = (windowW - (windowW / 20)) / bg.image.height * 0.6;
		arr_resize[i]['run2'].scaleX = arr_resize[i]['run2'].scaleY = (windowW - (windowW / 20)) / bg.image.height * 0.6;
		arr_resize[i]['run1'].scaleX = arr_resize[i]['run1'].scaleY = (windowW - (windowW / 20)) / bg.image.height * 0.6;

		arr_resize[i]['winres1'].scaleX = arr_resize[i]['winres1'].scaleY =	(windowW - (windowW / 20)) / bg.image.height * 0.6;
		arr_resize[i]['winres2'].scaleX = arr_resize[i]['winres2'].scaleY = (windowW - (windowW / 20)) / bg.image.height * 0.6;
		arr_resize[i]['winres3'].scaleX = arr_resize[i]['winres3'].scaleY =	(windowW - (windowW / 20)) / bg.image.height * 0.6;
		

	}

	stage.canvas.height = $('#table_bg').height();

	tableres.scaleX = (windowW - (windowW / 20)) / bg.image.height * 1.13;
	tableres.scaleY = (windowW - (windowW / 20)) / bg.image.height * 1.4;

	dog_place1.scaleX = (windowW - (windowW / 20)) / bg.image.height * 0.6;
	dog_place1.scaleY = (windowW - (windowW / 20)) / bg.image.height * 0.6;
	dog_place1.x = $('#table_bg').width() / 7;//position
	dog_place1.y = windowW / 11;

	dog_place2.scaleX = (windowW - (windowW / 20)) / bg.image.height * 0.6;
	dog_place2.scaleY = (windowW - (windowW / 20)) / bg.image.height * 0.6;
	dog_place2.x = $('#table_bg').width() / 5.4;//position
	dog_place2.y = windowW / 11;

	dog_place3.scaleX = (windowW - (windowW / 20)) / bg.image.height * 0.6;
	dog_place3.scaleY = (windowW - (windowW / 20)) / bg.image.height * 0.6;
	dog_place3.x = $('#table_bg').width() / 4.4;//position
	dog_place3.y = windowW / 11;

	dog_place4.scaleX = (windowW - (windowW / 20)) / bg.image.height * 0.6;
	dog_place4.scaleY = (windowW - (windowW / 20)) / bg.image.height * 0.6;
	dog_place4.x = $('#table_bg').width() / 3.7;//position
	dog_place4.y = windowW / 11;

	dog_place5.scaleX = (windowW - (windowW / 20)) / bg.image.height * 0.6;
	dog_place5.scaleY = (windowW - (windowW / 20)) / bg.image.height * 0.6;
	dog_place5.x = $('#table_bg').width() / 3.2;//position
	dog_place5.y = windowW / 11;

	dog_place6.scaleX = (windowW - (windowW / 20)) / bg.image.height * 0.6;
	dog_place6.scaleY = (windowW - (windowW / 20)) / bg.image.height * 0.6;
	dog_place6.x = $('#table_bg').width() / 2.82;//position
	dog_place6.y = windowW / 11;

	round_count.scaleX = (windowW - (windowW / 20)) / bg.image.height * 1.5;
	round_count.scaleY = (windowW - (windowW / 20)) / bg.image.height * 1.05;
	round_count.x = $('#table_bg').width() / 25;//position
	round_count.y = windowW / 10;
	round_count.alpha = 0;

	rounds.scaleX = (windowW - (windowW / 20)) / bg.image.height * 1.5;
	rounds.scaleY = (windowW - (windowW / 20)) / bg.image.height * 1.8;
	rounds.x = $('#table_bg').width() / 25;//position
	rounds.y = windowW / 50;

	dogs_text.scaleX = (windowW - (windowW / 20)) / bg.image.height * 1.5;
	dogs_text.scaleY = (windowW - (windowW / 20)) / bg.image.height * 1.8;
	dogs_text.x = $('#table_bg').width() / 5.5;//position
	dogs_text.y = windowW / 50;

	first.scaleX = (windowW - (windowW / 20)) / bg.image.height * 1.5;
	first.scaleY = (windowW - (windowW / 20)) / bg.image.height * 1.05;
	first.x = $('#table_bg').width() / 2.2;//position
	first.y = windowW / 150;

	second.scaleX = (windowW - (windowW / 20)) / bg.image.height * 1.5;
	second.scaleY = (windowW - (windowW / 20)) / bg.image.height * 1.05;
	second.x = $('#table_bg').width() / 1.55;//position
	second.y = windowW / 150;

	third.scaleX = (windowW - (windowW / 20)) / bg.image.height * 1.5;
	third.scaleY = (windowW - (windowW / 20)) / bg.image.height * 1.05;
	third.x = $('#table_bg').width() / 1.2;//position
	third.y = windowW / 150;

	res_dog_1.scaleX = (windowW - (windowW / 20)) / bg.image.height * 0.6;
	res_dog_1.scaleY = (windowW - (windowW / 20)) / bg.image.height * 0.6;
	res_dog_1.x = $('#table_bg').width() / 2.4;//position
	res_dog_1.y = windowW / 15;
	res_dog_1.alpha = 0;

	res_dog_2.scaleX = (windowW - (windowW / 20)) / bg.image.height * 0.6;
	res_dog_2.scaleY = (windowW - (windowW / 20)) / bg.image.height * 0.6;
	res_dog_2.x = $('#table_bg').width() / 2.4;//position
	res_dog_2.y = windowW / 15;
	res_dog_2.alpha = 0;

	res_dog_3.scaleX = (windowW - (windowW / 20)) / bg.image.height * 0.6;
	res_dog_3.scaleY = (windowW - (windowW / 20)) / bg.image.height * 0.6;
	res_dog_3.x = $('#table_bg').width() / 1.26;//position
	res_dog_3.y = windowW / 15;
	res_dog_3.alpha = 0;

	res_dog_4.scaleX = (windowW - (windowW / 20)) / bg.image.height * 0.6;
	res_dog_4.scaleY = (windowW - (windowW / 20)) / bg.image.height * 0.6;
	res_dog_4.x = $('#table_bg').width() / 1.64;;//position
	res_dog_4.y = windowW / 15;
	res_dog_4.alpha = 0;

	res_dog_5.scaleX = (windowW - (windowW / 20)) / bg.image.height * 0.6;
	res_dog_5.scaleY = (windowW - (windowW / 20)) / bg.image.height * 0.6;
	res_dog_5.x = $('#table_bg').width() / 2.4;//position
	res_dog_5.y = windowW / 15;
	res_dog_5.alpha = 0;

	res_dog_6.scaleX = (windowW - (windowW / 20)) / bg.image.height * 0.6;
	res_dog_6.scaleY = (windowW - (windowW / 20)) / bg.image.height * 0.6;
	res_dog_6.x = $('#table_bg').width() / 2.4;//position
	res_dog_6.y = windowW / 5.4;
	res_dog_6.alpha = 0;

}

socket.on('loadDataGame' , function(data){

	object_con.removeAllChildren();

		if (already == true) {

			if (data.length == 1) {

				//result 1

				gameresult(data[0],0); 

			} else if (data.length == 2) {
				//result2

				gameresult(data[1],1);

			} else if (data.length == 3) {
				//result3

				gameresult(data[2],2);

			} else if (data.length == 4) {
				//result4

				gameresult(data[3],3);
				
			} else if (data.length == 5) {
				//result5

				gameresult(data[4],4);

			} else if (data.length == 6) {
				//result6

				gameresult(data[0],0);
				gameresult(data[1],1);
				gameresult(data[2],2);
				gameresult(data[3],3);
				gameresult(data[4],4);
				gameresult(data[5],5);
			}

		}


})


function gameresult(result,num){

	var windowW = window.innerWidth;
	var round

	var win_first;
	var win_second;
	var win_third;

	var run1;
	var run2;
	var run3;
	var run4;
	var run5;
	var run6;

		if (result['first_place'] == 'dog1') {

			run1 = dog_place1.clone();
			run1.x = $('#table_bg').width() / dog_place_width[0];
			run1.y = windowW / dog_place_arr[num];

			win_first = res_dog_1.clone();
			win_first.x = $('#table_bg').width() / dog_res[0]
			win_first.y = windowW / pos_dog[num];

		} else if (result['first_place'] == 'dog2') {

			run1 = dog_place2.clone();
			run1.x = $('#table_bg').width() / dog_place_width[0];
			run1.y = windowW / dog_place_arr[num];

			win_first = res_dog_2.clone();
			win_first.x = $('#table_bg').width() / dog_res[0]
			win_first.y = windowW / pos_dog[num];


		} else if (result['first_place'] == 'dog3') {

			run1 = dog_place3.clone();
			run1.x = $('#table_bg').width() / dog_place_width[0];
			run1.y = windowW / dog_place_arr[num];

			win_first = res_dog_3.clone();
			win_first.x = $('#table_bg').width() / dog_res[0]
			win_first.y = windowW / pos_dog[num];

		} else if (result['first_place'] == 'dog4') {

			run1 = dog_place4.clone();
			run1.x = $('#table_bg').width() / dog_place_width[0];
			run1.y = windowW / dog_place_arr[num];

			win_first = res_dog_4.clone();
			win_first.x = $('#table_bg').width() / dog_res[0]
			win_first.y = windowW / pos_dog[num];


		} else if (result['first_place'] == 'dog5') {

			run1 = dog_place5.clone();
			run1.x = $('#table_bg').width() / dog_place_width[0];
			run1.y = windowW / dog_place_arr[num];

			win_first = res_dog_5.clone();
			win_first.x = $('#table_bg').width() / dog_res[0]
			win_first.y = windowW / pos_dog[num];


		} else if (result['first_place'] == 'dog6') {

			run1 = dog_place6.clone();
			run1.x = $('#table_bg').width() / dog_place_width[0];
			run1.y = windowW / dog_place_arr[num];

			win_first = res_dog_6.clone();
			win_first.x = $('#table_bg').width() / dog_res[0]
			win_first.y = windowW / pos_dog[num];


		}

		//second_place

		if (result['second_place'] == 'dog1') {

			run2 = dog_place1.clone();
			run2.x = $('#table_bg').width() / dog_place_width[1];
			run2.y = windowW / dog_place_arr[num];

			win_second = res_dog_1.clone();
			win_second.x = $('#table_bg').width() / dog_res[1]
			win_second.y = windowW / pos_dog[num];

		} else if (result['second_place'] == 'dog2') {

			run2 = dog_place2.clone();
			run2.x = $('#table_bg').width() / dog_place_width[1];
			run2.y = windowW / dog_place_arr[num];


			win_second = res_dog_2.clone();
			win_second.x = $('#table_bg').width() / dog_res[1]
			win_second.y = windowW / pos_dog[num];

		} else if (result['second_place'] == 'dog3') {

			run2 = dog_place3.clone();
			run2.x = $('#table_bg').width() / dog_place_width[1];
			run2.y = windowW / dog_place_arr[num];


			win_second = res_dog_3.clone();
			win_second.x = $('#table_bg').width() / dog_res[1]
			win_second.y = windowW / pos_dog[num];

		} else if (result['second_place'] == 'dog4') {

			run2 = dog_place4.clone();
			run2.x = $('#table_bg').width() / dog_place_width[1];
			run2.y = windowW / dog_place_arr[num];


			win_second = res_dog_4.clone();
			win_second.x = $('#table_bg').width() / dog_res[1]
			win_second.y = windowW / pos_dog[num];

		} else if (result['second_place'] == 'dog5') {

			run2 = dog_place5.clone();
			run2.x = $('#table_bg').width() / dog_place_width[1];
			run2.y = windowW / dog_place_arr[num];


			win_second = res_dog_5.clone();
			win_second.x = $('#table_bg').width() / dog_res[1]
			win_second.y = windowW / pos_dog[num];


		} else if (result['second_place'] == 'dog6') {

			run2 = dog_place6.clone();
			run2.x = $('#table_bg').width() / dog_place_width[1];
			run2.y = windowW / dog_place_arr[num];

			win_second = res_dog_6.clone();
			win_second.x = $('#table_bg').width() / dog_res[1]
			win_second.y = windowW / pos_dog[num];

		} 

		//third_place
		if (result['third_place'] == 'dog1') {

			run3 = dog_place1.clone();
			run3.x = $('#table_bg').width() / dog_place_width[2];
			run3.y = windowW / dog_place_arr[num];

			win_third = res_dog_1.clone();
			win_third.x = $('#table_bg').width() / dog_res[2]
			win_third.y = windowW / pos_dog[num];

		} else if (result['third_place'] == 'dog2') {

			run3 = dog_place2.clone();
			run3.x = $('#table_bg').width() / dog_place_width[2];
			run3.y = windowW / dog_place_arr[num];

			win_third = res_dog_2.clone();
			win_third.x = $('#table_bg').width() / dog_res[2]
			win_third.y = windowW / pos_dog[num];

		} else if (result['third_place'] == 'dog3') {

			run3 = dog_place3.clone();
			run3.x = $('#table_bg').width() / dog_place_width[2];
			run3.y = windowW / dog_place_arr[num];

			win_third = res_dog_3.clone();
			win_third.x = $('#table_bg').width() / dog_res[2]
			win_third.y = windowW / pos_dog[num];

		} else if (result['third_place'] == 'dog4') {

			run3 = dog_place4.clone();
			run3.x = $('#table_bg').width() / dog_place_width[2];
			run3.y = windowW / dog_place_arr[num];

			win_third = res_dog_4.clone();
			win_third.x = $('#table_bg').width() / dog_res[2]
			win_third.y = windowW / pos_dog[num];

		} else if (result['third_place'] == 'dog5') {

			run3 = dog_place5.clone();
			run3.x = $('#table_bg').width() / dog_place_width[2];
			run3.y = windowW / dog_place_arr[num];

			win_third = res_dog_5.clone();
			win_third.x = $('#table_bg').width() / dog_res[2]
			win_third.y = windowW / pos_dog[num];

		} else if (result['third_place'] == 'dog6') {

			run3 = dog_place6.clone();
			run3.x = $('#table_bg').width() / dog_place_width[2];
			run3.y = windowW / dog_place_arr[num];

			win_third = res_dog_6.clone();
			win_third.x = $('#table_bg').width() / dog_res[2]
			win_third.y = windowW / pos_dog[num];

		} 

		//fourth_place

		if (result['fourth_place'] == 'dog1') {

			run4 = dog_place1.clone();
			run4.x = $('#table_bg').width() / dog_place_width[3];
			run4.y = windowW / dog_place_arr[num];

		} else if (result['fourth_place'] == 'dog2') {

			run4 = dog_place2.clone();
			run4.x = $('#table_bg').width() / dog_place_width[3];
			run4.y = windowW / dog_place_arr[num];

		} else if (result['fourth_place'] == 'dog3') {

			run4 = dog_place3.clone();
			run4.x = $('#table_bg').width() / dog_place_width[3];
			run4.y = windowW / dog_place_arr[num];

		} else if (result['fourth_place'] == 'dog4') {

			run4 = dog_place4.clone();
			run4.x = $('#table_bg').width() / dog_place_width[3];
			run4.y = windowW / dog_place_arr[num];

		} else if (result['fourth_place'] == 'dog5') {

			run4 = dog_place5.clone();
			run4.x = $('#table_bg').width() / dog_place_width[3];
			run4.y = windowW / dog_place_arr[num];

		} else if (result['fourth_place'] == 'dog6') {

			run4 = dog_place6.clone();
			run4.x = $('#table_bg').width() / dog_place_width[3];
			run4.y = windowW / dog_place_arr[num];

		} 

		//5th_place

		if (result['fifth_place'] == 'dog1') {

			run5 = dog_place1.clone();
			run5.x = $('#table_bg').width() / dog_place_width[4];
			run5.y = windowW / dog_place_arr[num];

		} else if (result['fifth_place'] == 'dog2') {

			run5 = dog_place2.clone();
			run5.x = $('#table_bg').width() / dog_place_width[4];
			run5.y = windowW / dog_place_arr[num];

		} else if (result['fifth_place'] == 'dog3') {

			run5 = dog_place3.clone();
			run5.x = $('#table_bg').width() / dog_place_width[4];
			run5.y = windowW / dog_place_arr[num];

		} else if (result['fifth_place'] == 'dog4') {

			run5 = dog_place4.clone();
			run5.x = $('#table_bg').width() / dog_place_width[4];
			run5.y = windowW / dog_place_arr[num];

		} else if (result['fifth_place'] == 'dog5') {

			run5 = dog_place5.clone();
			run5.x = $('#table_bg').width() / dog_place_width[4];
			run5.y = windowW / dog_place_arr[num];

		} else if (result['fifth_place'] == 'dog6') {

			run5 = dog_place6.clone();
			run5.x = $('#table_bg').width() / dog_place_width[4];
			run5.y = windowW / dog_place_arr[num];

		} 

		//6th place

		if (result['sixth_place'] == 'dog1') {

			run6 = dog_place1.clone();
			run6.x = $('#table_bg').width() / dog_place_width[5];
			run6.y = windowW / dog_place_arr[num];

		} else if (result['sixth_place'] == 'dog2') {

			run6 = dog_place2.clone();
			run6.x = $('#table_bg').width() / dog_place_width[5];
			run6.y = windowW / dog_place_arr[num];

		} else if (result['sixth_place'] == 'dog3') {

			run6 = dog_place3.clone();
			run6.x = $('#table_bg').width() / dog_place_width[5];
			run6.y = windowW / dog_place_arr[num];

		} else if (result['sixth_place'] == 'dog4') {

			run6 = dog_place4.clone(
				);
			run6.x = $('#table_bg').width() / dog_place_width[5];
			run6.y = windowW / dog_place_arr[num];

		} else if (result['sixth_place'] == 'dog5') {

			run6 = dog_place5.clone();
			run6.x = $('#table_bg').width() / dog_place_width[5];
			run6.y = windowW / dog_place_arr[num];

		} else if (result['sixth_place'] == 'dog6') {

			run6 = dog_place6.clone();
			run6.x = $('#table_bg').width() / dog_place_width[5];
			run6.y = windowW / dog_place_arr[num];

		}

		var showround = round_count.clone();

		if (win_first) {
		 	win_first.alpha = 1;
		}
		if (win_second) {

		 win_second.alpha = 1;
		}
		if (win_third) {

		 win_third.alpha = 1;
		}


		showround.alpha = 1;
		showround.y = windowW / dog_place_arr[num];
		showround.text = ""+result.rounds;

		var obj = {

			'rounds' : showround,
			'roundsy' : dog_place_arr[num],
			'winres1' : win_first,
			'winres2' : win_second,
			'winres3' : win_third,
			'win_res1x' : dog_res[0],
			'win_res2x' : dog_res[1],
			'win_res3x' : dog_res[2],
			'win_resy' : pos_dog[num],

			'run1' : run1,
			'run2' : run2,
			'run3' : run3,
			'run4' : run4,
			'run5' : run5,
			'run6' : run6,

			'run1x' : dog_place_width[0],
			'run2x' : dog_place_width[1],
			'run3x' : dog_place_width[2],
			'run4x' : dog_place_width[3],
			'run5x' : dog_place_width[4],
			'run6x' : dog_place_width[5],
			'runy' : dog_place_arr[num]
		}



		arr_resize.push(obj)
		object_con.addChild(run1,run2,run3,run4,run5,run6,showround,win_first,win_second,win_third)
		stage.update();


}

$('#resultDirect').click(function(){

	$('#round-history').modal('show');
	$('#resultIframe').attr('src',$('#resultIframe').attr('src'));
	
});
