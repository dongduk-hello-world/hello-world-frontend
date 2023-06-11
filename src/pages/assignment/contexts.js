import { createContext } from "react";

export const ContextProvider = ({ children, testIdxData }) => {
    const [testIdx, setTestIdx] = testIdxData;

    return (
        <TestIdxContext.Provider value={[testIdx, setTestIdx]}>
            {children}
        </TestIdxContext.Provider>
    )
};

export const TestIdxContext = createContext(0, () => {});