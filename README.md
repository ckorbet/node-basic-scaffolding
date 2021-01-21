# Node Basic Scaffolding

Tech Stack:
    - NodeJs
    - Yeoman
    - ExpressJs
    - Mocha/Chai
    - Docker

## Getting Started

## Requirements:

- node.js 14.x.x
- npm 6.x.x
- nvm
- pyton 2.x.x
- gym

### Node-gyp:

Install with `npm`:

``` bash
$ npm install -g node-gyp
```

Also need to install:

##### On Unix / Linux

   * `python` `v2.7`
   * `make`
   * A proper C/C++ compiler toolchain, like [GCC](https://gcc.gnu.org)


##### On Mac OS X

   * `python` `v2.7` (already installed on Mac OS X)
   * [Xcode](https://developer.apple.com/xcode/download/)
     * Install the `Command Line Tools` via Xcode. It can be found under the menu `Xcode -> Preferences -> Downloads`
     * This step will install `gcc` and the related toolchain containing `make`

##### On Windows

Install all the required tools and configurations using Microsoft's [windows-build-tools](https://github.com/felixrieseberg/windows-build-tools) using `npm install --global --production windows-build-tools` from an elevated PowerShell or CMD.exe (run as Administrator).

## API Resful Server Scripts

### Build the app
Download all dependencies and libraries. And it generates all the optimized files of the application in the dist folder that will be included in the executable or the docker image

``` bash
npm run build_server
```
**The application is optimised. Only the files of /dist folder are included in the executable.**

### Run Server
``` bash
npm run start_server
```
### Run Watch Server
``` bash
npm run start_server_watch
```
### Debug Server
``` bash
npm run debug_server
```
### Run Test Server
Run the unit tests and e2e

``` bash
npm run test_server
```

## Mocha test
To incorporate the test files for both the server part and the generator, the user must declare import to /test/index.js

Example:

```
// Load Controlers test suites
import './controllers/health.spec';
import './controllers/generate.spec';

// Load Services test suites
import './services/utils.spec';

```

## Notes

### Mistaking the run start_server_watch
#### Log
``` bash
nodemon] Internal watch failed: ENOSPC: System limit for number of file watchers reached, watch '/home/jcliment/Workspace/initializr/src/server'
Waiting for the debugger to disconnect...
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! initializr_server@1.0.0 start_dev_watch: `nodemon --exec babel-node server.js`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the initializr_server@1.0.0 start_dev_watch script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/jcliment/.npm/_logs/2021-01-20T08_21_58_958Z-debug.log
Waiting for the debugger to disconnect...
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! initializr@1.0.0 start_server_watch: `cd src/server && npm run start_dev_watch && cd ../..`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the initializr@1.0.0 start_server_watch script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/jcliment/.npm/_logs/2021-01-20T08_21_58_986Z-debug.log
Waiting for the debugger to disconnect...
```

#### Solution

https://stackoverflow.com/questions/34662574/node-js-getting-error-nodemon-internal-watch-failed-watch-enospc

