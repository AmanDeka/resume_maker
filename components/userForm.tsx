import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const IntroductionSection: React.FC = () => {
    return (
        <div className="collapse collapse-arrow px-3 py-1 my-2 bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
                Introduction
            </div>
            <div className="collapse-content flex flex-col gap-y-3">
                <label className="input input-bordered input-info flex items-center gap-2">
                    Name
                    <input type="text" className="grow" placeholder="" />
                </label>

                <div className="flex gap-2">
                    <label className="input input-bordered input-info flex items-center gap-2">
                        Email
                        <input type="text" className="grow" placeholder="" />
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

const UserForm: React.FC = () => {

    return (
        <div className="card card-compact h-full w-1/2 bg-base-100 shadow-xl">
            <div className="card-body h-full">
                <h2 className="card-title">Simple Resume</h2>
                <div className="h-full overflow-y-scroll">
                    <IntroductionSection />               
                    <div className="card-actions justify-end p-2">
                        <button className="btn btn-accent">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserForm;