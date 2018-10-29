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
            $.ajax({
                url:"http://144.34.151.251:8080/logindemo/user/login",
                type:"POST",
                data:$("#loginForm").serialize(),
                success:function (data) {
                    if(data.code==0){
                        mdui.alert('登录成功', '恭喜',function () {
                            localStorage.setItem("User-Token",data.data.token);
                            location.href="/";
                        });
                    }else{
                        mdui.alert(data.msg, '警告');
                    }
                }
            });

        }

    });
});