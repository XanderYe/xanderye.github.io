$(function () {
    $("body").on("click", ".mc-login-btn", function () {
        location.href = "login.html";
    });
    var token = localStorage.getItem("X-User-Token");
    var buttons = "<div class=\"mc-login-btn mdui-btn mdui-btn-dense mdui-ripple mdui-ripple-white\">登录</div>" +
        "<div class=\"mc-register-btn mdui-btn mdui-btn-dense mdui-ripple mdui-ripple-white\">注册</div>";
    if (token == null || token == "") {
        $(".mdui-toolbar-spacer").after(buttons);
    } else {
        $.ajax({
            headers: {"X-User-Token": token},
            url: "http://144.34.151.251:8080/myblog/user/token/" + token,
            type: "GET",
            success: function (data) {
                if (data.code == 0) {
                    $(".user").attr("title", data.data.username);
                    $(".username").html(data.data.username);
                } else {
                    mdui.alert(data.msg, "警告", function () {
                    }, {confirmText: "确定"});
                }
            },
        })
        $(".mc-appbar-user").css("display", "block");
    }
    $(".bottom button").click(function () {
        localStorage.removeItem("X-User-Token");
        mdui.alert("注销成功！", "恭喜", function () {
            setTimeout(function () {
                location.reload();
            })
        }, {confirmText: "确定"})
    })
    var links = $(".mdui-collapse-item a");
    links[0] = null;
    $.each(links, function (index, link) {
        $(link).click(function () {
            $("mdui-typo-title").html($(link).html());
            var classes = $(".mdui-drawer").attr("class").split(" ");
            for (i = 0, len = classes.length; i < len; i++) {
                if (classes[i] == "mdui-drawer-open") {
                    $(".mdui-overlay-show").click();
                }
            }
            $(".mdui-list-item-active").removeClass("mdui-list-item-active");
            $(link).addClass("mdui-list-item-active");
            var url = $(link).attr("href");
            $(".mdui-container").html("");
            if (!url || url == '#') {
                return;
            }
            $.ajax({
                url: url,
                async: false,
                success: function (content) {
                    $(".mdui-container").html(content);
                }
            })
            return false;
        });

    })
})