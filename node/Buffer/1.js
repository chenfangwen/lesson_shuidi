// const buf = Buffer.from('hello', 'ascii');

// // 输出 68656c6c6f
// console.log(buf.toString('hex'));

// // 输出 aGVsbG8=
// console.log(buf.toString('base64'));



var array = 'hello'.split('').map(v => {
    return '0x' + v.charCodeAt(0).toString(16)
  })
  console.log(array);
  
  const buf = new Buffer(array);
  // buf 存的16进制 转成高级的内容
  console.log(buf.toString());
  