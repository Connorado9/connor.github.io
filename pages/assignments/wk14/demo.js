// Week 14
// Connor H

/// Problem 1 ///
let myEmployees =
[
  {
    name: "Sam",
    department: "Tech",
    designation: "Manager",
    salary: 40000,
    raiseEligible: true,
  },
  {
    name: "Mary",
    department: "Finance",
    designation: "Trainee",
    salary: 18500,
    raiseEligible: true,
  },
  {
    name: "Bill",
    department: "HR",
    designation: "Executive",
    salary: 21200,
    raiseEligible: false,
  }
];
console.log("Problem 1: ");
console.log(myEmployees);


/// Problem 2 ///
const company = {
  companyName: "Tech Stars",
  website: "www.techstars.site",
  employees: myEmployees,
};
console.log("Problem 2: ");
console.log(company);


/// Problem 3 ///
function addEmployee(obj, emName, emDepartment, emDesignation, emSalary, emRaiseEligible)
{
  let newEmployee =
  {
    name: emName,
    department: emDepartment,
    designation: emDesignation,
    salary: emSalary,
    raiseEligible: emRaiseEligible,
  };
  obj.push(newEmployee);
}
addEmployee(myEmployees, "Anna", "Tech", "Executive", 25600, false);
console.log("Problem 3: ");
console.log(myEmployees);


/// Problem 4 ///
let totSalary = 0;
for (let i = 0; i < myEmployees.length; i++)
{
  totSalary += myEmployees[i].salary;
}
console.log("Problem 4: ");
console.log(totSalary);


/// Problem 5 ///
function doRaises()
{
  for (let i = 0; i < myEmployees.length; i++)
  {
    if (myEmployees[i].raiseEligible)
    {
      myEmployees[i].salary *= 1.1;
      myEmployees[i].raiseEligible = false;
    }
  }
}
doRaises();
console.log("Problem 5: ");
console.log(myEmployees);


/// Problem 6 ///
const workFromHome = ['Anna', 'Sam'];
function setWFH()
{
  for (let i = 0; i < myEmployees.length; i++)
  {
    myEmployees[i].wfh = workFromHome.includes(myEmployees[i].name);
  }
}
setWFH();
console.log("Problem 6: ");
console.log(myEmployees);
