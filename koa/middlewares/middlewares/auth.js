let ifLogin = false

module.exports = (ctx,next) =>{
    if(!ifLogin){
        ctx.redirect('/login')
    } else {
        next();
    }
}