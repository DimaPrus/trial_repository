export class UserModel {
    /**
     * 
     * @param {string} firstName 
     * @param {string} lastName 
     * @param {string} userEmail 
     * @param {number} age 
     * @param {number} salary 
     * @param {string} department 
     */
    constructor(firstName,
        lastName,
        userEmail,
        age,
        salary,
        department) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userEmail = userEmail;
        this.age = age;
        this.salary = salary;
        this.department = department;
    }
}