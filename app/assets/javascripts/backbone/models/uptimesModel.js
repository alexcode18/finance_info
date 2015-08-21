App.Models.Uptime = Backbone.Model.extend({
	urlRoot: '/uptimes',
	initialize: function(){
		console.log('created a new uptimes model');
	}
})