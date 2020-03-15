let request = require('request-promise');
let cheerio = require('cheerio');
let fs=require('fs');
const main = async () => {
  // 进程
  for(let i=0;i<=225;i=i+25){
  let html = await request({
    url: 'https://waimai.meituan.com/restaurant/144926406076528724?post=8&_token=eJx9kk1rg0AQhv/Lnhfdj9HdFXIIBIKFHBrSXkoPNlkSKZoQbRRK/3tnJl89hIriw7vvOzs7+i2O5UYUWuHlpDjFoyiETlSSCyn6Dlcy54POIKNHivVfLXdWWSk+jq8zUbxp45XMtXonZYnCWXEGlcuiRzSAN3lKtIhd3x+6Ik2Hqm6qOmli3X9VbbLeN+lu38R06EI8wDBmp1FjR//Y2zhc5LLdxFHgFs2KtjBGS62sx7gx6hHqcEf/UGUM99gZDSIoxozQEFoyABACoyPMATFjr2Ok01jFSKO2XCynmAVSPXmts4TUgw2I+JkYgdAwGkIu5qmHwF5PFYK5I8d8fkOKKU+nAKWvKmh1jQG3c0GuCzTQTxoovqvbYI31slzMabG/Li7wF8JgV29bpPg0rl625XQ6306Xz5OJ+PkFBLqP5w=='
  });
  // console.log(html);
  // 内存中构建dom
  let $ = cheerio.load(html);
  let movieNodes = $('#content .article .grid_view').find('.item');
//   console.log(movieNodes);
  
  let movies = [];
  for (let i = 0; i < movieNodes.length; i++) {
    let item = cheerio.load(movieNodes[i]);
    let titles = item('.info .hd .title').text();
    // console.log(titles, '----');
    // break;
    // titles = ([]).map.call(titles, t => {
    //   return $(t).text()
    // })
    // console.log(titles);
    let bd = item('.info .bd');
    let info = bd.find('p').text();
    let score = bd.find('.star .rating_num').text();
    movies.push({
      'titles': titles,
      'info': info,
      'score': score
    })
  }
//   console.log(movies);

  fs.appendFile('./output.json',JSON.stringify(movies)+'\r\n','utf-8',err=>{
      if(err){
          console.log('写入失败');
      }
     
  })
}
console.log('生成JSON文件成功，爬取完成');
}

main();