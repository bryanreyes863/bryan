var socket = io();

var today = new Date();
var D = today.getDate();
var M = today.getMonth() + 1;
var Y = today.getFullYear();

if (D < 10) {
	$('#date-picker').val(Y+'-0'+M+'-0'+D);
}else {
	$('#date-picker').val(Y+'-0'+M+'-'+D);
}

var sort = $ ('#date-picker').val();

socket.emit('HistoryClient' , {sort});

socket.on('loadDatahis' , function(data){

	var pastLen = data.length;
	var pastimg = "";
	var sniff_data = '';
	for(p = 0; p < pastLen; p++){

		var pastdata = data[0];

			if (pastdata.first_place == 1) {

				var gameRes = '1';
				var gameResColor = '1Res'

			} else if (pastdata.second_place == 2) {

				var gameRes = '2';
				var gameResColor = '2Res'

			} else if (pastdata.third_place == 3) {

				var gameRes = '3';
				var gameResColor = '3Res'

			} else if (pastdata.fourth_place == 4) {

				var gameRes = '4';
				var gameResColor = '4Res'

			} else if (pastdata.fifth_place == 5) {

				var gameRes = '5';
				var gameResColor = '5Res'
				
			} else if (pastdata.sixth_place == 6) {

				var gameRes = '6';
				var gameResColor = '6Res'
				
			}

		$('.gameresult table').append('<tr class="gameobjects"><td class="trounds">'
			+pastdata.rounds+'</td><td class="thash">'
			+pastdata.hash+'</td><td class="tsaltcode">'
			+pastdata._id+'</td><td class="result '+gameResColor+'">'
			+gameRes+'</td></tr>')
	}


})

socket.on('pageCount',function(data) {


	if (data == 0) {
		$('.pagination').hide();
	} else {
		$('.pagination').show();
	var current_page = 1;
	var records_per_page = 10;
	var pages = data / 10;
	pages = Math.ceil(pages);
	var lastone = pages % 10;
	changePage(pages);

	if (pages < 11) {
		$('#prevpage').hide();
		$('#nextpage').hide();
	}


function prevPage() {

		if (records_per_page == pages) {

				current_page = current_page - 10;

				if (lastone == 0) {
					records_per_page = records_per_page - 10;
				} else {

					records_per_page = records_per_page - lastone;
				}
				changePage();

		} else {

			if (current_page > 1) {
				current_page = current_page - 10;
				records_per_page = records_per_page - 10;
				changePage();
			}

		}
}

function nextPage() {
	if (lastone == 0){
		var rs_limiter = records_per_page;
	}else {
		var rs_limiter = records_per_page + 10;
	}

	var curpage = curpage + 10;


	if (records_per_page == pages || curpage == pages) {

	} else {

		if (rs_limiter < pages) {

			current_page = current_page + 10;
			records_per_page = records_per_page + 10;
			changePage()
			
			} else {
				current_page = current_page + 10;
				records_per_page = records_per_page + lastone;
				changePage();
			}

		}
	}

}

$('#prevpage').click(function(){
	prevPage(pages);
})

$('#nextpage').click(function(){
	nextPage(pages);
})

function changePage(page){

		// $('.gameobjects').remove();
		$('.page_content').html('');

		if (pages > 10) {

			for(x = current_page; x <= records_per_page; x++) {
				$('.page_content').append('<li class="page-item" ><a class="page-link loadpagesbtn"  href="#">'+x+'</a></li>')
			}

		} else {

			for(x = current_page; x <= pages; x++) {
				$('.page_content').append('<li class="page-item" ><a class="page-link loadpagesbtn"  href="#">'+x+'</a></li>')
			}
		}
		

	}

})


$('#checkResult').click(function(){

	var hash = $('#hashtext').val();
	var salt = $('#salttext').val();
	var round = $('#roundtxt').val();

	if(hash.length == 0 || salt.length == 0 || round.length == 0 ) {
		$('#errorModal .modal-body p').html('');
		$('#errorModal .modal-body p').html('정보가 일치하지 않습니다.');
		$('#errorModal').modal('show');
	} else if (salt.length < 24 || salt.length > 24 ) {
		$('#errorModal .modal-body p').html('');
		$('#errorModal .modal-body p').html('정보가 일치하지 않습니다.');
		$('#errorModal').modal('show');
	}else {
		socket.emit('searchDatahis' , {hashcode: hash , saltcode : salt, roundcode : round});
	}
})

