const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (perasaan) => {
  let IXX = await promiseTheaterIXX();
  let VGC = await promiseTheaterVGC();

  const hitungemosi = IXX.filter((perasaanIXX) => perasaanIXX.hasil === perasaan).length + VGC.filter((perasaanVGC) => perasaanVGC.hasil === perasaan).length;
  return hitungemosi;
};

module.exports = {
  promiseOutput,
};
