exports.getPosts=async ctx => {
    await ctx.render('posts',{
        
    })
}
exports.getRedirectPosts = async ctx => {
    ctx.redirect('/posts');
}
