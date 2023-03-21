function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance<400){
    return('This one is on me!')
  }
  else if(distance <= 2000){
    return('That will be twenty bucks.')
  }else if (distance>2500){
    return('No can do.')
  }else if(distance>2000){
    return('I will gladly take your thirty bucks.')
  }
}

function ternaryCheckCity(place){
  // Write your code here!
  if(place=="NYC"){
    return('Ok, sounds good.')
  }else{
    return('No go.')
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case 'generous':
      return('Thank you so much.');
      break;
    case 'not as generous':
      return('Thank you.');
      break;
    default:
      return('Bye.')
  }
}