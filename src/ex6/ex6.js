function moveBall() {
    const pilota = document.getElementById('pilota');
    const caixa = document.getElementById('caixa');

    let x = 0;
    let y = 0;

    function handleArrowKey(e) {
        const rect = caixa.getBoundingClientRect();
        switch (e.key) {
            case 'ArrowUp':
                if (y > 0) y -= 5;
                break;
            case 'ArrowDown':
                if (y < rect.height - pilota.offsetHeight) y += 5;
                break;
            case 'ArrowLeft':
                if (x > 0) x -= 5;
                break;
            case 'ArrowRight':
                if (x < rect.width - pilota.offsetWidth) x += 5;
                break;
        }

        pilota.style.left = `${x}px`;
        pilota.style.top = `${y}px`;
    }

    window.addEventListener('keydown', handleArrowKey);
}