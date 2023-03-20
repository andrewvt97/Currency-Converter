     

     

// this program will use functions


// document.getElementById("image1").src="./images/uk.jpg";
// document.getElementById("image2").src="./images/canada.jpg";
// document.getElementById("image3").src="./images/europe.jpg";
// document.getElementById("image4").src="./images/india.jpg";
// document.getElementById("image5").src="./images/australia.jpg";
// document.getElementById("image6").src="./images/japan.jpg";
// document.getElementById("image7").src="./images/china.jpg";
// document.getElementById("image8").src="./images/russia.jpg";


// document.getElementById("w1").innerHTML="Sterling Pound";

// document.getElementById("w2").innerHTML="Canadian Dollars";

// document.getElementById("w3").innerHTML="Euros";

// document.getElementById("w4").innerHTML="Indian Rupees";

// document.getElementById("w5").innerHTML="Australian Dollar";

// document.getElementById("w6").innerHTML="Japanese Yen";

// document.getElementById("w7").innerHTML="Chinese Yuan";

// document.getElementById("w8").innerHTML="Russian Rubles";


function convert(){
//variables
const moneyToConvert =document.getElementById("american-dollar").value;
const americanDollar=parseFloat(moneyToConvert); // need to convert variables from string to number

const numofCountries=8; // number of countries
const exchangeRate=[0.84,1.36,0.94,82.93,1.49,136.48,6.96,76.02]; // exchange rate for each country
const totals = []; // array to store the totals

// loop to calculate the totals
for (let i=0; i<numofCountries; i++){
	totals.push(Math.round(americanDollar*exchangeRate[i]*100)/100);
}

// var total=Math.round(number1*.84*100)/100;

// var total2=Math.round(number1*1.36*100)/100;

// var total3=Math.round(number1*0.94*100)/100;

// var total4=Math.round(number1*82.93*100)/100;

// var total5=Math.round(number1*1.49*100)/100;

// var total6=Math.round(number1*136.48*100)/100;

// var total7=Math.round(number1*6.96*100)/100;

// var total8=Math.round(number1*76.02*100)/100;


// display the totals

for (let i= 0; i<numofCountries; i++){
	
}


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
