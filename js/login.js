$(function () {
    $(".mc-login-btn").click(function () {
        $("body").addClass("mdui-locked");
        $("body").css("width","1023.33px");
        $(".mc-login").addClass("mdui-dialog-open");
        $(".mc-login").css({display: "block", top: "27.203px", height: "217.594px"});
    });
})