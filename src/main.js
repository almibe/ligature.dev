async function main() {
    await new Promise((resolve) => setTimeout(1000, resolve))
    console.log('done')
}

main()
