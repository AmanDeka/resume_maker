import { StringDict, BooleanDict } from "./utils"

const tex_constructor = (tex_template: StringDict, sections: BooleanDict): string => {
    let template: string = tex_template['start'];
    Object.keys(sections).forEach((key: string) => {
        if (sections[key] === true) {
            template += '\n' + tex_template[key];
        }
    });

    template += '\n' + tex_template['end'];
    return template;
}

export default tex_constructor;