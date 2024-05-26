import template1 from "./templates/template1/tex_template";

const make_exp_item = (n: number, n_items: number): string => {

    let items = "";
    for (let i = 0; i < n_items; i++) {
        items += '\n        '+`\\item _experience_${n}_item_${i}`;
    }

    let item_str = `\\begin{itemize}
        \\itemsep -6pt {}${items}
    \\end{itemize}`

    let str = `    \\experienceItem[
            company={_experience_${n}_company},
            location={_experience_${n}_location},
            position={_experience_${n}_position},
            duration={_experience_${n}_duration}
    ]
    ${item_str}`;
    return str;
}

const experience_section = (fields: any) => {
    let tex = "\\begin{experienceSection}{Professional Experience}";
    const n = fields['experience_items'].length as number;
    for (let i = 0; i < n; i++) {
        tex += '\n' + make_exp_item(i, fields['experience_items'][i]['items'].length);
    }
    tex += '\n' + '\\end{experienceSection}';
    return tex;
}

const make_proj_item = (n: number, n_items: number): string => {

    let items = "";
    for (let i = 0; i < n_items; i++) {
        items += '\n        '+`\\item _project_${n}_item_${i}`;
    }

    let item_str = `\\begin{itemize}
        \\vspace{-0.5em}
        \\itemsep -6pt {}${items}
    \\end{itemize}`

    let str = `    \\projectItem[
            title={_project_${n}_title},
            duration={_project_${n}_duration},
            keyHighlight={_project_${n}_keyhighlight}
    ]
    ${item_str}`;
    return str;
}

const project_section = (fields: any) => {
    let tex = "\\begin{experienceSection}{Academic projects}";
    const n = fields['project_items'].length as number;
    for (let i = 0; i < n; i++) {
        tex += '\n' + make_proj_item(i, fields['project_items'][i]['items'].length);
    }
    tex += '\n' + '\\end{experienceSection}';
    return tex;
}

const extract_bullet_points = (str: string): string[] => {
    const lines = str.split('\n');
    // Initialize an array to hold the bullet points
    const bulletPoints: string[] = [];
    // Iterate through each line to find and extract bullet points
    for (const line of lines) {
        // Trim the line to remove leading and trailing whitespace
        const trimmedLine = line.trim();
        // Check if the line starts with the '~' symbol
        if (trimmedLine.startsWith('~')) {
            // Extract the bullet point by removing the '~' symbol and any leading whitespace
            const bulletPoint = trimmedLine.slice(1).trim();
            bulletPoints.push(bulletPoint);
        }
    }
    // Return the array of extracted bullet points
    return bulletPoints;
}

const preprocess = (fields: any) => {
    for (let i = 0; i < fields['education_items'].length; i++) {
        for (const [key, value] of Object.entries(fields['education_items'][i])) {
            fields['tokens'][`_education_${i}_${key}`] = value;
        }
    }

    for (let i = 0; i < fields['skill_items'].length; i++) {
        for (const [key, value] of Object.entries(fields['skill_items'][i])) {
            fields['tokens'][`_skill_${i}_${key}`] = value;
        }
    }

    for (let i = 0; i < fields['experience_items'].length; i++) {
        fields['experience_items'][i]['items'] = extract_bullet_points(fields['experience_items'][i]['description']);
    }
    fields['experience'] = experience_section(fields);

    for (let i = 0; i < fields['experience_items'].length; i++) {
        for (const [key, value] of Object.entries(fields['experience_items'][i])) {
            if (key == 'items') continue;
            fields['tokens'][`_experience_${i}_${key}`] = value;
        }

        for (let k = 0; k < fields['experience_items'][i]['items'].length; k++) {
            fields['tokens'][`_experience_${i}_item_${k}`] = fields['experience_items'][i]['items'][k];
        }
    }

    for (let i = 0; i < fields['project_items'].length; i++) {
        fields['project_items'][i]['items'] = extract_bullet_points(fields['project_items'][i]['description']);
    }

    fields['projects'] = project_section(fields);

    for (let i = 0; i < fields['project_items'].length; i++) {
        for (const [key, value] of Object.entries(fields['project_items'][i])) {
            if (key == 'items') continue;
            fields['tokens'][`_project_${i}_${key}`] = value;
        }

        for (let k = 0; k < fields['project_items'][i]['items'].length; k++) {
            fields['tokens'][`_project_${i}_item_${k}`] = fields['project_items'][i]['items'][k];
        }
    }
    return fields
}

export const template1_constructor = (fields: any): Promise<string> => {
    return new Promise(async (res, rej) => {
        fields = preprocess(fields);
        let tex: string = template1['start'];
        for (let i = 0; i < fields['order'].length; i++) {
            const section = fields['order'][i];
            if (fields['sections'][section] === true) {
                tex += '\n' + fields[section];
            }
        }
        tex += '\n' + template1['end'];

        res(tex);
    });
}