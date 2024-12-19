import React from 'react';
import { cva } from 'class-variance-authority';

type ButtonProps = {
    bg: "transparent" | "dark-blue" | "light-blue" | null | undefined;
    text?: "white";
    size?: "sm" | "md" | "lg" | null | undefined;
    type?: "submit" | "reset" | "button" | undefined;
    onClick: ()=>void;
}

const Button = ({ bg, text, size, type, onClick, ...props }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={buttonVariants({ bg, text, size })} {...props} />
  );
};

const buttonVariants = cva("flex items-center justify-center gap-[10px] font-bold text-[17px] py-[10px] cursor-pointer rounded-full", {
    variants : {
        text : {
            white: "text-white"
        },
        // border : {
        //     none : "border-none",
        //     grey : "border-2 border-[color:var(--grey)]",
        //     green : "border-2 border-[color:var(--green)]",
        //     orange : "border-2 border-[color:var(--orange)]",
        // },
        size : {
            sm : "px-[24px]",
            md : "px-[30px]",
            lg : "px-[50px]"
        },
        bg : {
            transparent : "bg-transparent",
            "dark-blue" : "bg-steel-blue",
            "light-blue" : "bg-dusk-blue"
        }
    },
    defaultVariants : {
        text : "white",
        bg : "dark-blue",
        size : "md"
    }
});

export default Button;
