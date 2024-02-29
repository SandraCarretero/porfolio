// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const backgroundElement = document.getElementById('background');


const moveBackground = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const halfWidth = window.innerWidth / 2;
    const halfHeight = window.innerHeight / 2;

    const backgroundX = mouseX - halfWidth;
    const backgroundY = mouseY - halfHeight;

    backgroundElement.style.backgroundPosition = `${backgroundX}px ${backgroundY}px`;
};

document.addEventListener('mousemove', moveBackground);