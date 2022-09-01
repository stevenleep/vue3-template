# problems

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
