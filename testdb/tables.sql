DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS todos;

CREATE TABLE users(
   user_id INT GENERATED ALWAYS AS IDENTITY,
   user_name VARCHAR(255) NOT NULL,
   PRIMARY KEY(user_id )
);

CREATE TABLE todos(
   todo_id INT GENERATED ALWAYS AS IDENTITY,
   user_id INT,
   todo VARCHAR(255) NOT NULL,   
   PRIMARY KEY(todo_id),
   CONSTRAINT fk_users
      FOREIGN KEY(user_id) 
	  REFERENCES users(user_id)
);