function isMobile() {
    return window.innerWidth <= 900; 
}

function checkMobileOverlay() {
    const overlay = document.getElementById('mobile-overlay');
    if (isMobile()) {
        overlay.style.display = 'flex'; 
    } else {
        overlay.style.display = 'none'; 
    }
}

window.addEventListener('load', checkMobileOverlay);
window.addEventListener('resize', checkMobileOverlay);
