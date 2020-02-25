# Nriot Tools
tool.misakal.xyz

这些小工具是我自制的，这几天闲着没事上传到github上面，欢迎使用！

---
## 如何体验
你可以在[https://tool.misakal.xyz](https://tool.misakal.xyz)上的相同路径下体验。
<br>
#### Example:
> 比如你想体验贪吃蛇(**snake**)，就可以去[https://tool.misakal.xyz/snake](https://tool.misakal.xyz/snake)看看。

---
## 所有工具
工具|路径|功能
---|---|---
新闻头条|./news|查看实时新闻，了解时事
CPS检测|./cps|测试你的CPS
贪吃蛇|./snake|经典的贪吃蛇游戏

---
## 新闻头条API调用原理
#### 源码:
```php
//获取API数据
$news_contents = file_get_contents("https://c.m.163.com/nc/article/handline/T1348647853363/0-40.html");
//转为https
$news_contents = str_replace('http://', 'https://', $news_contents);
//让API自动判断手机或电脑
$news_contents = str_replace('3g.163.com', 'news.163.com', $news_contents);
//将数据转为数组
$data = json_decode($news_contents, true)['T1348647853363'];
...
```

---
## 后记
我之后还会再上传更多的小工具到这个仓库的。
