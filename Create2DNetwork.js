function Create2DNetwork(DataModel,DataExpr,EdgeInfo,NodeDB,PathwayToPlot,RangePoint) {
		
		dataset=DataModel
	    dataExpr=DataExpr
		Nodedb=NodeDB
		InteractionInfo=EdgeInfo
		PathwayToPlot=PathwayToPlot
		BGcolor='white'
		LinkStrokeCol='black'
		LinkDistanceSize=25
		NodeSize=4
		RangePoint=RangePoint
		// Build the network
		console.log(dataset)
		console.log(dataExpr)

		var widthSVG=1250;
		var heightSVG=1000;	

		var svg=d3.select("#network-area") 
			.append("svg") 
			.attr("width",widthSVG) 
			.attr("height",heightSVG)
			.call(d3.zoom().on("zoom", function () {
				  svg.attr("transform", d3.event.transform)
					}))
			.on("dblclick.zoom", null)   // double click zoom has been disabled since double click is reserved for highlighting neighbor nodes
			.append("g");
			$('#network-area').css('background-color',BGcolor)
			//svg.append('rect').attr('width','100%').attr('height','100%').attr('fill',BGcolor)
			//document.getElementById('#network-area').style.backgroundColor = BGcolor
			// define the svg marker for arrow head on edge
			if($('#Directed').is(':checked')){
			svg.append('defs').append('marker')
			   .attr("id", "marker")
			   .attr("viewBox", "0 -5 10 10")
			   .attr("refX", 15)
			   .attr("refY", -1.5)
               .attr("markerWidth", 6)
               .attr("markerHeight", 6)
               .attr("orient", "auto")
			   .append('svg:path')
					.attr('d', 'M 0,-5 L 10 ,0 L 0,5')
				    .attr('fill', 'black')
			        .attr('stroke','black');	
			}

		// d3js force simulation for network visualization
	var simulation=d3.forceSimulation()
				   .force('link',d3.forceLink().id(function(d) { return d.id; }).distance(LinkDistanceSize))
				   .force('charge',d3.forceManyBody())
				   .force('center',d3.forceCenter(widthSVG/2,heightSVG/2))
				   .force('x',d3.forceX(10))
				   .force('y',d3.forceY(10));
			
	var link= svg.append("g")
			  .selectAll('line')
			  .data(dataset.links)
			  .enter()
			  .append('line')
			  .attr('class','links')
			  .attr('stroke',LinkStrokeCol)
			  .attr('InteractionLabel',function(d,i){return 'interaction'+i})
			  .attr('stroke-opacity',0.7)
			  .attr('marker-end','url(#marker)');
			  
	var node=svg.append("g")
			 .attr("class","nodes")
			 .selectAll("circle")
			 .data(dataset.nodes)
			 .enter()
			 .append('circle')
			 .attr('r',document.getElementById('NodeSizeNumber').value)
			 .attr('name', function(d,i){ return dataset.nodes[i].id})
			 .attr('class','node')
			 .attr("fill", 'lightgrey')
			 .attr('stroke-width',0.5)
			 .attr('stroke','grey')
			 .attr('ConnectClick','false')
			 .call(d3.drag()
				.on('start',dragstarted)
				.on('drag',dragged)
				.on('end',dragended))
			 .on('dblclick', connectedNodes);
				
	node.append("title")
		.text(function(d) {
			  return d.text
			});

	simulation
		.nodes(dataset.nodes)
		.on("tick", ticked);

	simulation.force("link")
		.links(dataset.links);
	

		function ticked() {
		link
			.attr("x1", function(d) { return d.source.x; })
			.attr("y1", function(d) { return d.source.y; })
			.attr("x2", function(d) { return d.target.x; })
			.attr("y2", function(d) { return d.target.y; });

		node
			.attr("cx", function(d) { return d.x; })
			.attr("cy", function(d) { return d.y; })
			};

	/*function dragstarted(d) {
		if (!d3.event.active) simulation.alphaTarget(0.3).restart();
			d.fx = d.x;
			d.fy = d.y;
			}

	function dragged(d) {
		d.fx = d3.event.x;
		d.fy = d3.event.y;
			}

	function dragended(d) {
		if (!d3.event.active) simulation.alphaTarget(0);
			d.fx = null;
			d.fy = null;
	} */

    simulationFor3D=simulation
    function dragstarted(d, i) {
        simulation.stop() // stops the force auto positioning before you start dragging
    }

    function dragged(d, i) {
		d.fx = d3.event.x;
		d.fy = d3.event.y;
        ticked();
    }

    function dragended(d, i) {
        d.fixed = true; // of course set the node to fixed so the force doesn't include the node in its auto positioning stuff
        ticked();
        simulation.restart();
    }
  
	calculateNodeDegree()
	MapNodeBiologicalInformation()
	createColorLegendBar()
	document.getElementById('loader').style.display='none'
	document.getElementById('buildingNetwork').style.display='none'
	document.getElementById('networkBuildFinished').style.display='block'

//----------------------------------------------------------------------------------------------------------		
//			Search function to find nodes in the network
//----------------------------------------------------------------------------------------------------------	

$(document).ready(function(){
    $('#SearchButton').click(function(){
       searchNode();
    });
  });		
	function searchNode() {
      //find the node
	  
      var selectedNode = document.getElementById('searchbar').value;
      var node = svg.selectAll("circle");
      if (selectedNode == "") {
	  // to make sure that when search field is empty not all nodes are hidden
      
								} 
	else {
       var selectedNodesToHide = d3.selectAll('circle').filter(function (d, i) {
            return dataset.nodes[i].id != selectedNode;
       });
		selectedNodesToHide.style("opacity",0); // non-searched nodes set to hidden
        var link = svg.selectAll("line")
        link.style("opacity", "0"); // make the links hidden so the searched node is highlighted
       
		svg.selectAll("circle").transition()
            .duration(5000) // time for nodes to become visible again
            .style("opacity", 1);
		svg.selectAll('line').transition().duration(5500).style('opacity',1);
		

  }
  
}
//-----------------------------------------------------------------------------------------------------------------------
//									Slider function to display nodes based on threshold
//-----------------------------------------------------------------------------------------------------------------------

// when the slider for node degree display changes, update the whole image
d3.select("#nRadius").on("input", function() {
	thresholdNodes(nRadius.value,1);
	});
d3.select("#inDegree").on("input", function() {
	thresholdNodes(inDegree.value,2);
	});
d3.select("#outDegree").on("input", function() {
	thresholdNodes(outDegree.value,3);

	});
	
function calculateNodeDegree(){
			var NodeDegreeValue=new Uint8Array(dataset.nodes.length);
		var NodeOutgoingLinks=new Uint8Array(dataset.nodes.length);
		var NodeIncomingLinks=new Uint8Array(dataset.nodes.length);
		
		for(i=0;i<dataset.links.length;i++){
		    NodeOutgoingLinks[dataset.links[i].source.index]=NodeOutgoingLinks[dataset.links[i].source.index]+1;
			NodeIncomingLinks[dataset.links[i].target.index]=NodeIncomingLinks[dataset.links[i].target.index]+1;		
		}
		
		for(x=0;x<dataset.nodes.length;x++){
			// add the node degrees as attributes to the dataset
			dataset.nodes[x].inDegree=NodeOutgoingLinks[x];
			dataset.nodes[x].outDegree=NodeIncomingLinks[x];
			dataset.nodes[x].Degree=NodeIncomingLinks[x]+NodeOutgoingLinks[x];
			}
}
function thresholdNodes(ThresholdValue,DegreeCondition){
		// function to set a threshold to show the nodes with links > threshold

       var NodeListToDisplay=[];
		// based on the threshold and the node degree, make nodes < threshold transparent
		if(DegreeCondition==1){
		var selectedNodesToHide = d3.selectAll('circle').filter(function (d, i) {
				return dataset.nodes[i].Degree < ThresholdValue;
				});
		var selectedNodesToDisplay=d3.selectAll('circle').filter(function(d,i){
				if(dataset.nodes[i].Degree>=ThresholdValue){ NodeListToDisplay.push(dataset.nodes[i].id)}
				return dataset.nodes[i].Degree>= ThresholdValue;
				})}
		if(DegreeCondition==2){
		var selectedNodesToHide = d3.selectAll('circle').filter(function (d, i) {
				return dataset.nodes[i].inDegree < ThresholdValue;
				});
		var selectedNodesToDisplay=d3.selectAll('circle').filter(function(d,i){
				if(dataset.nodes[i].inDegree>=ThresholdValue){ NodeListToDisplay.push(dataset.nodes[i].id)}
				return dataset.nodes[i].inDegree>= ThresholdValue;
		})}
			if(DegreeCondition==3){
		var selectedNodesToHide = d3.selectAll('circle').filter(function (d, i) {
				return dataset.nodes[i].outDegree < ThresholdValue;
				});
		var selectedNodesToDisplay=d3.selectAll('circle').filter(function(d,i){
				if(dataset.nodes[i].inDegree>=ThresholdValue){ NodeListToDisplay.push(dataset.nodes[i].id)}
				return dataset.nodes[i].outDegree>= ThresholdValue;
		})}
		
		// Hide the nodes and the links belonging to these nodes
		selectedNodesToHide.style("opacity",0.2);
		selectedNodesToDisplay.style("opacity",1)
		// select links to display (since the constraints for this are easier to test)
		selectedLinksToDisplay=d3.selectAll('.links').filter(function(d,i){if ($.inArray(dataset.links[i].source.id,NodeListToDisplay)>-1 && $.inArray(dataset.links[i].target.id,NodeListToDisplay)>-1){return dataset.links[i]}});
		d3.selectAll('line').style('opacity','0.2');
		selectedLinksToDisplay.style('opacity','1');
		
};
//--------------------------------------------------------------------------------------------------------------------------
//			Function that will be used to set node size according to node degree (total, inner,outer degree)
//--------------------------------------------------------------------------------------------------------------------------
$(document).ready(function(){
$("#OptionSetNodeSize").on('change',function() {
	DegreeOption=document.getElementById('OptionSetNodeSize').value
	setNodeSize(DegreeOption);
});})
function setNodeSize(Degree){
	if(Degree=='Off'){
		d3.selectAll('.node').attr('r',4) // return to old state
		var ForceLink=simulation.force('link');
		linkDistance =25;
		ForceLink.distance(linkDistance);
		simulation.alpha(1).restart();
	}
	if(Degree=='Degree'){
		d3.selectAll('.node').attr('r',function(d,i){return dataset.nodes[i].Degree});
		var ForceLink=simulation.force('link');
		linkDistance =100;
		ForceLink.distance(linkDistance);
		simulation.alpha(1).restart();
	}
	if(Degree=='inDegree'){
		d3.selectAll('.node').attr('r',function(d,i){return dataset.nodes[i].inDegree})
		var ForceLink=simulation.force('link');
		linkDistance =100;
		ForceLink.distance(linkDistance);
		simulation.alpha(1).restart();
	}
	if(Degree=='outDegree'){
		d3.selectAll('.node').attr('r',function(d,i){return dataset.nodes[i].outDegree})
		var ForceLink=simulation.force('link');
		linkDistance =100;
		ForceLink.distance(linkDistance);
		simulation.alpha(1).restart();
	}
	
}
//--------------------------------------------------------------------------------------------------------------------------
//			Function that is used to toggle the opacity of the neighbors of the double clicked node
//--------------------------------------------------------------------------------------------------------------------------
var toggle = 0;
//Create an array logging what is connected to what
var linkedByIndex = {};
for (i = 0; i < dataset.nodes.length; i++) {
    linkedByIndex[i + "," + i] = 1;
};
dataset.links.forEach(function (d) {
    linkedByIndex[d.source.index + "," + d.target.index] = 1;
});
//This function looks up whether a pair are neighbours
function neighboring(a, b) {
    return linkedByIndex[a.index + "," + b.index];
}
function connectedNodes() {
    if (toggle == 0) {
        //Reduce the opacity of all but the neighbouring nodes
        d = d3.select(this).node().__data__;
        // to send the node to the 2d line scatter graph
		d3.select(this).attr('ConnectClick','true');
		node.style("opacity", function (o) {
            return neighboring(d, o) | neighboring(o, d) ? 1 : 0.1;
        });
		
		node.attr('ConnectClick',function(o){
		return neighboring(d, o) | neighboring(o, d) ? 'true' : 'false';})
        link.style("opacity", function (o) {
            return d.index==o.source.index | d.index==o.target.index ? 1 : 0.1;
        });
		//var NodesScatter=d3.selectAll('circle').filter(node.style('opacity')==1)
		toggle = 1;
    } else {
        //Put them back to opacity=1
		d3.select(this).attr('ConnectClick','false');
        node.style("opacity", 1);
        link.style("opacity", 1);
        toggle = 0;
    }

	
	}
//---------------------------------------------------------------------------------------------------------------------
//                 Function to add biological information to the node attributes
//---------------------------------------------------------------------------------------------------------------------	
   function MapNodeBiologicalInformation(){
	   // For each node add the biological attributes
	   if(Object.keys(Nodedb).length!=0){
	   for(nodepos=0;nodepos<dataset.nodes.length;nodepos++){
		   dataset.nodes[nodepos].Name=Nodedb.Symbol[nodepos];
	       dataset.nodes[nodepos].Entrez=Nodedb.GeneID[nodepos];
		   dataset.nodes[nodepos].description=Nodedb.description[nodepos];
		   dataset.nodes[nodepos].genetype=Nodedb.genetype[nodepos];
		   dataset.nodes[nodepos].Pathway=Nodedb.Pathway[nodepos];
		   dataset.nodes[nodepos].Disease=Nodedb.Disease[nodepos];}
	   }
	   else{
		   for(nodepos=0;nodepos<dataset.nodes.length;nodepos++){
		   dataset.nodes[nodepos].Name=dataset.nodes[nodepos].id;
	       dataset.nodes[nodepos].Entrez='';
		   dataset.nodes[nodepos].description='';
		   dataset.nodes[nodepos].genetype='';
		   dataset.nodes[nodepos].Pathway='';
		   dataset.nodes[nodepos].Disease=''}
	   }
   }
   

//----------------------------------------------------------------------------------------------------------------------
// 					Function that will create a popup showing the node information
//----------------------------------------------------------------------------------------------------------------------
	// initial state of popup
	contextMenuShowing=false;
	// Set what will happen if node is clicked
	d3.select('#network-area').on('contextmenu',function(d,i){
		d3.event.preventDefault();
    if (contextMenuShowing) {
        d3.select(".popup").remove();
    } else {
		target=d3.select(d3.event.target)
		d=target.datum();
		if(d==undefined){contextMenuShowing=false;} // contextMenuShowing set to false else double click is needed to show information, even if second time user clicks on node
		else{
		var urlNCBI='https://www.ncbi.nlm.nih.gov/gene/'+d.Entrez;
		var urlWikiGenes='http://www.wikigenes.org/e/gene/e/'+d.Entrez+'.html';
		var urlGeneCards='http://www.genecards.org/cgi-bin/carddisp.pl?gene='+d.Name;
		Pathways=d.Pathway.split(',')
		Pathways=Pathways.slice(1,5)
		Disease=d.Disease.split(',')
		Disease=Disease.splice(1,5)
        popup = d3.select("#network-area")
            .append("div")
            .attr("class", "popup")
	        .style("left", 900)
            .style("bottom", d3.event.pageY)
			.style('display','inline')
			.style('position','absolute')
			.style('overflow-y','auto');
			popup.append('h2').text('Node info');
			popup.append('p').text('Name: '+d.Name);
			popup.append('p').text('gene type:'+d.genetype);
			popup.append('p').text('ENTREZ: '+d.Entrez);
			popup.append('p').append('a').attr('href',urlNCBI).attr('target','_blank').text('NCBI: '+d.Entrez);
			popup.append('p').append('a').attr('href',urlWikiGenes).attr('target','_blank').text('Wikigenes: ' +d.Entrez)
			popup.append('p').append('a').attr('href',urlGeneCards).attr('target','_blank').text('GeneCards: ' +d.Name)
			popup.append('p').text('Pathway: '+Pathways)
			popup.append('p').text('Disease: '+Disease)
			}
		}
	contextMenuShowing = !contextMenuShowing;
	})
	
//----------------------------------------------------------------------------------------------------------------------
//					Function that will create a 2D scatter plot based on the data that is selected from network
//----------------------------------------------------------------------------------------------------------------------
$(document).ready(function(){
	$('#Create2DlineGraph').click(function(){
		if(dataExpr.isEmpty==''){
			alert('No expression data found')
	}
	else{
		// Node have attr ConnectClick which is set to TRUE if nodes are highlighted/doublecliced (+neighbors)
	SelectedNodes=d3.selectAll('.node').filter(function(d){ return d3.select(this).attr('ConnectClick') == 'true' });
	// IDs of nodes are in SelectedNodes._groups[0][x].__data__.id
	var SelectedIDs=[];
	Array.prototype.contains = function(element){
    return this.indexOf(element) > -1;
	};
	for(x=0;x<SelectedNodes._groups[0].length;x++){SelectedIDs.push(SelectedNodes._groups[0][x].__data__.id)};
	// select the time points for the selected nodes if Node Name is specified
	if(typeof(SelectedIDs[1])=='string'){
	
		DataForGraph=dataExpr.ExprValue.filter(function(d,i){if(SelectedIDs.contains(dataExpr.GeneID[i])==true){
			   Expr=dataExpr.ExprValue[i];
			   Expr.Gene=dataExpr.GeneID[i];
			   if(document.getElementById('MapGenesToDB').checked==true){
			   Expr.Name=Nodedb.Symbol[Nodedb.GeneID.indexOf(dataExpr.GeneID[i])]}
			   if(document.getElementById('MapGenesToDB').checked==false){Expr.Name=''}
			   return Expr;}})
		// Send data to LineChart2D.js
		LineChart2D(DataForGraph,RangePoint);
	}	
   //Open it when #opener is clicked
	$("#2DLineGraphModal").modal("show");
	$("#2DLineGraphModal").on("hidden.bs.modal", function(){
    $("#PlotArea").html(""); 
});
		}
})
})

//--------------------------------------------------------------------------------------------------------
// 				    Function that will play an animation which will color the nodes based on their expression value
//--------------------------------------------------------------------------------------------------------
$(document).ready(function(){
    $('#playButton').click(function(){
       networkTimeSeries(1);
});})
$(document).ready(function(){
	$('#pauseButton').click(function(){
		networkTimeSeries(2);
	});
	$('#forwardButton').click(function(){
		networkTimeSeries(3);
})})
$(document).ready(function(){
	$('#backwardButton').click(function(){
		networkTimeSeries(4);
	})
  });	

function createColorLegendBar(){
	if(dataExpr.length!=0){
	 var ColorForBar=getColor()    
     var ColorSVG=d3.select('#ColorBar').append('svg').attr('width',200).attr('height',50)
	 var legend = ColorSVG.append('g')
	 var x = d3.scaleLinear()
			   .domain([-1*RangePoint, RangePoint])
               .range([0, 150]);

	var xAxis = d3.axisBottom(x)
                  .tickSize(13)
                  .tickValues(ColorForBar.domain());
	
	var defs = ColorSVG.append("defs");
	var linearGradient = defs.append("linearGradient").attr("id", "linear-gradient");

	linearGradient.selectAll("stop") 
    .data( ColorForBar.range() )                  
    .enter().append("stop")
    .attr("offset", function(d,i) { return i/(ColorForBar.range().length-1); })
    .attr("stop-color", function(d) { return d; });

	legend.append("rect")
	.attr("width", 150)
	.attr("height", 20)
	.attr("transform", "translate(8,0)")
	.style("fill", "url(#linear-gradient)");


	legend.append('g').attr('class','axis').attr("transform", "translate(8,20)").call(xAxis);
}  }

function getNodeMap(position,colorScheme){
    NodeData=dataExpr.ExprValue	
	var nodeMap=[];
	for(index=0;index<d3.selectAll('.node')._groups[0].length;index++){
		    indexOfNodeInData=dataExpr.GeneID.indexOf(d3.selectAll('.node')._groups[0][index].attributes.name.value)
			nodeMap[index]=colorScheme(NodeData[indexOfNodeInData][Object.keys(NodeData[indexOfNodeInData])[position]])
			}
	return nodeMap
	}
	
function getInteractionColors(position){
	var edgecolors=[];
	EdgeInfo=EdgeInfo
    for (i=0;i<EdgeInfo.length-1;i++){
		EdgeValue=Object.values(EdgeInfo[i])[position+1];
		if (EdgeValue==0){
			edgecolors.push(0);
			}
		if(EdgeValue==1){
			edgecolors.push(1)
			}
		}
	return edgecolors
}	
function getColor(){
	ColorScaleInput=document.getElementById('NodeExpressionColorStyle').value
	if(ColorScaleInput =='RedGreenScale'){
		var colorrange=colorbrewer.RdYlGn[11]
		var color=d3.scaleLinear().domain([-1*RangePoint,-0.75*RangePoint,-0.5*RangePoint,-0.25*RangePoint,0,0.25*RangePoint,0.5*RangePoint,0.75*RangePoint,RangePoint]).range(colorrange)
		}
	if(ColorScaleInput =='RedBlueScale'){
			var colorrange=colorbrewer.RdBu[11]
			var color=d3.scaleLinear().domain([-1*RangePoint,-0.75*RangePoint,-0.5*RangePoint,-0.25*RangePoint,0,0.25*RangePoint,0.5*RangePoint,0.75*RangePoint,RangePoint]).range(colorrange)
			}
	if(ColorScaleInput =='BrownGreenScale'){
		var colorrange=colorbrewer.BrBG[11]
		var color=d3.scaleLinear().domain([-1*RangePoint,-0.75*RangePoint,-0.5*RangePoint,-0.25*RangePoint,0,0.25*RangePoint,0.5*RangePoint,0.75*RangePoint,RangePoint]).range(colorrange)
		}
	if(ColorScaleInput =='PurpleOrangeScale'){
		var colorrange=colorbrewer.PuOr[11]
		var color=d3.scaleLinear().domain([-1*RangePoint,-0.75*RangePoint,-0.5*RangePoint,-0.25*RangePoint,0,0.25*RangePoint,0.5*RangePoint,0.75*RangePoint,RangePoint]).range(colorrange)
		}
	if(ColorScaleInput =='SpectralScale'){
		var colorrange=colorbrewer.Spectral[11]
		var color=d3.scaleLinear().domain([-1*RangePoint,-0.75*RangePoint,-0.5*RangePoint,-0.25*RangePoint,0,0.25*RangePoint,0.5*RangePoint,0.75*RangePoint,RangePoint]).range(colorrange)
		}
	if(ColorScaleInput == 'RNASequencing'){
		var customcale = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
		var colorrange = ['#CC0000','#FF0000','#FF3333','#FF6666','#FF9999','#FFCC99','#FFB266','#FF9933','#FF8000','#FFFF00','#FFFF33','#FFFF66','#FFFF99','#CCFF99','#B2FF66','#99FF33','#80FF00','#00FF00','#33FF33','#66FF66']
		var color=d3.scaleLinear().domain(customcale).range(colorrange)
	}
	return color;}

var counter=0;
var runanimationEdge;
var runanimationNode;
var runanimationTotal;
function networkTimeSeries(playerid){
	var colors=getColor()
	var ColorNodes=function(){
		if(counter==Object.keys(dataExpr.ExprValue[0]).length-1){
			colorsmap=getNodeMap(counter,colors);
			d3.selectAll('.node').transition().duration(2000).attr('fill',function(d,i){return colorsmap[i]})
			var div=document.getElementById('TimeStep2D')
			div.innerHTML='time: '+Object.keys(dataExpr.ExprValue[0])[counter]
			// if loop animation is false clear interval
			if(document.getElementById('LoopAnimation').checked==false){
			clearInterval(NodeAnimation)
			}
			//if loop animation is true set counter to zero
			if(document.getElementById('LoopAnimation').checked==true){counter=-1}
		}
		else{
			colorsmap=getNodeMap(counter,colors);
			if(counter==0){// Set the initial color at t=0
			SetInitialState=d3.selectAll('.node').transition().duration(2000).attr('fill',function(d,i){return colorsmap[i]})
			}
			else{
			UpdateStates=d3.selectAll('.node').transition().duration(2000).attr('fill',function(d,i){return colorsmap[i]});
		
			}
			var div=document.getElementById('TimeStep2D')
			div.innerHTML='time: '+Object.keys(dataExpr.ExprValue[0])[counter]
			  counter++;
			  }
			
			
			}
		// Color Edges /////////////////////////////////////////////////////////////////////////////////////////////////////
	    var ColorEdges=function(){
		if(counter==Object.keys(EdgeInfo[0]).length-1){
			edgecolorsmap=getInteractionColors(counter);
			d3.selectAll('line').transition().duration(2000).style('opacity',function(d,i){return edgecolorsmap[i]})
			var div=document.getElementById('TimeStep2D')
			div.innerHTML='time: '+Object.keys(EdgeInfo[0])[counter+1]
			// if loop animation is false clear interval
			
			if(document.getElementById('LoopAnimation').checked==false){
				clearInterval(EdgeAnimation)
				return counter}
			//if loop animation is true set counter to zero
			if(document.getElementById('LoopAnimation').checked==true){counter=-1}
		}
		else{
			edgecolorsmap=getInteractionColors(counter);
			if(counter==0){// Set the initial color at t=0
			SetInitialState=d3.selectAll('line').transition().duration(1000).style('opacity',function(d,i){return edgecolorsmap[i]})
			}
			else{
			UpdateStates=d3.selectAll('line').transition().duration(2000).style('opacity',function(d,i){return edgecolorsmap[i]});
			}
			var div=document.getElementById('TimeStep2D')
			div.innerHTML='time: '+Object.keys(EdgeInfo[0])[counter+1]
			  counter++;
			  }
			}
		// Separate function to color Nodes+Edges//////////////////////////////////////////////////////////
		var ColorNodesEdges=function(){
			// assumed that expression file dimensions == edge interaction file dimensions
			if(counter==Object.keys(dataExpr.ExprValue[0]).length-1){
				colorsmap=getNodeMap(counter,colors);
				edgecolorsmap=getInteractionColors(counter);
				d3.selectAll('.node').transition().duration(2000).attr('fill',function(d,i){return colorsmap[i]});
				UpdateStates=d3.selectAll('line').transition().duration(2000).style('opacity',function(d,i){return edgecolorsmap[i]});
				var div=document.getElementById('TimeStep2D')
				div.innerHTML='time: '+Object.keys(dataExpr.ExprValue[0])[counter]
				// if loop animation is false clear interval
				if(document.getElementById('LoopAnimation').checked==false){
					clearInterval(NodeEdgeAnimation)}
				//if loop animation is true set counter to zero
				if(document.getElementById('LoopAnimation').checked==true){counter=-1}
			}
			else{
				colorsmap=getNodeMap(counter,colors);
				edgecolorsmap=getInteractionColors(counter);
				UpdateNode=d3.selectAll('.node').transition().duration(2000).attr('fill',function(d,i){return colorsmap[i]});
				UpdateEdge=d3.selectAll('line').transition().duration(2000).style('opacity',function(d,i){return edgecolorsmap[i]});
				var div=document.getElementById('TimeStep2D')
				div.innerHTML='time: '+Object.keys(dataExpr.ExprValue[0])[counter]
				counter++;
			}
		}

		/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
		// play button action
	if(playerid==1){
		if(counter==0){
			if($('input[name="DataControlVideo"]:checked').val()=='ColorNodesTime'){
			function runAnimation(){return setInterval(ColorNodes,4000)}
			NodeAnimation=runAnimation()}
		if($('input[name="DataControlVideo"]:checked').val()=='EdgeInteractionTime'){
			function runAnimation(){return setInterval(ColorEdges,4000)}
			EdgeAnimation=runAnimation()}
		if($('input[name="DataControlVideo"]:checked').val()=='NodeEdgeTime'){
			function runAnimation(){return setInterval(ColorNodesEdges,4000)}
			NodeEdgeAnimation=runAnimation()}
		}
		
		else{
			// Play button is pressed for the second time, for instance after animation is done
			counter=0;
			if($('input[name="DataControlVideo"]:checked').val()=='ColorNodesTime'){
				function runAnimation(){return setInterval(ColorNodes,4000)}
			NodeAnimation=runAnimation()}
			if($('input[name="DataControlVideo"]:checked').val()=='EdgeInteractionTime'){
				function runAnimation(){return setInterval(ColorNodes,4000)}
			NodeAnimation=runAnimation()}
			if($('input[name="DataControlVideo"]:checked').val()=='NodeEdgeTime'){
				function runAnimation(){return setInterval(ColorNodes,4000)}
			NodeAnimation=runAnimation()
				}
		}
			return counter;
	} 	
	
	if(playerid==2){
			//Handle the pause statement
	var elem=document.getElementById('pauseButton')
			if (elem.innerHTML=='pause'){
				if($('input[name="DataControlVideo"]:checked').val()=='ColorNodesTime'){
				clearInterval(NodeAnimation);}
				if($('input[name="DataControlVideo"]:checked').val()=='EdgeInteractionTime'){
				clearInterval(EdgeAnimation);}
				if($('input[name="DataControlVideo"]:checked').val()=='NodeEdgeTime'){
				clearInterval(NodeAnimation);}
				elem.innerHTML='resume';	
			// clear setInterval but save the time expired for resume function
			}
		else{elem.innerHTML='pause'
			if($('input[name="DataControlVideo"]:checked').val()=='ColorNodesTime'){
				NodeAnimation=setInterval(ColorNodes,3000);}
			if($('input[name="DataControlVideo"]:checked').val()=='EdgeInteractionTime'){
				NodeAnimation=setInterval(ColorEdges,3000)}
			}	
		}
	
	
	
	//forward button action 
		if(playerid==3){
			if($('input[name="DataControlVideo"]:checked').val()=='ColorNodesTime'){
			if(counter<Object.keys(dataExpr.ExprValue[0]).length-1){
				counter=counter+1
				colorsmap=getNodeMap(counter,colors);
				NodeUpdating=d3.selectAll('.node').transition().duration(2000).attr('fill',function(d,i){return colorsmap[i]})
				var div=document.getElementById('TimeStep2D')
				div.innerHTML='time: '+Object.keys(dataExpr.ExprValue[0])[counter]
				return counter}
			else{alert('Maximum time point reached')}
			}
			if($('input[name="DataControlVideo"]:checked').val()=='EdgeInteractionTime'){
			if(counter<Object.keys(EdgeInfo[0]).length-1){	
				counter=counter+1;
				edgecolorsmap=getInteractionColors(counter);
				UpdateStates=d3.selectAll('line').transition().duration(2000).style('opacity',function(d,i){return edgecolorsmap[i]});
				var div=document.getElementById('TimeStep2D')
				div.innerHTML='time: '+Object.keys(EdgeInfo[0])[counter+1]
				return counter
			}
			else{alert('Maximum time point reached')}		
			}
			if($('input[name="DataControlVideo"]:checked').val()=='NodeEdgeTime'){
				// First change edges, then change nodes (assume same dimensions size data)
				if(counter<Object.keys(dataExpr.ExprValue[0]).length-1){
					counter=counter+1;
					edgecolorsmap=getInteractionColors(counter);
					colorsmap=getNodeMap(counter,colors);
					UpdateStates=d3.selectAll('line').transition().duration(2000).style('opacity',function(d,i){return edgecolorsmap[i]})
					NodeUpdating=d3.selectAll('.node').transition().duration(2000).attr('fill',function(d,i){return colorsmap[i]})
					var div=document.getElementById('TimeStep2D')
					div.innerHTML='time: '+Object.keys(dataExpr.ExprValue[0])[counter]
				}
			}
			
				
			} 
				
	if(playerid==4){
	// backward with time step 1
		if(counter==0){alert('First time point reached')}
		else{
			if($('input[name="DataControlVideo"]:checked').val()=='ColorNodesTime'){
				counter=counter-1;
				colorsmap=getNodeMap(counter,colors);
				NodeUpdating=d3.selectAll('.node').transition().duration(10).attr('fill',function(d,i){return colorsmap[i]})
				var div=document.getElementById('TimeStep2D')
				div.innerHTML='time: '+Object.keys(dataExpr.ExprValue[0])[counter]
			return counter}
			if($('input[name="DataControlVideo"]:checked').val()=='EdgeInteractionTime'){
				counter=counter-1;
				edgecolorsmap=getInteractionColors(counter);
				UpdateStates=d3.selectAll('line').transition().duration(2000).style('opacity',function(d,i){return edgecolorsmap[i]});
				var div=document.getElementById('TimeStep2D')
				div.innerHTML='time: '+Object.keys(EdgeInfo[0])[counter+1]
				return counter
				}
			if($('input[name="DataControlVideo"]:checked').val()=='NodeEdgeTime'){
				counter=counter-1;
				colorsmap=getNodeMap(counter,colors);
				edgecolorsmap=getInteractionColors(counter);
				NodeUpdating=d3.selectAll('.node').transition().duration(2000).attr('fill',function(d,i){return colorsmap[i]})
				UpdateStates=d3.selectAll('line').transition().duration(2000).style('opacity',function(d,i){return edgecolorsmap[i]});
				var div=document.getElementById('TimeStep2D')
				div.innerHTML='time: '+Object.keys(dataExpr.ExprValue[0])[counter]
				return counter
				}
			}
	}
}		

//------------------------------------------------------------------------------------------------------------------------------------------------
//   Function to send the network information to 3D
//------------------------------------------------------------------------------------------------------------------------------------------------
FirstCreation3DNetwork=0;
$(document).ready(function(){
    $('#Generate3DNetwork').click(function(){
		// function to go from 2D to 3D
		if(FirstCreation3DNetwork==0){
       Create3DNetwork(DataModel,DataExpr);
	   // When the user clicks on the button, open the modal 
		$('#3DNetworkVisualizationModal').modal('show');
		FirstCreation3DNetwork=1;}
		else{
			$('#3DNetworkVisualizationModal').modal('show');
		}
    
    });
  });

  
//------------------------------------------------------------------------------------------------------------------------------------------------
// Function that will show/hide the overlay menu bar with the different data analysis options
//------------------------------------------------------------------------------------------------------------------------------------------------

$(document).ready(function(){ $("#ButtonOpenTab").click(function(){
        $(".overlay").fadeToggle(200);
       $(this).toggleClass('btn-open').toggleClass('btn-close');
});})
$(document).ready(function(){$('.overlay').on('click', function(){
    $(".overlay").fadeToggle(200);   
    $("#ButtonOpenTab").toggleClass('btn-open').toggleClass('btn-close');
open = false;})})

//--------------------------------------------------------------------------------------------------------------------------------------------------
//  Function to export images and animations
//--------------------------------------------------------------------------------------------------------------------------------------------------
$(document).ready(function(){$('#SettingsOptions').click(function(){$('#NetworkSettingsModal').modal('show')})})			
$(document).ready(function(){$('#ColorOptions').click(function(){$('#ColorSettingsModal').modal('show')
	})	
})		

$(document).ready(function(){
	$('#ExportImage').click(function(){
		$("#ExportImageModal").modal("show");
	})
})



$(document).ready(function(){
	$('#ExportThisButton').click(function(){
		$("#ExportLineGraph").modal('show')
	})
})

$(document).ready(function(){
	$('#ExportPathway').click(function(){
		$("#ExportHistogram").modal('show')
	})
})


$(document).ready(function(){
		$('#UploadChangesStyle').click(function(){
			$('#NetworkSettingsModal').modal('hide')
			// Update the style of the nodes
			UpdateNodeSizeNumber=d3.selectAll('circle').attr('r',document.getElementById('NodeSizeNumber').value)
			UpdateLineStrokeColor=d3.selectAll('line').attr('stroke',document.getElementById('LinkStrokeColor').value)
			if(document.getElementById('LineStyle').value =='Dashed'){
			UpdateLinkStyle=d3.selectAll('line').attr("stroke-dasharray", ("3, 3"))}
			if(document.getElementById('LineStyle').value=='Solid'){
			UpdateLinkStyle=d3.selectAll('line').attr("stroke-dasharray", ("0, 0"))	
			}
			simulation.force('link',d3.forceLink().id(function(d) { return d.id; }).distance(document.getElementById('LinkDistanceValue').value))
			simulation.restart()
		})
})
$(document).ready(function(){
		$('#UploadChangesStyle2').click(function(){
			$('#ColorSettingsModal').modal('hide')
			document.getElementById('network-area').style.backgroundColor=document.getElementById('BackgroundColorOptions').value
			document.getElementById('ColorBar').innerHTML='';
			createColorLegendBar()
		})
})


$(document).ready($('#SaveImage').click(function(){ExportSVGImage('Networkarea');}))
$(document).ready($('#ExportGraph').click(function(){ExportSVGImage('2DGraph');}))
$(document).ready(function(){
	$('#ExportAnimation').click(function(){
		$('#ExportAnimationModal').modal("show")
	})
	})
	
$(document).ready(function(){$('#ExportPathwayFile').click(function(){exportHistogramImage();})})
$(document).ready(function(){$('#ExportLineGraphButton').click(function(){exportLineGraph2D();})})

$(document).ready($('#SaveAnimation').click(function(){
		var colors=getColor()
		if($('input[name="DataControlVideo"]:checked').val()=='ColorNodesTime'){d3Animation(dataExpr,heightSVG,widthSVG,colors)}
		if($('input[name="DataControlVideo"]:checked').val()=='EdgeInteractionTime'){d3AnimationEdges(InteractionInfo,heightSVG,widthSVG)}
		if($('input[name="DataControlVideo"]:checked').val()=='NodeEdgeTime'){d3AnimationNodeEdges(dataExpr,InteractionInfo,heightSVG,widthSVG)}
		
		}))  
$(document).ready($('#DBinfo').click(function(){createHTMLtable(NodeDB,'BiologicalData')
					$('#DataAnalysisTable').modal('show')
					$("#DataAnalysisTable").on("hidden.bs.modal", function(){})}))  
$(document).ready($('#PathwayHist').click(function(){
					if(document.getElementById('MapGenesToDB').checked==true){
					createBarPlot(PathwayToPlot);
					$('#PathwayPlot').modal('show')
				    $("#PathwayPlot").on("hidden.bs.modal", function(){
					$("#PlotPathwayBars").html(""); })
					}
					else{alert('No Pathway data')}
					}) ) 
$(document).ready($('#ExportPathwayList').click(function(){ExportPathwayList(PathwayToPlot);}))
$(document).ready($('#HUBNodes').click(function(){createHTMLtable(dataset.nodes,null,'HUB')
					$('#DataAnalysisHUB').modal('show')
					$("#DataAnalysisHUB").on("hidden.bs.modal", function(){
					$("#DataTableHUB").dataTable().fnDestroy(); })
					}))      
$(document).ready($('#HUBDynamic').click(function(){
					DynamicDegree=createTableDynamicNodes(InteractionInfo)
					valuesToTake=Object.keys(InteractionInfo[0])
					createHTMLtable(DynamicDegree,valuesToTake,'DynamicHUB')
					$('#DataAnalysisHUBDynamic').modal('show')
					$("#DataAnalysisHUBDynamic").on("hidden.bs.modal", function(){
					$("#DataTableHUBDynamic").dataTable().fnDestroy(); })
					}))  					

} // end of function 