import {  Control, FieldPath, FieldValues } from "react-hook-form";

export interface FormInputProps<T extends FieldValues> {
    name:FieldPath<T>,
    control:Control<T>,
    label:string,
    placeholder?:string,
    type?:string,
    className?:string,
    error?:{message?:string},
    readOnly?:boolean
}