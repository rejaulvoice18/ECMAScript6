class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Ideal Academy";
    }
}

const student1 = new Student(22, "shuvo");
const student2 = new Student(23, "romjan");
console.log(student1);
console.log(student2);