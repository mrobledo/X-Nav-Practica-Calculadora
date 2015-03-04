

$(document).ready(function() {
	var op1="";
	var op2="";
	var opera="";
	var opBool = true;

	function clear(){
		op1 = "";
		op2 = "";	
		opera = "";
		opBool = true;
		$("#display").html("");
	};

	function guardarOp(tecla){
		if (opBool){
			op1 += tecla;
			$("#display").html(op1);
		}else{
			op2 += tecla;
			$("#display").html(op2);
		}
	};


	function calcular(){
		var result;
		switch (opera){
			case "+":
				result = parseFloat(op1) + parseFloat(op2); 
				break;
			case "-":
				result = parseFloat(op1) - parseFloat(op2);
				break;
			case "x":
				result = parseFloat(op1) * parseFloat(op2);
				break;
			case "/":
				result = parseFloat(op1) / parseFloat(op2);
				break;
		}
		clear();
		$("#display").html(result);
		
	};

	 $(".boton").click(function() {

		var tecla = $(this).html(); 
console.log(tecla);
		switch (tecla){
			case "+":
				opera = tecla;
				$("#display").html("");
				opBool = false;
				break;
			case "-":
				opera = tecla;
				$("#display").html("");
				opBool = false;
				break;
			case "x":
				opera = tecla;
				$("#display").html("");
				opBool = false;
				break;
			case "/":
				opera = tecla;
				$("#display").html("");
				opBool = false;
				break;
			case "ac":
				$("#display").html("");
				clear();
				break;
			case "del":
				if(opBool){
					op1 = "";
				}else{
					op2 = "";
				}
				$("#display").html("");
				break;
			case "=":
				if ((op1=== "") || (op2 === "" || (opera === ""))){
					 alert("Operacion incorrecta vuelva a empezar");
					clear();
				}else{
					calcular();
				}
				break;
			default:
				guardarOp(tecla);
				break;	
			
		}
	});
	$(window).keypress(function(tecla) {
		var key = "#"+tecla.which;
console.log(key);
		$(key).trigger("click");

	});
});
