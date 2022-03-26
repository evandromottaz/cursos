const puppeteer = require('puppeteer');
const fs = require('fs');
const urlPromo = 'https://www.smiles.com.br/shopping-smiles';

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 2000,
    height: 3000,
  });
  await page.goto('https://portal-stg-blue.smiles.com.br/administracao');

  const query = `#atomoKV .atomoKVItem a[href^='${urlPromo}']`;

  await page.waitForSelector(query);
  const element = await page.$(query);
  const box = await element.boundingBox();

  console.log(box);

  await page.screenshot({
    path: 'prints/TVFLASH.png',
    clip: box,
  });

  // await browser.close();
  // await page.click(
  //   '#p_p_id_56_INSTANCE_k9sHfby6pAmT_ > div > div.portlet-body > div.lfr-meta-actions.icons-container > div > span.lfr-icon-action.lfr-icon-action-edit',
  // );

  // await page.waitForNavigation();

  // await page.type('#_15_titulo_da_lp_tvflash_INSTANCE_vmbu');

  // await page.click('#_15_publishButton');
  // await page.waitForNavigation();
})();
