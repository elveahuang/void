import { setupI18n } from '@/i18n';
import { setupRouter } from '@/router';
import { env } from '@/utils/env';

/**
 * 初始化应用
 */
export async function setup(): Promise<void> {
    setupRouter({ base: env.base }).then();
    setupI18n('zh').then();
}
