import React, { useState,useEffect } from "react";
import { SubmitHandler, useForm, UseFormRegister, useWatch, Control, UseFormSetValue } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Fields } from "./types";

const SummarySection: React.FC<{
    register: UseFormRegister<Fields>,
    isShow: boolean,
    setValue: UseFormSetValue<Fields>
}> = ({ register, isShow, setValue }) => {
    /*
    useEffect(() => {
        //register('summary');
        setValue('summary',`\\summary{_summary}`);
    }, []);*/

    return (
        <div className={cn("collapse collapse-arrow px-3 py-1 my-2 bg-base-200", (isShow) ? "" : "hidden")}>
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
                Summary
            </div>
            <div className="collapse-content">
                <textarea className="textarea textarea-info textarea-bordered w-full" placeholder="Add your Summary" {...register("tokens._summary")}>
                </textarea>
            </div>
        </div>
    )
}

export default SummarySection;