'use server'
import fs from 'fs';
import { spawn } from 'child_process';
import temp from 'temp';
import path from "path";
import { replace ,PatternDict} from './utils';


export default async function create(templateFolder:string,obj:PatternDict): Promise<Buffer> {

    return new Promise((res, rej) => {
        temp.track();

        temp.mkdir('temp', (err, dirPath) => {
            const template = fs.readFileSync(path.join(process.cwd(), 'server', templateFolder,'resume.tex'),'utf8');
            const cls = fs.readFileSync(path.join(process.cwd(), 'server', templateFolder,'resume.cls'),'utf8');

            const doc = replace(template,obj);

            fs.writeFileSync(path.join(dirPath, 'resume.tex'),doc);
            fs.writeFileSync(path.join(dirPath, 'resume.cls'),cls);

            console.log('wrote',dirPath);

            const ls = spawn("latexmk", ["-pdf"], { cwd:dirPath });

            ls.on('error',(err)=>{
                console.log(err);
            })

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
