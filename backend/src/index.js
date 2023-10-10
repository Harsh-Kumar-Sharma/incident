require('./models');
const app = require('./app');
const config = require('./config/config');
const logger = require('./config/logger');
//const SocketHandler = require('./routes/socket.route');

const server = app.listen(config.port, async () => {
  logger.info(`Listening to port ${config.port}`);
  // const io = require('socket.io')(server);
  // io.on('connection', SocketHandler);
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  if (error.response) logger.error(`Unexpected Error: ${error.response.data}`);
  else logger.error(`Unexpected Error: ${error}`);

  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
