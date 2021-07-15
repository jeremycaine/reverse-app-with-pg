const db = require('../../../utils/db');

export default function handler(request, response) {
    console.log('db ready check');
    
    const text = 'SELECT NOW();';
    const values = '';

    return new Promise((resolve, reject) => {
        db
        .query(text, values)
        .then(result => {
            console.log('db query ok');
            response.status(200).json({ status: "UP", checks: result.rows[0]});
        })
        .catch(e => {
            console.log('db error');
            console.error(e.stack)
            }
            );
    });
}
