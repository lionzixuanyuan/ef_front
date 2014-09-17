//判断2
function checkform2(){
    if($("#name").val()==""){
        alert('请填写提问人姓名');
        $("#name").focus();
        return false;
    }

    if($("#address").val()==""){
        alert('请填写提问人收信地址');
        $("#address").focus();
        return false;
    }

    if($("#university").val()==""){
        alert('请填写大学');
        $("#university").focus();
        return false;
    }

    if($("#email").val()==""){
        alert('请填写邮箱');
        $("#email").focus();
        return false;
    }else if(!checkemail($("#email").val())){
        alert('邮件地址有误,请重新填写');  
        $("#email").focus();
        return false;
    }
    
    
    if($("#mobile").val()==""){
        alert('请填写提问人手机号');
        $("#mobile").focus();
        return false;
    }else if(!checkMobile($("#mobile").val())){
        alert('手机号有误,请重新填写');
        $("#mobile").focus();
        return false;   
    }

    if($("#vcode").val()==""){
        alert('请填写验证码');
        $("#vcode").focus();
        return false;
    }

    if($("#vcode").val()!=="123456"){
        alert('验证码不正确');
        $("#vcode").focus();
        return false;
    }

    if($("#question").val()==""){
        alert('请填写提问内容');
        $("#question").focus();
        return false;
    }
    
    // $("#toids").html($("#ename1").val());
    // $("#formids").html($("#ename2").val());
    
    $.ajax({
        type: "POST",
        url: "yii.php?r=site/postajax",
        data: $("#form1").serialize(),
        success: function(msg){
            window.location.href='step3.php?a='+$("#ename1").val()+'&b='+$("#ename2").val()
        }
    });
    
    return false;
}

function main(){
    var sendVcodeBtn = $('#send-vcode'),
        cdTime = 60,
        cdTimer;

    sendVcodeBtn.on('click', function(){
        alert("验证码[123456]已发送！");

        sendVcodeBtn.attr("disabled", true);

        cdTimer = setTimeout(cd,1000);
    });

    function cd(){
        if(cdTime > 0){
            cdTime --;
            cdTimer = setTimeout(cd, 1000);
            sendVcodeBtn.val(cdTime+'秒后重发');
        }else{
            clearTimeout(cdTimer);
            cdTime = 60;
            sendVcodeBtn.val("发送验证码").removeAttr("disabled");
        }
    }
}
main();


function checkMobile(str){
    if(!(/^1[3|5|8]\d{9}$/.test(str))){
        return false;
    }
    return true;
}

// 功能函数
function checkemail(email){
    var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if(email!=""){
        if(!myreg.test(email)){
            return false;
        }
    }
    return true;
}