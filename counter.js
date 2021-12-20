function Counter(){
    var count=0;
    this.inccounter=function (){
        count++;
        console.log(count);
    }
    this.deccounter=function (){
        count--;
        console.log(count);
    }
}
counter1=new Counter();
counter1.inccounter();counter1.inccounter();counter1.inccounter();counter1.inccounter();counter1.inccounter();
counter1.deccounter();