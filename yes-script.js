let musicPlaying = false

window.addEventListener('load', () => {
    launchConfetti()
    setTimeout(() => {
    confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.4 }
    })
}, 1500)


    // Autoplay music (works since user clicked Yes to get here)
    const music = document.getElementById('bg-music')
    music.volume = 0.3
    music.play().catch(() => {})
    musicPlaying = true
    document.getElementById('music-toggle').textContent = '🔊'
})

function launchConfetti() {
    const colors = [
        '#ff69b4', '#ff1493', '#ff85a2',
        '#ffb3c1', '#ff0000', '#ff6347',
        '#ffffff', '#ffdf00'
    ]

    // Big opening burst
    confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.4 },
        colors
    })

    // Continuous gentle fireworks
    setInterval(() => {
        confetti({
            particleCount: 50,
            spread: 90,
            startVelocity: 25,
            gravity: 0.8,
            ticks: 300,
            origin: {
                x: Math.random(),
                y: Math.random() * 0.4
            },
            colors
        })
    }, 1200)
}


    // Continuous side cannons
    const interval = setInterval(() => {
        if (Date.now() > end) {
            clearInterval(interval)
            return
        }

        confetti({
            particleCount: 40,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.6 },
            colors
        })

        confetti({
            particleCount: 40,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.6 },
            colors
        })
    }, 300)
}

function toggleMusic() {
    const music = document.getElementById('bg-music')
    if (musicPlaying) {
        music.pause()
        musicPlaying = false
        document.getElementById('music-toggle').textContent = '🔇'
    } else {
        music.play()
        musicPlaying = true
        document.getElementById('music-toggle').textContent = '🔊'
    }
}
