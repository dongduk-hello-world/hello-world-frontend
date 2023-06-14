import { createContext } from "react";

export const ContextProvider = ({ children, testIdxData, submitData }) => {
    const [testIdx, setTestIdx] = testIdxData;
    const [submit, setSubmit] = submitData;

    return (
        <TestIdxContext.Provider value={[testIdx, setTestIdx]}>
        <SubmitContext.Provider value={[submit, setSubmit]}>
            {children}
        </SubmitContext.Provider>
        </TestIdxContext.Provider>
    )
};

export const TestIdxContext = createContext(0, () => {});
export const SubmitContext = createContext([], () => {});