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


str.split('').forEach(sE =>{
			bArry.forEach(cE =>{
			if (cE == sE){
				s += sE
			}
		})
	})
	
	
	
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
		
		//console.log(s)
		//console.log(bArry)
		//console.log(checkArry)
		
	} while (lenValue != strArry[0].length)
	if (lenValue == 0){
		return true
	} else {return false}
}

//console.log(check('5555512575557777777555566667888888667661133833448441111222233333444442266666', [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']]))


