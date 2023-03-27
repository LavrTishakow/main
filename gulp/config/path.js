import * as nodePath from 'path';
const rootFolder = node.Path.basename(nodePath.resolve());

const buildfolder = `./dist`;
const srcFolder = `./src`;

export const path = {
	build: {
		files: `${buildFolder}/files/`
	},
	src: {
		files: `${srcFolder}/files/**/*.*`,
	},
	watch: {},
	clean: buildfolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ''
}