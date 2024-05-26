
export type EducationItem = {
    university:string,
    college:string,
    graduation:string,
    grade:string,
    program:string,
    coursework:string
}

export type SkillItem = {
    category:string,
    skills:string
}

export type ExperienceItem = {
    company:string,
    location:string,
    position:string,
    duration:string,
    description:string
}

export type ProjectItem = {
    title:string,
    duration:string,
    keyHighlight:string,
    description:string
}

export type Fields = {
    sections: {
        introduction: boolean,
        summary: boolean,
        education:boolean,
        technical_skills:boolean,
        experience:boolean,
        projects:boolean
    },
    introduction:string,
    summary:string,
    education:string,
    technical_skills:string,
    experience:string,
    peojects:string
    tokens:{
        _name: string,
        _email: string,
        _phone: string,
        _linkedin: string,
        _github: string,
        _summary: string,
    },
    order:string[],
    education_items:EducationItem[],
    skill_items:SkillItem[],
    experience_items:ExperienceItem[],
    project_items:ProjectItem[]
}
