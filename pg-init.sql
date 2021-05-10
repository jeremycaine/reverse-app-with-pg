CREATE SCHEMA sample;

DROP TABLE IF EXISTS sample.echo;

CREATE TABLE sample.echo(id SERIAL PRIMARY KEY, txt VARCHAR(255), isReverse BOOLEAN);
INSERT INTO sample.echo(txt, isReverse) VALUES('hello', FALSE);
INSERT INTO sample.echo(txt, isReverse) VALUES('doog yrev', TRUE);

