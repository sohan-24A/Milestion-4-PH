// console.log("sohan");

document.getElementById("Send-btn").addEventListener('click',function(){
const userAccountNumber = getValueFromInput("input-number-transfar")
    if(userAccountNumber.length != 11){
            alert("Invalid acc no, Account number must be 11 digits long");
            return
        }
// console.log(userAccountNumber);
const transfarAmount = getValueFromInput('input-amount-transfar')
    const currentBalance = getBalance();
    const newBalance =currentBalance - Number(transfarAmount)
    if( newBalance < 0 ){
            alert("Invalid Amount");
            return;
        }

// console.log(transfarAmount);
const transfarPin = getValueFromInput('transfar-pin')
// console.log(transfarPin);

//  const pin = getValueFromInput("cashout-pin")
        if(transfarPin.length == 4){
            alert("Transfar Successfull ")
            setBalance(newBalance)

            
        const history = document.getElementById("history-container")
        const newHistory = document.createElement("div")
        newHistory.innerHTML = `
        <div class="Transaction-card p-5 bg-base-100 flex items-center gap-3">
         <div class="p-2 bg-slate-300 rounded-full">        
        <img class="w-[50px]" src="assets/opt-3.png" alt="">
         </div>
           Transfar ${transfarAmount} TAKA Success to ${userAccountNumber} , at ${getCurrentDateTime()}
        </div>
        `;
        history.append(newHistory);

        }
        else{
            alert("Invalid Pin , Pin number must be 4 digits long")
            return
        }

// const afterTransfarAmount = 

})
