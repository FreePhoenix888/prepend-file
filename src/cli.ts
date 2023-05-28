import { program } from 'commander';
import fsExtra from 'fs-extra';
import { prependFile } from './prepend-file';

main();

async function main() {
  program
    .option('--content <content>', 'Content')
    .option('--file-path <filePath>', 'File path');

  program.parse(process.argv);

  const { content: contentToPrepend, filePath } = program.opts();

  if (!contentToPrepend) {
    throw new Error('Content is required');
  }
  if (!filePath) {
    throw new Error('File path is required');
  }

  await prependFile({
    content: contentToPrepend,
    filePath,
  });
}
