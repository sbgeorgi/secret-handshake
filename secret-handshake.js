//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

 const commands = (number = 0) => {
    let test = number;
    let placeholder = "";
    let remainder;
    let reverse = "";
  while (test > 0){
    remainder = test%2;
    remainder = Math.round(remainder);
    placeholder = placeholder + remainder;
    if(remainder > 0){
      test = test/2 - 1;
    }else{
      test = test/2;
    } 
    test = Math.round(test);
    remainder = 0;
    console.log(test)
    console.log(placeholder)
    if(test===0){
      for (var i = placeholder.length - 1; i >= 0; i--) {
        reverse += placeholder[i];
    }
      console.log("The reversed string is " + reverse);
    }
  }
  
}
