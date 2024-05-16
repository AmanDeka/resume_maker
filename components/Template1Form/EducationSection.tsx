import React, { useState, useEffect } from "react";
import { UseFormRegister, useWatch, Control, UseFormSetValue, useFieldArray,UseFormGetValues } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Fields, EducationItem } from "./types";

const EducationItemForm: React.FC<{ index: number, register: UseFormRegister<Fields> ,deleteEducationItem:(index:number)=>void}> = ({ index, register ,deleteEducationItem}) => {
    return (
        <div className="card w-11/12 bg-neutral text-neutral-content">
            <div className="card-body">
                <label className="input input-bordered input-info flex items-center gap-2">
                    University
                    <input type="text" className="grow" {...register(`education_items.${index}.university`)} placeholder="" />
                </label>
                <label className="input input-bordered input-info flex items-center gap-2">
                    College
                    <input type="text" className="grow" {...register(`education_items.${index}.college`)} placeholder="" />
                </label>
                <div className="grid grid-cols-2 gap-2">
                    <label className="input input-bordered input-info flex items-center gap-2">
                        Graduation
                        <input type="text" className="grow" {...register(`education_items.${index}.graduation`)} placeholder="" />
                    </label>

                    <label className="input input-bordered input-info flex items-center gap-2">
                        Grade
                        <input type="text" className="grow" {...register(`education_items.${index}.grade`)} placeholder="" />
                    </label>
                </div>
                <label className="input input-bordered input-info flex items-center gap-2">
                    Program
                    <input type="text" className="grow" {...register(`education_items.${index}.program`)} placeholder="" />
                </label>
                <label className="input input-bordered input-info flex items-center gap-2">
                    Coursework
                    <input type="text" className="grow" {...register(`education_items.${index}.coursework`)} placeholder="" />
                </label>
                <div className="card-actions justify-end my-2">
                    <button className="btn btn-primary" onClick={()=>deleteEducationItem(index)}>Delete Item</button>
                </div>
            </div>
        </div>
    );
}

const makeEducationItem = (index:number):string => {
    return `\\educationItem[
        university={_education_${index}_university},
        college={_education_${index}_college},
        graduation={_education_${index}_graduation},
        grade={_education_${index}_grade},
        program={_education_${index}_program},
        coursework={_education_${index}_coursework},
]`
}

const makeEducationTex = (n:number):string => {
    console.log(n);
    let ret:string = '\\begin{educationSection}{Education}';
    for(let i = 0;i<n;i++){
        ret+='\n'+'\n'+makeEducationItem(i);
    }
    ret+='\n'+'\\end{educationSection}';
    console.log(ret);
    return ret;
}


const EducationSection: React.FC<{
    register: UseFormRegister<Fields>,
    isShow: boolean,
    setValue: UseFormSetValue<Fields>,
    control: Control<Fields, any>
    getValue:UseFormGetValues<Fields>
}> = ({ register, isShow, setValue, control ,getValue}) => {

    const { fields, append,remove } = useFieldArray({
        name: 'education_items',
        control
    });

    const addEmptyEducationItem = () => {
        const n = getValue('education_items').length
        setValue('education',makeEducationTex(n+1));
        const empty_ed_item: EducationItem = {
            university: '',
            college: '',
            graduation: '',
            grade: '',
            program: '',
            coursework: ''
        }
        append(empty_ed_item);
        
    }

    const deleteEducationItem = (index:number) => {
        remove(index);
        setValue('education',makeEducationTex(fields.length));
    }


    return (
        <div className={cn("collapse collapse-arrow px-3 py-1 my-2 bg-base-200", (isShow) ? "" : "hidden")}>
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
                Education Details
            </div>
            <div className="collapse-content">
                {
                    fields.map((field, index) => {
                        return <EducationItemForm key={field.id} index={index} register={register} deleteEducationItem = {deleteEducationItem}/>
                    })
                }
                <button className="btn btn-accent" onClick={addEmptyEducationItem}>Add Item</button>
            </div>
        </div>
    )
}

export default EducationSection;