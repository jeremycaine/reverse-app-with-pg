const db = require('../../../utils/db');

// Put echo into the database
export default function handler(request, response) {

    const txt = request.body.txt;
    const isReverse = request.body.isReverse;
    console.log('insert text', txt, isReverse);
    
    const text = 'INSERT INTO sample.echo(txt, isReverse) VALUES($1, $2) RETURNING *';
    const values = [txt, isReverse];

    return new Promise((resolve, reject) => {
        db
        .query(text, values)
        .then(result => {
            console.log(result.rows[0]);
            response.status(200).json({ insert: "OK", inserted: result.rows[0]});
        })
        .catch(e => {
            console.log('db error');
            console.error(e.stack)
            }
            );
    });
}
