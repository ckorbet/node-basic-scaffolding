// Declare Test libraries
global.chai = require('chai');
global.chaiHttp = require('chai-http');
global.expect = global.chai.expect;
global.sinon = require ('sinon');
global.server = require('../server');

chai.use(chaiHttp);

// Load Controlers test suites
import './controllers/health.spec';
import './controllers/generate.spec';

// Load Services test suites
import './services/utils.spec';
