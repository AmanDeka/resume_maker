'use server'
import fs from 'fs';
import { spawn } from 'child_process';
import temp from 'temp';
import path from "path";
import { replace, PatternDict } from './utils';

import { writeJsonFile } from 'write-json-file';
import { loadJsonFile } from 'load-json-file';

import tex_file from './templates/simple/tex_file';
import cls_file from './templates/simple/cls_file';



export async function create(templateFolder: string, obj: PatternDict): Promise<Buffer> {

    return new Promise((res, rej) => {
        temp.track();

        temp.mkdir('temp', (err, dirPath) => {
            const doc = replace(tex_file, obj);

            fs.writeFileSync(path.join(dirPath, 'resume.tex'), doc);
            fs.writeFileSync(path.join(dirPath, 'resume.cls'), cls_file);


            const ls = spawn("latexmk", ["-pdf"], { cwd: dirPath });

            ls.on('close', (code) => {
                console.log(`child process exited with code ${code}`);

                (() => {
                    fs.readFile(path.join(dirPath, 'resume.pdf'), (err, doc) => {
                        if (err) rej(err);
                        else {
                            temp.cleanup((err, stats) => {
                                console.log(stats);
                                res(doc);
                            })
                        }
                    });
                })();
            });

        })


    })


}

export async function update_pattern_dict(obj: PatternDict) {
    await writeJsonFile('data.json', obj);
}

export async function get_pattern_dict() {
    return await loadJsonFile('data.json', {
        reviver: (key, value) => {
            return value as string;
        }
    }) as PatternDict;
}

export default async function generate_document() {
    const obj = await get_pattern_dict();
    console.log(obj);
    return create('templates', obj);
}
