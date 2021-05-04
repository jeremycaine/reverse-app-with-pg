CREATE SCHEMA sample;

DROP TABLE IF EXISTS sample.echo;

CREATE TABLE sample.echo(id SERIAL PRIMARY KEY, echo VARCHAR(255), reversed BOOLEAN);
INSERT INTO sample.echo(echo, reversed) VALUES('hello', FALSE);
INSERT INTO sample.echo(echo, reversed) VALUES('doog yrev', TRUE);

