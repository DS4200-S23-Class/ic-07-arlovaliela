/* 
ic-07 
*/

const FRAME_HEIGHT = 200;
const FRAME_WIDTH = 500;
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50}

const data = [55000, 48000, 27000, 66000, 90000];

const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right 


console.log('working')


const FRAME3 = 
d3.select("#vis1")
	.append("svg")
		.attr("height", FRAME_HEIGHT)
		.attr("width", FRAME_WIDTH)
		.attr("class", "frame");

// scaling functions

const MAX_X = d3.max(data, (d) => {return d;})
console.log("Max X: " + MAX_X)

// scale function
const X_SCALE = d3.scaleLinear()
					.domain([0, (MAX_X + 10000)])
					.range([0, VIS_WIDTH]);

const Y_SCALE = d3.scaleLinear()
					.domain([d3.min(data), d3.max(data)])
					.range([0, VIS_WIDTH]);

FRAME3.selectAll("points")
		.data(data)
		.enter()
		.append("circle")
			.attr("cx", (d) => {
				return (X_SCALE(d) + MARGINS.left)
			})
			.attr("cy", (d) => {
				return (Y_SCALE(d) + MARGINS.left)
			})
			.attr("r", 10)
			.attr("class", "point");

var scale = d3.scaleLinear()
				.domain([d3.min(data), d3.max(data)])
				.range([FRAME_HEIGHT - MARGINS.top,0]);

var y_axis = d3.axisLeft().scale(scale);
// add an axis
FRAME3.append("g")
		.attr("transform", "translate(50,10)")
		.call(y_axis);