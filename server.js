var express = require('express');
var http = require('http');
var path = require('path');
var app = express();

var socketIO = require('socket.io');
var server = http.Server(app);
var io = socketIO(server);

var moment = require('moment');

var url = "mongodb://joemar12:joemar12@ds229078.mlab.com:29078/dograce";

var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
const crypto = require('crypto');
app.set('port',5000);

app.get('/admin',function(request, response){
	response.sendFile(path.join(__dirname, 'admin.html'));
})

app.get('/tableresult',function(request, response){
	response.sendFile(path.join(__dirname, 'tableresult.html'));
})

app.get('/gameResult',function(request, response){
	response.sendFile(path.join(__dirname, 'gameResult.html'));
})

app.get('/',function(request, response){
	response.sendFile(path.join(__dirname, 'index.html'));
})


var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'


// server.listen(5000, function() {
//   console.log('Starting server on port 5000');
// });

server.listen(server_port , server_ip_address , function(){
	console.log('Listening on' + server_ip_address + ', port' + server_port);	
})


app.use(express.static('./'));


//var section

var result_container = [
	{
		"move1" : "",
		"move2" : "",
		"move3" : "",
		"move4" : "",
		"win_res" : "",
		"speed1" : ""
	},
	{
		"move1" : "",
		"move2" : "",
		"move3" : "",
		"move4" : "",
		"win_res" : "",
		"speed2" : ""
	},
	{
		"move1" : "",
		"move2" : "",
		"move3" : "",
		"move4" : "",
		"win_res" : "",
		"speed3" : ""
	},
	{
		"move1" : "",
		"move2" : "",
		"move3" : "",
		"move4" : "",
		"win_res" : "",
		"speed4" : ""
	},
	{
		"move1" : "",
		"move2" : "",
		"move3" : "",
		"move4" : "",
		"win_res" : "",
		"speed5" : ""
	},
	{
		"move1" : "",
		"move2" : "",
		"move3" : "",
		"move4" : "",
		"win_res" : "",
		"speed6" : ""

	}
]

var result = [200,350,500,650,800,950];

var gameRes = 0;


//function SECTION

genRes(result_container);

function genRes(result_container){


	shuffle(result);
	var res1 = result[0];
	var res2 = result[1];
	var res3 = result[2];
	var res4 = result[3];
	var res5 = result[4];
	var res6 = result[5];

	var type1;
	var type2;
	var type3;
	var type4;
	var type5;
	var type6;

	if (res1 <= 500) {

		type1 = getSureWin();
	} else {
		type1 = getSureLose();
	}

	if (res2 <= 500) {

		type2 = getSureWin();
	} else {
		type2 = getSureLose();
	}

	if (res3 <= 500) {

		type3 = getSureWin();
	} else {
		type3 = getSureLose();
	}

	if (res4 <= 500) {

		type4 = getSureWin();
	} else {
		type4 = getSureLose();
	}

	if (res5 <= 500) {

		type5 = getSureWin();
	} else {
		type5 = getSureLose();
	}

	if (res6 <= 500) {

		type6 = getSureWin();
	} else {
		type6 = getSureLose();
	}
	

	//dog1
	result_container[0]['move1'] = getMove();
	result_container[0]['move2'] = getMove();
	result_container[0]['move3'] = getMove();
	result_container[0]['move4'] = getMove();
	result_container[0]['win_res'] = type1;
	result_container[0]['speed1'] = res1;

	//dog2
	result_container[1]['move1'] = getMove();
	result_container[1]['move2'] = getMove();
	result_container[1]['move3'] = getMove();
	result_container[1]['move4'] = getMove();
	result_container[1]['win_res'] = type2;
	result_container[1]['speed2'] = res2;

	//dog3
	result_container[2]['move1'] = getMove();
	result_container[2]['move2'] = getMove();
	result_container[2]['move3'] = getMove();
	result_container[2]['move4'] = getMove();
	result_container[2]['win_res'] = type3;
	result_container[2]['speed3'] = res3;

	//dog4
	result_container[3]['move1'] = getMove();
	result_container[3]['move2'] = getMove();
	result_container[3]['move3'] = getMove();
	result_container[3]['move4'] = getMove();
	result_container[3]['win_res'] = type4;
	result_container[3]['speed4'] = res4;

	//dog5
	result_container[4]['move1'] = getMove();
	result_container[4]['move2'] = getMove();
	result_container[4]['move3'] = getMove();
	result_container[4]['move4'] = getMove();
	result_container[4]['win_res'] = type5;
	result_container[4]['speed5'] = res5;

	//dog6
	result_container[5]['move1'] = getMove();
	result_container[5]['move2'] = getMove();
	result_container[5]['move3'] = getMove();
	result_container[5]['move4'] = getMove();
	result_container[5]['win_res'] = type6;
	result_container[5]['speed6'] = res6;


}

