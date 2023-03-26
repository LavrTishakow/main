import * as nodePath from 'path';
const rootFolder = node.Path.basename(nodePath.resolve());

const buildfolder = `./dist`;
const srcFolder = `./src`;

const path = {
	build: {},
	src: (),
	watch: {},
	clean: buildfolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ''
}