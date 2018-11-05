import {html, LitElement} from '@polymer/lit-element';

/**
 * `granite-spinner`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class GraniteSpinner extends LitElement {

  static get properties() {
    return {
      /**
       * If true spinner is shown
       */
      active: {
        type: Boolean,
        reflect: true,
      },
      /**
       * If true spinner is positionned in absolute, if false spinner is positionned in relative
       */
      hover: {
        type: Boolean,
        reflect: true,
      },
      /**
       * The spinner size
       */
      size: {
        type: Number,
      },
      /**
       * The spinner color
       */
      color: {
        type: String,
      },
      /**
       * The spinner line width, in CSS units
       */
      lineWidth: {
        type: String,
      },
      /**
       * The minimal container height
       */
      containerHeight: {
        type: Number,
        value: 150
      },
      /**
       * If true element logs to the console
       */
     debug: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.size = 100;
    this.color = '#28b6d8';
    this.lineWidth = '1.5em';
    this.containerHeight = 150;
  }

  firstUpdated() {
    if (this.debug) {
      console.log('[granite-spinner] firstUpdated');
    }
  }
  
  shouldUpdate() {
    if (this.debug) {
      console.log('[granite-spinner] shouldUpdate', this.lineWidth);
    }
    return true;
  }


  render() {
    if (!this.active) {
      return;
    }
    return html`
      ${this._renderStyles()}      
      <div id="spinner-container">
        <div id="spinner" class="loading">
        </div>
      </div>
    `;
  }


  _renderStyles() {
    return html`
      <style>
        @charset "UTF-8";

        /**
        @license MIT
        Copyright (c) 2015 Horacio "LostInBrittany" Gonzalez
        */
        
        :host {
          display: inline-block;
          position: relative;
          width:100%;
        }
        #spinner-container {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          width:100%;

          position: ${this.hover ? `absolute` : `relative`};
          min-width: ${this.size}px;
          min-height: ${this.size}px;
          height: ${Math.max(this.size, this.containerHeight, 200)}px;
        }
        #spinner {
          margin: 60px auto;
          font-size: 10px;
          position: relative;
          text-indent: -9999em;
        
          border: 1.5em solid rgba(210,210,210, 1);
          border-left: 1.5em solid #28b6d8;
          -webkit-transform: translateZ(0);
          -ms-transform: translateZ(0);
          transform: translateZ(0);
          -webkit-animation: load8 1.25s infinite linear;
          animation: load8 1.25s infinite linear;          
          
          border-left-color: ${this.color};
          border-width: ${this.lineWidth};
        }
        
        #spinner,
        #spinner:after {
          border-radius: 50%;
          width: ${this.size ? `${this.size}px` : `10em`};
          height: ${this.size ? `${this.size}px` : `10em`};
        }

        @-webkit-keyframes load8 {
          0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }
        @keyframes load8 {
          0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }      

      </style>
      
    `;
  }
}

window.customElements.define('granite-spinner', GraniteSpinner);
