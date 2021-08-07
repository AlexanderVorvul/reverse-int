module.exports = function reverse (n) {
    b = Math.abs(n);
    s = String(b).split("");
	s = s.reverse();	
	s = s.join('');
    return Number(s);
}
