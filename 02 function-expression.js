var add=function(){
    console.log("inside body of function");
    
}
add();


var add=function(n1,n2){
    console.log(`Addition of n1+n2 = ${n1+n2}`);
    
}
add(10,20);

var add=function(n1,n2){
    var result =n1+n2;
    return result
  
    
}
 var result=add(10,20);
 console.log(result);
 