
let request = require('request-promise');
let cheerio = require('cheerio');
let fs=require('fs');
  // 进程
  let html =  request({
    url: 'https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json'
  });
  // console.log(html)
  let $ = cheerio.load(html);
  console.log($)
  let pre = $('body').find('pre').text();
  console.log(pre)
