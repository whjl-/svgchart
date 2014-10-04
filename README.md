svgchart
========
##Getting Started
First link in the jQuery:<br>
`<script type="text/javascript" src="/link/to/jquery.js"></script>`<br>
Then svgchart.min.js:<br>
`<script type="text/javascript" src="https://raw.githubusercontent.com/whjl-/svgchart/master/svgchart.min.js"></script>`<br>
<br>
`<script type="text/javascript">
$(document).ready(function(){
	var vals = ["10","25","100"];
    var cols = ["#27AAE1","green","#27AAE1"];
    // Note: there must be the same amount of colo(u)rs as values

    barChart(vals,cols,"chart1");
    dotChart(vals,cols,"chart2");


});
</script>
<div id="chart1" style="width:20%;"></div>
<div id="chart2" style="width:20%;"></div>
`