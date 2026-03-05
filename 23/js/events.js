        
        //  Option 2 : 
        function makeYellow (){
            document.body.style.backgroundColor = 'yellow';
        }
        function makeRed(){
            document.body.style.backgroundColor = 'red'
        }

// Option 3 : get elements by id set onclick 
const btnMakeBlue = document.getElementById('btn-make-blue');
// console.log(btnMakeBlue);
btnMakeBlue.onclick = function makeBlue(){
    document.body.style.backgroundColor = 'blue'
} 


//  Option 4 : get elements by id 
const btnMakePurple = document.getElementById('btn-make-purple');
    btnMakePurple.onclick = makePurple;
    function makePurple(){
        document.body.style.backgroundColor = 'purple'; }