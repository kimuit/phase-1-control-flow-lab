function scuberGreetingForFeet(sample){
  // Write your code here!
  let freeSample;
  if(sample <= 400){
    freeSample = "This one is on me!"
  }
  else if(sample > 2000 && sample <2500){
    freeSample = 'I will gladly take your thirty bucks.';
  }
  else if(sample >= 2501){
    freeSample = 'No can do.'
  }
  return freeSample
}

function ternaryCheckCity(city){
  // Write your code here!
  let cityMessage = city === 'NYC' ? 'Ok, sounds good.' : "No go.";
  return cityMessage;
  }



function switchOnCharmFromTip(tip){
  // Write your code here!
let appreciation;

switch (tip) {
  case 'generous':
    appreciation = "Thank you so much.";
    break;
  case 'not as generous' : 
    appreciation = "Thank you.";
    break;
  default :
  appreciation = "Bye.";
    break;
}
return appreciation;
}

// function switchOnCharmFromTip(tip){

//   let result;
  
//   switch(tip) {
//     case 'generous':
//       result = "Thank you so much.";
//       break;
//     case 'not as generous':
//      result = "Thank you.";
//       break;
//     default:
//       result = "Bye.";
//       break;
//   }
//   return result;
// }