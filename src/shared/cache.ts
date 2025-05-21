export function getCacheKeys() {
    const restoreKey = `allincart-cli-cache-${process.env.ALLINCART_CLI_VERSION}`
    return [
        restoreKey
    ]
}
