'use server'

import { writeJsonFile } from 'write-json-file';
import { loadJsonFile } from 'load-json-file';


export type PatternDict = {
    [key: string]: string
};

function replacePattern(template: string, pattern: string, text: string): string {
    return template.replaceAll(pattern, text);
}

export async function replace(template: string, dictionary: PatternDict): Promise<string> {
    return new Promise((res,rej) => {
        Object.keys(dictionary).forEach((key: string) => {
            template = replacePattern(template, key, dictionary[key]);
        });
        res(template);
    });

}

export async function update_pattern_dict(obj: any) {
    await writeJsonFile('data.json', obj);
    console.log('Data written to storage');
}

export async function get_pattern_dict() {
    return await loadJsonFile('data.json', {
        reviver: (key, value) => {
            return value as string;
        }
    }) as PatternDict;
}

