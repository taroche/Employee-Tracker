const inquirer = require("inquirer");

const update = {
    updateRole(connection, init) {

        let newRole = {};

        connection.query("SELECT employee.id, employee.first_name, employee.last_name, roles.title, roles.salary, department.dept_name AS department, e2.first_name AS manager FROM employee LEFT JOIN employee AS e2 ON e2.id = employee.manager_id JOIN roles ON employee.role_id = roles.id JOIN department ON roles.department_id = department.id ORDER BY employee.id", function (err, results) {
            if (err) throw err;
            inquirer
                .prompt([
                    {
                        name: "updateEmployee",
                        type: "list",
                        choices: function () {
                            let choiceArray = [];
                            for (var i = 0; i < results.length; i++) {
                                choiceArray.push(results[i].first_name);
                            }
                            return choiceArray;
                        },
                        message: "Which employee would you like to update?"
                    }
                ])
                .then(function (answer) {

                    newRole.first_name = answer.updateEmployee;

                    connection.query("SELECT * FROM roles", function (err, res) {
                        if (err) throw err;
                        inquirer
                            .prompt([
                                {
                                    name: "updateRole",
                                    type: "list",
                                    choices: function () {
                                        let choiceArray = [];
                                        for (var i = 0; i < results.length; i++) {
                                            choiceArray.push(results[i].title);
                                        }
                                        return choiceArray;
                                    },
                                    message: "What would you like you to change their role title to?"
                                }
                            ])
                            .then(function (answer) {
                                connection.query("SELECT * FROM roles WHERE title = ?", answer.updateRole, function (err, results) {
                                    if (err) throw err;

                                    newRole.role_id = results[0].id;

                                    connection.query("UPDATE employee SET role_id = ? WHERE first_name = ?", [newRole.role_id, newRole.first_name], function (err, res) {
                                        if (err) throw (err);
                                        console.log("\n");
                                        console.log('Employee role successfully updated.');
                                        console.log("\n");
                                        init();
                                    })

                                })
                            });
                    });
                });
        })
    },

    updateManager(connection, init) {

        let newManager = {};

        connection.query("SELECT employee.id, employee.first_name, employee.last_name, roles.title, roles.salary, department.dept_name AS department, e2.first_name AS manager FROM employee LEFT JOIN employee AS e2 ON e2.id = employee.manager_id JOIN roles ON employee.role_id = roles.id JOIN department ON roles.department_id = department.id ORDER BY employee.id", function (err, results) {
            if (err) throw err;
            inquirer
                .prompt([
                    {
                        name: "updateEmployee",
                        type: "list",
                        choices: function () {
                            let choiceArray = [];
                            for (var i = 0; i < results.length; i++) {
                                choiceArray.push(results[i].first_name);
                            }
                            return choiceArray;
                        },
                        message: "Which employee would you like to update?"
                    }
                ])
                .then(function (answer) {

                    newManager.first_name = answer.updateEmployee;

                    connection.query("SELECT * FROM employee", function (err, res) {
                        if (err) throw err;
                        inquirer
                            .prompt([
                                {
                                    name: "updateManager",
                                    type: "list",
                                    choices: function () {
                                        let choiceArray = [];
                                        for (var i = 0; i < results.length; i++) {
                                            choiceArray.push(results[i].first_name);
                                        }
                                        return choiceArray;
                                    },
                                    message: "Who would you like to change their manager to?"
                                }
                            ])
                            .then(function (answer) {
                                connection.query("SELECT * FROM employee WHERE first_name = ?", answer.updateManager, function (err, results) {
                                    if (err) throw err;

                                    newManager.manager_id = results[0].id;

                                    connection.query("UPDATE employee SET manager_id = ? WHERE first_name = ?", [newManager.manager_id, newManager.first_name], function (err, res) {
                                        if (err) throw (err);
                                        console.log("\n");
                                        console.log('Employee manager successfully updated.');
                                        console.log("\n");
                                        init();
                                    })

                                })
                            });
                    });
                });
        })
    }
}

module.exports = update
