import React, { useState, useEffect } from "react";
import { UseFormRegister, useWatch, Control, UseFormSetValue, useFieldArray, UseFormGetValues } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Fields, ExperienceItem } from "./types";

const ExperienceItemForm: React.FC<{ index: number, register: UseFormRegister<Fields>, deleteExpItem: (index: number) => void }> = ({ index, register, deleteExpItem }) => {
    return (
        <div className="card w-11/12 bg-neutral text-neutral-content">
            <div className="card-body">
                <label className="input input-bordered input-info flex items-center gap-2">
                    Company
                    <input type="text" className="grow" {...register(`experience_items.${index}.company`)} placeholder="" />
                </label>

                <label className="input input-bordered input-info flex items-center gap-2">
                    Location
                    <input type="text" className="grow" {...register(`experience_items.${index}.location`)} placeholder="" />
                </label>

                <label className="input input-bordered input-info flex items-center gap-2">
                    Position
                    <input type="text" className="grow" {...register(`experience_items.${index}.position`)} placeholder="" />
                </label>

                <label className="input input-bordered input-info flex items-center gap-2">
                    Duration
                    <input type="text" className="grow" {...register(`experience_items.${index}.duration`)} placeholder="" />
                </label>

                <label className="input input-bordered input-info flex items-center gap-2">
                    Description
                    <textarea className="textarea textarea-bordered" {...register(`experience_items.${index}.description`)} placeholder="Description"></textarea>
                </label>

                <div className="card-actions justify-end my-2">
                    <button className="btn btn-primary" onClick={() => deleteExpItem(index)}>Delete Item</button>
                </div>
            </div>
        </div>
    );
}


const ExperienceSection: React.FC<{
    register: UseFormRegister<Fields>,
    isShow: boolean,
    setValue: UseFormSetValue<Fields>,
    control: Control<Fields, any>
    getValue: UseFormGetValues<Fields>
}> = ({ register, isShow, setValue, control, getValue }) => {

    const { fields, append, remove } = useFieldArray({
        name: 'experience_items',
        control
    });

    const addEmptyExpItem = () => {
        const empty_exp_item: ExperienceItem = {
            company: "",
            location: "",
            position: "",
            duration: "",
            description: ""

        }
        append(empty_exp_item);

    }

    const deleteExpItem = (index: number) => {
        remove(index);
    }


    return (
        <div className={cn("collapse collapse-arrow px-3 py-1 my-2 bg-base-200", (isShow) ? "" : "hidden")}>
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
                Technical Experience
            </div>
            <div className="collapse-content">
                {
                    fields.map((field, index) => {
                        return <ExperienceItemForm key={field.id} index={index} register={register} deleteExpItem={deleteExpItem} />
                    })
                }
                <button className="btn btn-accent" onClick={addEmptyExpItem}>Add Skill</button>
            </div>
        </div>
    )
}

export default ExperienceSection;