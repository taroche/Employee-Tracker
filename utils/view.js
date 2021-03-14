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

    viewEmployeeMgr() {

    },

    viewRoles() {

    },

    viewDepartments() {

    }
}

module.exports = view