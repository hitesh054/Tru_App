const expect = require('chai').expect;
const { spawn } = require('child_process');
describe('Tru Project sucess test', () => {
    let resp
    finalResp = `File Downloaded,extracted,moved to destination\n`


    before((done) => {
        process.env.URL = `http://www.learningcontainer.com/wp-content/uploads/2020/05/sample-zip-file.zip`
        process.env.DOWNLOAD_DIR = `DownloadedZip/bootstrap.zip`
        process.env.EXTRACT_TO_DIR = `C:/Users/91906/Desktop/NodeMamla/ZipUnzip/ExtractedFiles`
        process.env.FINAL_DIR = `FinalDirectory`
        const ls = spawn('node', ['tru_app.js']);
        ls.stdout.on('data', (data) => {
            resp = data.toString()
            done()
        });
    })

    it('Should download,extract,move to destination ', () => {
        expect(resp).to.equal(finalResp);
    });
});