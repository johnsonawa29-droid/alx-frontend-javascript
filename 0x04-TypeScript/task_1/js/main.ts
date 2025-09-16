// Teacher interface definition
interface Teacher {
  readonly firstName: string;        // read-only
  readonly lastName: string;         // read-only
  fullTimeEmployee: boolean;         // mandatory
  location: string;                  // mandatory
  yearsOfExperience?: number;        // optional
  [key: string]: any;                // allow extra attributes
}

// Example usage
const teacher3: Teacher =

{
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,  // extra property
};

console.log(teacher3);


// Teacher interface definition
interface Teacher
 {
  readonly firstName: string;        // read-only
  readonly lastName: string;         // read-only
  fullTimeEmployee: boolean;         // mandatory
  location: string;                  // mandatory
  yearsOfExperience?: number;        // optional
  [key: string]: any;             
     // allow extra attributes

}// PrintTeacherFunction interface
interface PrintTeacherFunction

{
  (firstName: string, lastName: string): string;
}

// Implementation of the function
const printTeacher: PrintTeacherFunction = (firstName, lastName) =>
  
  {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe"));  // Output: J. Doe



// Teacher interface definition
interface Teacher
 {
  readonly firstName: string;        // read-only
  readonly lastName: string;         // read-only
  fullTimeEmployee: boolean;         // mandatory
  location: string;                  // mandatory
  yearsOfExperience?: number;        // optional
  [key: string]: any;                // allow extra attributes
}


// Directors interface extending Teacher
interface Directors extends Teacher
 {
  numberOfReports: number;           // new mandatory attribute
}

// Example usage
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Teacher interface
interface Teacher

 {

  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any;
}

// Directors interface extending Teacher

interface Directors extends Teacher {
  numberOfReports: number;
}

// Function interface
interface printTeacherFunction

{

  (firstName: string, lastName: string): string;
}

//  Function implementation (checker-friendly)
function printTeacher(firstName: string, lastName: string): string {

  return `${firstName[0]}. ${lastName}`;

}

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe
