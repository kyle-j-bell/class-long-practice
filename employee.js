//Declares an Employee class.
class Employee {
    constructor(name, salary, title, manager = null) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager;
        //The 'manager' property is null by default.  If 'manager' refers to a Manager object, the current Employee object is added to the Manager object's `employees` array upon declaration.
        if (manager instanceof Employee) {
            manager.addEmployee(this);
        }
    }
    //Multiplies the Employee object's salary property by a given multiplier to get their bonus.
    calculateBonus(multiplier) {
        let bonus = this.salary * multiplier;
        return bonus;
    }
}

module.exports = Employee;
