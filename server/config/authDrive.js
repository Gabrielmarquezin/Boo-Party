const {google, Auth} = require('googleapis')

const auth = new google.auth.GoogleAuth({
    keyFile: __dirname+"/key_drive.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets"
})

module.exports = {Client: auth.getClient(), auth: auth}
