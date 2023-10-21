const skills = ['Developer','Engineer','Student'];
const stack = ['HTML','CSS','JAVASCRIPT','NODE.JS','EXPRESS','MONGODB','MYSQL']
let typewriter = document.getElementById('typewriter');
let typewriter2 = document.getElementById('typewriter2');
let i = 0 ;
function typeSkill() {
  typewriter.innerText = ''; // Clear the typewriter text
  let j = 0;
  a = setInterval(() => {
    typewriter.innerText += skills[i][j]; // Add one character of the skill
    j++;

    if (j == skills[i].length) {
      clearInterval(a); 
      setTimeout(()=>{ 
        b = setInterval(()=>{
          typewriter.innerText = typewriter.innerText.slice(0, -1);
          if(typewriter.innerText == ''){
            i++;
            if (i == skills.length) {
              i = 0; 
            } 
            typeSkill(); // Start typing the next skill
            clearInterval(b);
          }
          
        },(1/50)*1000)
        
      },1000)
    }
  },((2/9)*1000));
}
let x = 0 
typeSkill(); // Start the typing animation
function typeSkill2() {
  typewriter2.innerText = ''; // Clear the typewriter text
  let j = 0;
  a1 = setInterval(() => {
    typewriter2.innerText += stack[x][j]; // Add one character of the skill
    j++;

    if (j == stack[x].length) {
      clearInterval(a1); 
      setTimeout(()=>{ 
        b1 = setInterval(()=>{
          typewriter2.innerText = typewriter2.innerText.slice(0, -1);
          if(typewriter2.innerText == ''){
            x++;
            if (x == stack.length) {
              x = 0; 
            } 
            typeSkill2(); // Start typing the next skill
            clearInterval(b1);
          }
          
        },(1/50)*1000)
        
      },1000)
    }
  },((2/9)*1000));
}

typeSkill2(); // Start the typing animation
