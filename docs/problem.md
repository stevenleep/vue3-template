# problems

### Browser
在运行此项目时候出现以下错误

```bash
127.0.0.1/:1 Unchecked runtime.lastError: The message port closed before a response was received.
```

错误归因

```text
这是由于某一脚本页（content-script.js or background.js or popup.js）使用了chrome.runtime.sendMessage或者tabs.sendMessage并调用了回调函数而接收函数并没调用导致的
```

如何解决？

```text
- 这个错误不会影响业务代码，是由其他的浏览器插件抛出的错误（Vue.js devtools 不会抛出此错误）；
- 如果你忍受不了这一个错误你可以选择关闭浏览器插件；
```

### Deploy
在本地测试 `scripts/init-env.sh` 时候如果出现以下错误
```bash
sed: 1: ".env.production": invalid command code .
```
排查方法
```bash
这是因为 macOS 下强制要求备份你修改的文件，当前，你可以使用空字符来代替，因此，macOS 下修改为以下代码即可运行
sed -i ' ' 's/<oldString>/<newString>/g' <file>
```
