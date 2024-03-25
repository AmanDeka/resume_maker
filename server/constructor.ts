import { StringDict, BooleanDict } from "./utils"

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

const tex_constructor = (tex_template: StringDict, sections: BooleanDict, patternDict: StringDict): Promise<string> => {
    return new Promise((res, rej) => {
        let template: string = tex_template['start'];
        Object.keys(sections).forEach((key: string) => {
            if (sections[key] === true) {
                template += '\n' + tex_template[key];
            }
        });

        template += '\n' + tex_template['end'];

        replace(template, patternDict).then(template => {
            res(template);
        });

    });
}

export default tex_constructor;