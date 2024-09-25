let array=[10,20,30,20,80];
console.log(array);
console.log(array[2]);
console.log(array[array.length-1]);
array [3]=100;
console.log(array);
console.log("=============================================================================================");
let arrayList=["Jenny","Elon","Stew","bill","warn"];
arrayList[2]="Ram";
console.log(arrayList);
for (let index = 0; index < arrayList.length; index++) {
    const element = arrayList[index];
    console.log(element);

}
console.log("======================================Travering any array reverse order=========================================");
for (let index=arrayList.length-1;index>=0; index--){
    const element =arrayList[index];  
    console.log(element);
    
}



