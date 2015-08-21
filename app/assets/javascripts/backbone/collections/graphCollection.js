App.Collections.GraphCollection = Backbone.Collection.extend({
	model: App.Models.Graph,
	url: '/projects',
	initialize: function() {
		console.log('created a new graph collection');
	}
})