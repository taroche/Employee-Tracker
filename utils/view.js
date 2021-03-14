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
        let queryString = `
        SELECT employee.id, first_name, last_name, manager_id
        FROM employee
        LEFT JOIN employee
        ON manager_id = manager_id;`

        connection.query(queryString, (err, data) => {
            if (err) throw err;
            console.log("\n")
            console.table(data)
            console.log("\n")
            init()
        })
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