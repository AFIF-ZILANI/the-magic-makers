"use client";
import { useState } from "react";
import { useAppContext } from "@/context";

export function ToggoleLang() {
    const { lang, setLang } = useAppContext();
    function onClick() {
        if (lang === "ENGLISH") {
            setLang("BANGLA");
        } else {
            setLang("ENGLISH");
        }
    }
    return (
        <div className="w-7 border-2 flex justify-center items-center rounded-sm">
            <span className="hover:cursor-pointer" onClick={onClick}>
                {lang === "ENGLISH" ? "En" : "Bn"}
            </span>
        </div>
    );
}
