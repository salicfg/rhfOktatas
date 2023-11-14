import {ButtonHTMLAttributes, ReactElement} from "react";

export type OwnButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactElement | string | string[]
}