'use server'

import { StringDict, BooleanDict } from "./utils"
import { template1_fields } from "./utils";
import template1 from "./templates/template1/tex_template";
import fs from "fs";

function replacePattern(template: string, pattern: string, text: string): string {
    return template.replaceAll(pattern, text);
}

export async function replace(template: string, dictionary: StringDict): Promise<string> {
    return new Promise((res, rej) => {
        Object.keys(dictionary).forEach((key: string) => {
            template = replacePattern(template, key, dictionary[key]);
        });
        res(template);
    });

}

const template1_constructor = (fields: any): Promise<string> => {
    return new Promise(async (res, rej) => {
        let tex: string = template1['start'];
        for (let i = 0; i < fields['order'].length; i++) {
            const section = fields['order'][i];
            if (fields['sections'][section] === true) {
                tex += '\n' + fields[section];
            }
        }
        tex += '\n' + template1['end'];

        tex = await replace(tex, fields['tokens'] as StringDict)

        res(tex);
    });
}

const tex_constructor = (fields: any, template_type: 'template1'): Promise<string> => {
    return new Promise(async (res, rej) => {
        let tex: string;
        switch (template_type) {
            case 'template1':
                tex = await template1_constructor(fields);
                break;
        }
        fs.writeFileSync('test.tex',tex);
        res(tex);
    });
}

export default tex_constructor;