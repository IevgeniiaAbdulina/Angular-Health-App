const setEnv = () => {
  const fs = require('fs');
  const writeFile = fs.writeFile;

  // Configure Angular `environment.ts` file path
  const targetPath = './src/environments/environment.ts';

  // Load node modules
  const appVersion = require('../../package.json').version;
  require('dotenv').config({
    path: 'src/environments/.env'
  })

  // `environment.ts` file structure
  const envConfigFile  = `export const environment = {
    serviceID: '${process.env["SERVICE_ID"]}',
    templateID: '${process.env["TEMPLATE_ID"]}',
    publicKey: '${process.env["PUBLIC_KEY"]}',
    toEmail: '${process.env["TO_EMAIL"]}',
    production: true,
    appVersion: '${appVersion}',
  }`;

  console.log('The file `environment.ts` will be written with the following content: \n');
  writeFile(targetPath, envConfigFile, (err: any) => {
    if(err) {
      console.log(err);
      throw err;
    } else {
      console.log(`Angular environment.ts file generated correctly at ${targetPath} \n`)
    }
  })
}

setEnv();
