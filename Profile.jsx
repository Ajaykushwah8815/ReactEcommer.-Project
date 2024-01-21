import React from 'react'
import "./profile.css"
function Profile() {
  return (
    <div>
      <div id="algn" style={{    backgroundColor: "coral"}}>
    <div id="card">
        <div id="upper-bg">
            <img src="https://www.researchgate.net/publication/221609858/figure/fig1/AS:305558352613378@1449862196661/A-classic-GhostScript-SVG-example.png" alt="profile-pic" class="profile-pic"/>
        </div>
        <div id="lower-bg">
          <div class="text">
            <p class="name">Mr. Ajay Kushwah</p>
            <p class="title">Web developer & <br/> Competitive programmer</p>
          </div>
          <div id="icons">
            <a href="#" class="ico"><img width="48" height="48" src="https://img.icons8.com/color/48/gmail-new.png" alt="gmail-new"/></a>
            <a href="#" class="ico">
              <img width="48" height="48" src="https://img.icons8.com/fluency/48/github.png" alt="github"/>
            </a>
            <a href="#" class="ico">
              <img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
            </a>
            <a href="#" class="ico">
              <img width="48" height="48" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/>
            </a>
          </div>
          <div id="btn">
            <button class="msg">Subscribe</button>
            <button class="msg">Message</button>
          </div>
          <div id="l-c-s">
            <div class="num">
              <img width="48" height="48" src="https://img.icons8.com/fluency-systems-regular/48/facebook-like--v1.png" alt="facebook-like--v1"/>
              <span>35k</span>
            </div>
            <div class="num dvr"></div>
            <div class="num">
              <img width="48" height="48" src="https://img.icons8.com/fluency-systems-regular/48/speech-bubble--v1.png" alt="speech-bubble--v1"/>
              <span>20k</span>
            </div>
            <div class="num dvr"></div>
            <div class="num">
              <img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/share.png" alt="share"/>
              <span>15k</span>
            </div>
          </div>
        </div>
    </div>
    </div>
    
    </div>
  )
}

export default Profile