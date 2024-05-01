document.addEventListener('DOMContentLoaded', function () {
    const modalButtons = document.querySelectorAll('.mostrar-modal');
    const closeModalButtons = document.querySelectorAll('.cerrar-modal');

    modalButtons.forEach(modalButton => {
        modalButton.addEventListener('click', function() {
            const previews = document.querySelectorAll('.preview.active');

            previews.forEach(preview => {
                const slides = preview.querySelectorAll('.slider img');
                const navButtons = preview.querySelectorAll('.nav-button');

                // Agregamos la clase 'active' al primer botón de navegación y a la primera imagen
                navButtons[0].classList.add('active');
                slides[0].classList.add('active');

                navButtons.forEach((button, index) => {
                    button.addEventListener('click', () => {
                        // Quitamos la clase 'active' de todos los botones de navegación dentro del mismo slider
                        navButtons.forEach(btn => btn.classList.remove('active'));
                        // Añadimos la clase 'active' al botón actual
                        button.classList.add('active');

                        // Quitamos la clase 'active' de todas las imágenes dentro del mismo slider
                        slides.forEach(slide => slide.classList.remove('active'));
                        // Añadimos la clase 'active' a la imagen correspondiente al índice del botón
                        slides[index].classList.add('active');
                    });
                });
            });
        });
    });
    closeModalButtons.forEach(closeModalButton => {
        closeModalButton.addEventListener('click', function() {
            const previews = document.querySelectorAll('.preview');

            previews.forEach(preview => {
                const slides = preview.querySelectorAll('.slider img');
                const navButtons = preview.querySelectorAll('.nav-button');

                // Quitamos la clase 'active' de todos los botones de navegación dentro del mismo slider
                navButtons.forEach(btn => btn.classList.remove('active'));

                // Quitamos la clase 'active' de todas las imágenes dentro del mismo slider
                slides.forEach(slide => slide.classList.remove('active'));
            });
        });
    });
});
