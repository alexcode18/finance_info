App.Collections.UptimeCollection = Backbone.Collection.extend({
	model: App.Models.Uptime,
	url: '/uptimes',
	initialize: function() {
		console.log('created a new uptime collection');
	}
});