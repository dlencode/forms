class Form {
  constructor(callSelector, formContainer, formClose) {
    this.callSelector = document.querySelectorAll(callSelector);
    this.formContainer = document.querySelector(formContainer);
    this.formClose = document.querySelector(formClose);
  }

  log(callSelector, formContainer) {
    console.log(this.formContainer);
  }

  click(callSelector, formContainer) {
    for (let i = 0; i < this.callSelector.length; i++) {
      this.callSelector[i].addEventListener('click', (event) => {
        event.preventDefault();

        this.formContainer.style.display = 'flex';
        setTimeout(() => {
          var test = anime({
            targets: this.formContainer,
            opacity: 1,
            easing: 'linear'
          });
          let fadeInFormContent = anime({
            targets: '.formjs__content',
            opacity: 1,
            translateY: -100,
            delay: 250
          });
        }, 250);
      })
    }
  }

  close(formContainer, formClose) {
    this.formClose.addEventListener('click', () => {
      // this.formContainer.style.opacity = 0;

      let fadeOutFormContent = anime({
        targets: '.formjs__content',
        opacity: 0,
        translateY: 200,
        delay: 0
      });

      setTimeout(() => {
        this.formContainer.style.display = 'none';
      }, 1000);
    });
  }
}

class Libs {
  constructor(link, appendAfrer) {
    this.link = link;
    this.appendAfrer = appendAfrer;
  }

  init(link, appendAfrer) {
    let script = document.createElement('script');
    script.src = link;
    document.querySelector(appendAfrer).appendChild(script);
  }
}

let test = new Form('.formjs__call', '.formjs', '.formjs__close-area');
// test.log();
test.click();
test.close();

let animeJs = new Libs();
animeJs.init('https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js', 'body');
