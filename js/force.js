window.onload=function() {

	var w = $('.nav-box').width();
	var h = ($('.nav-box').height())-($('.nav-container').height());

	var color = d3.scale.category10();

	var dataset = {
		nodes: []
	};

	for(var i=0; i<20; i++) {
		dataset.nodes.push({
            number: i
        });
	}

	var force = d3.layout.force()
		.nodes(dataset.nodes)
		.size([w,h])
        .gravity(-0.001)
		.start();

	var svg = d3.select(".nav-box")
		.append("svg")
		.attr({
			width: w,
			height: h,
			id: "canvas"
		})
		.style({
			//"background-color": "#FFFFF0"
		});

	var nodes = svg.selectAll("circle")
		.data(dataset.nodes)
		.enter()
		.append("circle")
		.attr({
			r: function(d) {
                return (Math.random()*30) + 5;
			},
            cx: function(d) {
                d.x = d.px = (Math.random()*w);
            }
		})
		.style("fill", function(d, i) {
				return color(i);
		})
		.call(force.drag);

	force.on("tick", function(tick) {

        force.alpha(0.1);

		nodes.attr({
			cx: function(d) {
                if(d.x<=0 || d.x>=w) {
                    d.x = d.px = Math.random()*w;
                    d.y = d.py = -50;
                }
				return d.x;
			},
			cy: function(d) {

                if(d.y>=h) {
                    d.y = d.py = -50;
                }

                d.y = (d.y + 0.1);
				return d.y;
			}
		})
	})
}