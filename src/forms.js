class Form {
  constructor(callSelector, formContainer, formClose, durationAnimation) {
    this.callSelector = document.querySelectorAll(callSelector);
    this.formContainer = document.querySelector(formContainer);
    this.formClose = document.querySelector(formClose);
    this.durationAnimation = durationAnimation;
  }

  log(callSelector, formContainer) {
    console.log(this.formContainer);
  }

  click(callSelector, formContainer, durationAnimation) {
    for (let i = 0; i < this.callSelector.length; i++) {
      this.callSelector[i].addEventListener('click', (event) => {
        event.preventDefault();

        this.formContainer.style.display = 'flex';
        setTimeout(() => {
          anime({
            targets: this.formContainer,
            opacity: 1,
          });
          anime({
            targets: '.formjs__content',
            opacity: 1,
            translateY: [100, 0],
            delay: 100,
            duration: this.durationAnimation
          });
          anime({
            targets: '.formjs__content--header',
            opacity: [0, '1'],
            translateY: [50, 0],
            duration: this.durationAnimation,
            delay: 200
          });
          anime({
            targets: '.formjs__input',
            opacity: [0, '1'],
            translateY: [50, 0],
            duration: this.durationAnimation,
            delay: function(el, index) {
              return index * 250 + 300;
            }
          });
          anime({
            targets: '.formjs__footer--send',
            opacity: [0, '1'],
            translateY: [50, 0],
            duration: this.durationAnimation,
            delay: 700
          });
        }, 250);
      })
    }
  }

  close(formContainer, formClose) {
    this.formClose.addEventListener('click', () => {
      // this.formContainer.style.opacity = 0;

      anime({
        targets: '.formjs__content',
        opacity: 0,
        translateY: [0, 100],
        delay: 250,
        duration: 2000
      });

      setTimeout(() => {
        this.formContainer.style.display = 'none';
      }, 1000);
    });
  }
}

class Libs {
  constructor(link, appendAfter) {
    this.link = link;
    this.appendAfter = appendAfter;
  }

  init(link, appendAfter) {
    let script = document.createElement('script');
    script.src = link;
    document.querySelector(appendAfter).appendChild(script);
  }
}

let test = new Form('.formjs__call', '.formjs', '.formjs__close-area', 2000);
// test.log();
test.click();
test.close();

let animeJs = new Libs();
animeJs.init('https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js', 'body');
