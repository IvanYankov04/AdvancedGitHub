class Person{
    constructor(name,lastName,age){
        this.name = name;
        this.lastName = lastName
        this.age = age
    }
    toString(){
        return `My name ${this.name} ${this.lastName},age:${this.age}`
    }
}

let myPerson = new Person("Ivan" ,'Yankov',30)
console.log(myPerson.toString())
console.log(myPerson.name);
console.log(myPerson.age);