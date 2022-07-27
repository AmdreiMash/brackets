module.exports = function check(str, bracketsConfig) {
	
//const check = (str, bracketsConfig) => {
	
	let s = ''; 
	let bArry = [];
	let checkArry =[]
	let firstStr = []
	
		bracketsConfig.forEach(elem => {
		firstStr.push(elem)
		})
		console.log(bracketsConfig)
		bracketsConfig.forEach(i =>{
			if (i.length == 1){
				checkArry.push(i[0] + i[0])
			} else{ checkArry.push(i[0] + i[1])}
		})

	// ! создал список для проверки наличия элементов и массив для создания строки.

	firstStr.forEach(arry => {
		if (arry[0] == arry[1]){
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
	
	console.log(bArry)
	console.log(checkArry)

	do {
		lenValue = strArry[0].length
		checkArry.forEach(c => {
			if(strArry[0].includes(c)){
				strArry[0] = strArry[0].replace(c, '')
				console.log(strArry[0])
			}
		})
		
		
	} while (lenValue != strArry[0].length)
	if (lenValue == 0){
		return true
	} else {return false}
}

//console.log(check('5555512575557777777555566667888888667661133833448441111222233333444442266666', [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']]))


