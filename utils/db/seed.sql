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



INSERT INTO role (title, salary, department_id)
VALUES 
("Assistant to the Regional Manager", 90000.00, 1),
("Regional Manager", 180000.00, 1),
("Accountant", 70000.00, 2),
("HR Associate", 90000.00, 3),
("Software Engineer", 175000.00, 4),
("Administrative Professional", 40000.00, 5),
("Sales Team Leader", 80000.00, 6),
("Sales Representative", 60000.00, 6),
("Front-End Developer", 55000.00, 7),
("Quality Control Associate", 45000.00, 8),
("TEST", 10.00, 9);

SELECT * FROM role;