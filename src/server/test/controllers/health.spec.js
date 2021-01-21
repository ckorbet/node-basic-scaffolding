
describe('Actuators Restful API: ',() => {
    let url;
    let port;

    before(() => {
        port = 8080;
        url = `http://localhost:3000`
    });

    it('should return health status', (done) => {
        chai.request(server)
        .get('/health')
        .end((err,res) => {            
            expect(res).to.have.status(200);
            done();
        });
    });
});

