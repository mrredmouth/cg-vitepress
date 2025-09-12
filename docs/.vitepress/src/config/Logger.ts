import log4js from 'log4js';
import path from 'path';

// 日志配置
const configureLogger = () => {
  // 确保日志目录存在（可选，需配合 fs 创建目录）
  const logDir = 'logs';

  log4js.configure({
    appenders: {
      // 控制台输出（仅开发环境）
      console: {
        type: 'console',
        layout: {
          type: 'pattern',
          pattern: '%[[%d{yyyy-MM-dd hh:mm:ss}] [%p] %c%] - %m',
        },
      },

      // 通用日志文件
      app: {
        type: 'dateFile',
        filename: `${logDir}/app.log`,
        pattern: '-yyyy-MM-dd.log',
        alwaysIncludePattern: false,
        numBackups: 14,
        compress: true,
      },

      // 错误日志单独存储
      error: {
        type: 'dateFile',
        filename: `${logDir}/error.log`,
        pattern: '-yyyy-MM-dd.log',
        alwaysIncludePattern: false,
        numBackups: 30,
        compress: true,
      },
    },

    categories: {
      default: {
        appenders: ['console', 'app'],
        level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
      },
    },
  });
};

// 初始化配置
configureLogger();

// 1. 延迟初始化
let logger: any = null;

// 导出获取 logger 的方法
const createLogger = (category: string): log4js.Logger => {
  if (!logger) {
    logger = log4js.getLogger(category); // 延迟创建
  }
  return logger;
};


/**
 * 创建一个以当前文件名（不含扩展名）为 category 的 logger
 * vitepress中用不了反射，不能从调用栈中获取调用此函数的文件名
 * meta: 额外的上下文信息，可以包含任何键值对
 */
const createModuleLogger = (meta: NodeJS.Dict<any> = {}) => {
  // 获取当前调用此函数的文件的文件名（如 sidebar-generator.ts）
  const origin = new Error().stack?.split('\n')[2]; // 调用栈的上一层
  let fileName = 'unknown';

  if (origin) {
    // 提取文件路径，例如 "at Object.<anonymous> (/project/src/sidebar-generator.ts:5:16)"
    const match = origin.trim().match(/\((.*):\d+:\d+\)|(.+\.ts?):\d+:\d+/);
    const filePath = match ? (match[1] || match[2]) : '';
    if (filePath) {
      fileName = path.basename(filePath, path.extname(filePath)); // 去掉 .ts 或 .js
    }
  }

  const logger = createLogger(fileName);

  // 可选：添加文件名上下文
  logger.addContext('file', fileName);

  return logger;
};

export default createLogger;

export { createModuleLogger as getModuleLogger};
