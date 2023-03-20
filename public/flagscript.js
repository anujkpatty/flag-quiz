const fs = require('fs')
const countries = require('./country-codes.json')
let content = ""


countries.forEach((country) => {
    let fInput = `{"image": "/flags/${country.code}.png", "keys": ["${country.name.toLowerCase()}"]},\n`
    content += fInput
})

fs.writeFile('../src/flags.json', content, (err) => {
    if (err) throw err;
    else{
    }
 })