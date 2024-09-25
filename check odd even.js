var n1=10;
var result=n1%2==0?"Even number":"Odd number";
console.log(`Check odd or even by using ternary oparetor: ${result}`);

function sqaureofworldLength(sentance){

console.log(`Given sentance is:${sentance}`);
var result=sentance.split(" ");
var lent=result.length;
var square=lent*lent;
return square;

}
 var result=sqaureofworldLength("Javascript");
 console.log(`word number of lentgh ::${result}`);
 
var result=sqaureofworldLength("Java");
console.log(`word number of lentgh ::${result}`);
 var result=sqaureofworldLength("html");
 console.log(`word number of lentgh ::${result}`);
var result=sqaureofworldLength("web developer");
console.log(`word number of lentgh ::${result}`);
function greaternumber(n1 ,n2){
    var result=n1>=n2?n1:n2;
    console.log(`Given number is ${n1} ${n2} and greater number are : ${result}`);
    

}
greaternumber(10,-10)
greaternumber(800,899)

function oddeven(num){
    console.log(`Given Number Is :${num} `);
var result=num%2==0?true:false;
return result;

}
 var result=oddeven(10);
 console.log(`is number 10 even: ${result} `);
 var result=oddeven(32);
 console.log(`is number 32 even: ${result} `);
 var result=oddeven(41);
 console.log(`is number 41 even: ${result} `);
 var result=oddeven(60);
 console.log(`is number 60 even: ${result} `);