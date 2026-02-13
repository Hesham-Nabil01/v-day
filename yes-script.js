let musicPlaying = false
let confettiInterval = null

window.addEventListener('load', () => {
    const music = document.getElementById('bg-music')

    // ---- MUSIC ----
    music.volume = 0.3

    // Try autoplay (allowed since user clicked "Yes" to reach this page)
    music.play().then(() => {
        musicPlaying = true
        document.getElementById('music-toggle').textContent = '🔊'
    }).catch(() => {
        // If browser blocks it, user can start it manually
        musicPlaying = false
        document.getElementById('music-toggle').textContent = '🔇'
    })

    // ---- CONFETTI ----
    launchConfetti()
})

function launchConfetti() {
    const colors = [
        '#ff69b4', '#ff1493', '#ff85a2',
        '#ffb3c1', '#ff0000', '#ff6347',
        '#ffffff', '#ffdf00'
    ]

    // Big opening burst
    confetti({
        particleCount: 250,
        spread: 140,
        origin: { y: 0.45 },
        colors
    })

    // Continuous gentle fireworks
    confettiInterval = setInterval(() => {
        confetti({
            particleCount: 60,
            spread: 100,
            startVelocity: 30,
            gravity: 0.9,
            ticks: 350,
            origin: {
                x: Math.random(),
                y: Math.random() * 0.4
            },
            colors
        })
    }, 900)
}

function toggleMusic() {
    const music = document.getElementById('bg-music')

    if (musicPlaying) {
        music.pause()
        musicPlaying = false
        document.getElementById('music-toggle').textContent = '🔇'
    } else {
        music.play().then(() => {
            musicPlaying = true
            document.getElementById('music-toggle').textContent = '🔊'
        })
    }
}
