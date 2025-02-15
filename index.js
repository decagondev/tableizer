#!/usr/bin/env node

const fs = require("fs");

const message = process.argv.slice(2).join(" ");
if (!message) {
    console.error("Please provide a string to encode.");
    process.exit(1);
}

const HIST_CAP = 256;
const hist = new Array(HIST_CAP).fill(0);
const table = [];
const idx = [];

for (let i = 0; i < message.length; i++) {
    hist[message.charCodeAt(i)]++;
}

for (let i = 0; i < HIST_CAP; i++) {
    if (hist[i] > 0) {
        table.push(String.fromCharCode(i));
    }
}
table.push("\0");

idx.push(0);
for (let i = 0; i < message.length; i++) {
    const charIndex = table.indexOf(message[i]);
    if (charIndex !== -1) {
        idx.push(charIndex);
    }
}

const data = { table: table.join(""), indices: idx };
fs.writeFileSync("data.json", JSON.stringify(data, null, 2));

console.log(`Table and indices saved to data.json`);
