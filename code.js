

const idNames = ["british-currency","canadian-currency","european-currency","indian-currency","australian-currency","japanese-currency","chinese-currency","russian-currency"] 
const numofCountries=8; // number of countries
const exchangeRate=[0.84,1.36,0.94,82.93,1.49,136.48,6.96,76.02]; // exchange rate for each country
const currencyTokens = ["£","$","€","₹","$","¥","¥","₽"]; // currency tokens for each country

// function to convert the money
function convert(){
//variables
	const moneyToConvert =document.getElementById("american-dollar").value;
	if (moneyToConvert==="")
	{
		moneyToConvert=0;
	}
	const americanDollar=parseFloat(moneyToConvert); // need to convert variables from string to number

	const totals = []; // array to store the totals

	// loop to calculate the totals
	for (let i=0; i<numofCountries; i++){
		totals.push((Math.round(americanDollar*exchangeRate[i]*100)/100).toFixed(2));
	}

	// loop to display the totals
	for (let i= 0; i<numofCountries; i++){
		document.getElementById(idNames[i]).innerHTML= currencyTokens[i] + totals[i];
		
	}


}


function newEntry(){

	
	document.getElementById("american-dollar").value="";

	for (let i=0;i<numofCountries; i++) {
		document.getElementById(idNames[i]).innerHTML= "Amount =";
	}
	
}
