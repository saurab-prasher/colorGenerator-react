function componentToHex(c) {
  var hex = c.toString(16);

  /*eslint-disable*/
  return hex.length == 1 ? "0" + hex : hex;
  /*eslint-enable*/
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export default rgbToHex;
