#!/usr/bin/env node

const fs = require("fs");

const decodeMessage = (data) => {
    let msg = "";
    const { table, indices } = data;
    
    for (let i = 1; i < indices.length; i++) {
        msg += table[indices[i]];
    }
    
    return msg;
};

const data = JSON.parse(fs.readFileSync("data.json", "utf8"));
const decodedMessage = decodeMessage(data);

const base64Message = Buffer.from(decodedMessage, "utf8").toString("base64");
fs.writeFileSync("flag", base64Message);

console.log("Decoded message saved to flag (Base64 format)");
