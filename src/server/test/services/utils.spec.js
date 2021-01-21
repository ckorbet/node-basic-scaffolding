import { UtilsService } from '../../services';

describe('services/utils', () => {
    describe('Test success() and error() Rest response methods', () => {
        let errorElementNotFound;

        before(() => {
            errorElementNotFound = new Error('Element not found');
        });
    
        it('error return the right code error', () => {
        const json = sinon.spy();
        const res = { status: sinon.stub() };
        res.status.returns({ json });
        UtilsService.error(res, errorElementNotFound, 404);
        sinon.assert.calledWith(res.status, 404);
        });
    
        it('error return the default code', () => {
        const json = sinon.spy();
        const res = { status: sinon.stub() };
        res.status.returns({ json });
        UtilsService.error(res, errorElementNotFound);
        sinon.assert.calledWith(res.status, 400);
        });
    
        it('error return the error message', () => {
        const json = sinon.spy();
        const res = { status: sinon.stub() };
        res.status.returns({ json });
        UtilsService.error(res, errorElementNotFound, 400);
        sinon.assert.calledWith(json, {
            message: errorElementNotFound.message,
            stack: errorElementNotFound.stack,
        });
        });
        it('error in prod return the error message Backend Error', () => {
        const json = sinon.spy();
        const res = { status: sinon.stub() };
        res.status.returns({ json });
        process.env.NODE_ENV = 'prod';
        UtilsService.error(res, errorElementNotFound, 400);
        sinon.assert.calledWith(json, {
            message: errorElementNotFound.message,
            stack: errorElementNotFound.stack,
        });
        });
    
        it('success return the rigth code', () => {
        const json = sinon.spy();
        const res = { status: sinon.stub() };
        res.status.returns({ json });
        UtilsService.success(res, { message: 'Element found' }, 400);
        sinon.assert.calledWith(res.status, 400);
        });
    
        it('success return the default code', () => {
        const json = sinon.spy();
        const res = { status: sinon.stub() };
        res.status.returns({ json });
        UtilsService.success(res, { message: 'Element found' });
        sinon.assert.calledWith(res.status, 200);
        });
    
        it('success return the error message', () => {
        const json = sinon.spy();
        const res = { status: sinon.stub() };
        res.status.returns({ json });
        UtilsService.success(res, { message: 'Element found' }, 400);
        sinon.assert.calledWith(json, { message: 'Element found' });
        });
    });
});  