'use server'

import { StringDict, BooleanDict } from "./utils"
import { template1_fields } from "./utils";
import fs from "fs";
import { Fields } from "@/components/Template1Form/types";
import { template1_constructor } from "./template1_constructor";

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



const tex_constructor = (fields: any, template_type: 'template1'): Promise<string> => {
    return new Promise(async (res, rej) => {
        let tex: string;
        switch (template_type) {
            case 'template1':
                tex = await template1_constructor(fields);
                tex = await replace(tex,fields['tokens'])
                break;
        }
        fs.writeFileSync('test.tex',tex);
        res(tex);
    });
}

export default tex_constructor;