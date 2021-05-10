const db = require('../../../utils/db');

// Get entries from the database
export default function handler(request, response) {

    //const txt = request.body.txt;
    //const isReverse = request.body.isReverse;
    console.log('select txt');
    
    const text = 'SELECT * FROM sample.echo';
    const values = '';

    return new Promise((resolve, reject) => {
        db
        .query(text, values)
        .then(result => {
            console.log(result.rows);
            response.status(200).json({ entries: result.rows });
        })
        .catch(e => {
            console.log('db error');
            console.error(e.stack)
            }
            );
    });
}