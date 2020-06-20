/* eslint no-bitwise: ["error", { "allow": [">>", "^", "&"] }] */
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

const escapeForHTML = s => s.replace(/[&<]/g, c => (c === '&' ? '&amp;' : '&lt;'));

export default escapeForHTML;
