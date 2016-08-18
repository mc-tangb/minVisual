define(['jquery', 'underscore', 'backbone', './left_view'], 
function($, _, Backbone, left_view){
	var mainView = Backbone.View.extend({
		el:'#main',
		events:{

		},
		initialize: function(){

		},
		render: function(){
			var lview = new left_view();
			lview.render();
		}
	})
	return mainView;
})