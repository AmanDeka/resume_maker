'use server'
import fs from 'fs';
import { spawn } from 'child_process';
import temp from 'temp';
import path from "path";
import { StringDict,get_pattern_dict ,BooleanDict} from './utils';

import tex_constructor from './constructor';


import tex_file from './templates/simple/tex_file';
import cls_file from './templates/simple/cls_file';
import simple_template from './templates/simple/tex_template';



export async function create( pattern_dict: StringDict,section_dict:BooleanDict): Promise<Buffer> {

    return new Promise((res, rej) => {
        temp.track();

        temp.mkdir('temp', async (err, dirPath) => {
            console.log(pattern_dict,section_dict);
            const doc = await tex_constructor(simple_template,section_dict, pattern_dict);
            console.log(doc);

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


export default async function generate_document() {
    const {pattern_dict,section_dict} = await get_pattern_dict();
    return create(pattern_dict,section_dict);
}
