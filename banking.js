// function doubleIt(num)
// {
//    const result=num*2;
//    return result;
// }
// const first=doubleIt(5)
// const second=doubleIt(7)

function getInputValue()
{
   const depositInput=document.getElementById('deposit-input');
   //  //take current input
    const depositAmountText=depositInput.value;
   const depositAmount=parseFloat(depositAmountText);
   depositInput.value='';
   return depositAmount;

}







document.getElementById('deposit-btn').addEventListener('click',function()
{
   //   const depositInput=document.getElementById('deposit-input');
   // //  //take current input
   //  const depositAmountText=depositInput.value;
   // const depositAmount=parseFloat(depositAmountText);

   const depositAmount= getInputValue();

    const depositTotal=document.getElementById('deposit-total');

    //take deposit field value
   
 const depositTotalText=depositTotal.innerText;
 const previousDepositTotal=parseFloat(depositTotalText);
 depositTotal.innerText=previousDepositTotal+depositAmount;

//   const depositTotalAmount=+parseFloat(depositTotal.innerText)
//  depositTotalAmount.innerText=depositTotalAmount

//ading deposit amount in balance

const balanceTotal=document.getElementById('balance-total')
const balanceTotalTest=balanceTotal.innerText;
const balanceTotalamount=parseFloat(balanceTotalTest);

balanceTotal.innerText=  balanceTotalamount+depositAmount;
 
 
 //clear input
 depositInput.value='';
 
   //console.log(depositTotal)
});
document.getElementById('withdraw-btn').addEventListener('click',function(){
   const withdrawInput=document.getElementById('withdraw-input')
   const withdrawAmountText=withdrawInput.value;
  const withdrawAmount= parseFloat(withdrawAmountText)

   const withdrawTotal=document.getElementById('withdraw-total')
   const previousWithdrawTotalText=withdrawTotal.innerText;
   const    previousWithdrawTotal=     parseFloat(previousWithdrawTotalText)

    withdrawTotal.innerText =   previousWithdrawTotal+ withdrawAmount;

    //reduce balance

    const balanceTotal=document.getElementById('balance-total')
    const balanceTotalTest=balanceTotal.innerText;
     const balanceTotalamount=   parseFloat(balanceTotalTest)
    balanceTotal.innerText= balanceTotalamount -withdrawAmount;
     

    withdrawInput.value=''
})