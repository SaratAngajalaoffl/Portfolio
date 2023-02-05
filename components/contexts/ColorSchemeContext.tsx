import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";

type IColorSchemeContext = {
    currentColorScheme: "light" | "dark";
    setColorScheme: (color: "light" | "dark") => void;
    isDarkMode: () => boolean;
};

type ProviderProps = {
    children: JSX.Element;
};

const colorSchemeContext = createContext<IColorSchemeContext>({
    currentColorScheme: "dark",
    setColorScheme: () => {},
    isDarkMode: () => true,
});

const ColorSchemeProvider: React.FunctionComponent<ProviderProps> = ({
    children,
}) => {
    const [colorScheme, setColorScheme] = useState<"dark" | "light">("dark");

    useEffect(() => {
        localStorage?.setItem("color-scheme", colorScheme);

        const bodyElement = document.querySelector("body");

        if (!bodyElement) return;

        if (colorScheme === "dark") {
            bodyElement.classList.remove("light");
            bodyElement.classList.add("dark");
        } else if (colorScheme === "light") {
            bodyElement.classList.remove("dark");
            bodyElement.classList.add("light");
        }
    }, [colorScheme]);

    const isDarkMode = useCallback(
        (): boolean => colorScheme === "dark",
        [colorScheme]
    );

    return (
        <colorSchemeContext.Provider
            value={{
                currentColorScheme: colorScheme,
                setColorScheme,
                isDarkMode,
            }}
        >
            {children}
        </colorSchemeContext.Provider>
    );
};

export const useColorScheme = () => {
    const data = useContext(colorSchemeContext);

    return data;
};

export default ColorSchemeProvider;
