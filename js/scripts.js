var operacion=prompt('ingrese operacion');
var resul;

if (operacion=="/"){
	do {
		var num1=prompt('ingrese numero 1');
		var num2=prompt('ingrese numero 2');
	} while (num1==0||num2==0);
	resul=num1/num2;
} else {
	var num1=prompt('ingrese numero 1');
	var num2=prompt('ingrese numero 2');
	if (operacion=="*"){
		resul=num1*num2;
	} else if (operacion=="+") {
		resul=num1+num2;
	} else if (operacion=="-") {
		resul=num1-num2;
	}
}

alert(resul);


