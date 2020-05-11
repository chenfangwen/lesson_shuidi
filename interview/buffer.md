1. Node.js 目前支持的字符编码包括：

    ascii - 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。

    utf8 - 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。

    utf16le - 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。

    ucs2 - utf16le 的别名。

    base64 - Base64 编码。

    latin1 - 一种把 Buffer 编码成一字节编码的字符串的方式。

    binary - latin1 的别名。

    hex - 将每个字节编码为两个十六进制字符。

2. 创建： 

```js
    // 创建一个长度为 10、且用 0 填充的 Buffer。
    const buf1 = Buffer.alloc(10);

    // 创建一个长度为 10、且用 0x1 填充的 Buffer。 
    const buf2 = Buffer.alloc(10, 1);

    // 创建一个长度为 10、且未初始化的 Buffer。
    // 这个方法比调用 Buffer.alloc() 更快，
    // 但返回的 Buffer 实例可能包含旧数据，
    // 因此需要使用 fill() 或 write() 重写。
    const buf3 = Buffer.allocUnsafe(10);

    // 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
    const buf4 = Buffer.from([1, 2, 3]);

    // 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
    const buf5 = Buffer.from('tést');

    // 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
    const buf6 = Buffer.from('tést', 'latin1');
```
