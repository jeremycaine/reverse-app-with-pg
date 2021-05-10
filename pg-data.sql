CREATE SCHEMA reverse;

DROP TABLE IF EXISTS reverse.echo;

CREATE TABLE reverse.echo(id SERIAL PRIMARY KEY, txt VARCHAR(255), isReverse BOOLEAN);
INSERT INTO reverse.echo(txt, isReverse) VALUES('hello', FALSE);
INSERT INTO reverse.echo(txt, isReverse) VALUES('doog yrev', TRUE);

