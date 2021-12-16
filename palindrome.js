function isPal(s){
    if(reverse(s)==s){
        return true;
    }
    return false;    
}
function reverse(s){
    var rev="";
    for(var i=s.length-1;i>=0;i--){
        rev+=s.charAt(i);
    }
    return rev;
}


var c="aba";
if(isPal(c)){
    console.log(c," is a palindrome...");
}else{
    console.log(c," is a not palindrome...");

}