function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

function getMove(){

	return (Math.random() * 4) + 1.2;
}

function getSureWin(){
	return (Math.random() * 10) + 5;
}

function getSureLose(){
	return (Math.random() * -8) + -4; //-4
}

io.sockets.emit('result');
setInterval(function(){

	var seconds = 60 - moment().format('ss');
	
	io.sockets.emit('sec' ,seconds);

	if(seconds == 1){

		var roundx = moment().format('HH') * 60;
		var roundy = moment().format('mm');
		var rounds = (parseInt(roundy)+parseInt(roundx)) + 1;
		var nowdate = moment().format('YYYY-MM-DD');

		var secret_code = rounds+'cointoss'+moment().format('DD-MM-YYYY');
		const hash = crypto.createHmac('sha256', secret_code).digest('hex');


		var first_place = '';

		if (result_container[0]['speed1'] == 200) {

			first_place = 'dog1';

		} else if (result_container[1]['speed2'] == 200) {

			first_place = 'dog2';

		} else if (result_container[2]['speed3'] == 200) {

			first_place = 'dof3';

		} else if (result_container[3]['speed4'] == 200) {

			first_place = 'dog4';

		} else if (result_container[4]['speed5'] == 200) {

			first_place = 'dog5';

		} else if (result_container[5]['speed6'] == 200) {

			first_place = 'dog6';
		}

		var second_place = '';
		
		if (result_container[0]['speed1'] == 350) {

			second_place = 'dog1';

		} else if (result_container[1]['speed2'] == 350) {

			second_place = 'dog2';

		} else if (result_container[2]['speed3'] == 350) {

			second_place = 'dog3';

		} else if (result_container[3]['speed4'] == 350) {

			second_place = 'dog4';

		} else if (result_container[4]['speed5'] == 350) {

			second_place = 'dog5';

		} else if (result_container[5]['speed6'] == 350) {

			second_place = 'dog6';
		}


		var third_place = '';

		if (result_container[0]['speed1'] == 500) {

			third_place = 'dog1';

		} else if (result_container[1]['speed2'] == 500) {

			third_place = 'dog2';

		} else if (result_container[2]['speed3'] == 500) {

			third_place = 'dog3';

		} else if (result_container[3]['speed4'] == 500) {

			third_place = 'dog4';

		} else if (result_container[4]['speed5'] == 500) {

			third_place = 'dog5';

		} else if (result_container[5]['speed6'] == 500) {

			third_place = 'dog6';
		}



		var fourth_place = '';

		if (result_container[0]['speed1'] == 650) {

			fourth_place = 'dog1';

		} else if (result_container[1]['speed2'] == 650) {

			fourth_place = 'dog2';

		} else if (result_container[2]['speed3'] == 650) {

			fourth_place = 'dog3';

		} else if (result_container[3]['speed4'] == 650) {

			fourth_place = 'dog4';

		} else if (result_container[4]['speed5'] == 650) {

			fourth_place = 'dog5';

		} else if (result_container[5]['speed6'] == 650) {

			fourth_place = 'dog6';
		}


		var fifth_place = '';

		if (result_container[0]['speed1'] == 800) {

			fifth_place = 'dog1';

		} else if (result_container[1]['speed2'] == 800) {

			fifth_place = 'dog2';

		} else if (result_container[2]['speed3'] == 800) {

			fifth_place = 'dog3';

		} else if (result_container[3]['speed4'] == 800) {

			fifth_place = 'dog4';

		} else if (result_container[4]['speed5'] == 800) {

			fifth_place = 'dog5';

		} else if (result_container[5]['speed6'] == 800) {

			fifth_place = 'dog6';
		}



		var sixth_place = '';

		if (result_container[0]['speed1'] == 950) {

			sixth_place = 'dog1';

		} else if (result_container[1]['speed2'] == 950) {

			sixth_place = 'dog2';

		} else if (result_container[2]['speed3'] == 950) {

			sixth_place = 'dog3';

		} else if (result_container[3]['speed4'] == 950) {

			sixth_place = 'dog4';

		} else if (result_container[4]['speed5'] == 950) {

			sixth_place = 'dog5';

		} else if (result_container[5]['speed6'] == 950) {

			sixth_place = 'dog6';
		}

		setTimeout(function(){

						MongoClient.connect(url,function(err,db){
							if (err) throw err;
							var dbo = db.db('dograce');
							var mysort = {_id : -1};
							dbo.collection('game').find().limit(6).sort(mysort).toArray(function(err , result){
								if (err) throw err;
								io.sockets.emit('loadDataGame',result);
								db.close();
							})
						})

		},1000)

		io.sockets.emit('gameData' , {'rounds' : rounds , 'hash' : hash , 'first_place' : first_place , 'second_place' : second_place , 'third_place' : third_place , 'fourth_place' : fourth_place , 'fifth_place' : fifth_place , 'sixth_place' : sixth_place});

		MongoClient.connect(url, {userNewUrlParse : true} , function (err, db) {


				if (err) throw err;

				var dbo = db.db('dograce');

				var gameObj = {
					nowdate : nowdate,
					rounds : rounds,
					hash : hash,
					first_place : first_place,
					second_place : second_place,
					third_place : third_place,
					fourth_place : fourth_place,
					fifth_place : fifth_place,
					sixth_place : sixth_place

				}

				// if (gameRes == 1) {
				// 	var apiRes = '1';
				// } else {
				// 	var apiRes = '2';
				// }


					var jsonObj = {
						rounds : rounds,
						first : first_place,
						second : second_place,
						third : third_place,
						fourth : fourth_place,
						fifth : fifth_place,
						sixth : sixth_place

					}

				  		var fs = require('fs');
				  		let data = JSON.stringify(jsonObj);
				

				  		setTimeout(function(){
				  			fs.writeFileSync('result.json', data);
				  		},1000);


				// setTimeout(function(){
				// 	dbo.collection('game').insertOne(gameObj , function(eer , res){
				// 		if (err) throw err;
				// 		console.log('ROUNDS' + rounds + 'Recorded');
				// 		db.close();
				// 	});
				// },1000);

		});

		setTimeout(function(){

			io.sockets.emit('dog1' ,
				{
					'move1' : result_container[0]['move1'],
					'move2' : result_container[0]['move2'],
					'move3' : result_container[0]['move3'],
					'move4' : result_container[0]['move4'],
					'win_res' : result_container[0]['win_res'],
					'speed1' :  result_container[0]['speed1']
				})

			io.sockets.emit('dog2' ,
				{
					'move1' :  result_container[1]['move1'],
					'move2' :  result_container[1]['move2'],
					'move3' :  result_container[1]['move3'],
					'move4' :  result_container[1]['move4'],
					'win_res' :  result_container[1]['win_res'] ,
					'speed2' : result_container[1]['speed2']
				})
			io.sockets.emit('dog3' ,
				{
					'move1' : result_container[2]['move1'],
					'move2' : result_container[2]['move2'],
					'move3' : result_container[2]['move3'],
					'move4' : result_container[2]['move4'],
					'win_res' : result_container[2]['win_res'] ,
					'speed3' : result_container[2]['speed3'] 
				})
			io.sockets.emit('dog4' ,
				{
					'move1' : result_container[3]['move1'],
					'move2' : result_container[3]['move2'],
					'move3' : result_container[3]['move3'],
					'move4' : result_container[3]['move4'],
					'win_res' : result_container[3]['win_res'] ,
					'speed4' : result_container[3]['speed4'] ,
				})
			io.sockets.emit('dog5' ,
				{
					'move1' : result_container[4]['move1'],
					'move2' : result_container[4]['move2'],
					'move3' : result_container[4]['move3'],
					'move4' : result_container[4]['move4'],
					'win_res' : result_container[4]['win_res'] ,
					'speed5' : result_container[4]['speed5'] 
				})
			io.sockets.emit('dog6' ,
				{
					'move1' : result_container[5]['move1'],
					'move2' : result_container[5]['move2'],
					'move3' : result_container[5]['move3'],
					'move4' : result_container[5]['move4'],
					'win_res' : result_container[5]['win_res'] , 
					'speed6' :result_container[5]['speed6']
				})

			setTimeout(function(){
				genRes(result_container);
			},2000)

		},2000)	
	}

},1000)


