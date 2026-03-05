console.log("Login functionalty comming");

document.getElementById("login-btn")
    .addEventListener("click",function(){
        // 1- get the mobile number ingput
        const numberInput = document.getElementById("input-number");
        const contactNumber = numberInput.value;
        // console.log(contactNumber);
        // 2 - get the pin 
        const inputPin = document.getElementById("input-pin")
        const pin = inputPin.value;
        // console.log(pin);
        // 3 -match pin & mobile number 
        if(contactNumber.length == 11 && pin.length == 4){
            // 3-1 true :::>> alert > homepage 
            alert("login Success")
            // window.location.replace("/home.html")
            window.location.assign("/home.html")
        }
        else{
        // 3-1 true :::>> alert > return
            alert("login Failed  ,Account number must be 11 digits long Pin numver must be 4 digits long")
            return;
        }
    })