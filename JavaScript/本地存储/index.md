# 本地存储

## Cookie

Cookie 曾一度用于客户端数据的存储，因为当时没有其他合适的存储办法而作为唯一的存储手段。

由于服务器指定Cookie后，浏览器的每次请求都会携带Cookie数据，会带来额外的性能开销。

### 创建Cookie

服务器在收到HTTP请求后，服务器可以在响应头里面添加一个或多个`Set-Cookie`选项。浏览器收到响应后通常会保存下Cookie， 并且将其放在HTTP Cookie标头内，向统一服务发出请求时一起发送。

`Set-Cookie`的配置：

- `Domain` ：指定Cookie可以送达的主机。

- `Expries` ：以HTTP时间戳形式指定 Cookie的最长有效时间。
  - 时间格式：GMT（格林威治时间）
- `HttpOnly` ：阻止 JavaScript 通过`documen.cookie` 属性访问 cookie
- `Max-Age`：设置cookie多久过期。如果同时设置了`expires` 和 `max-age` 属性，`max-age` 优先级更高。
  - 负数或者0: 表示立即过期。
  - 整数：多少秒后过期。
- `Path`：表示浏览器要发送该 cookie 的标头时，请求的URL中必须存在该路径。
- `SameSite`：是否可以跨域
- `Secure`：仅支持 https 协议

```javascript
// 设置cookie
// 设置3秒的过期时间
document.cookie = "test1=hello;max-age=3";
// 获取cookie
console.log(document.cookie); // test1=hello
// 3秒后获取cookie
setTimeout(() => console.log(document.cookie), 3000);  // ""
```

