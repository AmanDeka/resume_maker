'use server'
import fs from 'fs';
import { spawn } from 'child_process';
import temp from 'temp';
import path from "path";


export default async function create(templateFolder:string): Promise<Buffer> {

    return new Promise((res, rej) => {
        temp.track();

        temp.mkdir('temp', (err, dirPath) => {
            const ls = spawn("latexmk", ["-pdf", `-outdir=${dirPath}`], { cwd: path.join(process.cwd(), 'server', templateFolder) });

            ls.on('close', (code) => {
                console.log(`child process exited with code ${code}`);

                (() => {
                    fs.readFile(path.join(dirPath, 'resume.pdf'), (err, doc) => {
                        if (err) rej(err);
                        else {
                            temp.cleanup((err, stats) => {
                                res(doc);
                            })
                        }
                    });
                })();
            });

        })


    })


}
