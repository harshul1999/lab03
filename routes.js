const { Router } = require("express");

module.exports = router => {
    require('./routes/pages')(router);
    require('./routes/people')(router);
    return router;
};