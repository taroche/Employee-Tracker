USE company_db;

INSERT INTO department (name)
VALUES 
("Executive"), 
("Finance"), 
("Human Resources"), 
("Engineering"), 
("Operations"), 
("Sales"),
("Development"),
("Quality Assurance")
("TEST");

SELECT * FROM department;



INSERT INTO roles (title, salary, department_id)
VALUES 
("Manager", 90000.00, 1),
("CEO", 180000.00, 1),
("Accountant", 70000.00, 2),
("HR Associate", 90000.00, 3),
("Software Engineer", 175000.00, 4),
("Administrative Professional", 40000.00, 5),
("Sales Team Leader", 80000.00, 6),
("Sales Representative", 60000.00, 6),
("Front-End Developer", 55000.00, 7),
("Quality Control Associate", 45000.00, 8),
("TEST", 10.00, 9);

SELECT * FROM roles;

INSERT INTO employee (first_name, last_name, role_id)
VALUES 
("Jane", "Smith", 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("John", "Time", 1, 1),
("Alise", "Date", 3, 1),
("Rain", "Weather", 4, 2),
("Tim", "Rock", 5, 2),
("Helper", "Fun", 6, 1),
("Talker", "Sales", 7, 2),
("Phone", "Thing", 8, 7),
("Tristan", "LaRoche", 9, 2),
("Molly", "Delan", 10, 2),
("TEst", "TEst", 11, 1);


SELECT * FROM employee;