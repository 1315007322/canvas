### 基础API

-  moveT(x,y) 将画笔移动到某一个位置

### 色彩填充

- fillStyle = color 填充颜色
- strokeStyle = color  边框颜色

- fillRect(x,y,width,height) 绘制一个填充的矩形
- strokeRect(x,y,width,height)绘制一个矩形的边框
- clearRect(x,y,width,height)清楚矩形区域，让该清除区域完全透明

##### 圆形

```javascript
ctx.arc(x,y,radius,startAngle,endAngle,anticlockwise)
// x:
```





### Path2D()

```javascript
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    var rectangle = new Path2D();
    rectangle.rect(10, 10, 50, 50);

    var circle = new Path2D();
    circle.moveTo(125, 35);
    circle.arc(100, 35, 25, 0, 2 * Math.PI);

    ctx.stroke(rectangle);
    ctx.fill(circle);
  }
}
```

