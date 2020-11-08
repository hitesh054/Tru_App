# Tru_App

This Application caters to the below requirement:
* A user should be able to download a zip file to a directory from a URL.
* A user should be able to extract a zip file to a particular location.
* A user should be able to move a file from one directory to another using windows commands (child process)

# Code Walk-Through
**tru_app.js**: This file contains the code to download,extract and move the file.
File reads the URL and other Directory locations from a .env file.
Code uses callbacks to wait for download to complete and then unzip and move.

# How to run
Create the following Directories:
* DownloadedZip
* ExtractedFiles

Go to .env file and change the directory according to your local system and run the below command.

**npm run start**

