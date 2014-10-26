window.onload=function() {

	var w = $('.nav-box').width();
	var h = ($('.nav-box').height())-($('.nav-container').height());

	var color = d3.scale.category10();

	var dataset = {
		nodes: []
	};

	for(var i=0; i<20; i++) {
		dataset.nodes.push({
            radius: ((Math.random()*20) + 5)
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
                console.log(d.radius);
                return d.radius;
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

        force.alpha(0.2);

		nodes.attr({
            r: function(d) {
                d.radius = d.radius*1.005;

                if(d.radius>150) {
                    d.radius = 150;
                }
                return d.radius;
            },
			cx: function(d) {
				return d.x;
			},
			cy: function(d) {

                if((d.y-(d.radius/2))>(h+20)) {
                    d.radius = ((Math.random()*10) + 5);
                    d.y = d.py = -100;
                    d.x = d.px = Math.random()*w;
                }

                d.y = (d.y + 0.12);
				return d.y;
			}
		})
	})
}