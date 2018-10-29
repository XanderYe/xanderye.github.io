$(function () {
    $(".login-button").click(function () {
        var inputs=$("input");
        var login=true;
        $.each(inputs,function (index,input) {
            if($(input).val()==""){
                login=false;
            }
        });
        if(login==false){
            mdui.alert('各项不为空', '警告');
        }else{
            mdui.alert('登录成功', '恭喜',function () {
                mdui.alert('点击了确认按钮');
            });
        }

    });
});