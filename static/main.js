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
	},

]
maniFest2 = [

	{
		"src" : "assets/images/bg_track/bg_track_0.jpg" ,
		"id" : "bgTrack_0" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_1.jpg" ,
		"id" : "bgTrack_1" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_2.jpg" ,
		"id" : "bgTrack_2" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_3.jpg" ,
		"id" : "bgTrack_3" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_4.jpg" ,
		"id" : "bgTrack_4" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_5.jpg" ,
		"id" : "bgTrack_5" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_6.jpg" ,
		"id" : "bgTrack_6" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_7.jpg" ,
		"id" : "bgTrack_7" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_8.jpg" ,
		"id" : "bgTrack_8" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_9.jpg" ,
		"id" : "bgTrack_9" 
	},

	
	{
		"src" : "assets/images/bg_track/bg_track_10.jpg" ,
		"id" : "bgTrack_10" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_11.jpg" ,
		"id" : "bgTrack_11" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_12.jpg" ,
		"id" : "bgTrack_12" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_13.jpg" ,
		"id" : "bgTrack_13" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_14.jpg" ,
		"id" : "bgTrack_14" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_15.jpg" ,
		"id" : "bgTrack_15" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_16.jpg" ,
		"id" : "bgTrack_16" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_17.jpg" ,
		"id" : "bgTrack_17" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_18.jpg" ,
		"id" : "bgTrack_18" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_19.jpg" ,
		"id" : "bgTrack_19" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_20.jpg" ,
		"id" : "bgTrack_20" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_21.jpg" ,
		"id" : "bgTrack_21" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_22.jpg" ,
		"id" : "bgTrack_22" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_23.jpg" ,
		"id" : "bgTrack_23" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_24.jpg" ,
		"id" : "bgTrack_24" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_25.jpg" ,
		"id" : "bgTrack_25" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_26.jpg" ,
		"id" : "bgTrack_26" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_27.jpg" ,
		"id" : "bgTrack_27" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_28.jpg" ,
		"id" : "bgTrack_28" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_29.jpg" ,
		"id" : "bgTrack_29" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_30.jpg" ,
		"id" : "bgTrack_30" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_31.jpg" ,
		"id" : "bgTrack_31" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_32.jpg" ,
		"id" : "bgTrack_32" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_33.jpg" ,
		"id" : "bgTrack_33" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_34.jpg" ,
		"id" : "bgTrack_34" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_35.jpg" ,
		"id" : "bgTrack_35" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_36.jpg" ,
		"id" : "bgTrack_36" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_37.jpg" ,
		"id" : "bgTrack_37" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_38.jpg" ,
		"id" : "bgTrack_38" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_39.jpg" ,
		"id" : "bgTrack_39" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_40.jpg" ,
		"id" : "bgTrack_40" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_41.jpg" ,
		"id" : "bgTrack_41" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_42.jpg" ,
		"id" : "bgTrack_42" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_43.jpg" ,
		"id" : "bgTrack_43" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_44.jpg" ,
		"id" : "bgTrack_44" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_45.jpg" ,
		"id" : "bgTrack_45" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_46.jpg" ,
		"id" : "bgTrack_46" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_47.jpg" ,
		"id" : "bgTrack_47" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_48.jpg" ,
		"id" : "bgTrack_48" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_49.jpg" ,
		"id" : "bgTrack_49" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_50.jpg" ,
		"id" : "bgTrack_50" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_51.jpg" ,
		"id" : "bgTrack_51" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_52.jpg" ,
		"id" : "bgTrack_52" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_53.jpg" ,
		"id" : "bgTrack_53" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_54.jpg" ,
		"id" : "bgTrack_54" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_55.jpg" ,
		"id" : "bgTrack_55" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_56.jpg" ,
		"id" : "bgTrack_56" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_57.jpg" ,
		"id" : "bgTrack_57" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_58.jpg" ,
		"id" : "bgTrack_58" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_59.jpg" ,
		"id" : "bgTrack_59" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_60.jpg" ,
		"id" : "bgTrack_60" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_61.jpg" ,
		"id" : "bgTrack_61" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_62.jpg" ,
		"id" : "bgTrack_62" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_63.jpg" ,
		"id" : "bgTrack_63" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_64.jpg" ,
		"id" : "bgTrack_64" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_65.jpg" ,
		"id" : "bgTrack_65" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_66.jpg" ,
		"id" : "bgTrack_66" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_67.jpg" ,
		"id" : "bgTrack_67" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_68.jpg" ,
		"id" : "bgTrack_68" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_69.jpg" ,
		"id" : "bgTrack_69" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_70.jpg" ,
		"id" : "bgTrack_70" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_71.jpg" ,
		"id" : "bgTrack_71" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_72.jpg" ,
		"id" : "bgTrack_72" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_73.jpg" ,
		"id" : "bgTrack_73" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_74.jpg" ,
		"id" : "bgTrack_74" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_75.jpg" ,
		"id" : "bgTrack_75" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_76.jpg" ,
		"id" : "bgTrack_76" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_77.jpg" ,
		"id" : "bgTrack_77" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_78.jpg" ,
		"id" : "bgTrack_78" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_79.jpg" ,
		"id" : "bgTrack_79" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_80.jpg" ,
		"id" : "bgTrack_80" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_81.jpg" ,
		"id" : "bgTrack_81" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_82.jpg" ,
		"id" : "bgTrack_82" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_83.jpg" ,
		"id" : "bgTrack_83" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_84.jpg" ,
		"id" : "bgTrack_84" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_85.jpg" ,
		"id" : "bgTrack_85" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_86.jpg" ,
		"id" : "bgTrack_86" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_87.jpg" ,
		"id" : "bgTrack_87" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_88.jpg" ,
		"id" : "bgTrack_88" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_89.jpg" ,
		"id" : "bgTrack_89" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_90.jpg" ,
		"id" : "bgTrack_90" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_91.jpg" ,
		"id" : "bgTrack_91" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_92.jpg" ,
		"id" : "bgTrack_92" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_93.jpg" ,
		"id" : "bgTrack_93" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_94.jpg" ,
		"id" : "bgTrack_94" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_95.jpg" ,
		"id" : "bgTrack_95" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_96.jpg" ,
		"id" : "bgTrack_96" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_97.jpg" ,
		"id" : "bgTrack_97" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_98.jpg" ,
		"id" : "bgTrack_98" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_99.jpg" ,
		"id" : "bgTrack_99" 
	},

	
	{
		"src" : "assets/images/bg_track/bg_track_100.jpg" ,
		"id" : "bgTrack_100" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_101.jpg" ,
		"id" : "bgTrack_101" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_102.jpg" ,
		"id" : "bgTrack_102" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_103.jpg" ,
		"id" : "bgTrack_103" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_104.jpg" ,
		"id" : "bgTrack_104" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_105.jpg" ,
		"id" : "bgTrack_105" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_106.jpg" ,
		"id" : "bgTrack_106" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_107.jpg" ,
		"id" : "bgTrack_107" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_108.jpg" ,
		"id" : "bgTrack_108" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_109.jpg" ,
		"id" : "bgTrack_109" 
	},

	
	{
		"src" : "assets/images/bg_track/bg_track_110.jpg" ,
		"id" : "bgTrack_110" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_111.jpg" ,
		"id" : "bgTrack_111" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_112.jpg" ,
		"id" : "bgTrack_112" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_113.jpg" ,
		"id" : "bgTrack_113" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_114.jpg" ,
		"id" : "bgTrack_114" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_115.jpg" ,
		"id" : "bgTrack_115" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_116.jpg" ,
		"id" : "bgTrack_116" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_117.jpg" ,
		"id" : "bgTrack_117" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_118.jpg" ,
		"id" : "bgTrack_118" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_119.jpg" ,
		"id" : "bgTrack_119" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_120.jpg" ,
		"id" : "bgTrack_120" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_121.jpg" ,
		"id" : "bgTrack_121" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_122.jpg" ,
		"id" : "bgTrack_122" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_123.jpg" ,
		"id" : "bgTrack_123" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_124.jpg" ,
		"id" : "bgTrack_124" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_125.jpg" ,
		"id" : "bgTrack_125" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_126.jpg" ,
		"id" : "bgTrack_126" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_127.jpg" ,
		"id" : "bgTrack_127" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_128.jpg" ,
		"id" : "bgTrack_128" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_129.jpg" ,
		"id" : "bgTrack_129" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_130.jpg" ,
		"id" : "bgTrack_130" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_131.jpg" ,
		"id" : "bgTrack_131" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_132.jpg" ,
		"id" : "bgTrack_132" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_133.jpg" ,
		"id" : "bgTrack_133" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_134.jpg" ,
		"id" : "bgTrack_134" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_135.jpg" ,
		"id" : "bgTrack_135" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_136.jpg" ,
		"id" : "bgTrack_136" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_137.jpg" ,
		"id" : "bgTrack_137" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_138.jpg" ,
		"id" : "bgTrack_138" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_139.jpg" ,
		"id" : "bgTrack_139" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_140.jpg" ,
		"id" : "bgTrack_140" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_141.jpg" ,
		"id" : "bgTrack_141" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_142.jpg" ,
		"id" : "bgTrack_142" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_143.jpg" ,
		"id" : "bgTrack_143" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_144.jpg" ,
		"id" : "bgTrack_144" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_145.jpg" ,
		"id" : "bgTrack_145" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_146.jpg" ,
		"id" : "bgTrack_146" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_147.jpg" ,
		"id" : "bgTrack_147" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_148.jpg" ,
		"id" : "bgTrack_148" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_149.jpg" ,
		"id" : "bgTrack_149" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_150.jpg" ,
		"id" : "bgTrack_150" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_151.jpg" ,
		"id" : "bgTrack_151" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_152.jpg" ,
		"id" : "bgTrack_152" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_153.jpg" ,
		"id" : "bgTrack_153" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_154.jpg" ,
		"id" : "bgTrack_154" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_155.jpg" ,
		"id" : "bgTrack_155" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_156.jpg" ,
		"id" : "bgTrack_156" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_157.jpg" ,
		"id" : "bgTrack_157" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_158.jpg" ,
		"id" : "bgTrack_158" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_159.jpg" ,
		"id" : "bgTrack_159" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_160.jpg" ,
		"id" : "bgTrack_160" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_161.jpg" ,
		"id" : "bgTrack_161" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_162.jpg" ,
		"id" : "bgTrack_162" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_163.jpg" ,
		"id" : "bgTrack_163" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_164.jpg" ,
		"id" : "bgTrack_164" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_165.jpg" ,
		"id" : "bgTrack_165" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_166.jpg" ,
		"id" : "bgTrack_166" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_167.jpg" ,
		"id" : "bgTrack_167" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_168.jpg" ,
		"id" : "bgTrack_168" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_169.jpg" ,
		"id" : "bgTrack_169" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_170.jpg" ,
		"id" : "bgTrack_170" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_171.jpg" ,
		"id" : "bgTrack_171" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_172.jpg" ,
		"id" : "bgTrack_172" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_173.jpg" ,
		"id" : "bgTrack_173" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_174.jpg" ,
		"id" : "bgTrack_174" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_175.jpg" ,
		"id" : "bgTrack_175" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_176.jpg" ,
		"id" : "bgTrack_176" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_177.jpg" ,
		"id" : "bgTrack_177" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_178.jpg" ,
		"id" : "bgTrack_178" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_179.jpg" ,
		"id" : "bgTrack_179" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_180.jpg" ,
		"id" : "bgTrack_180" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_181.jpg" ,
		"id" : "bgTrack_181" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_182.jpg" ,
		"id" : "bgTrack_182" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_183.jpg" ,
		"id" : "bgTrack_183" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_184.jpg" ,
		"id" : "bgTrack_184" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_185.jpg" ,
		"id" : "bgTrack_185" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_186.jpg" ,
		"id" : "bgTrack_186" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_187.jpg" ,
		"id" : "bgTrack_187" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_188.jpg" ,
		"id" : "bgTrack_188" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_189.jpg" ,
		"id" : "bgTrack_189" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_190.jpg" ,
		"id" : "bgTrack_190" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_191.jpg" ,
		"id" : "bgTrack_191" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_192.jpg" ,
		"id" : "bgTrack_192" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_193.jpg" ,
		"id" : "bgTrack_193" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_194.jpg" ,
		"id" : "bgTrack_194" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_195.jpg" ,
		"id" : "bgTrack_195" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_196.jpg" ,
		"id" : "bgTrack_196" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_197.jpg" ,
		"id" : "bgTrack_197" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_198.jpg" ,
		"id" : "bgTrack_198" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_199.jpg" ,
		"id" : "bgTrack_199" 
	},

	
	{
		"src" : "assets/images/bg_track/bg_track_200.jpg" ,
		"id" : "bgTrack_200" 
	},




	{
		"src" : "assets/images/bg_track/bg_track_201.jpg" ,
		"id" : "bgTrack_201" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_202.jpg" ,
		"id" : "bgTrack_202" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_203.jpg" ,
		"id" : "bgTrack_203" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_204.jpg" ,
		"id" : "bgTrack_204" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_205.jpg" ,
		"id" : "bgTrack_205" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_206.jpg" ,
		"id" : "bgTrack_206" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_207.jpg" ,
		"id" : "bgTrack_207" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_208.jpg" ,
		"id" : "bgTrack_208" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_209.jpg" ,
		"id" : "bgTrack_209" 
	},

	
	{
		"src" : "assets/images/bg_track/bg_track_210.jpg" ,
		"id" : "bgTrack_210" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_211.jpg" ,
		"id" : "bgTrack_211" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_212.jpg" ,
		"id" : "bgTrack_212" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_213.jpg" ,
		"id" : "bgTrack_213" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_214.jpg" ,
		"id" : "bgTrack_214" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_215.jpg" ,
		"id" : "bgTrack_215" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_216.jpg" ,
		"id" : "bgTrack_216" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_217.jpg" ,
		"id" : "bgTrack_217" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_218.jpg" ,
		"id" : "bgTrack_218" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_219.jpg" ,
		"id" : "bgTrack_219" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_220.jpg" ,
		"id" : "bgTrack_220" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_221.jpg" ,
		"id" : "bgTrack_221" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_222.jpg" ,
		"id" : "bgTrack_222" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_223.jpg" ,
		"id" : "bgTrack_223" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_224.jpg" ,
		"id" : "bgTrack_224" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_225.jpg" ,
		"id" : "bgTrack_225" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_226.jpg" ,
		"id" : "bgTrack_226" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_227.jpg" ,
		"id" : "bgTrack_227" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_228.jpg" ,
		"id" : "bgTrack_228" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_229.jpg" ,
		"id" : "bgTrack_229" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_230.jpg" ,
		"id" : "bgTrack_230" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_231.jpg" ,
		"id" : "bgTrack_231" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_232.jpg" ,
		"id" : "bgTrack_232" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_233.jpg" ,
		"id" : "bgTrack_233" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_234.jpg" ,
		"id" : "bgTrack_234" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_235.jpg" ,
		"id" : "bgTrack_235" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_236.jpg" ,
		"id" : "bgTrack_236" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_237.jpg" ,
		"id" : "bgTrack_237" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_238.jpg" ,
		"id" : "bgTrack_238" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_239.jpg" ,
		"id" : "bgTrack_239" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_240.jpg" ,
		"id" : "bgTrack_240" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_241.jpg" ,
		"id" : "bgTrack_241" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_242.jpg" ,
		"id" : "bgTrack_242" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_243.jpg" ,
		"id" : "bgTrack_243" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_244.jpg" ,
		"id" : "bgTrack_244" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_245.jpg" ,
		"id" : "bgTrack_245" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_246.jpg" ,
		"id" : "bgTrack_246" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_247.jpg" ,
		"id" : "bgTrack_247" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_248.jpg" ,
		"id" : "bgTrack_248" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_249.jpg" ,
		"id" : "bgTrack_249" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_250.jpg" ,
		"id" : "bgTrack_250" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_251.jpg" ,
		"id" : "bgTrack_251" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_252.jpg" ,
		"id" : "bgTrack_252" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_253.jpg" ,
		"id" : "bgTrack_253" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_254.jpg" ,
		"id" : "bgTrack_254" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_255.jpg" ,
		"id" : "bgTrack_255" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_256.jpg" ,
		"id" : "bgTrack_256" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_257.jpg" ,
		"id" : "bgTrack_257" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_258.jpg" ,
		"id" : "bgTrack_258" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_259.jpg" ,
		"id" : "bgTrack_259" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_260.jpg" ,
		"id" : "bgTrack_260" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_261.jpg" ,
		"id" : "bgTrack_261" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_262.jpg" ,
		"id" : "bgTrack_262" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_263.jpg" ,
		"id" : "bgTrack_263" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_264.jpg" ,
		"id" : "bgTrack_264" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_265.jpg" ,
		"id" : "bgTrack_265" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_266.jpg" ,
		"id" : "bgTrack_266" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_267.jpg" ,
		"id" : "bgTrack_267" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_268.jpg" ,
		"id" : "bgTrack_268" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_269.jpg" ,
		"id" : "bgTrack_269" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_270.jpg" ,
		"id" : "bgTrack_270" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_271.jpg" ,
		"id" : "bgTrack_271" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_272.jpg" ,
		"id" : "bgTrack_272" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_273.jpg" ,
		"id" : "bgTrack_273" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_274.jpg" ,
		"id" : "bgTrack_274" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_275.jpg" ,
		"id" : "bgTrack_275" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_276.jpg" ,
		"id" : "bgTrack_276" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_277.jpg" ,
		"id" : "bgTrack_277" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_278.jpg" ,
		"id" : "bgTrack_278" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_279.jpg" ,
		"id" : "bgTrack_279" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_280.jpg" ,
		"id" : "bgTrack_280" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_281.jpg" ,
		"id" : "bgTrack_281" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_282.jpg" ,
		"id" : "bgTrack_282" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_283.jpg" ,
		"id" : "bgTrack_283" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_284.jpg" ,
		"id" : "bgTrack_284" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_285.jpg" ,
		"id" : "bgTrack_285" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_286.jpg" ,
		"id" : "bgTrack_286" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_287.jpg" ,
		"id" : "bgTrack_287" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_288.jpg" ,
		"id" : "bgTrack_288" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_289.jpg" ,
		"id" : "bgTrack_289" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_290.jpg" ,
		"id" : "bgTrack_290" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_291.jpg" ,
		"id" : "bgTrack_291" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_292.jpg" ,
		"id" : "bgTrack_292" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_293.jpg" ,
		"id" : "bgTrack_293" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_294.jpg" ,
		"id" : "bgTrack_294" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_295.jpg" ,
		"id" : "bgTrack_295" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_296.jpg" ,
		"id" : "bgTrack_296" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_297.jpg" ,
		"id" : "bgTrack_297" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_298.jpg" ,
		"id" : "bgTrack_298" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_299.jpg" ,
		"id" : "bgTrack_299" 
	},

	
	{
		"src" : "assets/images/bg_track/bg_track_300.jpg" ,
		"id" : "bgTrack_300" 
	},






	{
		"src" : "assets/images/bg_track/bg_track_301.jpg" ,
		"id" : "bgTrack_301" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_302.jpg" ,
		"id" : "bgTrack_302" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_303.jpg" ,
		"id" : "bgTrack_303" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_304.jpg" ,
		"id" : "bgTrack_304" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_305.jpg" ,
		"id" : "bgTrack_305" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_306.jpg" ,
		"id" : "bgTrack_306" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_307.jpg" ,
		"id" : "bgTrack_307" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_308.jpg" ,
		"id" : "bgTrack_308" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_309.jpg" ,
		"id" : "bgTrack_309" 
	},

	
	{
		"src" : "assets/images/bg_track/bg_track_310.jpg" ,
		"id" : "bgTrack_310" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_311.jpg" ,
		"id" : "bgTrack_311" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_312.jpg" ,
		"id" : "bgTrack_312" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_313.jpg" ,
		"id" : "bgTrack_313" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_314.jpg" ,
		"id" : "bgTrack_314" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_315.jpg" ,
		"id" : "bgTrack_315" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_316.jpg" ,
		"id" : "bgTrack_316" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_317.jpg" ,
		"id" : "bgTrack_317" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_318.jpg" ,
		"id" : "bgTrack_318" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_319.jpg" ,
		"id" : "bgTrack_319" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_320.jpg" ,
		"id" : "bgTrack_320" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_321.jpg" ,
		"id" : "bgTrack_321" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_322.jpg" ,
		"id" : "bgTrack_322" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_323.jpg" ,
		"id" : "bgTrack_323" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_324.jpg" ,
		"id" : "bgTrack_324" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_325.jpg" ,
		"id" : "bgTrack_325" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_326.jpg" ,
		"id" : "bgTrack_326" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_327.jpg" ,
		"id" : "bgTrack_327" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_328.jpg" ,
		"id" : "bgTrack_328" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_329.jpg" ,
		"id" : "bgTrack_329" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_330.jpg" ,
		"id" : "bgTrack_330" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_331.jpg" ,
		"id" : "bgTrack_331" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_332.jpg" ,
		"id" : "bgTrack_332" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_333.jpg" ,
		"id" : "bgTrack_333" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_334.jpg" ,
		"id" : "bgTrack_334" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_335.jpg" ,
		"id" : "bgTrack_335" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_336.jpg" ,
		"id" : "bgTrack_336" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_337.jpg" ,
		"id" : "bgTrack_337" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_338.jpg" ,
		"id" : "bgTrack_338" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_339.jpg" ,
		"id" : "bgTrack_339" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_340.jpg" ,
		"id" : "bgTrack_340" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_341.jpg" ,
		"id" : "bgTrack_341" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_342.jpg" ,
		"id" : "bgTrack_342" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_343.jpg" ,
		"id" : "bgTrack_343" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_344.jpg" ,
		"id" : "bgTrack_344" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_345.jpg" ,
		"id" : "bgTrack_345" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_346.jpg" ,
		"id" : "bgTrack_346" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_347.jpg" ,
		"id" : "bgTrack_347" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_348.jpg" ,
		"id" : "bgTrack_348" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_349.jpg" ,
		"id" : "bgTrack_349" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_350.jpg" ,
		"id" : "bgTrack_350" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_351.jpg" ,
		"id" : "bgTrack_351" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_352.jpg" ,
		"id" : "bgTrack_352" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_353.jpg" ,
		"id" : "bgTrack_353" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_354.jpg" ,
		"id" : "bgTrack_354" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_355.jpg" ,
		"id" : "bgTrack_355" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_356.jpg" ,
		"id" : "bgTrack_356" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_357.jpg" ,
		"id" : "bgTrack_357" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_358.jpg" ,
		"id" : "bgTrack_358" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_359.jpg" ,
		"id" : "bgTrack_359" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_360.jpg" ,
		"id" : "bgTrack_360" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_361.jpg" ,
		"id" : "bgTrack_361" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_362.jpg" ,
		"id" : "bgTrack_362" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_363.jpg" ,
		"id" : "bgTrack_363" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_364.jpg" ,
		"id" : "bgTrack_364" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_365.jpg" ,
		"id" : "bgTrack_365" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_366.jpg" ,
		"id" : "bgTrack_366" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_367.jpg" ,
		"id" : "bgTrack_367" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_368.jpg" ,
		"id" : "bgTrack_368" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_369.jpg" ,
		"id" : "bgTrack_369" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_370.jpg" ,
		"id" : "bgTrack_370" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_371.jpg" ,
		"id" : "bgTrack_371" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_372.jpg" ,
		"id" : "bgTrack_372" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_373.jpg" ,
		"id" : "bgTrack_373" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_374.jpg" ,
		"id" : "bgTrack_374" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_375.jpg" ,
		"id" : "bgTrack_375" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_376.jpg" ,
		"id" : "bgTrack_376" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_377.jpg" ,
		"id" : "bgTrack_377" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_378.jpg" ,
		"id" : "bgTrack_378" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_379.jpg" ,
		"id" : "bgTrack_379" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_380.jpg" ,
		"id" : "bgTrack_380" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_381.jpg" ,
		"id" : "bgTrack_381" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_382.jpg" ,
		"id" : "bgTrack_382" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_383.jpg" ,
		"id" : "bgTrack_383" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_384.jpg" ,
		"id" : "bgTrack_384" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_385.jpg" ,
		"id" : "bgTrack_385" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_386.jpg" ,
		"id" : "bgTrack_386" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_387.jpg" ,
		"id" : "bgTrack_387" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_388.jpg" ,
		"id" : "bgTrack_388" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_389.jpg" ,
		"id" : "bgTrack_389" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_390.jpg" ,
		"id" : "bgTrack_390" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_391.jpg" ,
		"id" : "bgTrack_391" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_392.jpg" ,
		"id" : "bgTrack_392" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_393.jpg" ,
		"id" : "bgTrack_393" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_394.jpg" ,
		"id" : "bgTrack_394" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_395.jpg" ,
		"id" : "bgTrack_395" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_396.jpg" ,
		"id" : "bgTrack_396" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_397.jpg" ,
		"id" : "bgTrack_397" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_398.jpg" ,
		"id" : "bgTrack_398" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_399.jpg" ,
		"id" : "bgTrack_399" 
	},

	
	{
		"src" : "assets/images/bg_track/bg_track_400.jpg" ,
		"id" : "bgTrack_400" 
	},


	{
		"src" : "assets/images/bg_track/bg_track_401.jpg" ,
		"id" : "bgTrack_401" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_402.jpg" ,
		"id" : "bgTrack_402" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_403.jpg" ,
		"id" : "bgTrack_403" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_404.jpg" ,
		"id" : "bgTrack_404" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_405.jpg" ,
		"id" : "bgTrack_405" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_406.jpg" ,
		"id" : "bgTrack_406" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_407.jpg" ,
		"id" : "bgTrack_407" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_408.jpg" ,
		"id" : "bgTrack_408" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_409.jpg" ,
		"id" : "bgTrack_409" 
	},

	
	{
		"src" : "assets/images/bg_track/bg_track_410.jpg" ,
		"id" : "bgTrack_410" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_411.jpg" ,
		"id" : "bgTrack_411" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_412.jpg" ,
		"id" : "bgTrack_412" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_413.jpg" ,
		"id" : "bgTrack_413" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_414.jpg" ,
		"id" : "bgTrack_414" 
	},

	{
		"src" : "assets/images/bg_track/bg_track_415.jpg" ,
		"id" : "bgTrack_415" 
	},


];

