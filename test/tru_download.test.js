const expect = require('chai').expect;
const { spawn } = require('child_process');


describe('Tru Project Incorrect URL case', () => {


    before((done) => {

        process.env.URL = `http://..com/wp-content/uploads/2020/05/sample-zip-file.zip`
        process.env.DOWNLOAD_DIR = `DownloadedZip/bootstrap.zip`
        process.env.EXTRACT_TO_DIR = `C:/Users/91906/Desktop/NodeMamla/ZipUnzip/ExtractedFiles`
        process.env.FINAL_DIR = `FinalDirectory`
        const ls1 = spawn('node', ['tru_app.js']);
        ls1.stdout.on('data', (data1) => {
            resp1 = data1.toString()
            done()
        });
    })
    it('Should fail with address not found', () => {
        expect(resp1).to.have.string("getaddrinfo ENOTFOUND");
    });
});


describe('Tru Project Incorrect Download Zip location', () => {


    before((done) => {

        process.env.URL = `http://www.learningcontainer.com/wp-content/uploads/2020/05/sample-zip-file.zip`
        process.env.DOWNLOAD_DIR = `DownloadedZi/bootstrap.zip`
        process.env.EXTRACT_TO_DIR = `C:/Users/91906/Desktop/NodeMamla/ZipUnzip/ExtractedFiles`
        process.env.FINAL_DIR = `FinalDirectory`
        const ls = spawn('node', ['tru_app.js']);
        ls.stdout.on('data', (data) => {
            resp = data.toString()
            done()
        });
    })
    it('Should fail with address not found', () => {
        expect(resp).to.have.string("no such file or directory");
    });
});



