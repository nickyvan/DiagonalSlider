import React, { Component } from 'react';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image6 from '../images/6.jpg';
export default class Slideshow extends Component {
  render() {
    return (
      <div className="slideshow">
        <div className="slideshow__deco" />
        <div className="slide">
          <div className="slide__img-wrap">
            <div
              className="slide__img"
              style={{ backgroundImage: `url(${image1})` }}
            />
          </div>
          <div className="slide__side">Memories &amp; Thoughts</div>
          <div className="slide__title-wrap">
            <span className="slide__number">1</span>
            <h3 className="slide__title">Automation</h3>
            <h4 className="slide__subtitle">
              A tree needs to be your friend if you're going to paint him
            </h4>
          </div>
        </div>
        <div className="slide">
          <div className="slide__img-wrap">
            <div
              className="slide__img"
              style={{ backgroundImage: `url(${image2})` }}
            />
          </div>
          <div className="slide__side">Random Roam</div>
          <div className="slide__title-wrap">
            <span className="slide__number">2</span>
            <h3 className="slide__title">Machines</h3>
            <h4 className="slide__subtitle">
              This is probably the greatest thing to happen in my life
            </h4>
          </div>
        </div>
        <div className="slide">
          <div className="slide__img-wrap">
            <div
              className="slide__img"
              style={{ backgroundImage: `url(${image3})` }}
            />
          </div>
          <div className="slide__side">Arbitrary Words</div>
          <div className="slide__title-wrap">
            <span className="slide__number">3</span>
            <h3 className="slide__title">Coexistence</h3>
            <h4 className="slide__subtitle">The only guide is your heart</h4>
          </div>
        </div>
        <div className="slide">
          <div className="slide__img-wrap">
            <div
              className="slide__img"
              style={{ backgroundImage: `url(${image4})` }}
            />
          </div>
          <div className="slide__side">Haunted Drift</div>
          <div className="slide__title-wrap">
            <span className="slide__number">4</span>
            <h3 className="slide__title">Bellamio</h3>
            <h4 className="slide__subtitle">
              The only prerequisite is that it makes you happy
            </h4>
          </div>
        </div>
        <div className="slide">
          <div className="slide__img-wrap">
            <div
              className="slide__img"
              style={{ backgroundImage: `url(${image5})` }}
            />
          </div>
          <div className="slide__side">Fun Diverge</div>
          <div className="slide__title-wrap">
            <span className="slide__number">5</span>
            <h3 className="slide__title">Pastures</h3>
            <h4 className="slide__subtitle">
              Let's go up in here, and start having some fun
            </h4>
          </div>
        </div>
        <div className="slide">
          <div className="slide__img-wrap">
            <div
              className="slide__img"
              style={{ backgroundImage: `url(${image6})` }}
            />
          </div>
          <div className="slide__side">Hopes &amp; Dreams</div>
          <div className="slide__title-wrap">
            <span className="slide__number">6</span>
            <h3 className="slide__title">Focus</h3>
            <h4 className="slide__subtitle">
              This is unplanned it really just happens
            </h4>
          </div>
        </div>
        <div className="nav nav--prev">
        </div>
        <div className="nav nav--next">
        </div>
      </div>
    );
  }
}
