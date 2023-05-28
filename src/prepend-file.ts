import { readFile, writeFile } from "fs-extra";

export async function prependFile(param: PrependFileParam) {

   const {content: contentToPrepend,filePath} = param;
   let content = (await readFile(filePath)).toString();
   content = contentToPrepend + content;
   await writeFile(filePath, content);
}

export interface PrependFileParam {
   content: string;
   filePath: string;
}