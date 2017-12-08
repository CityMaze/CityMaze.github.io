$(document).ready(function () {
    $(window).scroll(function () {
        var d = $("#top-floor");
        d.text(Math.floor($(window).scrollTop() / 10));
    });
    // 幫 a.abgne_gotoheader 加上 click 事件
    $('#P1').click(function () {
        // 讓捲軸用動畫的方式移動到 0 的位置
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
            scrollTop: 1000
        }, 600);
        return false;
    });
    $('#P2').click(function () {
        // 讓捲軸用動畫的方式移動到 0 的位置
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
            scrollTop: 2000
        }, 600);
        return false;
    });
    $('#P3').click(function () {
        // 讓捲軸用動畫的方式移動到 0 的位置
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
            scrollTop: 3000
        }, 600);
        return false;
    });
    $('#P4').click(function () {
        // 讓捲軸用動畫的方式移動到 0 的位置
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
            scrollTop: 4000
        }, 600);
        return false;
    });
    $('#P5').click(function () {
        // 讓捲軸用動畫的方式移動到 0 的位置
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
            scrollTop: 5000
        }, 600);
        return false;
    });
    $('#P6').click(function () {
        // 讓捲軸用動畫的方式移動到 0 的位置
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
            scrollTop: 6000
        }, 600);
        return false;
    });
});