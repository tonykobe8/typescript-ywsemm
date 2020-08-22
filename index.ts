// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let nam =[
  {sname:'kobe',nam:'tony',Age:40,sGrd:'grade1'}, {sname:'maifo',nam:'matome',Age:30,grade:'grade1'}];
  function display (nam) {
    if(nam > 45){
      return (nam = 'oldest');
    }else {
      return (nam='smallest');
    }
     }
console.log (nam[0].sname +" "+
nam[0].nam + " "+
nam[0].Age ,nam);