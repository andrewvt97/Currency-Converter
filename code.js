// this program will use functions

Wscript.Echo("image1").src="uk.jpg";
Wscript.Echo("image2").src="canada.jpg";
Wscript.Echo("image3").src="europe.jpg";
Wscript.Echo("image4").src="india.jpg";
Wscript.Echo("image5").src="australia.jpg";
Wscript.Echo("image6").src="japan.jpg";
Wscript.Echo("image7").src="china.jpg";
Wscript.Echo("image8").src="russia.jpg";


Wscript.Echo("w1").innerHTML="Sterling Pound";

Wscript.Echo("w2").innerHTML="Canadian Dollars";

Wscript.Echo("w3").innerHTML="Euros";

Wscript.Echo("w4").innerHTML="Indian Rupees";

Wscript.Echo("w5").innerHTML="Australian Dollar";

Wscript.Echo("w6").innerHTML="Japanese Yen";

Wscript.Echo("w7").innerHTML="Chinese Yuan";

Wscript.Echo("w8").innerHTML="Russian Rubles";


function convert(){
//variables
var n1=Wscript.Echo("txtN1").value;

// need to convert variables from string to number

var number1=parseFloat(n1);


var total=Math.round(number1*.77*100)/100;

var total2=Math.round(number1*1.31*100)/100;

var total3=Math.round(number1*0.9*100)/100;

var total4=Math.round(number1*71.04*100)/100;

var total5=Math.round(number1*1.46*100)/100;

var total6=Math.round(number1*108.43*100)/100;

var total7=Math.round(number1*7.08*100)/100;

var total8=Math.round(number1*63.9*100)/100;




	Wscript.Echo("w9").innerHTML= "£" + total;

	Wscript.Echo("w10").innerHTML= "$" + total2;

	Wscript.Echo("w11").innerHTML= "€" + total3;

	Wscript.Echo("w12").innerHTML= "₹" + total4;
	
	Wscript.Echo("w13").innerHTML= "$" + total5;
	
	Wscript.Echo("w14").innerHTML= "¥" + total6;
	
	Wscript.Echo("w15").innerHTML= "¥" + total7;
	
	Wscript.Echo("w16").innerHTML= "₽" + total8;


}
