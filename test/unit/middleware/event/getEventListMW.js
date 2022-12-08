const expect = require('chai').expect;
const getEventListMW = require('../../../../middleware/event/getEventListMW');

describe('getEventList middleware ', () => {
    it('should return events with attendee list and attendance number', done => {
        const mw = getEventListMW({
            EventModel:{
                find: (p1, cb) => {
                    expect(p1).to.be.eql({});
                    cb(null, [
                        {attendees: ['mockperson1', 'mockperson2']},
                        {attendees: []}
                    ]);
                }
            }
        });
        const resMock = {locals: {}}

        mw({
            params: {}
        }, resMock, (err) => {
            expect(err).to.be.equal(undefined);
            expect(resMock.locals).to.be.eql({eventList: [
                {attendees: ['mockperson1', 'mockperson2'], attendance: 2 },
                {attendees: [], attendance: 0 }
                ]});
            done();
        });
    });

    it('should call next with error parameter if database returns an error', done => {
        const mw = getEventListMW({
            EventModel: {
                find: (p1, cb) => {
                    expect(p1).to.be.eql({});
                    cb('dberror', null);
                }
            }
        });
        const resMock = {locals: {}}
        mw({param: {}}, resMock, err => {
            expect(err).to.be.equal('dberror');
            done();
        });
    });
});
