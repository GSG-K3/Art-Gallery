BEGIN;
  DROP TABLE IF EXISTS  artists,artwork,artist_artwork
  CASCADE;

CREATE TABLE artists
(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL,
  email_adress VARCHAR NOT NULL UNIQUE,
  url VARCHAR(200),
  phone_number VARCHAR(100),
  password TEXT NOT NULL
);

CREATE TABLE artwork
(
 id SERIAL PRIMARY KEY NOT NULL,
 name VARCHAR(50) NOT NULL,
 artist_id INT,
 FOREIGN KEY (artist_id) REFERENCES artists(id),
 photo_url VARCHAR,
 description TEXT,
 price INT NOT NULL,
 rate INT,
 caregory VARCHAR(100) NOT NULL,
 size VARCHAR(50) NOT NULL,
 sold BOOLEAN,
 tybe VARCHAR NOT NULL
);

COMMIT;