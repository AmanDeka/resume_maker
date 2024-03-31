
export type EducationItem = {
    university:string,
    college:string,
    graduation:string,
    grade:string,
    program:string,
    coursework:string
}

export type Fields = {
    sections: {
        introduction: boolean,
        summary: boolean,
        education:boolean
    },
    introduction:string,
    summary:string,
    tokens:{
        _name: string,
        _email: string,
        _phone: string,
        _linkedin: string,
        _github: string
        _summary: string,
    },
    order:string[],
    education_items:EducationItem[]
}
