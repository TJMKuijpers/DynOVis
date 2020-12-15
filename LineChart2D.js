function LineChart2D(Data2DGraph,RangePoint){
	//Data2DGraph_time has two keys GeneID and Exprvalue
		console.log(Data2DGraph)
		// define dimensions of graph
		var margins = [80, 120, 80, 120]; // margins top bottom left right
		var width = 700 - margins[1] - margins[3]; // width
		var height = 500 - margins[0] - margins[2]; // height

		// Define timepoints for X-axis and define linear scale for Y-axis
		var timepoints=Object.keys(Data2DGraph[0]);
		timepoints.pop() // to remove the gene from the timepoints
		timepoints.pop()
		timepoints.unshift(''); // offset in domain with '' so T2 does not start at 0
		var xscale = d3.scalePoint().domain(timepoints).range([0, width]); 	
		var yscale = d3.scaleLinear().range([height,0]).domain([-1*RangePoint-0.5, RangePoint+0.5]);

		// Add the horizontal and vertical axis 
		var x_axis=d3.axisBottom(xscale);
		var y_axis=d3.axisLeft(yscale);
		
		// Draw the svg to display the graph
		var svg = d3.select("#PlotArea").append("svg")
					.attr("width", width + margins[2] + margins[3])
				    .attr("height", height + margins[1] + margins[0])
				    .append("g")
					.attr("transform", "translate(" + margins[2] + "," + margins[1] + ")");
	
		// add the axis to the canvas
		svg.append("g").attr("class","x axis").attr("transform", "translate(0," + height+ ")")
					   .call(x_axis);
		svg.append("g").attr("class","y axis").call(y_axis);
		
		var colorscale=d3.scaleOrdinal(d3.schemeCategory20);
		// Add the trend line		
		var lineFunction=d3.line().x(function(d,i){return xscale(dat[i].x)}).y(function (d,i){return yscale(dat[i].y)})
		for(x=0;x<Data2DGraph.length;x++){
		GENEID=Data2DGraph[x].Gene;
		Xvalues=Object.keys(Data2DGraph[x]);
		Yvalues=Object.values(Data2DGraph[x]);
		Xvalues.pop();
		Xvalues.pop();
		Yvalues.pop();
		var dat=[];
		for(datapoints=0;datapoints<Xvalues.length;datapoints++){
		dat.push({
			x:Xvalues[datapoints],
			y:Yvalues[datapoints]
		})}
		svg.append('path').attr('class','line-graph').attr("fill",'none').attr('stroke',function(){return colorscale(GENEID)}).attr('d',lineFunction(dat))
		}
		
		
		
		// Add the different points
		for(index=0;index<timepoints.length-1;index++){
		svg.selectAll('dot')
		   .data(Data2DGraph)
		   .enter().append('circle')
		   .attr('r',3.5)
		   .attr('class','circle')
		   .style('fill',function(data,i){return colorscale(Data2DGraph[i].Gene)})
		   .attr('cx',function(data,i){return xscale(Object.keys(Data2DGraph[i])[index])}) 
		   .attr('cy',function (data,i){return yscale(Data2DGraph[i][timepoints[index+1]])});
		   }
		     svg.append("text")
			    .attr("transform", "rotate(-90)")
				.attr("y", -40) // - margin.left)
				.attr("x",-25) //- (height / 2))
				.attr("dy", "1em")
				.style("text-anchor", "end")
				.text("Expression Value");   
			
			svg.append("text")
			   .attr("y",375)
			   .attr("x",300)
               .attr("dx","1em")
			   .style("text-anchor","end")
			   .text("Time points");
			   
			   // draw legend colored rectangles
		var legend = svg.selectAll(".legend")
			        .data(colorscale.domain())
		            .enter().append("g")
					    .attr("class", "legend")
						.attr('transform', "translate(" + (margins[2] + width) + ",0)")
						.attr("transform", function(d, i) { return "translate(0," + i * 25 + ")"; });
        	
		legend.append("rect")
			  .attr("x", width+25 )
			  .attr("width", 10)
			  .attr("height", 10)
			  .style("fill", colorscale);

		// draw legend text
		legend.append("text")
			  .attr("x", width+25+10)
			  .attr("y", 6)
			  .attr("dy", ".12em")
			  .style("text-anchor", "start")
			  .text(function(data,i){if(document.getElementById('MapGenesToDB').checked==true){return Data2DGraph[i].Name;};if(document.getElementById('MapGenesToDB').checked==false){return Data2DGraph[i].Gene;}});
		



}
	

	


	

