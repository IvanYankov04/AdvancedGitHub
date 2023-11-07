class Company {
    constructor() {
        // we define property this.departments which value is an empty object
        this.departments = {}
         this.avgSalary = {}
    }
    addEmployee(name, salary, position, department) {
 
        if ([...arguments].some((a) => a === undefined || a === null || a === "" || salary < 0)) {
            throw new Error("Invalid input!")
        }
        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = []
            /* for each new department we set to the property this.avgSalary,
             a property currentDepartment, which has an object as a value.
            */
            this.avgSalary[department] = {
                totalEmployees: 0,
                totalSalary:0,
                avgSalary:0
            }
        }
 
        let employee = {
            name,
            salary,
            position
        }
 
        this.departments[department].push(employee)
        /*
        for each department we have a separate property, which holds 
        an array with an object as index element
       For each department we find:
       total employee count
       sum of the salaries
       average salary
        */
        this.avgSalary[department].totalSalary += salary
        this.avgSalary[department].totalEmployees += 1
        this.avgSalary[department].avgSalary = 
        this.avgSalary[department].totalSalary / this.avgSalary[department].totalEmployees
return `New employee is hired. Name: ${name}. Position: ${position}`
    }
 
    bestDepartment(){
        debugger
        //find the department with the highest avg salary
    let bestDepartment = Object.entries(this.avgSalary).sort((a,b) => a[1].avgSalary - b[1].avgSalary).pop()
  let result = `Best Department is: ${bestDepartment[0]}`
  result += `\nAverage salary: ${bestDepartment[1].avgSalary.toFixed(2)}`
 
let sorted = this.departments[bestDepartment[0]].sort((a,b) => b.salary - a.salary || a.name.localeCompare(b.name))
sorted.forEach((line)=> {
    result += `\n${line.name} ${line.salary} ${line.position}`
})
return result
    }
}