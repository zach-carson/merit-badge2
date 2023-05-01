import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/simple-icon.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';
import "@lrnwebcomponents/absolute-position-behavior/absolute-position-behavior.js";

class MeritBadge extends LitElement {
  static properties = {
    date: { type: String },
    title_: { type: String },
    buttontext: { type: String },
    activeNode: { type: Object },
    skillsOpened: { type: Boolean },
  };

  static styles = css`
  
    .badge {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background-color: red;
      position: absolute:
      

      margin: 10px;
      font-size: 21px;
      font-weight: bold;
      line-height: 1.3em;
      border: 2px dashed #fff;
      box-shadow: 0 0 0 4px #ff0030, 2px 1px 6px 4px rgba(10, 10, 0, 0.5);
      text-shadow: -1px -1px #aa3030;
      font-weight: normal;
    }
    


    .badge-icon {
      position: absolute;
      top: 95px;
      left: 100px;
    }

    .badge-lock {
      width: 210px;
      height: 210px;
      border-radius: 50%;
      background-color: grey;
      position: absolute;
      top: 5px;
      left: 5px;
      
    }

    .lock-icon {
      position: absolute;
      top: 95px;
      left: 95px;
      
    }

    .button {
      position: absolute;
      left: 75px;
      top: 230px;
      width: 65px;
      padding-bottom: 0px;
      border: solid black;
      background-color: white;
    }

    .button-text {
      text-align: center;
      
    }

    .text1 {
      font: 10px Monaco, MonoSpace;
      position: absolute;
      top: -95px;
      left: -47px;
      width: 400px;
      border-radius: 50%;
      transform: rotate(-50deg);
    }

    .text2 {
      font: 10px Monaco, MonoSpace;
      position: absolute;
      top: -10px;
      left: -100px;
      width: 400px;
      border-radius: 50%;
      transform: rotate(-50deg);
    }

    h1 span {
      height: 200px;
      position: absolute;
      width: 20px;
      left: -15px;
      top: 0;
      transform-origin: bottom center;
      transform: rotate(10deg);
    }


  `;

  constructor() {
    super();
    this.title_ = 'Badge Name';
    this.date = 'Hi there';
    this.buttontext = 'Unlock';
    
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    this.activeNode = this.shadowRoot.querySelector("#badge");
    this.lettering(
      this.shadowRoot.querySelector('#text'),
      this.date
    );
  }

  skillClick(e) {
    this.skillsOpened = !this.skillsOpened;
  }

  lettering(node, text) {
    var str = typeof text=='undefined'
        ?node.textContent
        :text;
    node.innerHTML='';
    var openTag = '<span>';
    var closeTag = '</span>';
    var newHTML = openTag;
    var closeTags = closeTag;
    for(var i=0,iCount=str.length;i<iCount;i++){
        newHTML+=str[i]+openTag;
        closeTags+=closeTag;
    }
    node.innerHTML = newHTML+closeTags;
}



  render() {
    return html` 
    <main>
        <div class="badge">
          <div class="icon"><div>
          <div class="badge-text">

            <div class='text1'>
              <h1 id="text">Any custom text you type...</h1>
            </div>
              
            <div class="badge-icon">
              <simple-icon accent-color="black" icon="android">
              </simple-icon>
            </div>

            <div class='text2'>
              <h1 id="text">Badge title badge title</h1>
            </div>

        </div>
        </div>
        </div>

        <div class="badge-lock" ?hidden="${this.skillsOpened}">
            <simple-icon class="lock-icon" accent-color="black" icon="lock">
            </simple-icon>
        <div>

        <simple-icon-button
              class="button"
              icon="cancel"
              @click="${this.skillClick}"
          >
            <div class="button-text">Unlock<div>
          </simple-icon-button>

        <absolute-position-behavior
            justify
            position="bottom"
            allow-overlap
            sticky
            auto
            .target="${this.activeNode}"
            ?hidden="${!this.skillsOpened}"
          >
        </absolute-position-behavior>
      
  
    </main> `;

  }

}

customElements.define('merit-badge', MeritBadge);
