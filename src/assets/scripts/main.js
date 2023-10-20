// document.addEventListener('DOMContentLoaded', () => {
//   const sections = document.querySelectorAll('.section');
//   let currentSection = 0;

//   sections[currentSection].style.transform = 'translateY(0)';


//   window.addEventListener('wheel', (e) => {
//       if (e.deltaY > 0 && currentSection < sections.length - 1) {
//           currentSection++;
//       } else if (e.deltaY < 0 && currentSection > 0) {
//           currentSection--;
//       }

//       sections.forEach((section, index) => {
//           section.style.transform = `translateY(-${100 * (currentSection)}vh)`;
//       });
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');
  let currentSection = 0;
  let isScrolling = false;
  let startY = 0;

  sections[currentSection].style.transform = 'translateY(0)';

  window.addEventListener('wheel', scrollHandler);

  window.addEventListener('touchstart', (e) => {
      startY = e.touches[0].clientY;
  });

  window.addEventListener('touchmove', (e) => {
      const deltaY = e.touches[0].clientY - startY;
      scrollHandler({ deltaY });
      startY = e.touches[0].clientY;
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
              section.style.transform = `translateY(-${100 * (currentSection)}vh)`;
          });
      }
  }
});


