BEGIN;
  DROP TABLE IF EXISTS  artists,artwork,artist_artwork
  CASCADE;

CREATE TABLE artists
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email_adress VARCHAR NOT NULL,
  url VARCHAR,
  phone_number VARCHAR
);

CREATE TABLE artwork
(
 id SERIAL PRIMARY KEY,
 name VARCHAR(50) NOT NULL,
 FORIGN KEY (artist_id) REFERENCES artists(id),
 photo_url VARCHAR,
 description TEXT,
 price VARCHAR,
 rate VARCHAR,
 caregory VARCHAR,
 size VARCHAR,
 sold VARCHAR,
 tybe VARCHAR,
);

CREATE TABLE artist_artwork 
(
  artist_id INT,
  artwork_id INT, 
  FORIGN KEY (artist_id) REFERENCES artists(id),
  FORIGN KEY (artwork_id) REFERENCES artwork(id)
);

COMMIT;