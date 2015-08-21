App.Views.GraphView = Backbone.View.extend({
	el: '#graph',
	initialize: function() {
		console.log('reached graph view');
		console.log(this.model);
		this.renderGraph(this.model);
		this.renderC3Graph(this.model);
		this.renderLibraryGraph();
		this.renderNYCLandGraph();
	},
	renderGraph: function(data) {
		var years = data[1];
		var gdp = data[2];
		
		var y = d3.scale.linear().domain([0, d3.max(gdp)])
							.range([0,420]);

		d3.select('.chart')
			.selectAll('div')
			.data(gdp).enter()
			.append('div')
			.style('height', function(d) { return y(d/3) + 'px'; })
			.style('width', 5 + 'px');
			// .text(function(d) { return d; });
	},
	renderC3Graph: function(data) {
		var columnsArray = ['GDP - $ billion, yearly'];
		var xArray = ['Year'];
		var i = 0;
		var gdp = data[2];
		var length = gdp.length;
		console.log('gdp: ' + length);
		while (i < length) {
			var num = parseInt(gdp[i]);
			var x = parseInt(data[1][i]);
			columnsArray.push(num);
			xArray.push(x);
			i++;
		}
		console.log(columnsArray);
		var chart = c3.generate({
    data: {
    		x: 'Year',
        columns: [xArray,
        	columnsArray
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    },
    bindto: '.c3-bar-chart'
	});
	console.log('when does this appear?');
	console.log('does this appear?');
},
renderLibraryGraph: function() {
	var chart = c3.generate({
		data: {
			columns: [
				['Queens', 68],['Brooklyn', 69],['Staten Island', 16],['Bronx', 41],['Manhattan', 43]
			],
			type: 'donut',
			onclick: function (d, i) { console.log("onclick", d, i); },
	    onmouseover: function (d, i) { console.log("onmouseover", d, i); },
	    onmouseout: function (d, i) { console.log("onmouseout", d, i); }
		},
		donut: {
			title: 'NYC Libraries'
		},
		bindto: '.c3-library-chart'
	});
},
renderNYCLandGraph: function() {
	var chart = c3.generate({
		data: {
			columns: [
				['Queens', 178],['Brooklyn', 97],['Staten Island', 102],['Bronx', 57],['Manhattan', 33]
			],
			type: 'donut',
			onclick: function (d, i) { console.log("onclick", d, i); },
	    onmouseover: function (d, i) { console.log("onmouseover", d, i); },
	    onmouseout: function (d, i) { console.log("onmouseout", d, i); }
		},
		donut: {
			title: 'NYC sq mi'
		},
		bindto: '.c3-land-chart'
	});
}
});