

const Vibrant = require('node-vibrant');

export const getColor = async (path) => {
  let v = new Vibrant(path)
  const result = await v.getPalette()
  const color = result.Vibrant.getHex()
  return color
}