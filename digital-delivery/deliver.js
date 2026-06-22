/**
 * The Country Honey Shop - Digital Delivery Script
 * 
 * Usage: node deliver.js <customer_email> <product_id>
 */

const fs = require('fs');
const path = require('path');

const products = [
    { id: "prayer-cards", name: "Country Mama Prayer Cards", zip: "prayer-cards.zip" },
    { id: "checklist-pack", name: "Country Mama Daily Checklist Pack", zip: "checklists.zip" },
    { id: "faith-journal", name: "Wildflower Faith Scripture Journal", zip: "journals.zip" },
    { id: "phone-wallpapers", name: "Country Mama Phone Wallpaper Set", zip: "wallpapers.zip" },
    { id: "sticker-sheet-mama", name: "Country Mama Printable Sticker Sheet", zip: "sticker-sheet-mama.zip" },
    { id: "sticker-sheet-faith", name: "Wildflower Faith Printable Sticker Sheet", zip: "sticker-sheet-faith.zip" }
];

const args = process.argv.slice(2);
if (args.length < 2) {
    console.log("Usage: node deliver.js <customer_email> <product_id>");
    process.exit(1);
}

const customerEmail = args[0];
const productId = args[1];

const product = products.find(p => p.id === productId);

if (!product) {
    console.error(`Error: Product ID '${productId}' not found.`);
    process.exit(1);
}

const downloadUrl = `https://thecountryhoneyshop.com/delivery.html?product=${product.id}`;

console.log(`--- DIGITAL DELIVERY INITIATED ---`);
console.log(`To: ${customerEmail}`);
console.log(`Product: ${product.name}`);
console.log(`Download Link: ${downloadUrl}`);
console.log(`----------------------------------`);
console.log(`Success: Delivery email simulated for ${customerEmail}`);

// In a real production environment, you would integrate with an Email API here
// (e.g., SendGrid, Mailgun, or AWS SES) to send the actual email.
