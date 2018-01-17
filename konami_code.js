const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

var codepos = 0;

function init(e) {
  const key = parseInt(e.detail || e.which);
 
  if (key === code[index]) {
    codepos++;
 
    if (codepos === code.length) {
      alert("Hurray!");
 
      codepos = 0;
    }
  } else {
    codepos = 0;
  }

}


document.addEventListener('keydown', init);