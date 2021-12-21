// function makePerson(first,last){
//     return {
//         first:first,
//         last:last
//     };
// }
// console.log(makePerson("amith","sai"));

// function personFullName(person){
//     return person.first+' '+person.last;
// }

// console.log(personFullName(makePerson("amith","sai")));


// function personNameRev(person){
//     return person.last+' '+person.first;
// }

// console.log(personNamerev(makePerson("amith","sai")));


function Person(first,last){
    this.last=last;
    this.first=first;
    // this.fullName = function(){
    //     return first+' '+last;
    // };
    // this.fullNameRev=function(){
    //     return last + ' '+first;
    // };

}

var s=new Person('amith','sai');
// console.log(s.fullName());
// console.log(s.fullNameRev());


Person.prototype.fullName =()=>this.first +' '+this.last;
Person.prototype.fullNameRev =()=>this.last+' '+this.first;

Person.prototype.firstNameCaps =function(){
    return this.first.toUpperCase();
};

String.prototype.rev=function(){
    var r='';
    for(let i=this.length-1;i>=0;i--){
        r+=this[i];
    }
    return r;
};
console.log(s.fullName());
console.log(s.firstNameCaps());
console.log(s.fullName().rev());