io.on('connection' , function(socket){

	socket.on('modify_res',function(data){

		console.log(data.win_res4)
			result_container[0]['win_res'] = data.win_res1;
			result_container['speed1'] = data.speed1;

			result_container[1]['win_res'] = data.win_res2;
			result_container[1]['speed2'] = data.speed2;

			result_container[2]['win_res'] = data.win_res3;
			result_container[2]['speed3'] = data.speed3;

			result_container[3]['win_res'] = data.win_res4;
			result_container[3]['speed4'] = data.speed4;

			result_container[4]['win_res'] = data.win_res5;
			result_container[4]['speed5'] = data.speed5;

			result_container[5]['win_res'] = data.win_res6;
			result_container[5]['speed6'] = data.speed6;

			console.log(data.speed1)
			console.log(data.speed2)
			console.log(data.speed3)
			console.log(data.speed4)
			console.log(data.speed5)
			console.log(data.speed6)
	})

		socket.on('newVisitors', function(data){

			socketid = socket.id;
			MongoClient.connect(url,function(err,db){
				if (err) throw err;
				var dbo = db.db('dograce');
				var mysort = {_id : -1};
				dbo.collection('game').find().limit(6).sort(mysort).toArray(function(err , result){
					if (err) throw err;
					socket.emit('loadDataGame',result);
					db.close();
				})
			})
		})


	socket.on('LoadMoreResult',function(data){
		console.log(data)
		socketid = socket.id;

		MongoClient.connect(url, { userNewUrlParse : true}, function(err,db){
			if (err) throw err;
			var dbo = db.db('dograce');
			var mysort = {_id : -1};
			var query = {nowdate : data.today_data_date};
			dbo.collection("game").find(query).limit(data.result_limit).sort(mysort).toArray(function(err,result){
				if (err) throw err;
				io.to(socketid).emit('loadData' , result);
				db.close();
			})
		})
	})

	socket.on('HistoryClient' , function(date){
			socketid = socket.id;

			MongoClient.connect(url,function(err , db){
				if (err) throw err;
				var dbo = db.db('dograce');
				var mysort = {_id: -1};
				var query = {nowdate : date.sort};
				dbo.collection('game').find(query).limit(10).sort(mysort).toArray(function(err, result) {
					if(err) throw err;
					io.to(socketid).emit('loadDatahis' , result);
					db.close();
				});
				
				dbo.collection('game').find(query).count(function(err, dataCount) {
					    
					    io.to(socketid).emit('pageCount', dataCount);
					    db.close();
					});			
			})
		})


	socket.on('sortbydate' , function (date){
			socketid = socket.id;
			MongoClient.connect(url, { userNewUrlParse: true } ,  function(err , db) {
				var mysort = {_id: -1};
				var query = {nowdate : date};
				if (err) throw err;
				var dbo = db.db('dograce');
				dbo.collection('game').find(query).limit(10).sort(mysort).toArray(function(err , result){
					io.to(socketid).emit('loadsort' , result);
					db.close();
				});
				dbo.collection('game').find(query).count(function(err, dataCount) {
		     
				    io.to(socketid).emit('pageCount', dataCount);
				    db.close();
			});
		});

	})

	socket.on('searchDatahis',function(data){
		socketid = socket.id;
		MongoClient.connect(url, function(err, db) {

		  if (err) throw err;
		  var dbo = db.db("dograce");

		  var dbrounds = parseInt(data.roundcode);
		  var dbgameid = ObjectId(data.saltcode);
		  var query = { _id : dbgameid , hash : data.hashcode , rounds : dbrounds};
		  dbo.collection("game").find(query).toArray(function(err, result) {
		  	if (result.length > 0) {
		  		io.to(socketid).emit('resdata', result);	
		  	} else {
		    	io.to(socketid).emit('invalid');
		  	}
		    db.close();
		  });
		});
	})

	socket.on('page_control' , function(data){
		socketid = socket.id;
		MongoClient.connect(url, function(err , db){
			var mysort = {_id : -1};
			var query = {nowdate : data.sort};
			if (err) throw err;
			var dbo = db.db('dograce');
			dbo.collection('game').find(query).skip(data.skip).limit(10).sort(mysort).toArray(function(err, result){
				io.to(socketid).emit('getpageload', result);
				db.close();

			});
		});

	})


})