'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
    this.fac = this.fac.bind(this);
  }

  fac = function(num) {
    var i, num, f;
    f = 1;
    for(i = 1; i <= num; i++)  
    {
    f = f * i;
    }
    i = i - 1;  
    return f;
  }

  render() {
    if (this.state.liked) {
      const array = document.getElementById("myTextarea").value.replace(/\r\n/g,"\n").split("\n");
      let newArray = [];

      for (const [index, value] of array.entries()) {
          if (index !== 0 && index <= array[0]) {
              var a = value.split(' ')[value.split(' ').length - 2];
              var b = value.split(' ')[value.split(' ').length - 1];
              var way = this.fac((+a)+(+b))/(this.fac(+a)*this.fac(+b));
              console.log(way);
              newArray.push(way);
              var textarea = document.getElementById("myTextarea2");
              textarea.value = newArray.join("\n");
          }
      }

      return newArray;
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));