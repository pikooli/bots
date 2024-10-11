const puppeteer = require('puppeteer');
const {faker} = require('@faker-js/faker');

const main = async () => {
    const browser = await puppeteer.launch({ headless: false, });
    const page = await browser.newPage();
    page.setViewport({ width: 1200, height: 800 });
    // Navigate the page to a URL
    await page.goto('https://www.challenge-inclusion.fr/?c=Entrepreneur#i1fv2', { waitUntil: 'networkidle0' });
    
    await page.$eval('[class="cc-btn cc-dismiss"]', (button) => button.click());

    // Target the button with the specific data-scan_id
    // const videoSelector = '[id="video-80035347-4152-9980-6397-649454159670-16257386-1997-1747-5093-116400056067-13792325-4850-2314-1385-188047693367"]';
    // Wait for the button to be available and click it

    // await page.$eval(videoSelector, (selector) => selector..click());
    await page.click('button[data-scan_id="80035347-4152-9980-6397-649454159670-16257386-1997-1747-5093-116400056067-13792325-4850-2314-1385-188047693367"]');
    // Wait for the email input field to be available
    await page.waitForSelector('#mail-vote');

    // Type the email address into the input field
    // Target the email input field
    await page.waitForSelector('#mail-vote');
    
    // Generate a fake email with yopmail.com domain
    // const provider= 'nori24.tv';
    const provider= '@haben-wir.com';

    const fakeEmail = faker.internet.email({provider: provider});
    
    // Type the generated email into the input field
    await page.waitForSelector('#mail-vote', {visible: true});
    console.log('email apear');
    await page.type('#mail-vote', fakeEmail);

    // Optional: Add a small delay to ensure the text is entered
    // Wait for a moment to see the result (you can adjust or remove this)

    // Keep the browser open (remove this line if you want it to close automatically)
    // await browser.close();
};

main().catch(console.error);