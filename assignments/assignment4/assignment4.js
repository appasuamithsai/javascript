const local=document.querySelector('#local');
const session=document.querySelector('#session');

const plus=document.querySelector('#plus');
const minus=document.querySelector('#minus');

const lclear=document.querySelector('#localclear');
const sclear=document.querySelector('#sessionclear');


var lcount=localStorage.getItem('counter')||0;
var scount=sessionStorage.getItem('counter')||0;


function setVal(){
    local.textContent=lcount;
    session.textContent=scount;
}
setVal();
plus.addEventListener('click',()=>{
    lcount++;
    scount++;
    localStorage.setItem('counter',lcount);
    sessionStorage.setItem('counter',scount);
    setVal();
});

minus.addEventListener('click',()=>{
    lcount--;
    scount--;
    localStorage.setItem('counter',lcount);
    sessionStorage.setItem('counter',scount);
    setVal();
});

lclear.addEventListener('click',()=>{
    localStorage.clear();
    lcount=0;
    setVal();
});
sclear.addEventListener('click',()=>{
    sessionStorage.clear();
    scount=0;
    setVal();
});