const { google, Auth } = require("googleapis")
const AuthDrive = require("../config/authDrive")

const GoogleSheet = async (spreadsheetsid)=>{
    try {
        const Client = await AuthDrive.Client
        const googlesheet = google.sheets({version: "v4", auth: Client, })
        const metadado = await googlesheet.spreadsheets.get({
            auth: AuthDrive.auth,
            spreadsheetId: spreadsheetsid
        })
        
        return googlesheet
    } catch (error) {
          throw new Error(error)
    }
}

module.exports = GoogleSheet
