const {createLogger,format,transports} = require('winston');

const logger = createLogger({
    level: process.env.LOGGER_LEVEL,
    format: format.combine(
        format.colorize(),
        format.timestamp({
            timestamp:'YYYY-MM-DD HH:mm:ss',
        }),
        format.printf(
            (info)=>`${info.level}-${info.timestamp}:${info.message}`)
    ),
    transports:[new transports.Console()],
});

module.exports = logger;