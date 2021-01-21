
describe('Genrate Restful API: ',() => {
    let body;
   
    before(() => {
        body = {data : {}};
    });

    it('should generate archetype', (done) => {
        chai.request(server)
        .post('/generate')
        .send(body)
        .end((err,res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('data').to.be.equal('OK');
            done();
        });
    });
});

