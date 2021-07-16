import {Component} from 'react';

export default class Introduction extends Component {
  renderIntro = () => {
    const textNode = document.getElementById('text-change');
    const tabNode = document.getElementById('text-tab');
    const introStrArray = [
      "Tutorials",
      "Guides",
      "Technologies"
    ];
    let i = 0;
    let j = 0;
    let isForward = true;
    let isVisible = true;

    setInterval(() => {
      textNode.innerText = introStrArray[i].substring(0, j);

      if(j === introStrArray[i].length) {
        setTimeout(() => {isForward = false;}, 1000);
      }
      else if(j < 0) {
        isForward = true
        i++
        if(i >= introStrArray.length) {
          i = 0;
        }
      }

      if(isForward) {
        j++;
      } 
      else {
        j--;
      }
    }, 150);

    setInterval(() => {
      if(isVisible) {
        isVisible = false;
        tabNode.style.opacity = '1';
      }
      else {
        isVisible = true;
        tabNode.style.opacity = '0';
      }
    }, 500);


  }

  componentDidMount() {
    this.renderIntro();
  }

  render() {
    return (
      <section className="container-fluid introduction">
        <div className="container introduction-content">
          <div className="introduction-text">
            <p>Web Development</p>
            <div className="introduction-animate">
            <p id="text-change"></p><span id="text-tab">|</span>
            </div>
            <p>By Alaric Bell</p>
          </div>
        </div>
      </section>
    )
  }
}