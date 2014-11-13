## 快捷键生成器

#### 简介

仅仅通过配置一个配置文件(js)来生成一个快捷键和功能对应的 html 表格。如下图：

![Sublime 快键键展示](http://ww2.sinaimg.cn/large/6473e757jw1em9nai0w84j21kw0pk0xp.jpg)

#### 使用

根据自己的需要配置 javascript/lib/shortcut_key_data.js, 然后打开 index.html 文件即可. 配置说明如下：

1. title 属性表示整个表格的标题
2. 快件键包含多个块(js对象)，两个块之间的快键键会有颜色区别
3. 其中 c 代表 Cmd, a 代表 Alt, p 代表 空格（space), e 代表 Enter, d 代表 Delete, s 代表 Shift, b 代表 Tab, na 代表 NA (无相应快捷键)