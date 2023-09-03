let S = 0;
for (let i = 2; i < process.argv.length; i++){
	S += Number(process.argv[i])
}
console.log(S)