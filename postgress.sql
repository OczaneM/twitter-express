CREATE TABLE users (
id SERIAL PRIMARY KEY,
name TEXT DEFAULT NULL,
picture_url TEXT
);

CREATE TABLE tweets (
id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users(id) NOT NULL,
content TEXT DEFAULT NULL
);

SELECT *
FROM users;

SELECT content
FROM tweets
JOIN users
ON users.id=tweets.user_id
WHERE users.name=$1, [req.params.id]

SELECT *
FROM tweets
JOIN users
ON users.id=tweets.user_id
WHERE tweets.id=$1, [req.params.id]
