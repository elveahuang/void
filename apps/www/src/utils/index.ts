import { setupI18n } from '@/i18n';
import { setupRouter } from '@/router';
import { routes } from '@/router/routes';
import { env } from '@/utils/env';

/**
 * 初始化应用
 */
export async function setup(): Promise<void> {
    setupRouter({ routes: routes, base: env.base }).then();
    setupI18n('zh').then();
}
