import React, { useEffect } from 'react'
import './About.css'

function About() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/aboutScript.js";
    script.async = true;
    script.onload = () => this.scriptLoaded();
    document.body.appendChild(script);
  }, [])

  return (
    <>
      <div class="container">
        <div class="slider">
          <div class="box1 box">
            <div class="bg"></div>
            <div class="details">
              <h1>I'm the first Box</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Integer lacinia dui lectus. Donec scelerisque ipsum
                diam, ac mattis orci pellentesque eget.
              </p>
              <button>Check Now</button>
            </div>
            <div class="illustration"><div class="inner"></div></div>
          </div>
          <div class="box2 box">
            <div class="bg"></div>
            <div class="details">
              <h1>I'm the second Box</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Integer lacinia dui lectus. Donec scelerisque ipsum
                diam, ac mattis orci pellentesque eget.
              </p>
              <button>Check Now</button>
            </div>
            <div class="illustration"><div class="inner"></div></div>
          </div>
          <div class="box3 box">
            <div class="bg"></div>
            <div class="details">
              <h1>I'm the third Box</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Integer lacinia dui lectus. Donec scelerisque ipsum
                diam, ac mattis orci pellentesque eget.
              </p>
              <button>Check Now</button>
            </div>
            <div class="illustration"><div class="inner"></div></div>
          </div>
          <div class="box4 box">
            <div class="bg"></div>
            <div class="details">
              <h1>I'm the fourth Box</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Integer lacinia dui lectus. Donec scelerisque ipsum
                diam, ac mattis orci pellentesque eget.
              </p>
              <button>Check Now</button>
            </div>
            <div class="illustration"><div class="inner"></div></div>
          </div>
          <div class="box5 box">
            <div class="bg"></div>
            <div class="details">
              <h1>I'm the fifth Box</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Integer lacinia dui lectus. Donec scelerisque ipsum
                diam, ac mattis orci pellentesque eget.
              </p>
              <button>Check Now</button>
            </div>
            <div class="illustration"><div class="inner"></div></div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class="prev" width="56.898" height="91" viewBox="0 0 56.898 91"><path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(0 91) rotate(-90)" fill="#fff" /></svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="next" width="56.898" height="91" viewBox="0 0 56.898 91"><path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(56.898) rotate(90)" fill="#fff" /></svg>
        <div class="trail">
          <div class="box1 active">1</div>
          <div class="box2">2</div>
          <div class="box3">3</div>
          <div class="box4">4</div>
          <div class="box5">5</div>
        </div>
      </div>
    </>
  )
}

export default About