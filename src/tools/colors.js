const Vibrant = require('node-vibrant');

export const getColor = (path) => {
  let v = new Vibrant(path)
  v.getPalette().then((palette) => console.log(palette))
  console.log(v)
}