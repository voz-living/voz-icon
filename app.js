$(function(){
    var $list = $("#icon-list");
    $.getJSON("file-map.json", function(data){
        data.forEach(function(image){
            var imgPath = "https://raw.githubusercontent.com/voz-living/voz-icon/master/repo/"+image;
            $list.append("<div><img src='"+imgPath+"/><br/>" +
            "Image Path: <input type='text' class='copyable' value='"+imgPath+"'/>" +
            "<br/>BBCode: <input type='text'  class='copyable' value='[IMG]"+imgPath+"[/IMG]'/>"
            "</div>");
        })

        $(".copyable").on("click", function(){
            $(this).select();
            document.execCommand("copy")
        })
    })
})
