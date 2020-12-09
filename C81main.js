var canvas=document.getElementById("Mycanvas")
var ctx=canvas.getContext("2d")

ctx.beginPath()
ctx.strokeStyle="blue"
ctx.lineWidth=10
ctx.arc(200,200,100,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="black"
ctx.lineWidth=10
ctx.arc(350,200,100,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="red"
ctx.lineWidth=10
ctx.arc(500,200,100,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="yellow"
ctx.lineWidth=10
ctx.arc(270,350,100,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="Green"
ctx.lineWidth=10
ctx.arc(450,350,100,0,2*Math.PI)
ctx.stroke()
