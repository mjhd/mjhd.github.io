$(document).on("ready",function(){function i(i,t){$(i).children("img").on("click.active",function(){function e(){$(i).removeClass("active"),$(i).css("position","absolute"),$(".time-bottom .entry:visible").animate({top:"0px"},500).promise().done(function(){$(".time-top").css("border-bottom",""),$(i).parent("div").css("border-right",""),$(".entry").not(t).css("display","block").animate({opacity:100},300),$("#shield").delay(300).hide().promise().done(function(){}),$(i).children("img").off("click.active")})}$("#shield").show(),$(i).children("p").animate({width:"0px"},500),1!=$(t).hasClass("circle")?$(i).animate({width:"120px",height:"60px"},500).promise().done(function(){e()}):1==$(t).hasClass("circle")&&$(i).animate({width:"60px",height:"60px"},500).promise().done(function(){e()})})}timeWidth=parseInt($(".time-bottom .entry:last").css("left"))+1.9*$(".time-bottom .entry:last").outerWidth(),$(".timeline-sub > section > section").width(timeWidth),$(".entry > div > div").on("click",function(){if(1!=$(this).hasClass("active")){$(".timeline-sub > h4").css("visibility","hidden"),$("#shield").show(),$(this).parent("div").css("border-right","none"),$(".time-top").css("border-bottom","none");var t=$(this).parent("div").parent(".entry");$(".entry").not(t).animate({opacity:0},300).hide().promise().done(function(){$(".time-bottom .entry:visible").animate({top:"-150px"},500)}),$(this).css("position","relative"),$(this).animate({width:"300px",height:"200px"},500).promise().done(function(){$(this).children("p").animate({width:"100%"},500),$("#shield").hide()}),$(this).addClass("active"),i(this,t)}})}),$(window).on("load",function(){var i=$("#prof-proj span:first").offset().left,t=15;$("#prof-proj span").each(function(){var e=$(this).offset().left;i>e&&($(this).css("margin-left",t),i=e+t,t+=15)})});