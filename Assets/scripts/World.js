public var brickPre: GameObject;
private var bricks: Array = new Array();
// screen height
public var sh: float;
// screen width
public var sw: float;

function Start() {
	sh = Camera.main.orthographicSize * 2;
	sw = Camera.main.orthographicSize * 2 * Camera.main.aspect;
	transform.position.x = -sw / 2;
	renderLevel();
}

private function renderLevel() {
	var cols = 6;
	var rows = 5;
	for(var col = 0; col < cols; col++) {
		for(var row = 0; row < rows; row++) {
			var brick = Instantiate(brickPre, transform);
			// brick width
			var bw = brick.GetComponent.<Renderer>().bounds.size.x;
			// brick height
			var bh = brick.GetComponent.<Renderer>().bounds.size.y;
			// target width
			var width =  sw / cols;
			// Debug.Log(width + ' ' + sw);
			// target  height
			// TODO
			var bxs = width / bw;
			var x = col * width;
			brick.transform.localScale.x = bxs;
			brick.transform.localPosition = new Vector3(x, sh - bh * row, 0);
			bricks.push(brick);
		}
	}
}
