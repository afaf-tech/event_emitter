// @ts-check
const {add, subtract, divide, multiply } = require('./calculator');

/**
 * @file index.js is the root file for this example app
 * @author Afaf-Tech
 * @see <a href="https://github.com/afaf-tech">afaf-tech</a>
 */

/**
 * Student Name
 * @type {string}
 */
const studentName = "Alphin Lutf"

/**
 * Array of grades
 * @type {Array<number>}
 */
const grades = [98, 53,67,64];

/**
 * @type {{id:number, name:string}}
 */

const todo ={
    id: 2,
    name: "Fikri"
}


/**
 * Calculate tax 
 * @param {number} amount - Total amount 
 * @param {number} tax - Tax percentage
 * @returns {string} - Total with a dollar sign  
 */
const calculateTax = (amount, tax)=>{
    return `$${amount + tax * amount}`
}

console.log(calculateTax(100,0.5));

/**
 * A student
 * @typedef {Object} Student
 * @property {number } id - Student ID
 * @property {string} name - Student name
 * @property {string|number} [age] - Student age
 * @property {boolean} isActive - Student is active
 */

 /** 
  * @type {Student}
  */

  const student = {
      id: 1,
      name:'John Doe',
      age: '32',
      isActive: true
  }

  /**
   * Class to create a person object
   */
  class Person{
    /**
     * 
     * @param {Object} personInfo Information about the person
     */
    constructor(personInfo){
        /**
         * @property {string} name Persons name
         */
        this.name = personInfo.name;
        /**
         * @property {string} age Persons age
         */
        this.age = personInfo.age;

    }


    /**
     * @property {Function} greet a greeting with the name and age
     * @return void
     */
    greet(){
        console.log(`Heloo, my name is ${this.name} and I am ${this.age}`);
    }
  }

  /**
   * Person one
   * See {@link Person}
   */
  const person1 = new Person({
      name:'afaf',
      age: 21
  })

  console.log(person1.greet());


  console.log(add(345325,4324234));