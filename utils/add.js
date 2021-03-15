const inquirer = require("inquirer");
let departments = []
let departmentsId = []

const add = {

    addEmployee(connection, init){

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
                console.log(data)
                init()
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
                console.log(data)
                init()
            })
        })
    } 
}

module.exports = add