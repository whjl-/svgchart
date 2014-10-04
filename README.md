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
    var font = "MyriadPro-Regular"; // MyriadPro-Regular is the default font

    // barChart takes three required parameters and one optional (values of points/bars, colo(u)rs of points/bars, the id (#) of the element to apply the SVG inside and the font (for labels; this is optional))
    barChart(vals,cols,"chart1",font);
    
    // in addition to the parameters barChart takes dotChart can also have two optional additional parameters; they are: (to/not to display lines connection points (true/false) and an array of the colo(u)rs of the lines). 
    dotChart(vals,cols,"chart2",font,true,lcols);
	


    // This seperate function produces a key.
	var labels = ["Jeremy","Apple time","qwerty","uiopasdf","calculator"];

    // You may provide it with the same 'vals' and 'cols' arrays as the charts. Though, you will need to produce another array (of the same length) labels or names. Give it a serparate div id. 
    keyChart(vals,cols,labels,"chartKey1");

});
</script>
<div id="chart1" style="width:20%;"></div>
<div id="chart2" style="width:20%;"></div>
```
<div id="chart2" class="chart" style="width:40%;"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 250 250" enable-background="new 0 0 250 250" xml:space="preserve"><g transform="translate(0,250)"><g transform="scale(1,-1)" id="bars"><rect x="50" y="31.841" fill="#27AAE1" stroke="#FFFFFF" stroke-miterlimit="10" width="30" height="17.5"></rect><rect x="85" y="31.841" fill="green" stroke="#FFFFFF" stroke-miterlimit="10" width="30" height="43.75"></rect><rect x="120" y="31.841" fill="#27AAE1" stroke="#FFFFFF" stroke-miterlimit="10" width="30" height="175"></rect><rect x="155" y="31.841" fill="#27AAE1" stroke="#FFFFFF" stroke-miterlimit="10" width="30" height="17.5"></rect><rect x="190" y="31.841" fill="green" stroke="#FFFFFF" stroke-miterlimit="10" width="30" height="43.75"></rect></g></g><g id="labels"><text transform="matrix(1 0 0 1 55 27)" font-family="MyriadPro-Regular" font-size="12">10</text><text transform="matrix(1 0 0 1 90 27)" font-family="MyriadPro-Regular" font-size="12">25</text><text transform="matrix(1 0 0 1 125 27)" font-family="MyriadPro-Regular" font-size="12">100</text><text transform="matrix(1 0 0 1 160 27)" font-family="MyriadPro-Regular" font-size="12">10</text><text transform="matrix(1 0 0 1 195 27)" font-family="MyriadPro-Regular" font-size="12">25</text></g></svg></div>
<br>
<br>
<div id="chartKey1" class="chart" style="width:40%;"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 250 250" enable-background="new 0 0 250 250" xml:space="preserve"><text transform="matrix(1 0 0 1 21.4932 31.8198)" font-family="MyriadPro-Regular" font-size="30">Key</text><g id="keys"><text transform="matrix(1 0 0 1 22.5 60)" font-family="MyriadPro-Regular" font-size="15">Jeremy   (10)</text><rect x="165" y="50" fill="#27AAE1" width="59.719" height="12.188"></rect><text transform="matrix(1 0 0 1 22.5 85)" font-family="MyriadPro-Regular" font-size="15">Apple time   (25)</text><rect x="165" y="75" fill="green" width="59.719" height="12.188"></rect><text transform="matrix(1 0 0 1 22.5 110)" font-family="MyriadPro-Regular" font-size="15">qwerty   (100)</text><rect x="165" y="100" fill="#27AAE1" width="59.719" height="12.188"></rect><text transform="matrix(1 0 0 1 22.5 135)" font-family="MyriadPro-Regular" font-size="15">uiopasdf   (10)</text><rect x="165" y="125" fill="#27AAE1" width="59.719" height="12.188"></rect><text transform="matrix(1 0 0 1 22.5 160)" font-family="MyriadPro-Regular" font-size="15">calculator   (25)</text><rect x="165" y="150" fill="green" width="59.719" height="12.188"></rect></g></svg></div>
