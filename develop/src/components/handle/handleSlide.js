import { TweenMax, Power4 } from 'gsap/TweenMax';

export default class handleSlide {
  constructor(el) {
    this.DOM = { el: el };
    this.DOM.imgWrap = this.DOM.el.querySelector('.slide__img-wrap');
    this.number = this.DOM.el.querySelector('.slide__number');
    this.title = this.DOM.el.querySelector('.slide__side');
    this.calsSizes();
    this.reset();
  }
  reset = () => {
    if (this.DOM.el.classList.contains('slide--show')) {
      this.DOM.el.classList.remove('slide--show');
      this.title.removeAttribute('style');
    }
  };
  calsSizes = () => {
    this.width = this.DOM.imgWrap.offsetWidth;
    this.height = this.DOM.imgWrap.offsetHeight;
    let parentH = this.DOM.el.parentNode.offsetHeight;
    let parentW = this.DOM.el.parentNode.offsetWidth;
    this.transforms = [
      { x: -parentW / 2 - this.width, y: -parentH / 2 - this.height },
      { x: -parentW / 2 + this.width / 3, y: -parentH / 2 + this.height / 3 },
      { x: 0, y: 0 },
      { x: parentW / 2 - this.width / 3, y: parentH / 2 - this.height / 3 },
      { x: parentW / 2 + this.width, y: parentH / 2 + this.height }
    ];
  };
  setStartPos = (type) => {
    if (type === 'prevSlide') {
      this.DOM.el.classList.add('slide--show');
      TweenMax.killTweensOf(this.DOM.el);
      TweenMax.set(this.DOM.el, {
        x: this.transforms[1].x,
        y: this.transforms[1].y
      });
    } else if (type === 'nextSlide') {
      this.DOM.el.classList.add('slide--show');
      TweenMax.killTweensOf(this.DOM.el);
      TweenMax.set(this.DOM.el, {
        x: this.transforms[3].x,
        y: this.transforms[3].y
      });
    } else {
      this.DOM.el.classList.add('slide--show');
      TweenMax.killTweensOf(this.DOM.el);
      TweenMax.set(this.DOM.el, {
        x: this.transforms[2].x,
        y: this.transforms[2].y
      });
    }
  };
  movePrev = (type) => {
    if (type === 'prevSlide') {
      TweenMax.set(this.DOM.el, {
        ease: Power4.easeInOut,
        x: this.transforms[0].x,
        y: this.transforms[0].y
      });
      this.DOM.el.classList.add('slide--show');
      TweenMax.killTweensOf(this.DOM.el);
      TweenMax.to(this.DOM.el, 0.8, {
        ease: Power4.easeInOut,
        x: this.transforms[1].x,
        y: this.transforms[1].y
      });
    } else if (type === 'nextSlide') {
      this.DOM.el.classList.add('slide--show');
      TweenMax.killTweensOf(this.DOM.el);
      TweenMax.to(this.DOM.el, 0.8, {
        ease: Power4.easeInOut,
        x: this.transforms[3].x,
        y: this.transforms[3].y
      });
    } else if (type === 'currentSlide') {
      this.DOM.el.classList.add('slide--show');
      TweenMax.killTweensOf(this.DOM.el);
      TweenMax.to(this.DOM.el, 0.8, {
        ease: Power4.easeInOut,
        x: this.transforms[2].x,
        y: this.transforms[2].y,
        onComplete: ()=>this.bounceNumber()
      });
    } else {
      this.DOM.el.classList.add('slide--show');
      TweenMax.killTweensOf(this.DOM.el);
      TweenMax.to(this.DOM.el, 0.8, {
        ease: Power4.easeInOut,
        x: this.transforms[4].x,
        y: this.transforms[4].y,
        onComplete: () => this.DOM.el.classList.remove('slide--show')
      });
    }
  };
  moveNext = (type) => {
    if (type === 'prevSlide') {
      this.DOM.el.classList.add('slide--show');
      TweenMax.killTweensOf(this.DOM.el);
      TweenMax.to(this.DOM.el, 0.8, {
        ease: Power4.easeInOut,
        x: this.transforms[1].x,
        y: this.transforms[1].y
      });
    } else if (type === 'nextSlide') {
      TweenMax.set(this.DOM.el, {
        ease: Power4.easeInOut,
        x: this.transforms[4].x,
        y: this.transforms[4].y
      });
      this.DOM.el.classList.add('slide--show');
      TweenMax.killTweensOf(this.DOM.el);
      TweenMax.to(this.DOM.el, 0.8, {
        ease: Power4.easeInOut,
        x: this.transforms[3].x,
        y: this.transforms[3].y
      });
    } else if (type === 'currentSlide') {
      this.DOM.el.classList.add('slide--show');
      TweenMax.killTweensOf(this.DOM.el);
      TweenMax.to(this.DOM.el, 0.8, {
        ease: Power4.easeInOut,
        x: this.transforms[2].x,
        y: this.transforms[2].y,
        onComplete: ()=>this.bounceNumber()
      });
    } else {
      this.DOM.el.classList.add('slide--show');
      TweenMax.killTweensOf(this.DOM.el);
      TweenMax.to(this.DOM.el, 0.8, {
        ease: Power4.easeInOut,
        x: this.transforms[0].x,
        y: this.transforms[0].y,
        onComplete: () => this.DOM.el.classList.remove('slide--show')
      });
    }
  };
  bounceNumber = () => {
    console.log(1)
    TweenMax.to(this.title, 0.4,{
      ease: Power4.easeInOut,
      opacity:1,
      x: 10,
      onComplete: ()=>{
        TweenMax.to(this.title,0.2,{
          x:0
        })
      }
    })
  }
}
