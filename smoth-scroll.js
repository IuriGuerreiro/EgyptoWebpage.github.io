if (performance.navigation.type === 1) {
    // Reloaded page, scroll to the top
    window.scrollTo(0, 0);
}

const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)