const { AddSheet, GetSheet } = require("../service/sheet_service")

module.exports = {
    async SheetAdd(req, res){
        const id = req.body.sheetid
        const data = req.body.data

        try {
            await AddSheet(id, data)
            return res.status(200).json({message: "concluido"})
        } catch (error) {
            console.log(error)
            res.status(403).json({error: error})
        }
    },

    async getSheet(req, res){
        const id = req.query['sheetid']
       
        try {
            const data = await GetSheet(id)
            return res.status(200).json(data)
        } catch (error) {
            res.status(403).json({error: error})
        }
    }
}