App.Views.HeaderView = Backbone.View.extend({
	el: 'header ul',
	initialize: function() {
		console.log('reached uptimeView');
		this.newColl();
		this.listenTo(this.collection, 'reset', this.splitColl);
		this.renderDate();
		setInterval(this.newColl, 600000);
	},
	newColl: function() {
		this.collection = new App.Collections.UptimeCollection();
		this.collection.fetch({ reset: true });
	},
	splitColl: function() {
		console.log('splitColl');
		this.collection.each(this.renderUptime, this);
	},
	renderUptime: function(data) {
		console.log('split collection');
		var now = data.toJSON().now.avg_speed;
		var past = data.toJSON().past.avg_speed;
		$('#past-speed span').text(parseInt(past).toFixed(2) + ' kB/s');
		$('#now-speed span').text(parseInt(now).toFixed(2) + ' kB/s');
	},
	renderDate: function() {
		var d = new Date();
		var day = d.getDate();
		var month = d.getMonth();
		var year = d.getFullYear();
		var date = month + '/' + day + '/' + year;
		this.$el.find('.date').text(date);
	}
});