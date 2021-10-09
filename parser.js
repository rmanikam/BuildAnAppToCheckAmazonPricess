const nightmare = require("nightmare")();

("priceblock_dealprice");

const args = process.argv.slice(2);
const url = args[0];
const minPrice = args[1];

checkPrice();

async function checkPrice() {
  const priceString = await nightmare
    .goto(url)
    .wait("priceblock_dealprice")
    .evaluate(() => document.getElementById("priceblock_ourprice").innerText)
    .end();

  const priceNumber = parseFloat(priceString.replace("$", ""));
  if (priceNumber < minPrice) {
    console.log("It is cheap");
  } else {
    console.log("It is expensive");
  }
}
