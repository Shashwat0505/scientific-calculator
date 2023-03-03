const numbers=document.querySelectorAll('.Number-button');
const clearButton=document.querySelector('.All-Clear-Button');
const deleteButton=document.querySelector('.Delete-Button');
const operations=document.querySelectorAll('.Operation-button');
const equalsButton=document.querySelector('.Equals-button');
const restTobutton=document.querySelector('.restTo-button');
const factorialButton=document.querySelector('.Factorial-button');
const InverseButton=document.querySelector('.Inverse-button');
const AbsButton=document.querySelector('.Abs-button');
const sqrtButton=document.querySelector('.sqrt-button');



// Event Listeners
numbers.forEach(number=>{
    number.addEventListener('click',()=>{
    appendNumber(number.innerText)
    
})
})

clearButton.addEventListener('click',()=>{
    clearDisplay();
})

deleteButton.addEventListener('click',()=>{
    deleteNumber();
})

operations.forEach(operation=>{
    operation.addEventListener('click',()=>{
        updateDisplay(operation.innerText);
    })
})

equalsButton.addEventListener('click',()=>{
    evaluateExpression();
})

restTobutton.addEventListener('click',()=>{
    restTocalculation();
})

factorialButton.addEventListener('click',()=>{
    countFactorial();
})
InverseButton.addEventListener('click',()=>{
    Inverse();
})

AbsButton.addEventListener('click',()=>{
    findAbsValue();
})

sqrtButton.addEventListener('click',()=>{
    findSqrt();
})

// Functions
function appendNumber(number){
    document.querySelector('.current-operand').innerText+=number;
    
}

function clearDisplay(){
    document.querySelector('.current-operand').innerText="";
    document.querySelector('.previous-operand').innerText="";
}

function deleteNumber(){
    let string = document.querySelector('.current-operand').innerHTML
    string = string.slice(0, -1)
    document.querySelector('.current-operand').innerText = string
}

function updateDisplay(operation){
   
    document.querySelector('.current-operand').innerText+=operation;

}

function evaluateExpression(){
    let str=document.querySelector('.current-operand').innerText;
    let ans=eval(str);
    document.querySelector('.current-operand').innerText=ans;
     
}

function restTocalculation(){
    document.querySelector('.current-operand').append("**")
    

    
}

function countFactorial(){
    let num=Number(document.querySelector('.current-operand').innerHTML);
    let temp=1;
    for(let i=num;i>0;i--){
        temp=temp*i;
    }
    document.querySelector('.current-operand').innerText=temp;
}

function Inverse(){
    let num=1/Number(document.querySelector('.current-operand').innerHTML);
    document.querySelector('.current-operand').innerHTML=num;
}

function findAbsValue(){
    evaluateExpression();
    let str1=document.querySelector('.current-operand').innerHTML;
    console.log(str1);
    if(str1.indexOf("-")!=-1){
        str1=str1.substring(1);
    }
    document.querySelector('.current-operand').innerHTML=str1;
    console.log(str1);
}

function findSqrt(){

    document.querySelector('.current-operand').append("**0.5");



}
