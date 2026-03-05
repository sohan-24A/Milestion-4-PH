// Machine id -> input value 

function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    // console.log(id,value);
    return value;
}

// Machine -> balance 
function getBalance(){
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    // console.log("current balance :", balance);
    return Number(balance)
}


// Machine value -> set Balance 

function setBalance(value){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}

// machine id > hide all > show id 

function showOnly(id){
    const addmoney = document.getElementById("add-money");
    const cashout = document.getElementById("cash-out");
    const Transaction = document.getElementById("history")
    const transfer = document.getElementById("transfer-money")
    const bonus = document.getElementById('Bonus-coupon')
    const payAmount = document.getElementById('pay-bill')


    // hide every one 
    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");
    Transaction.classList.add("hidden");
    transfer.classList.add('hidden')
    bonus.classList.add('hidden') 
    payAmount.classList.add('hidden')      

    // id's element show 
    const selected = document.getElementById(id);
    selected.classList.remove("hidden")
}


function getCurrentDateTime() {
    const now = new Date();

    const formatted = now.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    return formatted;
}

// Call function
// console.log(getCurrentDateTime());