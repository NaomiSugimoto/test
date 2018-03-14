# html/css
1. 文字を中央にするためにはどのようなcssを使うか答えなさい
text-align:center;

.container {display: flex;}
 .a { justify-content: row; }

### te
2. 横並びを実現する為にはどのようなcssを使うか答えなさい（positionレイアウト以外）<br />
.container {display: flex;}
 .a { flex-direction: row; }
 
3. 背景画像を利用するにはどのcssを使うか答えなさい
background-color: 色;

4. 文字の色を変更するにはどのようなcssを使うか答えなさい
color :色;

5. リンクを設定する為に必要なhtmlのタグを答えなさい
<a href=""></a>

6. 見出しタグにはどのような種類があるか全て答えなさい
<h1></h1>
<h2></h2>
<h3></h3>
<h4></h4>
<h5></h5>
<h6></h6>

7. 段落タグとは何かを答えなさい
HTML文書の段落を表すタグ。
<p></p>

8. リストタグとは何かを答えなさい
リストの項目を記述する際に使用するタグ。
<ul>
<ol></ol>
</ul>

<li>
<ol></ol>
</li>

9. inputタグにはどのような種類があるか4つ答えなさい（好きなもので良い）
<input type="text">
<input type="checkbox">
<input type="radio">
<input type="file">

10. cssで線をつけるためにはどのようなcssを使うか答えなさい
p.box {
   border-bottom: 1px solid red;
}

11. 文字に影をつける為にはどのようなcssを使うか答えなさい
p {text-shadow: 1px 2px 3px #808080; }

12. cssのhoverとはどのような挙動のことか簡単に記述しなさい
ユーザーがカーソルで要素の上をホバー（通過）させたときに起こる動作のこと。
a:hover {
  color: orange;
}

13. div#boxを幅900px,高さ500pxで作成した。このdiv#boxを画面中央にするにはどうすればいいか答えなさい
#box{
	width:900px;
	height:500px;
	display:flex;
	justify-content:center;
	align-items:center;
}

14. 画像を表示させるタグは何か答えなさい
<img src="画像ファイル名">

15. cssアニメーションを行う場合、時間的変化を指定するcssプロパティを答えなさい
｛transition-duration:時間;}

# php
1. 変数の名前をつける際に絶対にやってはいけないことを書きなさい
アンダースコア_以外の記号は使えない。
変数名の一文字目に、数字は使えない。

2. 変数を使うメリットは何かを答えなさい
変数を使いまわせること

3. if文とは何かを答えなさい
条件に応じて処理を変える文。
条件分岐を行う文。

4. mt_rand()とはどのような関数かを簡単に書きなさい
ランダムに数字を生成する関数。

5. phpを記述する際<?php ?>の間に記述する　◯か×か
◯

6. SQLにはinsert,update,◯◯◯◯,◯◯◯◯の４つがある。◯◯◯◯に記述されている残り２つを書きなさい
delete
trigger

7. phpの文章の終わりには必ずなにをつけないといけないか答えなさい
；

8. echo文を使うとどうなるか簡単に答えなさい
echo 以降の文字が表示される

9. 下記の問題を答えなさい
echo 8 + 2;           10
echo 10 + 14;       24

10. 下記の問題を答えなさい
echo 11 - 3;       8
echo 5 * 3;        15
echo 2 / 10;       0.2

11. camp_db,camp_table,のデータを「全検」SELECT表示する構文を答えなさい
SELECT * FROM camp_table;

12. SELECT表示を行う際、「降順」で表示をするにはどのような記述が必要か簡単に答えなさい
 ORDER BY  DESC

13. DELETEを行うための構文を書きなさい(camp_db,camp_tableを基準にする)
DELETE FROM camp_table[WHERE camp_db]
# js
1. jQueryのイベントを３つ書きなさい(好きなもので可)
$('#btn').on('click', function() {
    alert('a');
})

$(document).ready(function(){
  $("btn").css("color",black);
});

$("div").text("click!");
});

2. jQueryを利用する際「セレクタ」とはどういう意味なのか簡単に書きなさい
任意の範囲、要素を指定するもの。

3. jQueryを使うメリットにはどういったものがあるか簡潔にまとめなさい（一つで良い）
少ない記述で記載できること

4. [fadeIn('4000');]はどのような挙動をするか簡単に書きなさい
4秒かけてフェードインしてくる

5. [slideUp]はどのような挙動をするか簡単に書きなさい
指定したものがゆっくりと表れてくる

6. [addClass]はどのような挙動をするか簡単に書きなさい
要素にクラス（属性）を指定（付加）する

7. [hasClass]はどのような挙動をするか簡単に書きなさい
クラス属性の有無を調べる

8. jQueryを使ってborderを利用する際どのように記述するか書きなさい(線の太さ3px 一直線　色は赤)
$("#main").css("border", "3x solid red"); 

9. [console.log]はどのような挙動をするか簡単に書きなさい
エラーが無いか確認する

10. [click]イベントを設定するために必要な雛形を記述しなさい(div#boxにイベントを設定する)
$('#btn').on('click', function() {
    alert('a');
})
___
___
## 解答する際
### 例）

### html/css
1. 文字を中央にするためにはどのようなcssを使うか答えなさい
xxxxxx(答えを書く)

2. 横並びを実現する為にはどのようなcssを使うか答えなさい（positionレイアウト以外）
xxxxxx(答えを書く)

//以下問題省略

___
___
お休みされた方はgithubの設定をしていないため、必ず個別で連絡するようにお願いします。
尚、こちら課題扱いなので必ず提出してください。
