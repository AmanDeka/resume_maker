import React, { useState, useEffect } from "react";
import { UseFormRegister, useWatch, Control, UseFormSetValue, useFieldArray, UseFormGetValues } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Fields, ProjectItem } from "./types";

const ProjectItemForm: React.FC<{ index: number, register: UseFormRegister<Fields>, deleteProjectItem: (index: number) => void }> = ({ index, register, deleteProjectItem }) => {
    return (
        <div className="card w-11/12 bg-neutral text-neutral-content">
            <div className="card-body">
                <label className="input input-bordered input-info flex items-center gap-2">
                    Title
                    <input type="text" className="grow" {...register(`project_items.${index}.title`)} placeholder="" />
                </label>

                <label className="input input-bordered input-info flex items-center gap-2">
                    Duration
                    <input type="text" className="grow" {...register(`project_items.${index}.duration`)} placeholder="" />
                </label>

                <label className="input input-bordered input-info flex items-center gap-2">
                    Key Highlight
                    <input type="text" className="grow" {...register(`project_items.${index}.keyHighlight`)} placeholder="" />
                </label>

                <label className="input input-bordered input-info flex items-center gap-2">
                    Description
                    <textarea className="textarea textarea-bordered" {...register(`project_items.${index}.description`)} placeholder="Description"></textarea>
                </label>

                <div className="card-actions justify-end my-2">
                    <button className="btn btn-primary" onClick={() => deleteProjectItem(index)}>Delete Item</button>
                </div>
            </div>
        </div>
    );
}


const ProjectSection: React.FC<{
    register: UseFormRegister<Fields>,
    isShow: boolean,
    setValue: UseFormSetValue<Fields>,
    control: Control<Fields, any>
    getValue: UseFormGetValues<Fields>
}> = ({ register, isShow, setValue, control, getValue }) => {

    const { fields, append, remove } = useFieldArray({
        name: 'project_items',
        control
    });

    const addEmptyProjectItem = () => {
        const empty_proj_item: ProjectItem = {
            title: "",
            keyHighlight: "",
            duration: "",
            description: ""

        }
        append(empty_proj_item);

    }

    const deleteProjectItem = (index: number) => {
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
                        return <ProjectItemForm key={field.id} index={index} register={register} deleteProjectItem={deleteProjectItem} />
                    })
                }
                <button className="btn btn-accent" onClick={addEmptyProjectItem}>Add Skill</button>
            </div>
        </div>
    )
}

export default ProjectSection;