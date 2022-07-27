module.exports = function check(str, bracketsConfig) {
	//const check = (str, bracketsConfig) => {
	
	let s = '';
	let bArry = [];
	let checkArry =[]
	
	
	bracketsConfig.forEach(elem => {
		checkArry.push(elem.join(''))
	})
	
	bracketsConfig.forEach(arry => {
		if(arry[0] == arry[1]){
			arry.pop()
		}
		arry.forEach(e => {
		bArry.push(e)
	});
});

	//console.log(bArry)
	//console.log(checkArry)

		str.split('').forEach(sE =>{
			bArry.forEach(cE =>{
			if (cE == sE){
				s += sE
			}
		})
	})
	
	
	//console.log(s)

	let strArry = []
	
	strArry.push(s)
	
	let lenValue = ''
	
	do {
		lenValue = strArry[0].length
		checkArry.forEach(c => {
		if(strArry[0].includes(c)){
			strArry[0] = strArry[0].replace(c, '')
	}
	})

	} while (lenValue != strArry[0].length)
	if (lenValue == 0){
		return true
	} else {return false}
}

//console.log(check('|(|)', [['(', ')'], ['|', '|']]))


