var word="Developer";
count=0;
for (let index = 0; index < word.length; index++) {
   var char= word.charAt(index);
    if (char=='e') {
        count++;
    }   
}
console.log(`char count e is :${count}`);

console.log("=========================================== vowels counts======================================================");
var sentence="I am very good IT Developer";
var vowels="aieou";
var vowelcount=0;
for (let index = 0; index < sentence.length; index++) {
   var char= sentence.charAt(index);
   char=char.toLowerCase();
   if (vowels.includes(char)) {
    vowelcount ++;
   }
    
}
console.log(`vowelscount is :${vowelcount}`);
console.log("==================================sum of 1 to 5=========================================================");
var sum=0;
for (let index = 0; index <=5; index++) {
    sum =sum+index;
    
}
console.log(`summetion of 1 to 5 is : ${sum}`);
console.log("====================================sum of the cube number=======================================================");
var sumcube=0;
for (let index = 0; index <=5; index++) {
    sumcube=sumcube+index*index*index;
    
}
console.log(`sum of cube is :${sumcube}`);
