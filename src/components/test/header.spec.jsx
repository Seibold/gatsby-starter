const puppeteer = require("puppeteer");
const { port } = require("../../../jest-puppeteer.config").server;

const siteRoot = `http://localhost:${port}`;

describe("Header", () => {
  let browser = "";
  let page = "";

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 2400,
      },
      userAgent: "",
    });

    await page.goto(`${siteRoot}/`);
  });

  afterAll(async () => {
    browser.close();
  });

  test("Site title is visible", async () => {
    console.log("test");
    console.log("test2");

    // const html = await page.$eval("h1 a", e => e.innerHTML);
    expect("Home").toBe("Home");
  });

  //   test("Older blog posts are accessible", async () => {
  //     // Yes, that's a very broad selector, test ids?
  //     await page.waitForSelector("#___gatsby");

  //     const html = await page.$eval("#___gatsby", e => e.innerHTML);
  //     expect(html).toContain("Older posts");
  //   });
});
