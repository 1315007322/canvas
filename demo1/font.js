let canvas3 = document.getElementById('tutorial3')
if (canvas3.getContext) {
	let ctx = canvas3.getContext('2d')
	ctx.font = '48px 宋体'
	ctx.strokeText('颜恒富',10,50)
}else{
	alert('不支持canvas')
}