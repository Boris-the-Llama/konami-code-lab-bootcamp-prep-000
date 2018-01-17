const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

var index = 0;

function init() {
  var key = (this.detail || this.which);
  if (key === code[index]) {
    index++;
 
    if (key[index] === code.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else { 
    index = 0;
  }
  
}


document.addEventListener('keydown', init);