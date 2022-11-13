// Generate the first few lines based on filenames
// for p in $(ls -d */); do for f in $(ls $p); do echo "const $f = require(../middleware/${p}${f});"; done; done;

const addEventPersonMW = require("../middleware/event/addEventPersonMW");
const createEventMW = require("../middleware/event/createEventMW");
const delEventMW = require("../middleware/event/delEventMW");
const getEventListMW = require("../middleware/event/getEventListMW");
const getEventLoansMW = require("../middleware/event/getEventLoansMW");
const getEventMW = require("../middleware/event/getEventMW");
const getEventPeopleMW = require("../middleware/event/getEventPeopleMW");
const renameEventMW = require("../middleware/event/renameEventMW");
const saveLoanMW = require("../middleware/loan/saveLoanMW");
const delPersonMW = require("../middleware/people/delPersonMW");
const getPeopleMW = require("../middleware/people/getPeopleMW");
const savePersonMW = require("../middleware/people/savePersonMW");
const getPersonMW = require("../middleware/people/getPersonMW");
const renderMW = require("../middleware/renderMW");

const EventModel = require('../models/event');
const PersonModel = require('../models/person');
const LoanModel = require('../models/loan');

module.exports = function(app) {
    const objRepo = {
        EventModel: EventModel,
        PersonModel: PersonModel,
        LoanModel: LoanModel
    };

    app.use('/event/new',
        createEventMW(objRepo),
        renderMW(objRepo, 'create_event')
    );

    app.get('/event/list',
        getEventListMW(objRepo),
        renderMW(objRepo, 'events')
    );

    app.use('/event/view/:eventid',
        getEventMW(objRepo),
        getEventPeopleMW(objRepo),
        getEventLoansMW(objRepo),
        renderMW(objRepo, 'single_event')
    );

    app.use('/event/edit/:eventid',
        getEventMW(objRepo),
        renameEventMW(objRepo),
        renderMW(objRepo, 'rename_event')
    );

    app.use('/event/del/:eventid',
        getEventMW(objRepo),
        delEventMW(objRepo)
    );

    app.get('/people/list',
        getPeopleMW(objRepo),
        renderMW(objRepo, 'people')
    );

    app.use('/people/profile/:personid',
        getPersonMW(objRepo),
        renderMW(objRepo, 'profile')
    );

    app.use('/people/new',
        savePersonMW(objRepo),
        renderMW(objRepo, 'rename_person')
    );

    app.use('/people/del/:personid',
        getPersonMW(objRepo),
        delPersonMW(objRepo)
    );

    app.post('/event/add/:personid',
        addEventPersonMW(objRepo)
    );

    app.use('/loan/new',
        saveLoanMW(objRepo),
        renderMW(objRepo, 'new_loan')
    );

    app.use("/",
        renderMW(objRepo, 'index')
    );
}
