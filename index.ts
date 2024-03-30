#! /usr/bin/env node

import inquirer from 'inquirer';
import Choices from 'inquirer/lib/objects/choices.js';

let myBalance = 100000; //dolar
let myPin = 4456; 

//pin code 

let Code = await inquirer.prompt(
   [
    {
        message: "Enter Your Pin Code",
        type: "number",
        name: "PinNumber"
    }
   ]
)

//pin code conditional statement 

if (Code.PinNumber === myPin){
    console.log("Correct Pin Code!!")

    //operations list

  let Operations = await inquirer.prompt(
    [
        {
    message: "What do you Want?",
    type: "list",
    name: "Actions",
    choices: ["Withdraw", "check Balance", "Fast Cash"]
   }
]
   )

   //withdraw code

if(Operations.Actions === "Withdraw"){
    let Amount = await inquirer.prompt(
        [
            {
                message: "Enter Your Amount",
                type: "number",
                name: "Paisa"
            }
        ]
    )
    if (myBalance >= Amount.Paisa) {
        myBalance -= Amount.Paisa;
        console.log(`Your remaining balance is:  ${myBalance}`);
    } else {
        console.log("Insufficient balance");
    }
    
 
}
   

   //check Balance code 

 else if (Operations.Actions === "check Balance"){
    console.log(`Your Current Balance is   ${myBalance}`)
 }   

 //Fast Cash

 else if (Operations.Actions === "Fast Cash"){
let fastcash = await inquirer.prompt(
    [
        {
            message: "How Much You Want Cash",
            type: "list",
            name: "fourtypes",
            choices: ["1000", "2000", "5000", "10000", ]
        }
    ]
)
//fast code conditional statement 
if(fastcash.fourtypes === "1000"){
    console.log("your remaining Balance is:" + (myBalance-1000) )
}
else if(fastcash.fourtypes === "2000"){
    console.log("your remaining Balance is:" + (myBalance-2000) )
}
else if(fastcash.fourtypes === "5000"){
    console.log("your remaining Balance is:" + (myBalance-5000) )
}   
else if(fastcash.fourtypes === "10000"){
    console.log("your remaining Balance is:" + (myBalance-10000) )
}

 }

}
//incorrect password
else{
    console.log("Incorrect Pin Code ")
}


