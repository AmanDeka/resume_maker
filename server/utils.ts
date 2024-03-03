

export type PatternDict = {
    [key: string]: string
};

function replacePattern(template: string, pattern: string, text: string): string {
    return template.replaceAll(pattern, text);
}

export function replace(template: string, dictionary: PatternDict): string {

    Object.keys(dictionary).forEach((key: string) => {
        template = replacePattern(template, key, dictionary[key]);
    });

    return template;
}

