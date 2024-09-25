
//Create a Department Structure

const company = {
    departments: [
        {
            departmentName: 'HR',
            employees: [
                {
                    name: 'John',
                    salary: 200000,
                    subordinates: [
                        {
                            name: 'Alice',
                            salary: 150000,
                            subordinates: [
                                {
                                    name: 'Bob',
                                    salary: 100000,
                                    subordinates: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Jane',
                    salary: 80000,
                    subordinates: []
                }
            ]
        },
        {
            departmentName: 'Engineering',
            employees: [
                {
                    name: 'Jerry',
                    salary: 300000,
                    subordinates: [
                        {
                            name: 'Oscar',
                            salary: 250000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: 'Mary',
                    salary: 100000,
                    subordinates: []
                }
            ]
        }
    ]
};

// Create a Recursive Function to Calculate the Total Salary for a Department

function calculateTotalSalary(company, departmentName) {
    let totalSalary = 0;

    for (const department of company.departments) {
        if (department.departmentName === departmentName) {
            for (const employee of department.employees) {
                totalSalary += employee.salary;
                totalSalary += calculateEmployeeSalary(employee);
            }
        }
    }
    return totalSalary;
}

// Recursive function to calculate the total salary of an employee and their subordinates helper function
function calculateEmployeeSalary(employee) {
    let totalSalary = 0;

    for (const subordinate of employee.subordinates) {
        totalSalary += subordinate.salary;
        totalSalary += calculateEmployeeSalary(subordinate);
    }

    return totalSalary;
}

console.log(`Total salary for HR department: $${calculateTotalSalary(company, 'HR')}`); 
console.log(`Total salary for Engineering department: $${calculateTotalSalary(company, 'Engineering')}`); 
