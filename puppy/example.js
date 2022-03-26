// const puppeteer = require('puppeteer');
// const { env } = require('./env.js');

// const url = '/bancos-caixa-ate-161-12-01';
// const ambiente = 'blue';
const c = {
  pages: {
    adm: `https://portal-stg-${ambiente}.smiles.com.br/administracao`,
    homePrints: `https://portal-stg-${ambiente}.smiles.com.br/home-prints`,
    promocaoPrints: `https://portal-stg-${ambiente}.smiles.com.br/promocao-prints`,
    urlPromo: `https://portal-stg-${ambiente}.smiles.com.br/${url}`,
  },
  queries: {
    bannerHome: `#atomoKV .atomoKVItem a[href='${url}']`,
    bannerPromo: `.promo-card .img-box-promocao a[href^='${url}']`,
    lp: '#wrapper',
  },
};

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   async function MOBILE() {
//     page.setViewport({
//       width: 360,
//       height: 5000,
//     });
//   }

//   console.log('Iniciando...');

//   async function login() {
//     try {
//       console.log('Acessando a página de Administração...');
//       await page.goto(c.pages.adm);
//       await page.waitForNavigation();
//       await page.type('#_58_login', env.user);
//       await page.type('#_58_password', env.password);
//       await page.click('#_58_fm > fieldset > div > button');
//       await page.waitForNavigation();
//       console.log('Login efetuado!');
//     } catch (err) {
//       throw new Error(console.error(err));
//     }
//   }

//   async function printElement(query, name) {
//     try {
//       await page.waitForSelector(query, { timeout: 10000 });
//       const element = await page.evaluate((query) => {
//         const els = document.querySelectorAll(query);
//         for (const el of els) {
//           console.log(el);
//           const bannerPromo = el.parentElement.parentElement;
//           const bannerFixo = el.querySelector('img').getAttribute('alt');

//           // function getDimensions(chosen) {
//           //   const { x, y, height, width } = chosen.getBoundingClientRect();
//           //   return { x, y, height, width };
//           // }

//           if (bannerPromo.classList.contains('promo-card')) {
//             // return getDimensions(bannerPromo);
//             return bannerPromo;
//           } else if (bannerFixo.toUpperCase() == 'BANNER FIXO') {
//             return el;
//             // return getDimensions(el);
//           } else {
//             return el;
//             // return getDimensions(el);
//           }
//         }
//       });

//       const getDimensions2 = await element.boundingBox();
//       console.log(getDimensions2);

//       await page.screenshot({
//         path: `prints/${name}.png`,
//         clip: getDimensions2,
//       });
//     } catch (err) {
//       if (err instanceof puppeteer.errors.TimeoutError) {
//         console.log('elemento não encontrado: ' + err);
//         browser.close();
//       }
//     }

//     console.log('Print pronto!');
//   }

//   console.log(await browser.userAgent());
// await login();

// console.log('Acessando a home-prints');
// await page.goto(c.pages.homePrints);
// await printElement(c.queries.bannerHome, 'TVFLASH');
// await printElement(c.queries.bannerHome, 'BANNER FIXO');

// console.log('Acessando a promocao-prints');
// await page.goto(c.pages.promocaoPrints);
// await printElement(c.queries.bannerPromo, 'BANNER PROMO');

// console.log('Acessando a ' + url);
// await page.goto(c.pages.urlPromo);
// await printElement(c.queries.lp, 'LP DESKTOP');

// await MOBILE();

// console.log(`Acessando a ${url} mobile`);
// await printElement(c.queries.lp, 'LP MOBILE');

// console.log('Acessando a home-prints mobile');
// await printElement(c.queries.bannerHome, 'TVFLASH MOBILE');

// console.log('VENCEMOS! :D');
//   await browser.close();
// })();

class Print {
  constructor(query) {
    this.query = query;
  }

  login(user, password) {
    await page.goto(c.pages.adm);
    await page.waitForTimeout(5000);
    await page.type('#_58_login', user);
    await page.type('#_58_password', password);
    await page.click('#_58_fm > fieldset > div > button');
    await page.waitForNavigation();
  }

  printScreen() {
    
  }

  init() {
    this.login(env.user, env.password);
  }
}
// puppeteer-extra is a drop-in replacement for puppeteer,
// it augments the installed puppeteer with plugin functionality
const puppeteer = require('puppeteer-extra');

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

// puppeteer usage as normal
puppeteer.launch({ headless: true }).then(async (browser) => {
  console.log('Iniciando...');
  const page = await browser.newPage();
  await page.goto(c.pages.homePrints);
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'adm.png', fullPage: true });
  await browser.close();
  console.log(`Finalizado com sucesso!`);
});
