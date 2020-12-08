// create an array with nodes
var nodes = new vis.DataSet([
	{ id: 1, label: "x", level: 0, color: 'white' },
	{ id: 2, label: "y", level: 0, color: 'white' },
	{ id: 3, label: "3", level: 1 },
	{ id: 4, label: "5", level: 1},
	{ id: 5, label: "3x + 5y", level: 2, color: 'white' },
]);

// create an array with edges
var edges = new vis.DataSet([
	{ from: 1, to: 3, color: 'black' },
	{ from: 2, to: 4, color: 'black' },
	{ from: 3, to: 5 },
	{ from: 4, to: 5 },
]);

// create a network
var container = document.getElementById("graph");
var data = {
	nodes: nodes,
	edges: edges,
};
var options = {
	layout: {
		hierarchical: {
			enabled: true,
			direction: 'LR'
		}
	}
};

var network = new vis.Network(container, data, options);

setInterval(() => {
	var a = Math.floor(Math.random() * 10);
	var b = Math.floor(Math.random() * 10);

	nodes.updateOnly({ id: 1, label: a.toString() });
	nodes.updateOnly({ id: 2, label: b.toString() });
}, 3000);
