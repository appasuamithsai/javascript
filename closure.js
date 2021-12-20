//function along with its lexical scope is called a closure
function x(){
    var a=100;
    function y(){  // a is closure of y()
        var b=29;
        function z(){   //b is closure of z()
            console.log(a,b);
        }
        z();
    }
    y();
}
x();