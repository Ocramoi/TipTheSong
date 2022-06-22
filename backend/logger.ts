import winston from 'winston';

const _logger: winston.Logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'info.log', level: 'info' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  _logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

export const logger: winston.Logger = _logger;
