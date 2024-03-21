import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const IntroductionSection: React.FC = () => {
    return (
        <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
                Introduction
            </div>
            <div className="collapse-content flex flex-col gap-y-3">
                <label className="input input-bordered flex items-center gap-2">
                    Name
                    <input type="text" className="grow" placeholder="" />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                    Email
                    <input type="text" className="grow" placeholder="" />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                    Phone
                    <input type="text" className="grow" placeholder="" />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                    Linkedin
                    <input type="text" className="grow" placeholder="" />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                    Github
                    <input type="text" className="grow" placeholder="" />
                </label>
            </div>
        </div>
    )
}

const UserForm: React.FC = () => {

    return (
        <div className="card card-compact w-1/2 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Simple Resume</h2>
                <IntroductionSection/>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default UserForm;