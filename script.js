const dateOfBirth = document.querySelector(".Birthdate");
const luckyNumber= document.querySelector(".luckyNum");
const checkButton = document.querySelector(".btn"); 
 const outputBox = document.querySelector("#output");
 function compareValues(sum ,luckyNumber)
 {
   if(sum%luckyNumber===0){
      outputBox.innerText="You are lucky...You have a package of potential !!👏🙌✌";
   }else{
     outputBox.innerText="You have to write your own luck!!😉❤";
   }

 } 
function checkNumber(){
 const DOB= dateOfBirth.value;
 const sum = calculateSum(DOB);
 if(sum&&DOB) 
 compareValues(sum,luckyNumber.value)
 else
 outputBox.innerText="Please enter Both the field🤦‍♂️🤦‍♂️😢"
}
function calculateSum(DOB){

 DOB  = DOB.replaceAll("-","");
 let sum =0;
 for(let index = 0; index<DOB.length;index++){
   sum = sum + Number(DOB.charAt(index));


 }
 return sum;

}
checkButton.addEventListener('click',checkNumber)
