document.getElementById('Bonus-btn')
    .addEventListener('click', function(){

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
    // console.log(formatted);
        const bonusCoupon = getValueFromInput('input-bonus-pin')
        if(bonusCoupon.length == 4 ){
            alert("Success Your Bonus Coupon");
        // return;
        const newBalance =getBalance() + Number(2000)
        // alert(`Add Money Success   at ${new Date().toDateString()}`)
        setBalance(newBalance)
        const history = document.getElementById("history-container")
        const newHistory = document.createElement("div")
        newHistory.innerHTML = `
        <div class="Transaction-card p-5 bg-base-100 flex gap-3 items-center">
            <div class="p-2 bg-slate-300 rounded-full">        
        <img class="w-[50px]" src="assets/opt-4.png" alt="">
         </div>
            After your balance ${newBalance} at ${getCurrentDateTime()}
        </div>
        `;

        history.append(newHistory);
        } 
        else{
            alert("Invalid Pin , Pin number must be 4 digits long")
        }   
    })