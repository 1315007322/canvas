let canvas2 = document.getElementById('tutorial2')
if (canvas2.getContext) {
	let ctx = canvas2.getContext('2d')
	// for (var i = 0; i < 10; i++){
	// 	ctx.lineWidth = 1+i;
	// 	ctx.beginPath();
	// 	ctx.moveTo(5+i*14,5);
	// 	ctx.lineTo(5+i*14,140);
	// 	ctx.stroke();
	// }
	// var lineJoin = ['round', 'bevel', 'miter'];
	// ctx.lineWidth = 10;
	// for (var i = 0; i < lineJoin.length; i++) {
	// 	ctx.lineJoin = lineJoin[i];
	// 	ctx.beginPath();
	// 	ctx.moveTo(-5, 5 + i * 40);
	// 	ctx.lineTo(35, 45 + i * 40);
	// 	ctx.lineTo(75, 5 + i * 40);
	// 	ctx.lineTo(115, 45 + i * 40);
	// 	ctx.lineTo(155, 5 + i * 40);
	// 	ctx.stroke();
	// }
	// var lingrad = ctx.createLinearGradient(0,0,0,150);
	// lingrad.addColorStop(0, '#00ABEB');
	// lingrad.addColorStop(0.5, '#fff');
	// lingrad.addColorStop(0.5, '#26C000');
	// lingrad.addColorStop(1, '#fff');
	//
	// var lingrad2 = ctx.createLinearGradient(0,50,0,95);
	// lingrad2.addColorStop(0.5, '#000');
	// lingrad2.addColorStop(1, 'rgba(0,0,0,0)');
	//
	// // assign gradients to fill and stroke styles
	// ctx.fillStyle = lingrad;
	// ctx.strokeStyle = lingrad2;
	//
	// // draw shapes
	// ctx.fillRect(10,10,130,130);
	// ctx.strokeRect(50,50,50,50);


	// 创建渐变
	// var radgrad = ctx.createRadialGradient(45,45,10,52,50,30);
	// radgrad.addColorStop(0, '#A7D30C');
	// radgrad.addColorStop(0.9, '#019F62');
	// radgrad.addColorStop(1, 'rgba(1,159,98,0)');
	//
	// var radgrad2 = ctx.createRadialGradient(105,105,20,112,120,50);
	// radgrad2.addColorStop(0, '#FF5F98');
	// radgrad2.addColorStop(0.75, '#FF0188');
	// radgrad2.addColorStop(1, 'rgba(255,1,136,0)');
	//
	// var radgrad3 = ctx.createRadialGradient(95,15,15,102,20,40);
	// radgrad3.addColorStop(0, '#00C9FF');
	// radgrad3.addColorStop(0.8, '#00B5E2');
	// radgrad3.addColorStop(1, 'rgba(0,201,255,0)');
	//
	// var radgrad4 = ctx.createRadialGradient(0,150,50,0,140,90);
	// radgrad4.addColorStop(0, '#F4F201');
	// radgrad4.addColorStop(0.8, '#E4C700');
	// radgrad4.addColorStop(1, 'rgba(228,199,0,0)');
	//
	// // 画图形
	// ctx.fillStyle = radgrad4;
	// ctx.fillRect(0,0,150,150);
	// ctx.fillStyle = radgrad3;
	// ctx.fillRect(0,0,150,150);
	// ctx.fillStyle = radgrad2;
	// ctx.fillRect(0,0,150,150);
	// ctx.fillStyle = radgrad;
	// ctx.fillRect(0,0,150,150);

	// ctx.shadowOffsetX = 2;
	// ctx.shadowOffsetY = 2;
	// ctx.shadowBlur = 2;
	// ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
	//
	// ctx.font = "20px Times New Roman";
	// ctx.fillStyle = "Black";
	// ctx.fillText("Sample String", 5, 30);
	ctx.beginPath();
	ctx.arc(50, 50, 30, 0, Math.PI*2, true);
	ctx.arc(50, 50, 15, 0, Math.PI*2, true);
	ctx.fill("nonzero");
}else{
	alert('不支持canvas')
}