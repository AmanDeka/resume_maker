import React, { useState } from "react";
import { SubmitHandler, useForm, UseFormRegister, useWatch,Control,UseFormSetValue } from "react-hook-form";
import { update_pattern_dict } from "@/server/utils";

import { DevTool } from "@hookform/devtools";

import { Fields } from "./types";

import IntroductionSection from "./IntroductionSection";
import SummarySection from "./SummarySection";


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
                        <input type="checkbox" defaultChecked {...register("sections.summary")}  className="checkbox" />
                    </label>
                </li>
            </ul>
        </ul>
    </details>
}


const sectionsDefaultValues = {
    introduction:true,
    summary:true
};


const Template1Form: React.FC<{ update: () => void }> = ({ update }) => {
    const onSubmit: SubmitHandler<Fields> = async (data) => {
        await update_pattern_dict(data);
        update();
    }

    const { register, handleSubmit, control,setValue,watch } = useForm<Fields>();

    const sectionStates = useWatch({
        control: control,
        name: "sections",
        defaultValue: sectionsDefaultValues
    });
    const val = watch();
    console.log(val);

    return (
        <div className="card card-compact h-full w-1/2 bg-base-100 shadow-xl">
            <div className="card-body h-full">
                <h2 className="card-title">Simple Resume</h2>
                <div className="h-full overflow-y-scroll">
                    <IntroductionSection register={register} isShow = {sectionStates['introduction']} setValue = {setValue}/>
                    <SummarySection register={register} isShow = {sectionStates['summary']} setValue = {setValue}/>
                    <div className="card-actions justify-end p-2">
                        <SectionSelector register={register} />
                        <button className="btn btn-accent" onClick={handleSubmit(onSubmit)}>Save</button>
                    </div>
                </div>
            </div>
            <DevTool control={control} />
        </div>
    )
}

export default Template1Form;