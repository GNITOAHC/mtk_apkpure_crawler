import puppeteer from 'puppeteer-core'
import { urlList, filename, EXECUTABLE_PATH } from './utils/constants.js'
import { initCsv, writeToCsv } from './utils/tocsv.js'

// APKPure

async function pageEvaluate(page, category) {
  const query = await page.evaluate(
    async ({ category }) => {
      const moreListSection = document.querySelector(
        '.category-apk-list-box.category-multiple-apk-list-box.category-module.is-tab'
      )
      const moreList = moreListSection
        .querySelector('div div div')
        .querySelector('.apk-grid-item.no-grid')
        .querySelector('div ul')
      const list = moreList.querySelectorAll('.grid-col')

      let names = []
      for (let i = 0; i < list.length; i++) {
        const item = list[i].querySelector('li div div a')
        const downloadLocation = list[i].childNodes[1]
          .querySelector('.apk-grid-download.apk-grid-button')
          .getAttribute('href')
        const isAPK = await checkIsAPK(downloadLocation)

        names.push({
          name: item.innerText,
          location: downloadLocation + 'ing',
          isAPK: isAPK ? 'apk' : 'xapk',
          category: category,
        })
        if (i == 1) break
      }

      return names
    },
    { category }
  )
  return query
}

function checkIsAPKOuter(browser) {
  return async function (url) {
    const newpage = await browser.newPage()
    await newpage.goto(url)
    const checkAPK = await newpage.evaluate(() => {
      const t = document.querySelector('.download-text.one-line').innerText
      if (t.includes('XAPK') || t.includes('xapk')) return false
      return true
    })
    newpage.close()
    return checkAPK
  }
}

async function main() {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    executablePath: EXECUTABLE_PATH,
    devtools: true,
    headless: false,
  })
  const page = await browser.newPage()
  await page.exposeFunction('checkIsAPK', checkIsAPKOuter(browser))

  initCsv(filename)

  for (let i = 0; i < urlList.length; ++i) {
    await page.goto(urlList[i].url, { waitUntil: 'domcontentloaded' })
    const category = urlList[i].name
    const names = await pageEvaluate(page, category)
    writeToCsv(names, filename)
  }

  await page.close()
  return await browser.close()
}

main()