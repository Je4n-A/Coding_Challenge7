
//Create a Department Structure

const company = {
    departemnts: [
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
}