loader = new createjs.LoadQueue(false);
loader.on('fileload' , handleFile);
loader.on('progress', handleProgress, this);
loader.addEventListener("complete" , loadingComplete);

loader.loadManifest(maniFest,true);

loader2 = new createjs.LoadQueue(false);
loader2.loadManifest(maniFest2,true);


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
		flag1.x =  $('#track_bg').width() * 2;
		flag1.y =   windowW / 3.93;
		win_name1.scaleX = win_name1.scaleY =  (windowW - (windowW / 1.55)) / bg.image.height;
		win_name1.x = flag1.x + 30;
		win_name1.y =  flag1.y + 3;

		flag2.scaleX = flag2.scaleY =  (windowW - (windowW / 1.5)) / bg.image.height;
		flag2.x =  $('#track_bg').width() * 2;
		flag2.y =   windowW / 3.55;
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

			var windowW = window.innerWidth;

			if (innerpos[0] == ranks[i]['position']) {
				createjs.Tween.get(ranks[i]['name'])
				.to({x: ($('#track_bg').width() / 1.38)}, 50, createjs.Ease.linear)

				createjs.Tween.get(ranks[i]['dog_name'])
				.to({x: ($('#track_bg').width() / 1.38)}, 50, createjs.Ease.linear)

			} else if (innerpos[1] == ranks[i]['position']) {
				createjs.Tween.get(ranks[i]['name'])
				.to({x: ($('#track_bg').width() / 1.63)}, 50, createjs.Ease.linear)

				createjs.Tween.get(ranks[i]['dog_name'])
				.to({x: ($('#track_bg').width() / 1.63)}, 50, createjs.Ease.linear)

			} else if (innerpos[2] == ranks[i]['position']) {
				createjs.Tween.get(ranks[i]['name'])
				.to({x: ($('#track_bg').width() / 2.01)}, 50, createjs.Ease.linear)

				createjs.Tween.get(ranks[i]['dog_name'])
				.to({x: ($('#track_bg').width() / 2.01)}, 50, createjs.Ease.linear)

			} else if (innerpos[3] == ranks[i]['position']) {
				createjs.Tween.get(ranks[i]['name'])
				.to({x: ($('#track_bg').width() / 2.7)}, 50, createjs.Ease.linear)

				createjs.Tween.get(ranks[i]['dog_name'])
				.to({x: ($('#track_bg').width() / 2.7)}, 50, createjs.Ease.linear)

			} else if (innerpos[4] == ranks[i]['position']) {
				createjs.Tween.get(ranks[i]['name'])
				.to({x: ($('#track_bg').width() / 3.98)}, 50, createjs.Ease.linear)

				createjs.Tween.get(ranks[i]['dog_name'])
				.to({x: ($('#track_bg').width() / 3.98)}, 50, createjs.Ease.linear)

			} else if (innerpos[5] == ranks[i]['position']) {
				createjs.Tween.get(ranks[i]['name'])
				.to({x: ($('#track_bg').width() / 7.5)}, 50, createjs.Ease.linear)

				createjs.Tween.get(ranks[i]['dog_name'])
				.to({x: ($('#track_bg').width() / 7.5)}, 50, createjs.Ease.linear)

			}


		}

		// console.log(rank[0]['name']['currentAnimation']);

		// createjs.Tween.get(dog_arr[]"rank")
		// .to({x: ($('#track_bg').width() / 7.5 )}, 500, createjs.Ease.linear)
	}
}


