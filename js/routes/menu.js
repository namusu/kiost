/**
 * Created by acego on 2016. 4. 26..
 */
$(function(){
    var firstDepthMenuCode = MENU_CD.substr(0, 2);

    $.get("js/json/menu.json", function(data){
        //console.log(data)
        var menuData = data.menu;
        var firstMenuLength = menuData.length;

        var firstMenuTag = '';

        for (var i = 0; i < firstMenuLength; i ++){
            var name = menuData[i].name;
            var link = menuData[i].link;
            var target = menuData[i].target;
            var menu_cd = menuData[i].menu_cd;

            // TOP MENU
            firstMenuTag += getMenuTemplete(name, link, target, menu_cd);

            // 현재 MENU_CODE 와 비교 후 2차 MENU
            if (firstDepthMenuCode == menu_cd) {
                var secondMenuLength = menuData[i].child.length;
                var secondMenuTag = '';
                var naviTag = getMenuTemplete(name, link, target, menu_cd);

                for (var j = 0; j < secondMenuLength; j ++) {
                    var secondMenuData = menuData[i].child[j];
                    var name2 = secondMenuData.name;
                    var link2 = secondMenuData.link;
                    var target2 = secondMenuData.target;
                    var menu_cd2 = secondMenuData.menu_cd;

                    // 2차 MENU
                    secondMenuTag += getMenuTemplete(name2, link2, target2, menu_cd2);
                    if (j != (secondMenuLength - 1)) secondMenuTag += " | ";

                    // NAVI
                    if (MENU_CD == menu_cd2) {
                        naviTag += getMenuTemplete(name2, link2, target2, menu_cd2);
                    }
                }

                // 2차 MENU INSERT
                $("nav#sed_menu").html(secondMenuTag);
                $("nav#navi").html(naviTag);
            }


        }
        console.log(firstMenuTag);
        //console.log(secondMenuTag);
        //console.log(naviTag)

    });

    // 1차메뉴 & 2차메뉴 템플릿
    var getMenuTemplete = function( name, link, target, menu_cd ){
        var ov = "";
        if (MENU_CD == menu_cd) ov = 'class="on"';
        var tag = '<a ' + ov + ' href="' + link + '" target="' + target + '">' + name + '</a>\n';
        return tag;
    }

});
