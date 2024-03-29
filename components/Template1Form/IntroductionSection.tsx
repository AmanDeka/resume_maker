import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm, UseFormRegister, useWatch, Control, UseFormSetValue } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Fields } from "./types";

const IntroductionSection: React.FC<{
    register: UseFormRegister<Fields>,
    isShow: boolean,
    setValue: UseFormSetValue<Fields>
}> =
    ({ register, isShow, setValue }) => {

        useEffect(() => {
            //register('introduction');
            setValue('introduction',
            `\\introduction[
                fullname={_name},
                email={_email},
                phone={_phone},
                linkedin={_linkedin},
                github={_github}
        ]`
            );
        },[]);

        return (
            <div className={cn("collapse collapse-arrow px-3 py-1 my-2 bg-base-200", (isShow) ? "" : "hidden")}>
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    Introduction
                </div>
                <div className="collapse-content flex flex-col gap-y-3">
                    <label className="input input-bordered input-info flex items-center gap-2">
                        Name
                        <input type="text" className="grow" {...register("tokens._name")} placeholder="" />
                    </label>

                    <div className="flex gap-2">
                        <label className="input input-bordered input-info flex items-center gap-2">
                            Email
                            <input type="text" className="grow" {...register("tokens._email")} placeholder="" />
                        </label>

                        <label className="input input-bordered input-info flex items-center gap-2">
                            Phone
                            <input type="text" className="grow" {...register("tokens._phone")} placeholder="" />
                        </label>
                    </div>

                    <label className="input input-bordered flex input-info items-center gap-2">
                        Linkedin
                        <input type="text" className="grow" {...register("tokens._linkedin")} placeholder="" />
                    </label>

                    <label className="input input-bordered flex input-info items-center gap-2">
                        Github
                        <input type="text" className="grow" {...register("tokens._github")} placeholder="" />
                    </label>
                </div>
            </div>
        )
    }

export default IntroductionSection;