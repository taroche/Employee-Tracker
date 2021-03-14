CREATE DATABASE IF NOT EXISTS company_db;

USE company_db;

CREATE TABLE department (
    id INT AUTO_INCREMENT,
    dept_name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(10,2),
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id)
);
