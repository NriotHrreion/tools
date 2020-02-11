<?php
/*****************************************/
/* API by NetEase    Made by NriotHrreion
/*****************************************/

$news_contents = file_get_contents("https://c.m.163.com/nc/article/headline/T1348647853363/0-40.html");
$data = json_decode($news_contents, true)['T1348647853363'];
?>
<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta charset="UTF-8"/>
    <title>新闻头条</title>
    <link rel="icon" href="favicon.ico"/>
    <link rel="stylesheet" href="./css/style.css"/>
</head>
<body>
    <div class="news">
        <h1 class="title">新闻头条</h1>
        <p class="subtitle">By <b>NriotHrreion</b> 数据来源 <b style="color: red">网易</b></p>
        <div class="card" onclick="window.open('<?php echo $data[1]['url'] ?>');">
            <h2 id="title"><?php echo $data[1]['title'] ?></h2>
            <span id="time"><?php echo $data[1]['source']." ".$data[1]['mtime'] ?></span>
            <img id="pic" src="<?php echo $data[1]['imgsrc'] ?>" alt/>
            <p id="digest"><?php echo $data[1]['digest'] ?></p>
        </div>
        <div class="card" onclick="window.open('<?php echo $data[2]['url'] ?>');">
            <h2 id="title"><?php echo $data[2]['title'] ?></h2>
            <span id="time"><?php echo $data[2]['source']." ".$data[2]['mtime'] ?></span>
            <img id="pic" src="<?php echo $data[2]['imgsrc'] ?>" alt/>
            <p id="digest"><?php echo $data[2]['digest'] ?></p>
        </div>
        <!--<div class="card" onclick="window.open('<?php echo $data[3]['url'] ?>');">
            <h2 id="title"><?php echo $data[3]['title'] ?></h2>
            <span id="time"><?php echo $data[3]['source']." ".$data[3]['mtime'] ?></span>
            <img id="pic" src="<?php echo $data[3]['imgsrc'] ?>" alt/>
            <p id="digest"><?php echo $data[3]['digest'] ?></p>
        </div>-->
        <div class="card" onclick="window.open('<?php echo $data[4]['url'] ?>');">
            <h2 id="title"><?php echo $data[4]['title'] ?></h2>
            <span id="time"><?php echo $data[4]['source']." ".$data[4]['mtime'] ?></span>
            <img id="pic" src="<?php echo $data[4]['imgsrc'] ?>" alt/>
            <p id="digest"><?php echo $data[4]['digest'] ?></p>
        </div>
        <div class="card" onclick="window.open('<?php echo $data[5]['url'] ?>');">
            <h2 id="title"><?php echo $data[5]['title'] ?></h2>
            <span id="time"><?php echo $data[5]['source']." ".$data[5]['mtime'] ?></span>
            <img id="pic" src="<?php echo $data[5]['imgsrc'] ?>" alt/>
            <p id="digest"><?php echo $data[5]['digest'] ?></p>
        </div>
        <div class="card" onclick="window.open('<?php echo $data[6]['url'] ?>');">
            <h2 id="title"><?php echo $data[6]['title'] ?></h2>
            <span id="time"><?php echo $data[6]['source']." ".$data[6]['mtime'] ?></span>
            <img id="pic" src="<?php echo $data[6]['imgsrc'] ?>" alt/>
            <p id="digest"><?php echo $data[6]['digest'] ?></p>
        </div>
        <div class="card" onclick="window.open('<?php echo $data[7]['url'] ?>');">
            <h2 id="title"><?php echo $data[7]['title'] ?></h2>
            <span id="time"><?php echo $data[7]['source']." ".$data[7]['mtime'] ?></span>
            <img id="pic" src="<?php echo $data[7]['imgsrc'] ?>" alt/>
            <p id="digest"><?php echo $data[7]['digest'] ?></p>
        </div>
        <div class="card" onclick="window.open('<?php echo $data[8]['url'] ?>');">
            <h2 id="title"><?php echo $data[8]['title'] ?></h2>
            <span id="time"><?php echo $data[8]['source']." ".$data[8]['mtime'] ?></span>
            <img id="pic" src="<?php echo $data[8]['imgsrc'] ?>" alt/>
            <p id="digest"><?php echo $data[8]['digest'] ?></p>
        </div>
        <div class="card" onclick="window.open('<?php echo $data[9]['url'] ?>');">
            <h2 id="title"><?php echo $data[9]['title'] ?></h2>
            <span id="time"><?php echo $data[9]['source']." ".$data[9]['mtime'] ?></span>
            <img id="pic" src="<?php echo $data[9]['imgsrc'] ?>" alt/>
            <p id="digest"><?php echo $data[9]['digest'] ?></p>
        </div>
        <div class="card" onclick="window.open('<?php echo $data[10]['url'] ?>');">
            <h2 id="title"><?php echo $data[10]['title'] ?></h2>
            <span id="time"><?php echo $data[10]['source']." ".$data[10]['mtime'] ?></span>
            <img id="pic" src="<?php echo $data[10]['imgsrc'] ?>" alt/>
            <p id="digest"><?php echo $data[10]['digest'] ?></p>
        </div>
        <div class="card" onclick="window.open('<?php echo $data[11]['url'] ?>');">
            <h2 id="title"><?php echo $data[11]['title'] ?></h2>
            <span id="time"><?php echo $data[11]['source']." ".$data[11]['mtime'] ?></span>
            <img id="pic" src="<?php echo $data[11]['imgsrc'] ?>" alt/>
            <p id="digest"><?php echo $data[11]['digest'] ?></p>
        </div>
    </div>
</body>
</html>
