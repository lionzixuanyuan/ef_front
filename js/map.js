(function($){
    var map = $(".world-map"),
        leftBtn = $("a.arrow-left"),
        rightBtn = $("a.arrow-right"),
        citys = map.find("a"),
        stepLength = 150,
        totalDiff = -600,
        pos = 0,

        wrapper = $(".wrapper"),
        messageDetail = $(".message-detail"),
        closeBtn = messageDetail.find(".close-btn"),
        messageTitle = messageDetail.find("h3"),
        messageList = messageDetail.find("dl");

    leftBtn.on('click', function(){
        pos = pos + stepLength ;
        if(pos > 0){
            pos = 0;
            leftBtn.addClass("hide");
            return;
        }
        
        rightBtn.removeClass("hide");
        map.css({'margin-left': pos});
    });

    rightBtn.on('click', function(){
        pos = pos - stepLength;
        if(pos < totalDiff){
            pos = totalDiff;
            rightBtn.addClass("hide");
            return;
        }
        
        leftBtn.removeClass("hide");
        map.css({'margin-left': pos});
    });

    closeBtn.on('click', function(e){
        e.preventDefault();

        messageDetail.addClass("hide");
        wrapper.removeClass("hide");
    });

    citys.each(function(index){
        var city = $(this);

        city.on('click', function(e){
            e.preventDefault();
            
            showQuestions({
                title: city.text().replace(/\(\d*\)/,"")
            });
        });
    });

    messageList.on('click', '.q-title', function(e){
        e.preventDefault();

        var el = $(this).parent();

        el.toggleClass("open");

        el.next().toggleClass("hide");
    });

    messageList.on('click', 'a.reply', function(e){
        e.preventDefault();

        var el = $(this).parent().parent();

        el.toggleClass("open");

        el.next().toggleClass("hide");
    });

    messageList.on('click',"a.vote", function(e){
        e.preventDefault();
        var el = $(this),
            span = el.find("span");

        if(el.hasClass("disabled")){
            return false;
        }
        el.addClass("disabled");
        span.text(parseInt(span.text(),10)+1);
    });

    function showQuestions(opt){
        wrapper.addClass("hide");
        messageDetail.removeClass("hide");
        messageTitle.text(opt.title);

        if(window.orientation==180||window.orientation==0){
            // alert("请旋转屏幕，横屏查看，谢谢！");
            // return;
            setTimeout(function(){
                window.scrollTo(window.screen.width,window.screen.height*0.55);
            },100);
        }
    }
})(Zepto);