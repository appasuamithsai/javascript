const menuItems=document.querySelector('.menu-items');


const ulList=document.createElement('ul');


menuItems.append(ulList);
const url='data.json';

loaddata();
function loaddata(){
    fetch(url).then(rep=>rep.json()).then( (data) => addToPage(data));
}

function addToPage(arr){
    arr.forEach(element => {
        const list=document.createElement('li');
        const divName=document.createElement('div');
        divName.textContent=element.name;
        divName.classList.add('menucard-name');
        const divPrice=document.createElement('div');
        divPrice.textContent=element.price;
        divPrice.classList.add('menucard-price');
        list.append(divName);
        list.append(divPrice);
        list.classList.add('menucard');
        list.setAttribute('draggable','True');
        list.setAttribute('cursor','pointer');
        list.addEventListener('dragstart',(event)=>{
            setTimeout(()=>{
            },0);
        });
        list.addEventListener('dragend',(event)=>{
        });
        ulList.append(list);
    });
}


const serachMenu=document.querySelector('#searchmenu');

serachMenu.onkeyup=()=>{
    const key=serachMenu.value.toLowerCase();
    menuItems.querySelectorAll('.menucard-name').forEach(element=>{
        if(element.innerHTML.toLowerCase().indexOf(key)>-1){
            element.parentNode.style.display="";
        }else{
            element.parentNode.style.display="none";
        }
    });
};

const serachTable=document.querySelector('#searchtable');
serachTable.onkeyup=()=>{
   const key=serachTable.value.toLowerCase();
   document.querySelectorAll('.table-name')
   .forEach(element=>{
        if(element.innerHTML.toLowerCase().indexOf(key)>-1){
            element.parentNode.style.display="";
        }else{
            element.parentNode.style.display="none";
        }
})};


const tables=document.querySelectorAll('.card');
tables.forEach(element => {
    element.ondragover=(event)=>{
        event.preventDefault();
    }
    element.drop=(event)=>{
        console.log('Dropped');
        event.target.append('menucard');
    };
});
