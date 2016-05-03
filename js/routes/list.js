/**
 * Created by acego on 2016. 4. 28..
 */

$(function(){
    $.get("js/json/content.json", function(data){
        var items = data[MENU_CD];
        var itemLength = items.length;

        var listItem = "";

        for (var i = 0; i < itemLength; i ++) {
            var name = items[i].name;
            var content = items[i].content;
            var menu_cd = items[i].menu_cd;
            var image = items[i].image.split("|")[0];

            //console.log(i)

            listItem += getTemplete((i + 1), name, content, image, menu_cd);

        }
        //console.log(listItem);
        $("#item_list ul").html(listItem);

    });

    function getTemplete(number, name, content, image, menu_cd){
        var tag =   '<li>' +
                        '<div class="img_box">' +
                            '<img src="' + IMAGE_PATH + image + '" alt="">' +
                            '<em class="btn-panorama">panorama</em>' +
                            '<strong>' + name + '</strong>' +
                        '</div>' +
                        '<div class="txt_box">' +
                            '<strong>' + number + '. ' + name + '</strong>' +
                            '<p>' + content + '</p>' +
                        '</div>' +
                    '</li>';

        return tag;
    }
});