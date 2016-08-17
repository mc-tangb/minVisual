require.config({
	baseUrl:'js/lib',
	paths:{
		'jquery':'jquery/jquery-min',
		'bootstrap':'bootstrap/bootstrap.min',
		'underscore':'underscore/underscore-min',
		'backbone':'backbone/backbone-min',
		'bmap':'bmap/BMap-min',
		'mapv':'mapv/Mapv',
		'echarts':'echarts/echarts.min',
		'text': 'requirejs/text',
		'app': '../app',
	},
	shim:{
		'backbone':{
			deps:['jquery','underscore'],
			exports:'Backbone'
		},
		'mapv':{
			deps:['jquery','bmap'],
			exports:'Mapv'
		},
		'bootstrap':{
			deps:['jquery']
		},
		'jquery':{
			exports:'$'
		}
	}
});
require([
	'jquery',
	'bootstrap'
	],
	function($){
		
	}
);
