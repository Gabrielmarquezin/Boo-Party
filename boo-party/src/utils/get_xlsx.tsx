import * as XLSX from "xlsx";
import axios from "axios";


export async function getSheet(link:string) :Promise<any[]>{
    try {
        const googleSheetsURL: string = link
        const response = await axios.get(googleSheetsURL, { responseType: 'arraybuffer' })
        
        const data = new Uint8Array(response.data);
        const workbook = XLSX.read(data, { type: 'array' });

        const sheetName = workbook.SheetNames[0];

        const sheet = workbook.Sheets[sheetName];

        const dataObjects = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        
        return dataObjects
    } catch (error: any) {
        console.error('Erro ao acessar o Google Sheets:', error);
        throw new Error(error)
    }
}