const inquirer = require("inquirer");

const add = {

    addEmployee(connection, init){

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