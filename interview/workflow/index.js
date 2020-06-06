let p1 = Promise.resolve(1);
let p2 = Promise.reject(2);

Promise.all([p1, p2])
  .then((res) => console.log(res,'+++'))   
  .catch((err) => console.log(err,'+++'));  //2
Promise.race([p1, p2])
  .then((res) => console.log(res,'---'))  //1
  .catch((err) => console.log(err));

let a = {
  name: 'cfw',
  con() {
    console.log(this.name)
  }
}
a.con()