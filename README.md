svgchart
========
##Getting Started
First link in the jQuery:<br>
`<script type="text/javascript" src="/link/to/jquery.js"></script>`<br>
Then svgchart.min.js:<br>
`<script type="text/javascript" src="svgchart.min.js"></script>`<br>
<br>
```
<script type="text/javascript">
$(document).ready(function(){
	// 'vals' is an array. It is the values displayed on the graph.
	var vals = ["10","25","100"];

    // 'cols' is an array. It is the colo(u)rs of the crosses or bars.	Note: there must be the same amount of colo(u)rs as values in 'vals'
    var cols = ["#27AAE1","green","#27AAE1"];


    // 'lcols' is an array. It is only used on dotChart. It is the colo(u)rs of the lines. Note: there must be ONE LESS amount of colo(u)rs in 'lcols' then values in 'vals'  
    var lcols = ["pink","red"];


    // barChart takes three parameters (values of points/bars, colo(u)rs of points/bars and the id (#) of the element to apply the SVG inside)
    barChart(vals,cols,"chart1");
    
    // in addition to the parameters barChart takes dotChart can also have two additional parameters; they are: (to/not to display lines connection points (true/false) and an array of the colo(u)rs of the lines). 
    dotChart(vals,cols,"chart2");


});
</script>
<div id="chart1" style="width:20%;"></div>
<div id="chart2" style="width:20%;"></div>
```