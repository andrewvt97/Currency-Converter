     

     

// this program will use functions


document.getElementById("image1").src="uk.jpg";
document.getElementById("image2").src="canada.jpg";
document.getElementById("image3").src="europe.jpg";
document.getElementById("image4").src="india.jpg";
document.getElementById("image5").src="australia.jpg";
document.getElementById("image6").src="japan.jpg";
document.getElementById("image7").src="china.jpg";
document.getElementById("image8").src="russia.jpg";


document.getElementById("w1").innerHTML="Sterling Pound";

document.getElementById("w2").innerHTML="Canadian Dollars";

document.getElementById("w3").innerHTML="Euros";

document.getElementById("w4").innerHTML="Indian Rupees";

document.getElementById("w5").innerHTML="Australian Dollar";

document.getElementById("w6").innerHTML="Japanese Yen";

document.getElementById("w7").innerHTML="Chinese Yuan";

document.getElementById("w8").innerHTML="Russian Rubles";


function convert(){
//variables
var n1=document.getElementById("txtN1").value;

// need to convert variables from string to number

var number1=parseFloat(n1);


var total=Math.round(number1*.73*100)/100;

var total2=Math.round(number1*1.24*100)/100;

var total3=Math.round(number1*0.86*100)/100;

var total4=Math.round(number1*74.87*100)/100;

var total5=Math.round(number1*1.33*100)/100;

var total6=Math.round(number1*113.48*100)/100;

var total7=Math.round(number1*6.4*100)/100;

var total8=Math.round(number1*70.21*100)/100;




	document.getElementById("Currency[0]").innerHTML= "£" + total;

	document.getElementById("Currency[1]").innerHTML= "$" + total2;

	document.getElementById("Currency[2]").innerHTML= "€" + total3;

	document.getElementById("Currency[3]").innerHTML= "₹" + total4;
	
	document.getElementById("Currency[4]").innerHTML= "$" + total5;
	
	document.getElementById("Currency[5]").innerHTML= "¥" + total6;
	
	document.getElementById("Currency[6]").innerHTML= "¥" + total7;
	
	document.getElementById("Currency[7]").innerHTML= "₽" + total8;


}


function newEntry(){

	
	document.getElementById("txtN1").value="";

for (let i=0;i<8; i++)

	document.getElementById("Currency[i]").innerHTML= "Amount =";
	
	
}
