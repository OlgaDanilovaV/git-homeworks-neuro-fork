(async () => {
<<<<<<< HEAD
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const coordsEl = document.querySelector('#user-coords');
            coordsEl.textContent = `${position.coords.latitude}, ${position.coords.longitude}`
            coordsEl.parentElement.classList.remove('invisible');
        });
    }
=======
    // TODO: add custom logic here
>>>>>>> d11238dcbc9be39513620e54e31387ad441e0205
})();