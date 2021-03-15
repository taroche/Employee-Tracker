const inquirer = require("inquirer");

const remove = {
    removeEmployee(connection, init) {
        connection.query("SELECT * FROM employee", function (err, results) {
            if (err) throw err;
            inquirer
                .prompt([
                    {
                        name: "removeEmployee",
                        type: "list",
                        choices: function () {
                            let choiceArray = [];
                            for (var i = 0; i < results.length; i++) {
                                choiceArray.push(results[i].first_name);
                            }
                            return choiceArray;
                        },
                        message: "Which employee would you like to remove?"
                    }
                ])
                .then(function (answer) {
                    let query = 'DELETE FROM employee WHERE first_name = ?;'
                    connection.query(query, answer.removeEmployee, function (err, res) {
                        if (err) throw err;
                        console.log("\n");
                        console.log("Employee successfully deleted");
                        console.log("\n");
                        init();
                    });
                });
        });
    },

    removeRole(connection, init) {
        connection.query("SELECT * FROM role", function (err, results) {
            if (err) throw err;
            inquirer
                .prompt([
                    {
                        name: "removeRole",
                        type: "list",
                        choices: function () {
                            let choiceArray = [];
                            for (var i = 0; i < results.length; i++) {
                                choiceArray.push(results[i].title);
                            }
                            return choiceArray;
                        },
                        message: "Which role would you like to remove?"
                    }
                ])
                .then(function (answer) {
                    let query = 'DELETE FROM role WHERE title = ?;'
                    connection.query(query, answer.removeRole, function (err, res) {
                        if (err) throw err;
                        console.log("\n");
                        console.log("Role successfully deleted");
                        console.log("\n");
                        init();
                    });
                });
        });
    },

    removeDepartment(connection, init) {
        connection.query("SELECT * FROM department", function (err, results) {
            if (err) throw err;
            inquirer
                .prompt([
                    {
                        name: "removeDept",
                        type: "list",
                        choices: function () {
                            let choiceArray = [];
                            for (var i = 0; i < results.length; i++) {
                                choiceArray.push(results[i].name);
                            }
                            return choiceArray;
                        },
                        message: "Which department would you like to remove?"
                    }
                ])
                .then(function (answer) {
                    let query = 'DELETE FROM department WHERE name = ?;'
                    connection.query(query, answer.removeDept, function (err, res) {
                        if (err) throw err;
                        console.log("\n");
                        console.log("Department successfully deleted");
                        console.log("\n");
                        init();
                    });
                });
        });
    }
}
module.exports = remove