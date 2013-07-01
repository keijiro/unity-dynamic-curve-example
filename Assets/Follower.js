#pragma strict

var target : Movement;

function Update () {
	transform.position.x = target.curve.Evaluate(Time.time - 1.0);
}