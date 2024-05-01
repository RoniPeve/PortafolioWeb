var nav = document.getElementById("nav");
window.addEventListener('scroll', ()=>{
    var scroll = window.scrollY

    if(scroll>100){
        nav.style.backgroundColor = '#121212'
        nav.style.borderBottom = '3px solid #04c2c9'; // Agregar borde inferior

    }else{
        nav.style.backgroundColor = 'transparent'
        nav.style.borderBottom = 'none'; 
    }
})
const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.menu a[href="#${id}"]`);
  
        if (entry.isIntersecting) {
          document.querySelector(".menu a.selected").classList.remove("selected");
          menuLink.classList.add("selected");
        }
      });
    },
    { rootMargin: "-30% 0px -70% 0px" }
  );
  
  menuLinks.forEach((menuLink) => {
    
  
    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);
    if (target) {
      observer.observe(target);
    }
  });
  