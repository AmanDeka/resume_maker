import React from "react";
import { SubmitHandler, useForm ,UseFormRegister} from "react-hook-form";
import { update_pattern_dict,PatternDict } from "@/server/utils";

type Fields = {
    _name:String
    _email:String
}

const IntroductionSection: React.FC<{register:UseFormRegister<Fields>}> = ({register}) => {
    return (
        <div className="collapse collapse-arrow px-3 py-1 my-2 bg-base-200">
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



const SimpleResumeForm: React.FC<{update:()=>void}> = ({update}) => {

    const onSubmit: SubmitHandler<Fields> = async (data) => {
        await update_pattern_dict(data);
        update();     
    }

    const {register,handleSubmit} = useForm<Fields>();

    return (
        <div className="card card-compact h-full w-1/2 bg-base-100 shadow-xl">
            <div className="card-body h-full">
                <h2 className="card-title">Simple Resume</h2>
                <div className="h-full overflow-y-scroll">
                    <IntroductionSection register = {register}/>               
                    <div className="card-actions justify-end p-2">
                        <button className="btn btn-accent" onClick={handleSubmit(onSubmit)}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SimpleResumeForm;