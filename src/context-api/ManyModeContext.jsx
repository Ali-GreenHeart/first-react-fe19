import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


const supportedModes = ['light', 'dark', 'green', 'purple', 'pink', 'gold']
const emojis = ['☃', '🎩', '🎄', '🍇', '🍭', '🥇']
export const ManyModeContext = createContext(supportedModes[0])


const ManyModeContextProvider = ({ children }) => {
    const [index, setIndex] = useState(+localStorage.getItem('many-mode'))

    useEffect(() => {
        localStorage.setItem('many-mode', index)
    }, [index])

    const changeMode = () => {
        setIndex((p) => {
            if (p === supportedModes.length - 1) {
                return 0;
            }
            return ++p
        })
    }
    return (
        <ManyModeContext.Provider value={[emojis[index], changeMode, supportedModes[index]]}>
            <div className={supportedModes[index].concat('ModeContainer').concat(' mode-container')}>
                {children}
            </div>
        </ManyModeContext.Provider>
    )
}
export default ManyModeContextProvider;

