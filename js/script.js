document.addEventListener('DOMContentLoaded', function () {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const secondScreen = document.getElementById('secondScreen');
    const sunflower = document.getElementById('sunflower');

    // Verifica que los elementos se han encontrado correctamente
    console.log("noButton:", noButton);
    console.log("yesButton:", yesButton);
    console.log("secondScreen:", secondScreen);
    console.log("sunflower:", sunflower);

    // Verifica si los elementos están presentes
    if (!noButton) console.error("El botón 'No' no se encuentra.");
    if (!yesButton) console.error("El botón 'Sí' no se encuentra.");
    if (!secondScreen) console.error("El segundo contenedor no se encuentra.");
    if (!sunflower) console.error("El contenedor del girasol no se encuentra.");

    noButton.addEventListener('mouseover', function () {
        const randomX = Math.floor(Math.random() * (window.innerWidth - noButton.clientWidth));
        const randomY = Math.floor(Math.random() * (window.innerHeight - noButton.clientHeight));
        noButton.style.position = 'absolute';
        noButton.style.left = randomX + 'px';
        noButton.style.top = randomY + 'px';
    });

    yesButton.addEventListener('click', function () {
        document.querySelector('.container').style.display = 'none';
        secondScreen.style.display = 'flex';

        // Crear los pétalos
        const petalCount = 12;
        for (let i = 0; i < petalCount; i++) {
            const petal = document.createElement('div');
            petal.className = 'petalo';
            petal.style.transform = `rotate(${i * (360 / petalCount)}deg)`;
            sunflower.appendChild(petal);
        }
    });
});
