// const sohan  =document.querySelector('#sohana')

document.getElementById("add-money-btn").addEventListener("click",function(){
    // console.log("sohan");
    //  1 - bank account get 
    const bankAccount = getValueFromInput("add-money-bank")
    if(bankAccount == "Select a Bank"){
        alert("Please select a bank ");
        return ;
    }
    // 2 - get bank account number 
    const accno = getValueFromInput("add-money-number");
    if(accno.length != 11){
        alert("Invalid acc no, Account number must be 11 digits long")
        return;
    }

    // 3 - get ammount number
    const amount = getValueFromInput("add-money-amount")
    const addmoney =  Number(amount)
    if(addmoney < 0){
        alert(" Invalid Add Amount")
        return;
    }
    const newBalance = getBalance() + addmoney
    // console.log(newBalance);
    const pin = getValueFromInput("add-money-pin");
    if(pin.length == 4){
        alert(`Add Money Success `)
        setBalance(newBalance)

        const history = document.getElementById("history-container")
        const newHistory = document.createElement("div")
        newHistory.innerHTML = `
        <div class="Transaction-card p-5 bg-base-100 flex items-center gap-3">
         <div class="p-2 bg-slate-300 rounded-full">        
        <img class="w-[50px]" src="assets/opt-1.png" alt="">
         </div>
            Add Money Success from ${bankAccount} , Acc-no ${accno} at ${getCurrentDateTime()}
        </div>
        `;

        history.append(newHistory);
    }
    else{
        alert("Invalid Pin , Pin number must be 4 digits long")
        return;
    }

    })