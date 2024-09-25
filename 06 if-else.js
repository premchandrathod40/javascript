
    var votingChecker=function(age,person){
      //  var age=24;
      //  var candidateName="jenny";
        if (age>=18) {
            console.log(`Hey ${person} your age is ${age} and your are eligible for vote`);
            
        } 
        else {
        
            console.log(`unfortunately ${person} your age is ${age} and your are  not eligible for vote`);
        }
    }
    votingChecker(21,"jenny")
    votingChecker(17,"benny")

    var voteEligible=function(age){
        if (age==0||age<0||age>130||age==null) {
            console.log(`Invalid date. Age ${age}`);
            
        } else {
            console.log(`valid date. Age ${age}`);
            if (age>=18) {
                console.log(`eligible for voting`);
                
            } else {
                console.log(`eligible for voting`);
            }
        }
    }
    voteEligible(45);
    voteEligible(17);
    voteEligible(8);
    voteEligible(20);
    voteEligible(-10);
    voteEligible(200);
    voteEligible(0);
    voteEligible(null);