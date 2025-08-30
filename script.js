function firstWord(s) {
  // your code here
	s=s.trim();
	if(s==="") return "";
	let l = s.indexOf(' ');
	if(l === -1){
		return s;
	}

	return s.substring(0,l);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
