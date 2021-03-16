# Employee-Tracker

This command-line interface is a Node MySQL application that allows users to view and interact with information stored in a database that houses employee, roles, and department data.

## Functionality

This Node command-line application allows the user to:

  * View departments, roles, employees

  * View employees by department or by manager

  * Add departments, roles, employees

  * Delete departments, roles, and employees

  * Update employee roles

  * Update employee managers

## Installation

To run this application, first download the repository and run `npm install` in order to install the following npm package dependencies as specified in the [`package.json`](https://github.com/connietran-dev/mysql-employee-tracker/blob/master/package.json):

* [MySQL](https://www.npmjs.com/package/mysql) NPM package to connect to the MySQL database and perform queries.

* [InquirerJs](https://www.npmjs.com/package/inquirer/v/0.2.3) NPM package to interact with the user via the command-line.

You may wish to run `db/db.sql` and `/db/seed.sql` files to create the database locally. 

The [`utils/`](https://github.com/connietran-dev/mysql-employee-tracker/tree/master/utils) folder contains separate files for functions for performing specific SQL queries, including a variety of SQL `JOIN`s.

## Walk Through Video

[The video of me using this app](https://drive.google.com/file/d/1zLN8I4yj2q4XowUIAWXoW1FcUeijDBC7/view)