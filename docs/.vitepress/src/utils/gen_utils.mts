import { generateSidebar } from '../scripts/gen_sidebar.mts';
import createLogger from '../config/Logger.ts';

/**
 * 生成侧边栏配置脚本
 * 遍历 docs 目录下的所有 Markdown 文件和文件夹，生成符合 VitePress 侧边栏配置格式的对象
 * 1. 先安装 npm install ts-node typescript --save-dev
 * 2. 然后运行 npx ts-node scripts/generate-sidebar.mts
 * 
 */

const logger = createLogger('gen-sidebar');


function genSidebar(dir: string, basePath: string = '', prefix: string = ''): Array<{ text: string; link?: string; items?: any[] }> {
  const sidebar: Array<{ text: string; link?: string; items?: any[] }> = generateSidebar(dir, basePath, prefix);

  logger.info(`✅ Generate sidebar successfully for ${dir}`);
  // logger.info(`📄 Output: ${JSON.stringify(sidebar, null, 2)}`);
  return sidebar;
}


export { genSidebar }