document.getElementById('btn').addEventListener('click', function() {
    let num1 = document.querySelector('.num1').value;
    let num2 = document.querySelector('.num2').value;
    let result = document.querySelector('.result');
    let operator = document.getElementById('SelectOp').value;

    if(operator==="div"){
        if(num1===0 && num2===0){
            result.innerHTML = "Indeterminent";
            return;
        }

        if(num2===0){
            result.innerHTML = "Infinity";
            return;
        }
    }

    switch (operator) {
        case "plus":
            result.innerHTML = Number(num1) + Number(num2);
            break;
        case "minus":
            result.innerHTML = Number(num1) - Number(num2);
            break;
        case "div":
            result.innerHTML = Number(num1) / Number(num2);
            break;
        case "mult":
            result.innerHTML = Number(num1) * Number(num2);
            break;
    }

});