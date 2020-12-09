const { index } = require('../controllers/people');

module.exports = router => {
    router.get('/people', index);
    
    return router;
}