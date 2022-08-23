import config from '../config/config';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'node-express-typescript-garage-app API documentation',
    version: '0.0.1',
    description: 'This is a node express mongoose garage app in typescript',
    license: {
      name: 'MIT',
      url: 'https://github.com/RomanTaran/garage-app.git',
    },
  },
  servers: [
    {
      url: `http://localhost:${config.port}/v1`,
      description: 'Development Server',
    },
  ],
};

export default swaggerDefinition;
