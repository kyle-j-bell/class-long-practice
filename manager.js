//Imports Employee class from employee.js.
const Employee = require(`./employee`);
//Declares a Manager class extending Employee, inheriting all of Employee's properties.
class Manager extends Employee {
    constructor(name, salary, title, manager) {
        super(name, salary, title, manager);
        //Sets an empty `employees` array to the Manager class.
        this.employees = [];
    }
    //Checks if an Employee object was passed, then pushes it to this.employees.
    addEmployee(employee) {
        if (employee instanceof Employee) {
            this.employees.push(employee);
        }
    }
    //A different implementation of Employee's calculateBonus method for Manager.
    calculateBonus(multiplier) {
        let bonus = (this.salary + this._totalSubSalary()) * multiplier;
        return bonus;
    }
    //Recursively adds the salary property of Employee objects, or the Employee objects belong to an employees array of a Manager object, to a rolling sum.
    _totalSubSalary() {
        let sum = 0;
        for (let employee of this.employees) {
            if (employee instanceof Manager) {
                sum += employee.salary + employee._totalSubSalary();
            } else if (employee instanceof Employee) {
                sum += employee.salary;
            }
        }
        //Returns the final sum for use in calculateBonus.
        return sum;
    }
}

module.exports = Manager;
