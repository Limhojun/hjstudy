/**
 *
 */
var HJ_Math = function(){
	this.a = 5;
	this.b = 3;
}
HJ_Math.prototype.add = function(num){
	var a = this.a;
	var b = this.b;
	var sum = 0;

	if(num == 1)
		{
			sum = a + b ;
		}
	if(num == 2)
		{
			sum = a - b;
		}
	console.log(sum);
}
var hjmath = new HJ_Math();
hjmath.add(1);
