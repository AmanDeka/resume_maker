

import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const UserForm : React.FC = () => {
    return (
        <div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">Name</Label><br/>
                <Input id="name" placeholder="Name" />
            </div>
        </div>
    )
}

export default UserForm;