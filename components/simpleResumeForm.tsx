import React, { useState } from "react";
import { SubmitHandler, useForm, UseFormRegister, useWatch } from "react-hook-form";
import { update_pattern_dict } from "@/server/utils";
import { cn } from "@/lib/utils";

type Fields = {
    sections: {
        introduction: boolean,
        summary: boolean
    },
    _name: string,
    _email: string,
    _summary: string
}


const IntroductionSection: React.FC<{ register: UseFormRegister<Fields>,isShow:boolean }> = ({ register,isShow }) => {

    return (
        <div className={cn("collapse collapse-arrow px-3 py-1 my-2 bg-base-200",(isShow)?"":"hidden")}>
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
                Introduction
            </div>
            <div className="collapse-content flex flex-col gap-y-3">
                <label className="input input-bordered input-info flex items-center gap-2">
                    Name
                    <input type="text" className="grow" {...register("_name")} placeholder="" />
                </label>

                <div className="flex gap-2">
                    <label className="input input-bordered input-info flex items-center gap-2">
                        Email
                        <input type="text" className="grow" {...register("_email")} placeholder="" />
                    </label>

                    <label className="input input-bordered input-info flex items-center gap-2">
                        Phone
                        <input type="text" className="grow" placeholder="" />
                    </label>
                </div>

                <label className="input input-bordered flex input-info items-center gap-2">
                    Linkedin
                    <input type="text" className="grow" placeholder="" />
                </label>

                <label className="input input-bordered flex input-info items-center gap-2">
                    Github
                    <input type="text" className="grow" placeholder="" />
                </label>
            </div>
        </div>
    )
}

const SummarySection: React.FC<{ register: UseFormRegister<Fields> ,isShow:boolean}> = ({ register,isShow }) => {

    return (
        <div className={cn("collapse collapse-arrow px-3 py-1 my-2 bg-base-200",(isShow)?"":"hidden")}>
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
                Summary
            </div>
            <div className="collapse-content">
                <textarea className="textarea textarea-info textarea-bordered w-full" placeholder="Add your Summary" {...register("_summary")}>
                </textarea>
            </div>
        </div>
    )
}

const SectionSelector: React.FC<{ register: UseFormRegister<Fields> }> = ({ register }) => {
    return <details className="dropdown dropdown-left dropdown-bottom">
        <summary className="m-1 btn">Add Section</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <ul className="menu bg-base-200 w-56 rounded-box">
                <li>
                    <label className="label cursor-pointer">
                        <span className="label-text">Introduction</span>
                        <input type="checkbox" defaultChecked {...register("sections.introduction")} className="checkbox" />
                    </label>
                </li>
                <li>
                    <label className="label cursor-pointer">
                        <span className="label-text">Summary</span>
                        <input type="checkbox" defaultChecked {...register("sections.summary")} className="checkbox" />
                    </label>
                </li>
            </ul>
        </ul>
    </details>
}


const SimpleResumeForm: React.FC<{ update: () => void }> = ({ update }) => {

    const sectionsDefaultValues = {
        introduction:true,
        summary:true
    };

    const onSubmit: SubmitHandler<Fields> = async (data) => {
        await update_pattern_dict(data);
        update();
    }

    const { register, handleSubmit, control } = useForm<Fields>();

    const sectionStates = useWatch({
        control: control,
        name: "sections",
        defaultValue: sectionsDefaultValues
    });

    return (
        <div className="card card-compact h-full w-1/2 bg-base-100 shadow-xl">
            <div className="card-body h-full">
                <h2 className="card-title">Simple Resume</h2>
                <div className="h-full overflow-y-scroll">
                    <IntroductionSection register={register} isShow = {sectionStates['introduction']}/>
                    <SummarySection register={register} isShow = {sectionStates['summary']}/>
                    <div className="card-actions justify-end p-2">
                        <SectionSelector register={register} />
                        <button className="btn btn-accent" onClick={handleSubmit(onSubmit)}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SimpleResumeForm;