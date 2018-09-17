import handleSlide from './handleSlide';
import { TweenMax, Power2 } from 'gsap/TweenMax';
export default class handleSlideshow {
  constructor(el) {
    this.DOM = { el: el };
    this.animating = false;
    this.slides = [];
    Array.from(this.DOM.el.querySelectorAll('.slide')).forEach((slideEle) =>
      this.slides.push(new handleSlide(slideEle))
    );
    this.decor = this.DOM.el.querySelector('.slideshow__deco');
    this.prevNav = this.DOM.el.querySelector('.nav--prev');
    this.nextNav = this.DOM.el.querySelector('.nav--next');

    this.init();
    this.render();
  }
  init = () => {
    if (this.slides.length < 4) return;
    this.currentSlide = 0;
    this.prevSlide = this.slides.length - 1;
    this.nextSlide = this.currentSlide + 1;
    this.prevNav.addEventListener('click', () => this.navigate('prev'), false);
    this.nextNav.addEventListener('click', () => this.navigate('next'), false);
    this.render();
  };
  navigate = (dir) => {
    // if(this.animating === true) return;
    // this.animating = false;
    if (dir === 'prev') {
      this.currentSlide =
        this.currentSlide === 0
          ? this.slides.length - 1
          : this.currentSlide - 1;
    } else {
      this.currentSlide =
        this.currentSlide === this.slides.length - 1
          ? 0
          : this.currentSlide + 1;
    }
    this.prevSlide =
      this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
    this.nextSlide =
      this.currentSlide === this.slides.length - 1 ? 0 : this.currentSlide + 1;
    this.render(dir);
  };
  render = (dir) => {
    this.slides.forEach((slide) => slide.reset());
    let oldprev =
      this.prevSlide - 1 < 0 ? this.slides.length - 1 : this.prevSlide - 1;
    let oldnext =
      this.nextSlide + 1 > this.slides.length - 1 ? 0 : this.nextSlide + 1;
    if (!dir) {
      this.slides[this.prevSlide].setStartPos('prevSlide');
      this.slides[this.currentSlide].setStartPos('currentSlide');
      this.slides[this.nextSlide].setStartPos('nextSlide');
    } else {
      TweenMax.to(this.decor, 0.4, {
        ease: Power2.easeIn,
        x: dir === 'prev' ? 40 : -40,
        y: dir === 'prev' ? 40 : -40,
        onComplete: () => {
          TweenMax.to(this.decor, 0.6, {
            ease: Power2.easeOut,
            x: 0,
            y: 0
          });
        }
      });
      if (dir === 'prev') {
        this.slides[this.prevSlide].movePrev('prevSlide');
        this.slides[this.currentSlide].movePrev('currentSlide');
        this.slides[this.nextSlide].movePrev('nextSlide');
        this.slides[oldnext].movePrev('oldprevSlide');
      } else {
        this.slides[this.prevSlide].moveNext('prevSlide');
        this.slides[this.currentSlide].moveNext('currentSlide');
        this.slides[this.nextSlide].moveNext('nextSlide');
        this.slides[oldprev].moveNext('oldnextSlide');
      }
    }
  };
}
