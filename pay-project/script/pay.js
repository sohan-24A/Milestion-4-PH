document.getElementById("pay-money-btn")
    .addEventListener('click',function(){
        const selectToPay = getValueFromInput('select-to-pay')
        if(selectToPay == "Select a Bank"){
        alert("Please select a bank ");
        return ;
        }
        const accnum = getValueFromInput("biller-account-number");
        if(accnum.length != 11){
        alert("Invalid acc no, Account number must be 11 digits long");
        return;
        }
         const payAmount = getValueFromInput("pay-money-amount")
        const payMoney =  Number(payAmount)
        if(payMoney < 0){
        alert(" Invalid pay Amount")
        return;
        }
        const newBalance = getBalance() - payMoney
        if(newBalance < 0 ){
            alert(" Invalid pay amount ")
            return;
        }

        const pin = getValueFromInput("pay-money-pin");
        if(pin.length == 4){
        alert(`Pay Bill Success`)
        setBalance(newBalance)
        // console.log(selectToPay);

        const history = document.getElementById("history-container")
        const newHistory = document.createElement("div")
        newHistory.innerHTML = `
        <div class="Transaction-card p-5 bg-base-100 flex items-center gap-3">
             <div class="p-2 bg-slate-300 rounded-full">        
        <img class="w-[50px]" src="assets/opt-5.png" alt="">
         </div>
            Add Money Success from ${selectToPay} , Acc-no ${accnum} at ${getCurrentDateTime()}
        </div>
        `;

        history.append(newHistory);
        }
        else{
        alert("Invalid Pin , Pin number must be 4 digits long")
        return;
    }

    })