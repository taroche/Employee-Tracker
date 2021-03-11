const mysql = require("mysql");
const inquirer = require("inquirer");

const view = require("./utils/view.js");
const add = require("./utils/add.js");
const update = require("./utils/update.js");
const remove = require("./utils/remove")

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
})

connection.connect(function (err) {
    if (err) throw err;
    start(); 
})

function start() {
    inquirer
    .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View All Employees",
            "View All Employees by Department",
            "View All Employees by Manager",
            "Add Employee",
            "Update Employee Role",
            "Update Employee Manager",
            "Remove Employee",
            "View All Roles",
            "Add Role",
            "Remove Role",
            "View All Departments",
            "Add Department",
            "Remove Department",
            "EXIT"
        ]
    })
}