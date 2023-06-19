import { createContext } from "react";

export const ContextProvider = ({ children, formData }) => {
    const [data, setData] = formData;

    return (
        <FormDataContext.Provider value={[data, setData]}>
            {children}
        </FormDataContext.Provider>
    )
};

export const FormDataContext = createContext({}, () => {});