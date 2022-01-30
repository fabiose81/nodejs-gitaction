const calcultate = require('../controller/calculate.controller.js');

module.exports = function(app) {
 
    app.post('/api/calculate/add', calcultate.add);

    app.post('/api/calculate/sub', calcultate.sub);

    app.post('/api/calculate/multi', calcultate.multi);

    app.post('/api/calculate/div', calcultate.div);
    
}