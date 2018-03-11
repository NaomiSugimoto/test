//jQueryの書き方
$(document).ready(function(){



  $("#ex").hide().fadeIn(4000);
  $("#ex").html('<p>かきくけこ</p>');
  $("#ex").css("background-color","black");
  $("#ex").css("color","white");
  $("#ex").prepend('<p>あいうえお</p>');
  $("#ex").append('<p>さしすせそ</p>');
  });
    // body...

  $('#hide').on('click',function(){
    $("#ex").hide(2000);
//button#hide をクリックしたらdiv#exを2秒で非表示
});

  $('#show').on('click',function(){
  $("#ex").show(2000);
//button#show をクリックしたらdiv#exを2秒で表示
});

var countup = 0;
$('#show').on('click',function(){
  countup ++;
		$("#ex").text(countup);
    $("#ex").css("border", countup + "px solid blue");
//変数との組み合わせで使う
//button#showを何回クリックしたかdiv#exに文字列で数を表示
//Button#showをクリックする度に、div#exの
//border:○px 」の○の箇所にクリックした数を入れる クリック数で枠線が太くなっていく。

});
