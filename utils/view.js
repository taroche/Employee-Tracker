const inquirer = require("inquirer");

const view = {

    viewAllEmployees(connection, init) {
        let queryString = `
        SELECT id, first_name, last_name, manager_id
        FROM employee`

        connection.query(queryString, (err, data) => {

            if (err) throw err;
            console.log("\n")
            console.table(data)
            console.log("\n")
            init()
        })
    },

    viewEmployeeDept(connection, init) {
        let queryString = `
        SELECT employee.id, first_name, last_name, title, salary, dept_name
        FROM employee
        LEFT JOIN roles
        ON role_id = roles.id
        LEFT JOIN department
        ON department_id = department.id;`

        connection.query(queryString, (err, data) => {
            if (err) throw err;
            console.log("\n")
            console.table(data)
            console.log("\n")
            init()
        })
    },

    viewEmployeeMgr(connection, init) {
        connection.query("SELECT DISTINCT e2.first_name, e2.last_name FROM employee LEFT JOIN employee AS e2 ON employee.manager_id = e2.id WHERE e2.first_name IS NOT NULL", function (err, results) {
            if (err) throw err;
            inquirer
                .prompt([
                    {
                        name: "manager",
                        type: "list",
                        choices: function () {
                            let choiceArray = [];
                            for (var i = 0; i < results.length; i++) {
                                choiceArray.push(results[i].first_name);
                            }
                            return choiceArray;
                        },
                        message: "Which manager would you like to search by?"
                    }
                ])
                .then(function (answer) {
                    console.log(answer.manager);
                    let query = 'SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name AS department, e2.first_name AS manager FROM employee LEFT JOIN employee AS e2 ON e2.id = employee.manager_id JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id WHERE e2.first_name = ? ORDER BY employee.id;'
                    connection.query(query, answer.manager, function (err, data) {
                        if (err) throw err;
                        console.log("\n");
                        console.table(data);
                        console.log("\n");
                        init();
                    });
                });
        });
    },

    viewRoles(connection, init) {
        let queryString = `
        SELECT *
        FROM roles`

        connection.query(queryString, (err, data) => {
            if (err) throw err;
            console.log("\n")
            console.table(data)
            console.log("\n")
            init()
        })
    },

    viewDepartments(connection, init) {
        let queryString = `
        SELECT *
        FROM department`

        connection.query(queryString, (err, data) => {
            if (err) throw err;
            console.log("\n")
            console.table(data)
            console.log("\n")
            init()
        })

    }
}

module.exports = view