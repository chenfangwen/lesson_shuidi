module.exports = options =>{
    return async function adminauth(ctx,next){
        // console.log(ctx.session)
        // console.log(ctx.session.openId1,'---')
        if(ctx.session.openId!=''){
            // console.log('登陆了')
            await next()
        }else{
            ctx.body={data:'没有登录'}
        }
    }
}