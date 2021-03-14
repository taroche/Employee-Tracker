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

    viewEmployeeDept() {

    },

    viewEmployeeMgr() {

    },

    viewRoles() {

    },

    viewDepartments() {

    }
}

module.exports = view