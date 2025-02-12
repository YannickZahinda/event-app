import { MouseEventHandler } from "react";

export type ButtonProps = {
    text:string;
    className: string;
    onClick: MouseEventHandler;
}

export interface ProductProps {
    title: string;
    price: number;
    originalPrice: number;
    discount: number;
}