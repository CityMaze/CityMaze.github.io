$(document).ready(function () {
    var p = 0, t = 0, rol = 0;
    $(window).scroll(function () {
        var p = $(window).scrollTop();
        var d = $("#top-floor");
        if (p > t) {//下滚 
            if (rol - 10 < 0 - $("#topimg").height()) {
                $("#top").css("top", 0 - $("#topimg").height());
            } else {
                rol -= 10;
                $("#top").css("top", rol);
            }
        }
        else {//上滚
            if (rol + 10 >= 0) {
                $("#top").css("top", "0");
            } else {
                rol += 10;
                $("#top").css("top", "+=10");
            }

        }
        setTimeout(function () { t = p; }, 0);
    });
    // 幫 a.abgne_gotoheader 加上 click 事件
    $('.P').click(function () {
        // 讓捲軸用動畫的方式移動到 0 的位置
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

        var Rank = parseInt($(".p").index(this));
        $body.animate({
            scrollTop: Rank * 1150 + Rank * 10
        }, 520);
        $("#top").css("top", 0 - $("#topimg").height());
        return false;
    });
    $('#top').click(function () {
        // 讓捲軸用動畫的方式移動到 0 的位置
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
            scrollTop: 6000
        }, 600);
        $("#top").css("top", 0 - $("#topimg").height());
        return false;
    });
    HideDM();
});
