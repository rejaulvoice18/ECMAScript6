class Parent{
    constructor(){
        this.fatherName = "Swarznegger";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullname(){
        return this.name +" "+ this.fatherName;
    }
}
const baby = new Child("arnold");
const baby2 = new Child("johor");

console.log(baby.getFullname());
console.log(baby2.getFullname());