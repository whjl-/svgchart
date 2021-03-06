// Copyright (c) William Langford 2014. This work is licensed under a Creative Commons Attribution 4.0 International License and may not be sold.*/


//Takes values array then colo(u)rs array (MUST BE THE SAME LENGTH AS values) and id of element to apply
function barChart(bars,cols,id,font){
    if(typeof font === 'undefined' || font == false){ font = "MyriadPro-Regular"; }
    var height = 175;
    var maxv = Math.max.apply(Math, bars);
    var rat = height/maxv;
    var pbar = "";
    var lbar = "";
    jQuery.each(bars, function(index, item){
        var barh = item*rat;
        var x = (35*(index+1))+15;
        var col = cols[index];
        pbar = pbar+'<rect x="'+x+'" y="31.841" fill="'+col+'" stroke="#FFFFFF" stroke-miterlimit="10" width="30" height="'+barh+'"/>';
        var currentl = $("#"+id).find("#labels").html();
        var labx = x+5;
        lbar = lbar+'<text transform="matrix(1 0 0 1 '+labx+' 27)" font-family="'+font+'" font-size="12">'+item+'</text>';
    });
    $("#"+id).html('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 250 250" enable-background="new 0 0 250 250" xml:space="preserve"><g transform="translate(0,250)"><g transform="scale(1,-1)" id="bars">'+pbar+'</g></g><g id="labels">'+lbar+'</g></svg>');
}

//Takes values array then colo(u)rs array (MUST BE THE SAME LENGTH AS values) and id of element to apply
function dotChart(bars,cols,id,font,line,lcols){
    if(typeof line === 'undefined'){ line = false; }
    if(typeof lcols === 'undefined'){ lcols = false; }
    if(typeof font === 'undefined' || font == false){ font = "MyriadPro-Regular"; }
    
    var height = 190;
    var maxv = Math.max.apply(Math, bars);
    var rat = height/maxv;
    var pbar = "";
    var lbar = "";
    var cbar = "";
    jQuery.each(bars, function(index, item){
        var barh = item*rat;
        var x1 = (36*(index+1))+30;
        var x2 = x1+10;
        var y1 = barh;
        var y2 = y1+10;
        var col = cols[index];
        pbar = pbar +'<line fill="none" stroke="'+col+'" stroke-miterlimit="10" x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'"/><line fill="none" stroke="'+col+'" stroke-miterlimit="10" x1="'+x1+'" y1="'+y2+'" x2="'+x2+'" y2="'+y1+'"/>';
        
        var currentv = $("#"+id).find("#values").html();
        var v1 = (36*(index+1))+24;
        lbar = lbar+'<text transform="matrix(1 0 0 1 '+v1+' 27)" font-family="'+font+'" font-size="12">'+item+'</text>';
        
        if(line == true){
            if(index > 0){
                var currentc2 = $("#"+id).find("#crosses").html();
                var barhl = (bars[index-1])*rat;
                var x1l = (36*index)+35;
                var y1l = barhl+5;
                var x2n = x2-5;
                var y2n = y2-5;
                if(lcols == false){
                    var lcol = col;
                }else{
                    var lcol = lcols[index-1];
                }
                cbar = cbar+'<line fill="none" stroke="'+lcol+'" stroke-miterlimit="10" x1="'+x1l+'" y1="'+y1l+'" x2="'+x2n+'" y2="'+y2n+'"/>';
            }            
        }
        
    });
    $("#"+id).html('<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 250 250" enable-background="new 0 0 250 250" xml:space="preserve"><g id="values">'+lbar+'</g><g transform="translate(0,250)"><g transform="scale(1,-1)" id="crosses">'+pbar+cbar+'</g></g></svg>');
    
}

// This produces a key. You may provide it with the same 'vals' and 'cols' arrays as the charts. Though, you will need to produce another array (of the same length) labels or names. Give it a serparate div id.
function keyChart(vals,cols,labels,id){
    var lbar = "";
    jQuery.each(vals, function(index, item){
        var currentb = $("#"+id).find("#keys").html();
        var col = cols[index];
        var y = (25*(index+1))+25;
        var y2 = y+10;
        var label = labels[index];
        var value = vals[index];
        lbar=lbar+'<text transform="matrix(1 0 0 1 22.5 '+y2+')" font-family="MyriadPro-Regular" font-size="15">'+label+'   ('+value+')</text><rect x="165" y="'+y+'" fill="'+col+'" width="59.719" height="12.188"/>';
    });
    $("#"+id).html('<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 250 250" enable-background="new 0 0 250 250" xml:space="preserve"><text transform="matrix(1 0 0 1 21.4932 31.8198)" font-family="MyriadPro-Regular" font-size="30">Key</text><g id="keys">'+lbar+'</g></svg>');
}