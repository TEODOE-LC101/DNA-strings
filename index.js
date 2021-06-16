let dna = "  TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT  ";
console.log(dna.trim());
console.log('\n');
//a) Replace the gene "GCT" with "AGG", and then print the altered strand.
console.log(dna.trim().replace('GCT', 'AGG'));
console.log('\n');
//b) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".
if(dna.indexOf('CAT')){
  console.log('CAT gene found.');
} else {
  console.log('CAT gene NOT found.');
}
console.log('\n');

//c) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.
console.log(dna.trim().slice(16,19));
console.log('\n');

//d) Use a template literal to print, "The DNA strand is ___ characters long."
console.log(`The DNA strand is ${dna.length} characters long.`)
console.log('\n');

//e) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.
console.log(dna.trim().slice(4,7,)+'O '+ dna.trim().slice(40,43,));
