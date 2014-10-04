/* Copyright (c) William Langford 2014. This work is licensed under a Creative Commons Attribution 4.0 International License and may not be sold.*/


//Takes values array then colo(u)rs array (MUST BE THE SAME LENGTH AS values) and id of element to apply
function barChart(bars,cols,id){
    var height = 175;
    var maxv = Math.max.apply(Math, bars);
    var rat = height/maxv;
    $("#"+id).html('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 250 250" enable-background="new 0 0 250 250" xml:space="preserve"><g transform="translate(0,250)"><g transform="scale(1,-1)" id="bars"></g></g><g id="labels"></g></svg>');
    jQuery.each(bars, function(index, item){
        var barh = item*rat;
        var x = (35*(index+1))+15;
        var currentb = $("#"+id).find("#bars").html();
        var col = cols[index];
        $("#"+id).find("#bars").html(currentb+'<rect x="'+x+'" y="31.841" fill="'+col+'" stroke="#FFFFFF" stroke-miterlimit="10" width="30" height="'+barh+'"/>');
        var currentl = $("#"+id).find("#labels").html();
        var labx = x+5;
        $("#"+id).find("#labels").html(currentl+'<text transform="matrix(1 0 0 1 '+labx+' 27)" font-family="MyriadPro-Regular" font-size="12">'+item+'</text>');
    });
}

//Takes values array then colo(u)rs array (MUST BE THE SAME LENGTH AS values) and id of element to apply
function dotChart(bars,cols,id){
    var height = 190;
    var maxv = Math.max.apply(Math, bars);
    var rat = height/maxv;
    $("#"+id).html('<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 250 250" enable-background="new 0 0 250 250" xml:space="preserve"><g id="values"></g><g transform="translate(0,250)"><g transform="scale(1,-1)" id="crosses"></g></g></svg>');

    jQuery.each(bars, function(index, item){
        var barh = item*rat;
        var currentc = $("#"+id).find("#crosses").html();
        var x1 = (36*(index+1))+30;
        var x2 = x1+10;
        var y1 = barh;
        var y2 = y1+10;
        var col = cols[index];
        $("#"+id).find("#crosses").html(currentc+'<line fill="none" stroke="'+col+'" stroke-miterlimit="10" x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'"/><line fill="none" stroke="'+col+'" stroke-miterlimit="10" x1="'+x1+'" y1="'+y2+'" x2="'+x2+'" y2="'+y1+'"/>');
        
        var currentv = $("#"+id).find("#values").html();
        var v1 = (36*(index+1))+24;
        $("#"+id).find("#values").html(currentv+'<text transform="matrix(1 0 0 1 '+v1+' 27)" font-family="MyriadPro-Regular" font-size="12">'+item+'</text>');
    });
}