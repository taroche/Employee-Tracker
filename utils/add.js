const inquirer = require("inquirer");
let departments = []
let departmentsId = []

const add = {

    addEmployee(connection, init){
        let newEmployee = {};
        connection.query("SELECT * FROM role", function (err, results) {
            if (err) throw err;
            inquirer
                .prompt([
                    {
                        name: "first_name",
                        type: "input",
                        message: "What is the employee's first name?",
                        validate: function (answer) {
                            if (answer.length < 1) {
                                return console.log("A valid first name is required.");
                            }
                            return true;
                        }
                    },
                    {
                        name: "last_name",
                        type: "input",
                        message: "What is the employee's last name?",
                        validate: function (answer) {
                            if (answer.length < 1) {
                                return console.log("A valid last name is required.");
                            }
                            return true;
                        }
                    },
                    {
                        name: "role",
                        type: "list",
                        choices: function () {
                            let choiceArray = [];
                            for (var i = 0; i < results.length; i++) {
                                choiceArray.push(results[i].title);
                            }
                            return choiceArray;
                        },
                        message: "What is the employee's role?"
                    }
                ])
                .then(function (answer) {
    
                    newEmployee.first_name = answer.first_name;
                    newEmployee.last_name = answer.last_name;
    
                    connection.query("SELECT * FROM role WHERE title = ?", answer.role, function (err, results) {
                        if (err) throw err;
    
                        newEmployee.role_id = results[0].id;
                        connection.query("SELECT * FROM employee;", function (err, results) {
                            if (err) throw err;
                            inquirer
                                .prompt([
                                    {
                                        name: "manager_name",
                                        type: "list",
                                        choices: function () {
                                            let choiceArray = [];
                                            for (var i = 0; i < results.length; i++) {
                                                choiceArray.push(results[i].first_name);
                                            }
                                            return choiceArray;
                                        },
                                        message: "Who is the employee's manager?"
                                    }
                                ])
                                .then(function (answer) {
                                    connection.query("SELECT id FROM employee WHERE first_name = ?", answer.manager_name, function (err, results) {
                                        if (err) throw err;
                                        newEmployee.manager_id = results[0].id;
                                        console.log("Adding new employee: ", newEmployee);
    
                                        connection.query('INSERT INTO employee SET ?', newEmployee, function (err, results) {
                                            if (err) throw err;
                                            console.log("\n")
                                            console.log("Employee successfully added.");
                                            console.log("\n")
                                            init();
                                        })
                                    })
                                });
                        });
                    });
                });
        })
    },

    populateDepartments(connection) {
        departments = []
        departmentsId = []

        let queryString = `
        SELECT *
        FROM department`

        connection.query(queryString, (err, data) => {
            if (err) throw err
            data.forEach(element => {
                departments.push(element.dept_name)
                departmentsId.push(element.id)
            });
        })
    },

    addRole(connection, init) {
        this.populateDepartments(connection)
        inquirer.prompt([
            {
                name: "newTitle",
                message: "What is the new role?"
            },
            {
                name: "newSalary",
                message: "What is the new role salary?"
            },
            {
                type: "list",
                name: "deptId",
                choices: departments,
                message: "What is the department is the new role in?"
            },
        ]).then(response => {
            console.log(response)
            console.log(departmentsId[departments.indexOf(response.deptId)])

            let queryString = `
            INSERT INTO roles (title, salary, department_id)
            VALUES (?,?,?)`

            connection.query(queryString, [response.newTitle, response.newSalary, departmentsId[departments.indexOf(response.deptId)]], (err, data) => {
                if (err) throw err
                console.log("\n")
                console.log("Role successfully added.");
                console.log("\n")
                init();
            })
        })
    },
    
    addDepartment(connection, init) {
        inquirer.prompt([
            {
                name: "newDept",
                message: "What is the new Department that we're adding?"
            }
        ]).then(response => {
            let queryString = `
            INSERT INTO department (dept_name)
            VALUES (?)`

            connection.query(queryString, [response.newDept], (err, data) => {
                if (err) throw err
                console.log("\n")
                console.log("Department successfully added.");
                console.log("\n")
                init();
            })
        })
    } 
}

module.exports = add