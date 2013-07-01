#pragma strict

var curve : AnimationCurve;

function Start () {
	curve = new AnimationCurve();
}

function Update () {
	transform.position.x += 0.5 * Input.GetAxis("Horizontal");
	curve.AddKey(Time.time, transform.position.x);
}