socket.on('loadDataGame', function(data){
	if (shouldStart) {

		if (data[0].rounds < 10 ) {
			count.text = "00"+data[0].rounds;
		}else {
			count.text = ""+(data[0].rounds + 1);
		}
	}


});

var num = 0;
var newnum;

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

function runTrack(num){

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

			if (num < 415) {
				num++;
				changeTrack(num);
			} else {

				setTimeout(function(){
					finish = true;
				},2500)
				setTimeout(function(){

					$('#track_bg').attr("src" , "../assets/images/bg_track/bg_track_415.jpg");
					imageBackground.alpha = 0;
				},5000);
				
				$('#track_bg').css('opacity' , 1);

			}
	}
}

	function changeTrack(num) {
		if (shouldStart) {
			
			imageBackground = new createjs.Bitmap(loader2.getResult("bgTrack_"+num));
			bgContainer.removeAllChildren();
			bgContainer.addChild(imageBackground);

			var windowW = window.innerWidth;
			imageBackground.scaleX = (windowW - (windowW / 5)) / bg.image.height;
			imageBackground.scaleY = (windowW - (windowW / 5)) / bg.image.height;
			stage.update();

			setTimeout(function(){
				return runTrack(num);
			},80)
		}
	}

// function getMove(){

// 	var max = $('#track_bg').width();
// 	return (Math.random() * 4) + 1.2;
// }



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


					$('#track_bg').css('filter' , 'grayscale(100%)');
					if (win1 == null) {


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

					} else if (win2 == null) {

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

					} else if (win3 == null) {

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
						wwin_name4.x = flag4.x + 30;
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
						wwin_name4.x = flag4.x + 30;
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
						wwin_name4.x = flag4.x + 30;
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