/* Middlewares are a powerful yet simple concept:
     the output of one unit/function is the input for the next. 
If you ever used Express or Koa then you already used this concept. */

app.use = function(fn){
    this.middleware.push(fn);
    return this;
};


var i = middleware.length;
while (i--) {
  next = middleware[i].call(this, next);
}