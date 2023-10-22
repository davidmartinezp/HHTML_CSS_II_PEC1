

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    let currentSection = 0;
    let isScrolling = false;
    let startY = 0;
  
    // sections.forEach((section, index) => {
    //   section.style.transform = `translateY(-${100 * index}vh)`;
    // });

    sections.forEach((section, index) => {
      section.style.transform = 'translateY(0)';
    });

    // sections[currentSection].style.transform = 'translateY(0)';
  
    // // Evento para el desplazamiento en dispositivos táctiles
    // window.addEventListener('touchstart', (e) => {
    //   startY = e.touches[0].clientY;
    // });
  
    // window.addEventListener('touchmove', (e) => {
    //   const deltaY = startY - e.touches[0].clientY; // Invertir la dirección del desplazamiento
    //   scrollHandler({ deltaY });
    //   startY = e.touches[0].clientY;
    //   e.preventDefault(); // Evita el desplazamiento predeterminado en dispositivos táctiles
    // });
  
    // Evento para el desplazamiento con la rueda del ratón en ordenadores
    window.addEventListener('wheel', (e) => {
      scrollHandler({ deltaY: e.deltaY });
    });
  
    function scrollHandler(e) {
      if (!isScrolling) {
        isScrolling = true;
        setTimeout(() => {
          isScrolling = false;
        }, 800);
  
        if (e.deltaY > 0 && currentSection < sections.length - 1) {
          currentSection++;
        } else if (e.deltaY < 0 && currentSection > 0) {
          currentSection--;
        }
  
        sections.forEach((section, index) => {
          section.style.transform = `translateY(-${100 * currentSection}vh)`;
        });
      }
    }
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  
    window.addEventListener('beforeunload', function () {
      window.scrollTo(0, 0);
    });
  });

  
  