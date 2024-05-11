const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv').config({path: 'src/environments/.env'});


  // `environment.ts` file structure
  const envFile  = `export const environment = {
    serviceID: '${process.env["SERVICE_ID"]}',
    templateID: '${process.env["TEMPLATE_ID"]}',
    publicKey: '${process.env["PUBLIC_KEY"]}',
    toEmail: '${process.env["TO_EMAIL"]}',
    production: true,
  };`;

  const targetPath = './src/environments/environment.ts';
  fs.writeFile(targetPath, envFile, (err) => {
      if (err) {
          console.error(err);
          throw err;
      } else {
          console.log('Successfully generated environment.ts');
      }
  });
