// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let nam =[
  {sname:'kobe',nam:'tony',Age:40,sGrd:'grade1'}, 
  {sname:'malete',nam:'dimpo',Age:39,sGrd:'grade2'},
 {sname:'masha',nam:'masego',Age:32,grade:'grade4'},
{sname:'mohlapi',name:'racheal',Age:35,sGrd:'grade3'}
,
{snam:'aemo',name:'raisibe',Age:31,sGrd:'grade8'},


  {sname:'moremi',name:'mpho',Age:32,grade:'grade6'},
  {sname:'malema',name:'simon',Age:29,sGrd:'grade10'},
  
  {sname:'maifo',nam:'matome',Age:30,grade:'grade1'}];
  function display (nam) {
    if(nam > 45){
      return (nam = 'oldest');
    }else {
      return (nam='smallest');
    }
     }
console.log (nam[0].sname +" "+
nam[0].nam );