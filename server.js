var express = require('express');
var http = require('http');
var path = require('path');
var app = express();

var socketIO = require('socket.io');
var server = http.Server(app);
var io = socketIO(server);
var request = require("request");

var moment = require('moment');
// var url = "mongodb://localhost:27017/dograce";
var url = "mongodb+srv://joemar12:joemar12@dograce-oh6ud.mongodb.net/test?retryWrites=true&w=majority";

var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
const crypto = require('crypto');
app.set('port',5000);

app.get('/9d527f33a35999702a416e2e20e078fa',function(req, res){

	var url = "http://realbet365.net/realbet_access.json"


	  request({
	      url: url,
	      json: true
	  }, function (error, response, body) {

	      if (!error && response.statusCode === 200) {

	        var access_list_count = body['ipadd'].length;
	        var access = false;
	        var active = true;
	        var userIp_add = req.headers['x-forwarded-for'].split(',')[0];

	          // Render All the ip address
	          for(i = 0; i < access_list_count; i++) 
	          {
	            if (body['ipadd'][i]['ip'] == userIp_add) {
	              access = true;
	              if (body['ipadd'][i]['status'] == 'INACTIVE') {
	                active = false;
	              } 
	            } 
	          }
	          
	          // If IP address MATCH ACESS
	          if (access) {
	            if (active) {
	              res.sendFile(path.join(__dirname, 'admin.html'));
	            } else {
	              res.send('YOUR IP HAS BEEN BLOCK !')
	            }
	          } else {
	            res.json({ status: '404 Not Found' })
	          }



	          
	      }
	  })

	// res.sendFile(path.join(__dirname, 'admin.html'));


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

app.get('/result', function(request, response) {
  response.sendFile(path.join(__dirname, 'result.json'));
});


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

			first_place = 'dog3';

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


		io.sockets.emit('gameData' , {'rounds' : rounds , 'hash' : hash , 'first_place' : first_place , 'second_place' : second_place , 'third_place' : third_place , 'fourth_place' : fourth_place , 'fifth_place' : fifth_place , 'sixth_place' : sixth_place});


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

			// console.log(result_container)


			if (first_place == 'dog1') {
				var res1 = "DOG1";
				var res2 = 'UNDER';
				var res3 = 'ODD';
			} else if (first_place == 'dog2') {
				var res1 = "DOG2";
				var res2 = 'UNDER';
				var res3 = 'EVEN';
			} else if (first_place == 'dog3') {
				var res1 = "DOG3";
				var res2 = 'UNDER';
				var res3 = 'ODD';
			} else if (first_place == 'dog4') {
				var res1 = "DOG4";
				var res2 = 'OVER';
				var res3 = 'EVEN';
			} else if (first_place == 'dog5') {
				var res1 = "DOG5";
				var res2 = 'OVER';
				var res3 = 'ODD';
			} else if (first_place == 'dog6') {
				var res1 = "DOG6";
				var res2 = 'OVER';
				var res3 = 'EVEN';
			}


				var jsonObj = {
					'rounds' : rounds,
					'result1' : res1,
					'result2' : res2,
					'result3' : res3,
					
				}
				// var jsonObj = {
				// 	rounds : rounds,
				// 	first : first_place,
				// 	second : second_place,
				// 	third : third_place,
				// 	fourth : fourth_place,
				// 	fifth : fifth_place,
				// 	sixth : sixth_place

				// }

			  		var fs = require('fs');
			  		let data = JSON.stringify(jsonObj);
			  		fs.writeFileSync('result.json', data);


			setTimeout(function(){


				MongoClient.connect(url, {useNewUrlParser : true} , function (err, db) {


						if (err) throw err;

						var dbo = db.db('dograce');

						var gameObj = {
							nowdate : nowdate,
							rounds : rounds + 1,
							hash : hash,
							first_place : first_place,
							second_place : second_place,
							third_place : third_place,
							fourth_place : fourth_place,
							fifth_place : fifth_place,
							sixth_place : sixth_place

						}



						setTimeout(function(){
							dbo.collection('game').insertOne(gameObj , function(eer , res){
								if (err) throw err;
								console.log('ROUNDS' + rounds + 'Recorded');
								db.close();
							});
						},1000);

				});

				setTimeout(function(){

					MongoClient.connect(url, {useNewUrlParser : true} , function(err,db){
						if (err) throw err;
						var dbo = db.db('dograce');
						var mysort = {_id : -1};
						dbo.collection('game').find().limit(6).sort(mysort).toArray(function(err , result){
							if (err) throw err;
							io.sockets.emit('loadDataGame',result);
							db.close();
						})
					})
					
				},5000);

			},52000);



			setTimeout(function(){
				genRes(result_container);
			},2000)

		},2000)	
	}

},1000)


io.on('connection' , function(socket){

	socket.on('modify_res',function(data){

		console.log(data)

		//dog1
		result_container[0]['move1'] = data.move1_6;
		result_container[0]['move2'] = data.move2_6;
		result_container[0]['move3'] = data.move3_6;
		result_container[0]['move4'] = data.move4_6;

		//dog2
		result_container[1]['move1'] = data.move1_5;
		result_container[1]['move2'] = data.move2_5;
		result_container[1]['move3'] = data.move3_5;
		result_container[1]['move4'] = data.move4_5;

		//dog3
		result_container[2]['move1'] = data.move1_4;
		result_container[2]['move2'] = data.move2_4;
		result_container[2]['move3'] = data.move3_4;
		result_container[2]['move4'] = data.move4_4;
		//dog4
		result_container[3]['move1'] = data.move1_3;
		result_container[3]['move2'] = data.move2_3;
		result_container[3]['move3'] = data.move3_3;
		result_container[3]['move4'] = data.move4_3;

		//dog5
		result_container[4]['move1'] = data.move1_2;
		result_container[4]['move2'] = data.move2_2;
		result_container[4]['move3'] = data.move3_2;
		result_container[4]['move4'] = data.move4_2;
		//dog6
		result_container[5]['move1'] = data.move1_1;
		result_container[5]['move2'] = data.move2_1;
		result_container[5]['move3'] = data.move3_1;
		result_container[5]['move4'] = data.move4_1;


			result_container[0]['win_res'] = data.win_res1;
			result_container[0]['speed1'] = data.speed1;

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
			// console.log(result_container)
	})

		socket.on('newVisitors', function(data){

			socketid = socket.id;
			MongoClient.connect(url, { useNewUrlParser : true, useUnifiedTopology: true}, function(err,db){
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
		socketid = socket.id;

		MongoClient.connect(url, { useNewUrlParser : true}, function(err,db){
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

			MongoClient.connect(url,  {useNewUrlParser : true}  , function(err , db){
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
			MongoClient.connect(url, { useNewUrlParser: true } ,  function(err , db) {
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
		MongoClient.connect(url,  {useNewUrlParser : true}  , function(err, db) {

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