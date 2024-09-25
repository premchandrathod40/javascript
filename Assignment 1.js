function interwiveCheck(gradescore,hscScore,sscScore,condidatename){
     var result=gradescore>=70||hscScore>=80||sscScore>90 ?`congrats : ${condidatename} are you eligible for TSC interwive`:
    `unfortunately : ${condidatename} You are not eligible Interwive`
    console.log(result);
    
}
interwiveCheck(80,86,90,"jenny");
interwiveCheck(70,65,55,"Prem");
interwiveCheck(60,79,88,"Rathod");