socket.on('resdata' , function(data){


	if (data.length > 0) {
		$('#invalidtxt').hide();
		$('#result_round').html(data[0].rounds);

		if (data[0].first_place == 1) {

			var gameRes = '1';

			$('#result_num').css('color' , '#37aee2');

		} else if (data[0].second_place == 2 ){

			var gameRes = '2';
			$('#result_num').css('color' , 'red');

		} else if(data[0].third_place == 3 ){

			var gameRes = '3';
			$('#result_num').css('color' , 'white');

		} else if(data[0].fourth_place == 4 ){

			var gameRes = '4';
			$('#result_num').css('color' , 'black');

		} else if(data[0].fifth_place == 5 ){

			var gameRes = '5';
			$('#result_num').css('color' , '#ffa31a');

		} else if(data[0].sixth_place == 6 ){

			var gameRes = '6';
			$('#result_num').css('color' , ' #808080');

		}

		$('#result_num').html(gameRes);

		$('#restext').show();


	}
})


socket.on('invalid' , function(data){
	$('#invalidtxt').show();
	$('#restext').hide();
	$('#invalidtxt').html('정보가 일치하지 않습니다.');
})

 $('#date-picker').change(function(){
 	var dateval = $(this).val();
 	socket.emit('sortbydate' , dateval);
 	$('.gameresult table .gameobjects').remove();
 })

 $(document).ready(function(){

 	$(document).on('click','.loadpagesbtn',function(){
 		var skip = 10 * $(this).html();
 		skip = skip - 10;
 		var sort = $('#date-picker').val();

 		socket.emit('page_control',{skip : skip , sort : sort});
 	})



 	socket.on('getpageload',function(data){
 		$('.gameobjects').remove();
		var pastLen = data.length;

		for(p = 0; p < pastLen; p++) {

			var pastdata = data[p];


			if (pastdata.first_place == 1) {

				var gameRes = '1';
				var gameResColor = '1Res'

			} else if (pastdata.second_place == 2) {

				var gameRes = '2';
				var gameResColor = '2Res'

			} else if (pastdata.third_place == 3) {

				var gameRes = '3';
				var gameResColor = '3Res'

			} else if (pastdata.fourth_place == 4) {

				var gameRes = '4';
				var gameResColor = '4Res'

			} else if (pastdata.fifth_place == 5) {

				var gameRes = '5';
				var gameResColor = '5Res'
				
			} else if (pastdata.sixth_place == 6) {

				var gameRes = '6';
				var gameResColor = '6Res'
				
			}

		$('.gameresult table').append('<tr class="gameobjects"><td class="trounds">'
			+pastdata.rounds+'</td><td class="thash">'
			+pastdata.hash+'</td><td class="tsaltcode">'
			+pastdata._id+'</td><td class="result  '+gameResColor+'">'
			+gameRes+'</td></tr>')
		
		}

 	})


 })

 	socket.on('loadsort',function(sortres){
		var pastLen = sortres.length;

		for(p = 0; p < pastLen; p++) {
		var pastdata = sortres[p];


			if (pastdata.first_place == 1) {

				var gameRes = '1';
				var gameResColor = '1Res'

			} else if (pastdata.second_place == 2) {

				var gameRes = '2';
				var gameResColor = '2Res'

			} else if (pastdata.third_place == 3) {

				var gameRes = '3';
				var gameResColor = '3Res'

			} else if (pastdata.fourth_place == 4) {

				var gameRes = '4';
				var gameResColor = '4Res'

			} else if (pastdata.fifth_place == 5) {

				var gameRes = '5';
				var gameResColor = '5Res'
				
			} else if (pastdata.sixth_place == 6) {

				var gameRes = '6';
				var gameResColor = '6Res'
				
			}


		$('.gameresult table').append('<tr class="gameobjects"><td class="trounds">'
			+pastdata.rounds+'</td><td class="thash">'
			+pastdata.hash+'</td><td class="tsaltcode">'
			+pastdata._id+'</td><td class="result  '+gameResColor+'">'
			+gameRes+'</td></tr>')
		}
 })


$(document).ready(function(){


	$(document).on('click' , '.trounds' , function(){

		var copytext = $(this).html();
		$('#roundtxt').val('');
		$('#roundtxt').val(copytext);

	});


	$(document).on('click' , '.thash' , function(){
		var copytext = $(this).html();
		$('#hashtext').val('');
		$('#hashtext').val(copytext);

	});


	$(document).on('click' , '.tsaltcode' , function(){
		var copytext = $(this).html();
		$('#salttext').val('');
		$('#salttext').val(copytext);
	
	});
})

$(document).ready(function(){

	var screenlength = $(window).width();
	var ua = navigator.userAgent.toLowerCase(); 

	if (ua.indexOf('safari') != -1) { 
	  if (ua.indexOf('chrome') > -1) {
	  } else {

	  	setTimeout(function(){
		  	$('.page-item a').css({
		  		'font-size' : '12px',
		  	})

		  	$('.page-link').css({
		  		'font-size' : '12px',
		  	})
	  	},1000)


	  }
	}
})