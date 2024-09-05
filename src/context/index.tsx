"use client";
import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
} from "react";

interface AppcontextProps {
    lang: "ENGLISH" | "BANGLA" | null;
    setLang: Dispatch<SetStateAction<"ENGLISH" | "BANGLA" | null>>;
}

const globalContext = createContext<AppcontextProps>({
    lang: null,
    setLang: () => null,
});

export function AppWrapper({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<"ENGLISH" | "BANGLA" | null>(null);
    return (
        <globalContext.Provider value={{ lang, setLang }}>
            {children}
        </globalContext.Provider>
    );
}

export const useAppContext = () => useContext(globalContext);
