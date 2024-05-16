import React, { useState, useEffect } from "react";
import { UseFormRegister, useWatch, Control, UseFormSetValue, useFieldArray,UseFormGetValues } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Fields, SkillItem } from "./types";

const SkillItemForm: React.FC<{ index: number, register: UseFormRegister<Fields> ,deleteSkillItem:(index:number)=>void}> = ({ index, register ,deleteSkillItem}) => {
    return (
        <div className="card w-11/12 bg-neutral text-neutral-content">
            <div className="card-body">
                <label className="input input-bordered input-info flex items-center gap-2">
                    Category
                    <input type="text" className="grow" {...register(`skill_items.${index}.category`)} placeholder="" />
                </label>

                <label className="input input-bordered input-info flex items-center gap-2">
                    Skills
                    <input type="text" className="grow" {...register(`skill_items.${index}.skills`)} placeholder="" />
                </label>

                <div className="card-actions justify-end my-2">
                    <button className="btn btn-primary" onClick={()=>deleteSkillItem(index)}>Delete Skill</button>
                </div>
            </div>
        </div>
    );
}

const makeSkillItem = (index:number):string => {
    return `    \\skillItem[
        category={_skill_${index}_category},
        skills={_skill_${index}_skills},
    ] \\\\`
}

const makeSkillTex = (n:number):string => {
    let ret:string = '\\begin{skillsSection}{Technical Skills}';
    for(let i = 0;i<n;i++){
        ret+='\n'+makeSkillItem(i);
    }
    ret+='\n'+'\\end{skillsSection}';
    return ret;
}


const SkillSection: React.FC<{
    register: UseFormRegister<Fields>,
    isShow: boolean,
    setValue: UseFormSetValue<Fields>,
    control: Control<Fields, any>
    getValue:UseFormGetValues<Fields>
}> = ({ register, isShow, setValue, control ,getValue}) => {

    const { fields, append,remove } = useFieldArray({
        name: 'skill_items',
        control
    });

    const addEmptySkillItem = () => {
        const n = getValue('skill_items').length
        setValue('technical_skills',makeSkillTex(n+1));
        const empty_skill_item: SkillItem = {
            category: '',
            skills: '',
        }
        append(empty_skill_item);
        
    }

    const deleteSkillItem = (index:number) => {
        remove(index);
        setValue('technical_skills',makeSkillTex(fields.length));
    }


    return (
        <div className={cn("collapse collapse-arrow px-3 py-1 my-2 bg-base-200", (isShow) ? "" : "hidden")}>
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
                Technical Skills
            </div>
            <div className="collapse-content">
                {
                    fields.map((field, index) => {
                        return <SkillItemForm key={field.id} index={index} register={register} deleteSkillItem = {deleteSkillItem}/>
                    })
                }
                <button className="btn btn-accent" onClick={addEmptySkillItem}>Add Skill</button>
            </div>
        </div>
    )
}

export default SkillSection;