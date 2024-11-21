import { load } from "cheerio";

// TODO: move this somewhere else
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

export async function getBcvPageHtml() {
  const res = await fetch("http://www.bcv.org.ve/");
  const text = await res.text();
  return text;
}

export async function extractBcvRate() {
  try {
    const html = await getBcvPageHtml();
    const $ = load(html);
    const data = $("#dolar > div > div > div:nth-child(2) > strong").text();
    const price = Number(data.split(".").join("").split(",").join("."));
    return price;
  } catch (e) {
    console.warn("Failed extracting BCV rate");
    console.error(e);
    return null;
  }
}
