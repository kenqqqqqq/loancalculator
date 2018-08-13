// listen for submit
  document.getElementById('loan-form').addEventListener('submit', (e)=> {
    calculateResults();

    // hide results

    // show progressbar
      document.querySelector('.progress').style.display = "block";       

      document.addEventListener('DOMContentLoaded', ()=> {

      });

    e.preventDefault();
  });

  // calculate results function
  function calculateResults() {

  // get Loan Calculator heading UI variables
    const inputLoan = document.getElementById('loan');
    const inputInterest = document.getElementById('interest');
    const inputYrToPay = document.getElementById('yrtopay');
    const btnCalculate = document.querySelector('.btn');

  // get Results heading UI variables
    const monthlyPayment = document.getElementById('mpayment');
    const totalPayment = document.getElementById('tpayment');
    const totalInterest = document.getElementById('tinterest');
    const resetCalculation = document.querySelector('.reset');

   /** parse or convert in a number type the value of "amount,interest,yearstopay"
   *  interest is calculate as divide 100 and divide by 12 
   * years to pay for payment is multiplied by 12
  **/
    const loan = parseFloat(inputLoan.value);
    const interest = parseFloat(inputInterest.value)/ 100 / 12;
    const yearsToPay = parseFloat(inputYrToPay.value) * 12;

 /** compute monthly payment
  *  use Math.pow -- google on how to use this 
  */
  const x = Math.pow(1 + interest, yearsToPay);
  const monthly = (loan * x * interest) / (x - 1);

  // validate if the monthly payment is finite use isFinite predefined method in javascript  
  if (isFinite(monthly)){

    // set the value of montlypayment,totalpayment to monthly result with a decimal places of two
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * yearsToPay).toFixed(2);
    totalInterest.value = ((monthly * yearsToPay) - loan).toFixed(2);

     // display the block of results
     setTimeout(function(){ 
      document.querySelector('.card-action').style.display = "block"; 
      }, 2000);

    // hide the progress bar
    setTimeout(function(){
      document.querySelector('.progress').style.display = "none"; 
     }, 2000);

  }else{
    // call a function that showError , make sure to create the function
    showError();
  }
}

// show error function
function showError() {

  const error = new Error("Impossible to compute");
  
  // hide progress bar 
  setTimeout(function(){
    document.querySelector('.progress').style.display = "none"; 
   }, 2000);

   // show div error
   setTimeout(function(){ 
    divError.style.display = "block"; 
    }, 2000);

  // get the div error element
  const divError = document.querySelector('.div-error');

  // create an element div
  const div = document.createElement('div');

  // add class on the div select on masterializecss
  div.className = '#e0f2f1 teal lighten-5';

  // use card and span heading to display the message
  const span = document.createElement('span');

  // append div to diverror
  divError.appendChild(div);

  // append span to div
  div.appendChild(span);

  // create a textcontent on it
  span.textContent = error;

  // insert error above heading


  // clear error after 3 seconds using setTimeout and execute remove method on the function clear error
  setTimeout(function(){
    document.querySelector('.div-error').style.display = "none"; 
  }, 3000);
  
}

  // clear error function
  function clearError(){
    document.querySelector('.div-error').remove();
}