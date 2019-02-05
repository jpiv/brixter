// Number of points(resolution)
public var res: int = 2;

function Start() {
}

function Update() {
	render();
}

function render() {
	var arc: Aimer = GameObject
		.Find('World/Aimer')
		.GetComponent.<Aimer>();
	var lineRenderer = GetComponent.<LineRenderer>();
	var points: Vector3[] = new Vector3[res];

	lineRenderer.positionCount = res;
	if(Input.GetMouseButton(0)) {
		var mousePos: Vector3 = Input.mousePosition;
		var xScale = Screen.width / (Camera.main.orthographicSize * 2 * Camera.main.aspect);
		var yScale = Screen.height / (Camera.main.orthographicSize * 2);
		// Mouse (x, y)
		var mx = (mousePos.x / xScale) - Camera.main.orthographicSize * Camera.main.aspect;
		var my = mousePos.y / yScale;
		var pi = Mathf.PI;
		var mouseX = Mathf.Max(0, Mathf.Min(Screen.width, mousePos.x));
		var theta = Mathf.Atan(my / mx);
		var inverter = theta < 0 ? -1 : 1;
		// Arc (x, y)
		var ax = inverter * arc.xDiam * Mathf.Cos(theta);
		var ay = inverter * arc.yDiam * Mathf.Sin(theta);
		points[0] = new Vector3(ax, ay, 0);
		var worldPointX: Vector2 =
			transform.TransformPoint(new Vector3(ax, ay, 0));
		var worldPointY: Vector2 =
			transform.TransformPoint(new Vector3(mx, my, 0));
		var rayHit: RaycastHit2D = Physics2D.Raycast(
			new Vector2(worldPointX.x, worldPointX.y),
			new Vector2(worldPointY.x - worldPointX.x, worldPointY.y - worldPointX.y)
		);
		var hitPoint: Vector3 = transform.InverseTransformPoint(rayHit.point);
		points[1] = new Vector3(hitPoint.x, hitPoint.y, 0);
		lineRenderer.SetPositions(points);
	}
}
