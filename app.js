$(function(){
    var $list = $("#icon-list");
    $.getJSON("file-map.json", function(data){
        data.forEach(function(image){
            var imgPath = "https://raw.githubusercontent.com/voz-living/voz-icon-repo/master/"+image;
            $list.append("<div><img src='"+imgPath+"'/><br/>" +
            "Image Path: <input type='text' class='copyable' value='"+imgPath+"'/>" +
            "<br/>BBCode: <input type='text'  class='copyable' value='[IMG]"+imgPath+"[/IMG]'/>" +
            "<br/>BBCode (40px): <input type='text'  class='copyable' " +
            "value='[IMG]https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?url="+imgPath+"&container=focus&resize_w=40[/IMG]'/>" +
            "</div>");
        })

        $(".copyable").on("click", function(){
            $(this).select();
            document.execCommand("copy")
        })
    })
})
