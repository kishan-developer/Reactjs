
// component = function 
// it is component 
//name will start at capital letter
const App = () =>  {
      return  React.createElement("div",{ id:'abc'}, 'hii')  
      // it is object using multiple thinks
      //  React.createElement('element',empty object or null , null),
}


const container = document.getElementById('root');
// who talk to the dom 
//  reactDom talk to it 

const root = ReactDOM.createRoot(container)
// ReactDom.createRoot it basically talks to the dom 
root.render(React.createElement(App))






//  Q => when ever you are creating a element where it should go basically ? 
//  ans => it should go to the html
// Q => these elements are part of what

