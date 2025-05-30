// Provider configuration with Vault integration
// This file handles credential management from HashiCorp Vault

const { execSync } = require('child_process')

/**
 * Get secret from HashiCorp Vault
 * @param {string} path - Vault secret path
 * @param {string} key - Secret key
 * @returns {string} Secret value
 */
function getVaultSecret (path, key) {
  try {
    const command = `vault kv get -field=${key} ${path}`
    const result = execSync(command, { encoding: 'utf8' }).trim()
    return result
  } catch (error) {
    console.error(`Failed to retrieve ${key} from Vault: ${error.message}`)
    process.exit(1)
  }
}

/**
 * Get environment variable with fallback to Vault
 * @param {string} envVar - Environment variable name
 * @param {string} vaultPath - Vault secret path
 * @param {string} vaultKey - Vault secret key
 * @returns {string} Configuration value
 */
function getConfig (envVar, vaultPath, vaultKey) {
  // First try environment variable (for local development)
  if (process.env[envVar]) {
    return process.env[envVar]
  }
  
  // Fallback to Vault
  return getVaultSecret(vaultPath, vaultKey)
}

module.exports = {
  cloudflare: {
    // Using legacy API key + email (less secure)
    apiKey: getConfig(
      'CLOUDFLARE_API_KEY',
      'secret/cloudflare',
      'api_key'
    ),
    apiUser: getConfig(
      'CLOUDFLARE_API_USER',
      'secret/cloudflare',
      'api_user'
    ),
    
    // Alternative: Using API token (recommended)
    // apiToken: getConfig(
    //   'CLOUDFLARE_API_TOKEN',
    //   'secret/cloudflare',
    //   'api_token'
    // )
  }
}
