
function tempChecker(n){
  
  if(n<0 || isNaN(n) ){
    // agr number nahi hai ya negative hai toh return invalid input
    return "invalid input";
  }
  
  
  //  if the number is not invalid then call the function celsi
  
  celsi(n);
  Farh(n);
  
  function celsi(n) {
    
    var celsiTemp = ((n-32)*5)/9; 
  
    console.log(celsiTemp);
  }
  
  function Farh (n){
    
    var farhTemp = ( (n*9)/5 ) +32;
    
    console.log(farhTemp);
  }
  
}
tempChecker(50);
