CREATE TABLE tasks (
	id SERIAL PRIMARY KEY,
	todo VARCHAR(250) NOT NULL,
	complete BOOLEAN DEFAULT FALSE
);

INSERT INTO tasks (todo, complete) 
VALUES 
("Finalize project proposal", true),
("Schedule team meeting", true),
("Update website content", true),
("Review client feedback", true),
("Conduct market research", true),
("Organize community outreach", true),
("Prepare financial report for Q1", true),
("Update internal software", true),
("Plan team-building activity", true),
("Conduct performance reviews", true),
("Attend project kickoff meeting", false),
("Prepare presentation for client meeting", false),
("Coordinate with external vendors", false),
("Review project timeline", false),
("Draft project progress report", false),
("Conduct user testing", false),
("Update project documentation", false),
("Research industry trends", false),
("Schedule team training session", false),
("Finalize budget for project", false);