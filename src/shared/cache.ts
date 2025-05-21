export function getCacheKeys() {
    const restoreKey = `allincart-cli-cache-${process.env.SHOPWARE_CLI_VERSION}`
    return [
        restoreKey
    ]
}
