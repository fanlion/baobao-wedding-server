// api前缀
export const ROUTER_PREFIX = '/api/v1';

// 默认分页量
export const DEFAULT_PAGE_LIMIT = 10;

export const IGNORE_AUTHO_ROUTES = [
  new RegExp(`${ROUTER_PREFIX}/login$`),
  new RegExp(`${ROUTER_PREFIX}/wxlogin$`),
  new RegExp(`${ROUTER_PREFIX}/logout$`),
];
