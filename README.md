# Nriot Tools
tool.misakal.xyz

This is a tools repository. These are the gadgets I made on my free time.

---
## Experience
You can go to [https://tool.misakal.xyz](https://tool.misakal.xyz), there are these things on it.

---
## All of them
tool|path|function
---|---|---
Newspapers|./news|Read some news
CPS test|./cps|CPS tester
Snake game|./snake|Classic little game

---
## Newspapers API
#### Code:
```php
//get api data
$news_contents = file_get_contents("https://c.m.163.com/nc/article/handline/T1348647853363/0-40.html");
//to https
$news_contents = str_replace('http://', 'https://', $news_contents);
$news_contents = str_replace('3g.163.com', 'news.163.com', $news_contents);
//to array
$data = json_decode($news_contents, true)['T1348647853363'];
...
```

---
## Note
I'll upload more tools!
