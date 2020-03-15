exports.getSignin=async ctx => {
    await ctx.render('sigin',{
        
    })
}
exports.postSignin=async ctx => {
    ctx.body = {
      mes:'登陆成功'    };
}
