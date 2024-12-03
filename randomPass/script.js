// let uppercase = document.getElementById('Uppercase');
// let Lowercase = document.getElementById('Lowercase');
// let Symbol = document.getElementById('Symbol');
// let Number = document.getElementById('Number');
// let Password1 = document.getElementById('Password1');
// let Password = document.getElementById('Password');
// let btn = document.getElementById('btn');
// let errBox = document.getElementById('err');

// let uppercaseChar = 'QWERTYUIOPLKJHGFDSAZXCVBNM'
// let LowercaseChar = 'qwertyuioplkjhgfdsazxcvbnm'
// let numChar = '1234567890'
// let symChar = '!@#$%^&*()_+?{}[]<>/'
// btn.addEventListener(click,()=>{
//     let expectedChar = '';
//     expectedChar += Uppercase.checked ? UppercaseChar :'';
//     expectedChar += Lowercase.checked ? LowercaseChar :'';
//     expectedChar += Symbol.checked ? symChar :'';
//     expectedChar += Number.checked ? numChar :'';
//     let Length = Number(passL)
// })




let Lowercase =document.getElementById('Lowercase')
let Uppercase =document.getElementById('Uppercase')
let Symbol =document.getElementById('Symbol')
let number =document.getElementById('number')
let passLength =document.getElementById('Length')
let generatePass =document.getElementById('Password')
let button = document.getElementById('btn')
let errbox =document.getElementById('err')


let LowercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let UppercaseChar = 'abcdefghijklmnopqrstvuwxyz';
let numChar = '1234567890';
let SymChar = '!@#$%^&*(()))_)++-';

btn.addEventListener('click',()=>{
  let expectedChar ='';
  let randomPass ='';
  expectedChar += Lowercase.checked ? LowercaseChar :'';
  expectedChar += Uppercase.checked ? UppercaseChar :'';
  expectedChar += Symbol.checked ? SymChar :'';
  expectedChar += number.checked ? numChar :'';
  let Length = Number(passLength.value);
  if(expectedChar.Length != 0){
    if(Length>=5 && Length<31){
      for(let i =0;i<Length;i++){
        let index = Math.trunc(Math.random() * (expectedChar.Length));
        randomPass += expectedChar.at(index);
      }
      generatePass.value = randomPass;

    }
    else{errbox.innerHTML = '<i>Enter the length b/w 5-30</i>'
    generatePass.value = 'Loading...';
      
    }
  }
  else{
    errbox.innerHTML ='<i>Please select at least one field for generating random password</i>'
    generatePass.value ='Loading...';
  }

})