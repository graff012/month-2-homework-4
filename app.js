// import { writeFile } from 'fs/promises';

// async function createFile() {
//     try {
//         await writeFile('data.txt', 'Hello, World!', 'utf8');
//         console.log('File successfully created and written!');
//     } catch (error) {
//         console.error('An error occurred:', error);
//     }
// }

// createFile();

// task 2

// import { readFile } from 'fs/promises';

// async function readFileContent() {
//     try {
//         const data = await readFile('data.txt', 'utf8');
//         console.log('File content:', data);
//     } catch (error) {
//         console.error('An error occurred:', error);
//     }
// }

// readFileContent();

// task 3

// import { mkdir } from 'fs/promises';

// async function createDirectories() {
//     try {
//         await mkdir('uploads', { recursive: true });
//         await mkdir('documents', { recursive: true });

//         console.log('Directories "uploads" and "documents" created successfully!');
//     } catch (error) {
//         console.error('An error occurred:', error);
//     }
// }

// createDirectories();

// task 4

// import { access } from 'fs/promises';

// async function checkFileExists(fileName) {
//     try {
//         await access(fileName);
//         console.log(`File "${fileName}" exists.`);
//     } catch {
//         console.log(`File "${fileName}" does not exist.`);
//     }
// }

// const fileName = 'data.txt';
// checkFileExists(fileName);

// task 5

// import { copyFile } from 'fs/promises';

// async function copyFileAsync(source, destination) {
//     try {
//         await copyFile(source, destination);
//         console.log(`File copied from "${source}" to "${destination}".`);
//     } catch (error) {
//         console.error('An error occurred:', error);
//     }
// }

// const source = 'source.txt';
// const destination = 'destination.txt';

// copyFileAsync(source, destination);

// task 6

// import { readdir } from 'fs/promises';

// async function readDirectoryContents(directory) {
//     try {
//         const files = await readdir(directory);
//         console.log(`Contents of "${directory}":`, files);
//     } catch (error) {
//         console.error('An error occurred:', error);
//     }
// }

// const directory = '.';
// readDirectoryContents(directory);

// task 7

// import { unlink } from 'fs/promises';

// async function deleteFile(fileName) {
//     try {
//         await unlink(fileName);
//         console.log(`File "${fileName}" has been deleted.`);
//     } catch (error) {
//         console.error('An error occurred:', error);
//     }
// }

// const fileName = 'delete-me.txt';
// deleteFile(fileName);

// task 8

// import { stat } from 'fs/promises';

// async function getFileStats(fileName) {
//     try {
//         const fileStats = await stat(fileName);

//         console.log(`File: ${fileName}`);
//         console.log(`Size: ${fileStats.size} bytes`);
//         console.log(`Created: ${fileStats.birthtime}`);
//         console.log(`Last Modified: ${fileStats.mtime}`);
//         console.log(`Is Directory: ${fileStats.isDirectory()}`);
//         console.log(`Is File: ${fileStats.isFile()}`);
//     } catch (error) {
//         console.error('An error occurred:', error);
//     }
// }

// const fileName = 'data.txt';
// getFileStats(fileName);

// task 9

// import { mkdir, writeFile } from 'fs/promises';
// import path from 'path';

// async function createNestedDirectoryAndFile() {
//     const dirPath = path.join('nested', 'folders', 'structure');
//     const filePath = path.join(dirPath, 'config.json');
//     const data = {
//         setting1: 'value1',
//         setting2: 'value2',
//         setting3: 'value3'
//     };

//     mkdir(dirPath, { recursive: true })
//         .then(() => {
//             console.log(`Directory "${dirPath}" created.`);
//             return writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
//         })
//         .then(() => {
//             console.log(`File "${filePath}" created and data written.`);
//         })
//         .catch((error) => {
//             console.error('An error occurred:', error);
//         });
// }

// createNestedDirectoryAndFile();
