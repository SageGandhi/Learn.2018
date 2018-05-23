const repl = require('repl');

let replInst = repl.start({
    ignoreUndefined: true,
    replMode: repl.REPL_MODE_STRICT
});
// Do npm install lodash For PreLoading Global Library
replInst.context.require('lodash');
replInst.context.require('./ConfigConstant');