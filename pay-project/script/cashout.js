document.getElementById("cashout-btn")
    .addEventListener("click", function(){
        // 1- get the agent number & validate 
        const cashoutNumber = getValueFromInput("cashout-number");
        if(cashoutNumber.length != 11){
            alert("Invalid acc no, Account number must be 11 digits long")
            return
        }
        // 2- get the amount 
        const cashoutAmount = getValueFromInput("cashout-amount");
        

        const currentBalance = getBalance();

        // 4 calculate Balance  
        const newBalance =currentBalance - Number(cashoutAmount)
        // console.log(newBalance);
        if( newBalance < 0 ){
            alert("Invalid Amount");
            return;
        }
        const pin = getValueFromInput("cashout-pin")
        if(pin.length == 4){
            alert("Cashout Successfull ")
            setBalance(newBalance)

            
        const history = document.getElementById("history-container")
        const newHistory = document.createElement("div")
        newHistory.innerHTML = `
        <div class="Transaction-card p-5 bg-base-100 flex items-center gap-3">
        <div class="p-2 bg-slate-300 rounded-full ">        
        <img class="w-[50px]" src="assets/opt-2.png" alt="">
         </div>
           Cashout ${cashoutAmount} TAKA Success to ${cashoutNumber} , at ${getCurrentDateTime()}
        </div>
        `;

        history.append(newHistory);

        }
        else{
            alert("Invalid Pin , Pin number must be 4 digits long")
            return
        }
     

    })



// document.getElementById("cashout-btn")
//     .addEventListener("click", function(){
//         // 1- get the agent number & validate 
//         const cashoutNumberInput = document.getElementById("cashout-number");
//         const cashoutNumber = cashoutNumberInput.value;
//         if(cashoutNumber.length !=11){
//             alert("Invalid Agent Number");
//             return
//         }
//         // console.log(cashoutNumber);

//         // 2- get the amount , validate , convert to Number 
//         const cashoutAmountInput = document.getElementById("cashout-amount")
//         const cashoutAmount = cashoutAmountInput.value;
//         // console.log(cashoutAmount);

//         // 3- get the current Balance , validate , convert to number 
//         const balanceElement = document.getElementById("balance");
//         const balance = balanceElement.innerText;
//         // console.log(balance);
//         // 4- Calculate new Balance 
//         const newBalance = Number(balance) - Number(cashoutAmount)
//         if(newBalance < 0){
//             alert("Invalid Amount");
//             return
//         }
//         //  5- Get the pin and verify 

//         const cashoutPinInput = document.getElementById("cashout-pin");
//         const pin = cashoutPinInput.value;
//         if(pin === '1234'){
//         //  5-1 true :: show an alert  > set balance 
//         alert("Cashout successfull")
//         console.log("New balance :", newBalance);
//         balanceElement.innerText=newBalance
//         }
//         else{
//         // 5-2 truw:: show an error alert > return 
//             alert("inavlid Pin ")
//             return
//         }
//     })
