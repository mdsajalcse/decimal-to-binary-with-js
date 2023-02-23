
const number=document.getElementById('result');

document.getElementById('submit').addEventListener('click',function() {

    const num= document.getElementById('number');
    const numValue=num.value;

    if(numValue===''){
        alert('Enter a number !');
    }
    else if(numValue<0){
        alert('Enter a Positive number ! ');
    }
    else{
        num.value="";
        binaryNumber=Number(numValue).toString(2);
        result.innerText=binaryNumber;
    }

})



