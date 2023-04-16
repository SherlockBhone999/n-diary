


const fs = require('fs')
const { google } = require('googleapis')
const GOOGLE_API_FOLDER_ID = '1UyBji9oXAM61IYjm9weWgluB0Di300_l'

//const GOOGLE_API_FOLDER_ID = '1tfJZleWaOcBsRa12hVoAxjiCWIwU1Yse'

const auth = new google.auth.GoogleAuth({
            keyFile: './googlekey.json',
            scopes: ['https://www.googleapis.com/auth/drive']
        })

const driveService = google.drive({ version: 'v3', auth })


async function uploadFile(nameForgdrive, nameInBackend){
    try{
      
        const fileMetaData = {
            'name': `${nameForgdrive}.pdf`,
            'parents': [GOOGLE_API_FOLDER_ID]
        }

        const media = {
            mimeType: 'application/pdf',
            body: fs.createReadStream(`./bookStation/${nameInBackend}`)
        }

        const response = await driveService.files.create({
            resource: fileMetaData,
            media: media,
            field: 'id'
        })
        return response.data.id

    }catch(err){
        console.log('Upload file error', err)
    }
}


module.exports = { uploadFile }