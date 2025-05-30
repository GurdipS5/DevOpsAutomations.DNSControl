module.exports = {
  env: {
    browser: false,
    es2021: true,
    node: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'script'
  },
  globals: {
    // DNSControl globals
    D: 'readonly',
    CLOUDFLAREAPI: 'readonly',
    NewRegistrar: 'readonly',
    NewDnsProvider: 'readonly',
    A: 'readonly',
    AAAA: 'readonly',
    CNAME: 'readonly',
    MX: 'readonly',
    TXT: 'readonly',
    NS: 'readonly',
    PTR: 'readonly',
    SRV: 'readonly',
    CAA: 'readonly',
    ALIAS: 'readonly',
    CF_REDIRECT: 'readonly',
    CF_TEMP_REDIRECT: 'readonly',
    CF_WORKER_ROUTE: 'readonly',
    TTL: 'readonly',
    DefaultTTL: 'readonly',
    NAMESERVER_TTL: 'readonly'
  },
  rules: {
    'no-undef': 'error',
    'no-unused-vars': 'warn',
    'prefer-const': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error'
  }
}
