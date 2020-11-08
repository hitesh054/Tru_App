const request = require('request');
const fs = require('fs');
const extract = require('extract-zip')
require('dotenv').config();


function tasks(URL, targetDir, extractToFolder, finalDirectory) {
    this.URL = URL;
    this.targetDir = targetDir;
    this.extractToFolder = extractToFolder;
    var resp = '';
    this.tru_download = async function (callback) {
        //console.log(this.URL + " " + this.targetDir)
        request({ url: URL, encoding: null }, function (err, resp, body) {
            if (err) {
                console.log(err)
                throw err
            };
            fs.writeFile(targetDir, body, function (err) {
                if (err) {
                    console.log(err)
                    throw err
                };
                //resp = +"file Downloaded!";
                callback("file written!");

            });
        });
    }

    this.tru_extract = async function (callback) {
        try {
            //will create the directory if not found
            await extract(targetDir, { dir: extractToFolder })
            //console.log("Extraction complete");
            callback('Extraction complete')
        } catch (err) {
            console.log(err)
            throw err;
        }
    }

    this.tru_execute = async function () {
        var exec = require('child_process').exec;
        exec(`move .\\ExtractedFiles\\sample.txt .\\FinalDirect`,
            function (err, stdout, stderr) {
                if (err) {
                    throw err;
                }
                console.log("File Downloaded,extracted,moved to destination")

            });
    }
}
let operation = new tasks(process.env.URL, process.env.DOWNLOAD_DIR, process.env.EXTRACT_TO_DIR, process.env.FINAL_DIR)
let resp = operation.tru_download((callback) => {
    operation.tru_extract((callback) => {
        operation.tru_execute()
    })
})

