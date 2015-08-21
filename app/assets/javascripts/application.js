// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require underscore
//= require backbone
//= require handlebars
//= require_self
//= require_tre	e ./backbone/routers
//= require_tree ./backbone/models
//= require_tree ./backbone/collections
//= require_tree ./backbone/views
//= require_tree ./templates
//= require_tree .
var App = {
	Models: {}, 
	Collections: {}, 
	Views: {}, 
	Routers: {}
};

$(function(){
	App.headerView = new App.Views.HeaderView({
		success: function() {
			App.graph = new App.Models.Graph({
				success: function() {
					console.log('got graph info');
					// App.graphView = new App.Views.GraphView({ model: App.graph });
				}
			});
		}
	});
	
	//Grabs US.gov data for the graph
	$.get('projects/').done(function(data){
		App.graphView = new App.Views.GraphView({ model: data });
		// graphTest2(data);
	});
});

function renderPost(data) {
	$('body').append(data);
	console.log(data);
}


////// Original interactive graph ////////
// function makeGraph(data) {
// 	var chart;
// 	var years = data[1];
// 	var gdp = data[2];
// 	// var width = 100%;
// 	// var height = 600;
// 	console.log('years: ' + years);
// 	console.log('gdp: ' + gdp);
// 	chart = nv.models.scatterChart()
// 						.showDistX(true)
// 						.showDistY(true)
// 						.duration(300)
// 						.color(d3.scale.category10().range());

// 	chart.dispatch.on('renderEnd', function() {
// 		console.log('render complete');
// 	});

// 	chart.xAxis.tickFormat(d3.format('4f'));
// 	chart.yAxis.tickFormat(d3.format('.02f'));

// 	d3.select('#graph svg')
// 		.datum(nv.log(processData(years,gdp)))
// 		.call(chart);

// 	nv.utils.windowResize(chart.update);
// 	chart.dispatch.on('stateChange', function(e) { 
// 			nv.log('newState:', JSON.stringify(e));
// 	});
// }

//matching the x and y coordinates
// function processData(x,y) {
// 	var combo_array = [];
// 	var total = 0;
// 	shapes = ['circle'];
// 	$.each(y,function() {
// 	    total += this;
// 	});

// 	combo_array.push({
// 		key: 'GDP',
// 		values: []
// 	});
// 	console.log('combo_array: ' + combo_array);
// 	for (var i = 0; i < y.length; i++) {
// 		combo_array[0].values.push({
// 			x: x[i],
// 			y: y[i],
// 			size: Math.random(),
// 			shape: shapes[i % shapes.length]
// 		});
// 	}
// 	return combo_array;
// }

//////////////////////////////////////////

// I started creating a d3.js graph from 
// scratch and then realized there were 
// more interactive options like nvd3.js

//////////////////////////////////////////

	// var margin = {top: 20, right: 20, bottom: 30, left: 40},
	// width = 960 - margin.left - margin.right,
	// height = 500 - margin.top - margin.bottom;

	// var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);
	// var y = d3.scale.ordinal().rangeRound([height, 0]);

	// var color = d3.scale.ordinal().range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

	// var xAxis = d3.svg.axis().scale(x).orient('bottom');
	// var yAxis = d3.svg.axis().scale(y).orient('left').tickFormat(d3.format('.2s'));

	// var svg = d3.select('body').append('svg').attr('width', width + margin.left + margin.right)
	// 																					.attr('height',  height + margin.top + margin.bottom)
	// 																					.append('g')
	// 																					.attr('transform', 'translate(' margin.left + ',' + margin.top +  ')');

	// d3.data(data, function(data) {
	// 	color.domain(d3.keys(data[0]).filter(function(key) { return key !== 'Year'; }));

	// 	data.forEach(function(d) {
	// 		var y0 = 0;
	// 		d.years = color.domain().map(function(name) { 
	// 			return { name: name, y0: y0, y1: y1 += +d[name] };
	// 		});
	// 		d.total = d.years[d.years.length - 1].y1;
	// 	});
			
	// 	data.sort(function(a,b) { return b.total - a.total; });

	// 	x.domain(data.map(function(d) { return d.+++++++ }))
	// }