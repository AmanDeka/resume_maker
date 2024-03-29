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
    const obj = await loadJsonFile('data.json', {
        reviver: (key, value) => {
            return value;
        }
    }) as {[key:string]:any};

    let str_dict:StringDict = {};
    let bool_dict:BooleanDict = {};

    for (const [key, value] of Object.entries(obj)) {
        if(typeof(value) === 'string'){
            str_dict[key as string] = value;
        }
      }

      for (const [key, value] of Object.entries(obj['sections'])) {
        if(typeof(value) === 'boolean'){
            bool_dict[key as string] = value;
        }
      }
    return {pattern_dict:str_dict,section_dict:bool_dict};
}

