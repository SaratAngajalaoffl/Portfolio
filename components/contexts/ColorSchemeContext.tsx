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
        setColorScheme(
            localStorage.getItem("color-scheme") === "light" ? "light" : "dark"
        );
    }, []);

    useEffect(() => {
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

    const changeColorScheme = (color: "light" | "dark") => {
        if (typeof localStorage === undefined) return;

        localStorage.setItem("color-scheme", color);
        setColorScheme(color);
    };

    const isDarkMode = useCallback(
        (): boolean => colorScheme === "dark",
        [colorScheme]
    );

    return (
        <colorSchemeContext.Provider
            value={{
                currentColorScheme: colorScheme,
                setColorScheme: changeColorScheme,
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
