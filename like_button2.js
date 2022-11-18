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
      var k, budget;
      var salary = [];
      let resultArray = [];

      for (const [index, value] of array.entries()) {
          if (index !== 0 && index <= array[0]*2 && index%2!==0) {
            k = value.split(' ')[value.split(' ').length - 2];
            budget = value.split(' ')[value.split(' ').length - 1];
            // var way = this.fac((+a)+(+b))/(this.fac(+a)*this.fac(+b));
            console.log(k);
            // newArray.push(way);
            // var textarea = document.getElementById("myTextarea2");
            // textarea.value = newArray.join("\n");
          }
          if (index !== 0 && index <= array[0]*2 && index%2===0) {
              // var a = value.split(' ')[value.split(' ').length - 2];
              // var b = value.split(' ')[value.split(' ').length - 1];
              // var way = this.fac((+a)+(+b))/(this.fac(+a)*this.fac(+b));
              console.log(value);
              var i;
              for(i = k; i >= 1; i--)  
              {
                salary.push(value.split(' ')[value.split(' ').length - i]);
              }
              
              // newArray.push(way);
              // var textarea = document.getElementById("myTextarea2");
              // textarea.value = newArray.join("\n");
              salary = salary.sort();
              // console.log(salary);
              var total = 0;
              for(i = 0; i <= salary.length-1; i++)  
              {
                total += salary[i];
                console.log((+total+(+salary[i+1])) > budget);
                if ((+total+(+salary[i+1])) > budget) {
                  resultArray.push(i == 0 ? i : i+1);
                  console.log(salary[i+1]);
                  break;
                }
              }
              salary = [];
              console.log(resultArray);
          }
          
      }
      var textarea = document.getElementById("myTextarea2");
          textarea.value = resultArray.join("\n");

      return array;
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