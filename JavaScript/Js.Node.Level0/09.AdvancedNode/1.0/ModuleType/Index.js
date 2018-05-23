const configExt = require('./Config.json');
const config = require('./Config');

console.log(configExt);
console.log(config);
//https://nodejs.org/api/addons.html Create A Addon
//Install npm install node-gyp --global,Do node-gyp configure In Addon Root,If Error Finding Python
//Do npm --add-python-to-path='true' --debug install --global windows-build-tools,In Admin Cmd
//Microsoft .NET Framework 4.5.1 (Web Installer) For Windows Vista SP2, Windows 7 SP1, Windows 8, Windows Server 2008 SP2 Windows Server 2008 R2 SP1 &
//Windows Server 2012 DownLoad & Install.npm config set python C:\Users\Prajit.Gandhi\.windows-build-tools\python27.node-gyp configure.node-gyp build.
//mkdir ../node_modules & cp .\build\Release\HelloAddon.node ..\node_modules\
console.log('Using Node Addon:',require('HelloAddon').author());
//Go To Node Repl:Do require.extensions & require.extensions['.js'].toString(),require.extensions['.json'].toString(), require.extensions['.node'].toString()
