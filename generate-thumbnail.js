import { launch } from "puppeteer";

(async () => {
  const browser = await launch();
  const page = await browser.newPage();

  // Change this URL to your portfolio URL (or localhost if running locally)
  await page.goto("http://localhost:5173", { waitUntil: "networkidle2" });

  // Set viewport size for the screenshot
  await page.setViewport({ width: 1280, height: 720 });

  // Capture the screenshot and save as "thumbnail.png"
  await page.screenshot({ path: "thumbnail.png", fullPage: true });

  await browser.close();
  console.log('✅ Thumbnail saved as "thumbnail.png"');
})();
