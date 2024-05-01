document.addEventListener("DOMContentLoaded", function() {
    let preveiwContainer = document.querySelector('.products-preview');
    if (preveiwContainer) {
      let previewBox = preveiwContainer.querySelectorAll('.preview');
  
      document.querySelectorAll('.proyectos_lista .contenido a').forEach(enlace => {
        enlace.onclick = (event) => {
          event.preventDefault(); // Evita que el enlace redireccione
          preveiwContainer.style.display = 'flex';
          let name = enlace.closest('.imagen_proyecto').getAttribute('data-name');
          previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
              preview.classList.add('active');
              
            }
          });
        };
      });
  
      previewBox.forEach(close => {
        close.querySelector('.fa-times').onclick = () => {
          close.classList.remove('active');
          preveiwContainer.style.display = 'none';
        };
      });
    } else {
      console.error("No se encontró el contenedor con la clase .products-preview");
    }
  });
  