import React, { useState } from "react";
import { SubmitHandler, useForm, UseFormRegister, useWatch, Control, UseFormSetValue } from "react-hook-form";
import { update_pattern_dict } from "@/server/utils";

import { DevTool } from "@hookform/devtools";

import { Fields } from "./types";

import IntroductionSection from "./IntroductionSection";
import SummarySection from "./SummarySection";
import EducationSection from "./EducationSection";
import SkillSection from "./SkillSection";
import ExperienceSection from "./ExperienceSection";

import tex_constructor from "@/server/constructor";


const SectionSelector: React.FC<{ register: UseFormRegister<Fields> }> = ({ register }) => {
    return <details className="dropdown dropdown-left dropdown-bottom">
        <summary className="m-1 btn">Add Section</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <ul className="menu bg-base-200 w-56 rounded-box">
                <li>
                    <label className="label cursor-pointer">
                        <span className="label-text">Introduction</span>
                        <input type="checkbox"  {...register("sections.introduction")} className="checkbox" />
                    </label>
                </li>
                <li>
                    <label className="label cursor-pointer">
                        <span className="label-text">Summary</span>
                        <input type="checkbox"  {...register("sections.summary")} className="checkbox" />
                    </label>
                </li>
                <li>
                    <label className="label cursor-pointer">
                        <span className="label-text">Education</span>
                        <input type="checkbox"  {...register("sections.education")} className="checkbox" />
                    </label>
                </li>
                <li>
                    <label className="label cursor-pointer">
                        <span className="label-text">Technical Skills</span>
                        <input type="checkbox"  {...register("sections.technical_skills")} className="checkbox" />
                    </label>
                </li>
                <li>
                    <label className="label cursor-pointer">
                        <span className="label-text">Technical Experience</span>
                        <input type="checkbox"  {...register("sections.experience")} className="checkbox" />
                    </label>
                </li>
            </ul>
        </ul>
    </details>
}


const sectionsDefaultValues = {
    introduction: true,
    summary: true
};

const defaultValues = {
    sections: {
        introduction: true,
        summary: false,
        education:false,
        technical_skills:false,
        experience:false
    },
    introduction: `\\introduction[
        fullname={_name},
        email={_email},
        phone={_phone},
        linkedin={_linkedin},
        github={_github}
]`,
    summary: `\\summary{_summary}`,
    education:`\\begin{educationSection}{Education}
\\end{educationSection}`,
    tokens: {
        _name: '',
        _email: '',
        _phone: '',
        _linkedin: '',
        _github: '',
        _summary: '',
    },
    order: ['introduction', 'summary','education','technical_skills','experience']
}


const Template1Form: React.FC<{ update: () => void }> = ({ update }) => {
    const onSubmit: SubmitHandler<Fields> = async (data) => {
        await update_pattern_dict(data);
        tex_constructor(data,'template1');
        update();
    }

    const { register, handleSubmit, control, setValue,getValues, watch } = useForm<Fields>(
        {
            defaultValues:defaultValues,
        }
    );

    const sectionStates = useWatch({
        control: control,
        name: "sections",
    });


    return (
        <div className="card card-compact h-full w-1/2 bg-base-100 shadow-xl">
            <div className="card-body h-full">
                <h2 className="card-title">Simple Resume</h2>
                <div className="h-full overflow-y-scroll">
                    <IntroductionSection register={register} isShow={sectionStates['introduction']} setValue={setValue} />
                    <SummarySection register={register} isShow={sectionStates['summary']} setValue={setValue} />
                    <EducationSection register={register} isShow={sectionStates['education']} setValue={setValue} getValue = {getValues} control = {control} />
                    <SkillSection register={register} isShow={sectionStates['technical_skills']} setValue={setValue} getValue = {getValues} control = {control} />
                    <ExperienceSection register={register} isShow={sectionStates['experience']} setValue={setValue} getValue = {getValues} control = {control} />
                    <div className="card-actions justify-end p-2">
                        <SectionSelector register={register} />
                        <button className="btn btn-accent" onClick={handleSubmit(onSubmit)}>Save</button>
                    </div>
                </div>
            </div>
            {/*<DevTool control={control} />*/}
        </div>
    )
}

export default Template1Form;