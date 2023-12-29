const { google, Auth } = require("googleapis");
const GoogleSheet = require("../conection/sheet");
const AuthDrive = require("../config/authDrive")

const AddSheet = async (spreadsheetsid, value)=>{
    try {
        const googlesheet = await GoogleSheet(spreadsheetsid)
        await googlesheet.spreadsheets.values.append({
            auth: AuthDrive.auth,
            spreadsheetId: spreadsheetsid,
            range: "Página1!A:B",
            valueInputOption: "USER_ENTERED",
            resource: {
              values: value,
            },
          });

          return {message: "deu certo"}
    } catch (error) {
          throw new Error(error)
    }
}

const GetSheet = async (spreadsheetId)=>{
    try {
        const googlesheet = await GoogleSheet(spreadsheetId)
        const getRows = await googlesheet.spreadsheets.values.get({
            auth: AuthDrive.auth,
            spreadsheetId: spreadsheetId,
            range: "Página1!A:B",
          });

        return getRows
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

module.exports = {AddSheet, GetSheet}