const expect = require('chai').expect;
const getEventMW = require('../../../../middleware/event/getEventMW');

describe('getEvent middleware ', () => {
    it('should return events with attendee list and attendance number', done => {
        const mw = getEventMW({
            EventModel:{
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({_id: 1});
                    cb(null, {_id: 1, attendees: ['mockperson1', 'mockperson2']});
                }
            }
        });
        const resMock = {locals: {}}
        mw({
            params: {eventid: 1}
        }, resMock, (err) => {
            expect(err).to.be.equal(undefined);
            expect(resMock.locals).to.be.eql({
                event: {
                    _id: 1,
                    attendees: ['mockperson1', 'mockperson2'],
                    attendance: 2
                },
                people: ['mockperson1', 'mockperson2']
            });
            done();
        });
    });

    it('should call next with error parameter if database returns an error', done => {
        const mw = getEventMW({
            EventModel: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({_id: 1});
                    cb('dberror', null);
                }
            }
        });
        const resMock = {locals: {}}
        mw({params: {eventid: 1}}, resMock, err => {
            expect(err).to.be.equal('dberror');
            done();
        });
    });

    it('should call next with error if no event was found', done => {
        const mw = getEventMW({
            EventModel:{
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({_id: 1});
                    cb(undefined, null);
                }
            }
        });

        const resMock = {locals:{}};
        mw({
            params: {eventid: 1}
        }, resMock, err => {
            expect(err).to.be.equal(undefined);
            expect(resMock.locals).to.be.eql({});
            done();
        });
    });
});
