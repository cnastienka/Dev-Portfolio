// Genera los pétalos de sakura animados
function createPetals() {
    const container = document.getElementById('sakura-container');
    if (!container) return; // Guard: sale si el contenedor no existe en el DOM

    const petalCount = 40;

    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';

        const size = Math.random() * 16 + 16 + 'px';
        petal.style.width = size;
        petal.style.height = size;
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = (Math.random() * 10 + 12) + 's';
        petal.style.animationDelay = '-' + (Math.random() * 10) + 's';

        container.appendChild(petal);
    }
}

// Actualiza el año del copyright automáticamente
function setFooterYear() {
    const yearEl = document.getElementById('footer-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    createPetals();
    setFooterYear();
});
