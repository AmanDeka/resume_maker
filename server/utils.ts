'use server'

import { writeJsonFile } from 'write-json-file';
import { loadJsonFile } from 'load-json-file';


export type StringDict = {
    [key: string]: string
};

export type BooleanDict = {
    [key: string]: boolean
};


export async function update_pattern_dict(obj: any) {
    await writeJsonFile('data.json', obj);
    console.log('Data written to storage');
}

export async function get_pattern_dict() {
    return await loadJsonFile('data.json', {
        reviver: (key, value) => {
            return value as string;
        }
    }) as StringDict;
}

