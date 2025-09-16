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
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,  // extra property
};

console.log(teacher3);


// Teacher interface definition
interface Teacher {
  readonly firstName: string;        // read-only
  readonly lastName: string;         // read-only
  fullTimeEmployee: boolean;         // mandatory
  location: string;                  // mandatory
  yearsOfExperience?: number;        // optional
  [key: string]: any;                // allow extra attributes
}

// Directors interface extending Teacher
interface Directors extends Teacher {
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
