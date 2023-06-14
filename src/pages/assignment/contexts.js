import { createContext } from "react";

export const ContextProvider = ({ children, testIdxData, testNavData, submitData }) => {
    const [testIdx, setTestIdx] = testIdxData;
    const [testNav, setTestNav] = testNavData;
    const [submit, setSubmit] = submitData;

    return (
        <TestIdxContext.Provider value={[testIdx, setTestIdx]}>
        <TestNavContext.Provider value={[testNav, setTestNav]}>
        <SubmitContext.Provider value={[submit, setSubmit]}>
            {children}
        </SubmitContext.Provider>
        </TestNavContext.Provider>
        </TestIdxContext.Provider>
    )
};

export const TestIdxContext = createContext(0, () => {});
export const SubmitContext = createContext([], () => {});
export const TestNavContext = createContext([], () => {});