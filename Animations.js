const elementsToAnimate = document.querySelectorAll('.up-animated-element, .right-animated-element, .left-animated-element, .Nav-Animation');// procura e vê estes elementos


const startAnimation = (element) => {
  const observer = new IntersectionObserver((entries, observer) => {//aqui quando o objeto ou seja a cena que tem uma das classes que estam acima na variavel elementsToAnimate
    entries.forEach(entry => {// isto vai aconteceu para todos os elementos  que estão a ser observados
      if (entry.isIntersecting) {// para cada elemento que foi observado ou seja conseguimos ver na pagina 
        gsap.to(element, { opacity: 1, translateX:0, translateY: 0, duration: 0.2, ease: 'power2.out' });// isto é um plugin que vai criar a animação
        observer.unobserve(element);// quando o elemento acabou de ser animado para de ser observado
      }
    });
  }, { threshold: 0.2 });//serve para definir quando um elemento está completamente visível na tela ou seja o tempo maximo que isto pode acontecer acho... nao me lembro 

  observer.observe(element);
};

// isto irá fazer com que a funçãio seja aplicada para cada elemento das classes chamado na varivel elements to animate 
elementsToAnimate.forEach(startAnimation);