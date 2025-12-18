//https://codedamn.com/problem/Fh93wdyoMp4Tqj36gmjiJ?challenge-list=50-days-of-js
const transcription = (dna) => {
	// code here
	let rna = "";
	for(let nucleotide of dna) {
		if(nucleotide === 'G') {
			rna += 'C';
		}else if (nucleotide === "C") {
			rna += "G";
		}else if (nucleotide === "T") {
			rna += "A";
		}else {
			rna += "U";
		}
	}
	return rna;
}
