const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

var codepos = 0;

function init() {
  document.body.addEventListener('keydown', init);
  const key = parseInt(this.detail || this.which);
 
  if (key === code[codepos]) {
    codepos++;
 
    if (codepos === code.length) {
      alert("Hurray!");
 
      codepos = 0;
    }
  } else {
    codepos = 0;
  }

}


