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
