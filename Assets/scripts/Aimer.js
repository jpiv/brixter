// Diameter
public var xDiam: float = 1;
public var yDiam: float = 1;
// Number of points(resolution)
public var res: int = 10;
public var points: Vector3[];

function Start() {
	render();
}

function render() {
	var lineRenderer = GetComponent.<LineRenderer>();
	points = new Vector3[res];
	lineRenderer.positionCount = res;
	for(var i: int = 0; i < res; i++) {
		var pi = Mathf.PI;
		var angle = parseFloat(i) / (res - 1) * pi;
		var x = xDiam * Mathf.Cos(angle);
		var y = yDiam * Mathf.Sin(angle);
		points[i] = new Vector3(x, y, 0);
	}
	lineRenderer.SetPositions(points);
}
