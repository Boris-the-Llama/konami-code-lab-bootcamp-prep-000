const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];



function init() {
  var key = (this.detail || this.which);
  var index = 0;
  if (key === code[index]) {
    index++;
 
    if (index === code.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else { 
    index = 0;
  }
  
}


document.addEventListener('keydown', init);