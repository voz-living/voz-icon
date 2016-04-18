$(function(){
    var $list = $("#icon-list");
    $.getJSON("file-map.json", function(data){
        data.forEach(function(image){
            $list.append("<div><img src=''/>"+image+"</div>");
        })
    })
})
