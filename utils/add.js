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

    addRole(connection, init){
        
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