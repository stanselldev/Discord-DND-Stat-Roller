const puppeteer = require("puppeteer")
const $ = require("cheerio")

async function getCharacterSheet(msg, url) {
  let characterSheet

  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()

  await page.goto(url)
  let html = await page.content();

  await browser.close()

  let notFound = $(".error-page-title", html).text()
  let incompleteCharacter = $(".ct-character-tidbits__name", html).text()

  if (notFound == "Page Not Found" || incompleteCharacter == "" || incompleteCharacter == null) {
    msg.channel.send(`\`\`\`Character sheet not found.  Please double check your url.\`\`\``)
    return
  }

  let name = $(".ct-character-tidbits__name", html).map(function(i, el) {
    return $(this).text()
  }).get().join()

  let labels = $(".ct-ability-summary__label", html).map(function(i, el) {
    return $(this).text()
  }).get()

  let secondaries = $(".ct-ability-summary__secondary", html).map(function(i, el) {
    return $(this).text()
  }).get()

  let primaries = $(".ct-ability-summary__primary", html).map(function(i, el) {
    return $(this).text()
  }).get()

  characterSheet = {
    name,
    stats: [],
    url
  }

  for (let i = 0; i < 6; i++) {
    label = labels[i]
    primary = primaries[i]
    secondary = secondaries[i]

    characterSheet.stats.push({
      "label": label,
      "primary": primary,
      "secondary": secondary
    })
  }

  return characterSheet
}

module.exports = {
  getCharacterSheet
}
