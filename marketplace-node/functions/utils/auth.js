const { admin, db } = require('../utils/admin')

//acts like a middleware --> should have been in a middleware folder
exports.GAuth = (req, res, next) => {
    let idToken;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        idToken = req.headers.authorization.split('Bearer ')[1]
    } else {
        console.error('No token found')
        return res.status(403).json({ error: 'Unauthorized' })
    } 

    admin.auth().verifyIdToken(idToken)
        .then(decodedToken => {
            req.user = decodedToken;
            console.log(decodedToken)
            return db.collection('users')
            .where('uid', '==', req.user.uid)
            .limit(1)
            .get()
        })
        .then(data => {
             req.user.email = data.docs[0].data().email
             return next()
        })
        .catch(err => {
            console.error('Error while verifying token', err)
            return res.status(403).json(err)
        })
}