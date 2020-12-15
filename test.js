function test(DataExpr,heightsvg,widthsvg){
		console.log('testing the animation part')
	var width=widthsvg;
	var height=heightsvg;
	var gif= new GIF({
			workers:2,
			quality:1,
			repeat:0
		})
	function getColor(valuelist){
	var colors=[];
	for(i=0;i<valuelist.length;i++){
		var hue=((1-valuelist[i])*120).toString(10)
		colors[i]=["hsl(",hue,",100%,50%)"].join("");}
	return colors;}
	
	function getNodeMap(position){
	var colorrange=getColor(d3.range(-3,1.4,0.1));  
	//var colorScheme  = d3.scaleThreshold().domain([-3,1.4,0.1]).range(colorrange);
	var colorScheme = d3.scaleLinear().domain([-2,0.5]).range(["#6AE817","#FFA200", "#B30409"]);
    NodeData=dataExpr.ExprValue	
	var nodeMap=[];
	for(index=0;index<NodeData.length;index++){
			nodeMap.push(colorScheme(NodeData[index][Object.keys(NodeData[index])[position]]))};
	return nodeMap
	}
	
	function drawFrame(tp){
		colorsmap=getNodeMap(tp);
		GetStatusColoring=d3.selectAll('.node').attr('fill',function(d,i){return colorsmap[i]})
		Frame=d3.selectAll('#network-area').node().innerHTML
		
		return Frame
	}
	
	function drawCanvas(time_point){
		// get SVG frame
		SvgFrame=drawFrame(time_point); 
		// Convert SVG to Canvas
		var img= new Image();
		html = "<svg width=" +
            '"' + 1250+ '"' +
            " height=" + '"' + 1000 + '"' +
            ' version="1.1" xmlns="http://www.w3.org/2000/svg">' +
            SvgFrame +
            "</svg>"
        var imgsrc = 'data:image/svg+xml;base64,' + btoa(html);
		img.src = imgsrc;
		img.onload = function() {
					// create canvas to draw on
					var canvas=document.createElement('canvas')
					//document.body.appendchild(canvas)
					canvas.width=width;
					canvas.height=height;
					context=canvas.getContext('2d')
					context.drawImage(img, 0, 0);
					var canvasdata = canvas.toDataURL("image/png");
					// append a link tag then remove it when finished.
					var a = document.createElement("a");
					a.download = "sample.png";
					a.href = canvasdata;
					document.body.appendChild(a);
					a.click();
					console.log(canvas)
					AAA=canvas
					gif.addFrame(canvas,{delay:1000,copy:true})
					}		
	}
	
	function createGifElement(){

	for(timekeys=0;timekeys<Object.keys(dataExpr.ExprValue[0]).length;timekeys++){
		// Get the canvas for each timeframe
		console.log(timekeys)
		CanvasFrame=drawCanvas(timekeys);
		}
		timekeys=timekeys+1;
	}
	

	
	createGifElement()
	}