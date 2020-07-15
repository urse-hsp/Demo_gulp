async () => {
    function sleep (time) {
        return new Promise((resolve) => setTimeout(reslove,time))
    }
    await sleep(500)
    console.log('done')
}