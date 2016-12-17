function runCalculate() {
  var inputCal = 
      document.getElementById("startingAmount");
  var amount = inputCal.value;
      amount = parseFloat(amount);
  var inputRate = 
      document.getElementById("rateOfReturn");
  var rate = inputRate.value;
        rate = parseFloat(rate);
  var years = document.getElementById("yearsInvest").value;
      years = parseFloat(years);
  var pElem = document.getElementById("results_table");
  var pTable = "";
  var balance = amount;
  
  pTable += "<table><tr><th> Month </th> <th> Interest </th><th> Balance </th></tr>";
      for (var i = 1; i <= years*12; i++) {
        var interest = balance * ((rate / 100)/12);
            interest = Math.round(interest*100)/100;
            
            balance = balance + interest;
        pTable += "<tr><td>" + i + "</td><td>" + interest.toFixed(2) + "</td><td>" + balance.toFixed(2) + "</td></tr>";
 
      }
  pTable += "</table>";
  pElem.innerHTML = pTable;
      
      }


function runReset() {
    document.getElementById("results_table").innerHTML = "";
}
console.log(results_table);