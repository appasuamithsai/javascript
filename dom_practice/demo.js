
//closures
function showGrade(totalMarks){

    return function claculateGrade(){
        if(totalMarks>90)
            return "S";
        else if(totalMarks>80 && totalMarks<=90)
            return 'A';
        else if(totalMarks>70 && totalMarks<=80)
            return 'B';
        else if(totalMarks>60 && totalMarks<=70)
            return 'C';
        else if(totalMarks>50 && totalMarks<=60)
            return 'D';
        else
            return 'F';
    }
}

var grade = showGrade(70);
console.log(grade());
