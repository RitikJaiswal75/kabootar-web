import puppeteer from "puppeteer";
import fs from "fs-extra";

const routes = ["/"]; // Add your routes here

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const route of routes) {
    await page.goto(`http://localhost:5173${route}`, {
      waitUntil: "networkidle0",
    });
    const content = await page.content();
    fs.outputFileSync(`dist${route}/index.html`, content);
  }

  await browser.close();
})();
