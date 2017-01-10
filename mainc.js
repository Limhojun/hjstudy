/**
 - *
 + *
   */
  var HJ_Math = function(){
  	this.a = 5;
    this.b = 2;
  }
  HJ_Math.prototype.add = function (num){
    var a = this.a;
    var b = this.b;

    if(num == 1)
    {
      sum = a + b;
    }
    if(num == 2)
    {
      sum = b-a;
    }
  	console.log(sum);
  }
  var hjmath = new HJ_Math();
 hjmath.add(2);
