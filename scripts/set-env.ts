import {
  existsSync,
  mkdirSync,
  writeFile,
} from 'fs';
import { argv } from 'yargs';
import getEnv from './get-env';

require('dotenv').config();

const envProps = [
  'API_URL',
];

const {
  API_URL,
} = getEnv(envProps, process.env);

const environment = argv.environment;
const isProd = environment === 'prod';

const targetDir = `./src/environments`;
const targetPath = `${targetDir}/environment.ts`;

const envConfigFile = `export const environment = {
  production: ${isProd},
  apiUrl: '${API_URL}',
  headers: {
    'Api-Version': 'v1',
  },
};
`;

if (!existsSync(targetDir)) {
  mkdirSync(targetDir);
}

writeFile(targetPath, envConfigFile, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Output generated at ${targetPath}`);
});
