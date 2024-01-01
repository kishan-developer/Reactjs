import React, { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

// react context api

const ThemeContext = createContext(false);
// console.log(ThemeProvider)

const ThemeProvider = ({children}) => {

    const [toggle, setToggle] = useState(false);

   
    const toggleFunction = () => {
        setToggle(!toggle);
    }

    // console.log(ThemeContext);
    // console.log(ThemeProvider)
    return (
        <div>
            {/* what is the prop called for provider usinig value= {prop} */}

            {/* how we can  pass the toggle and toggleFunction as the data inside the value as a obj */}

            {/* after set the value u can see it javascript cotext api is ready again with the proper setup as a bigger application with it own  seperate javascript file */}
            
            <ThemeContext.Provider  value={{toggle, toggleFunction}}>
                {/* i don't know where is pass the children  */}
                {children}
            </ThemeContext.Provider>
        </div>
    );
}


// here  storing a reference 
export const useThemeContextValue = () => useContext(ThemeContext);


// const a = () => useContext(ThemeContext);
// console.log(a);


export default ThemeProvider;

//how cannect the app component 
// 1 go to the main.jsx file 
// wrap app component usign ThemeProvider

{/* <ThemeProvider>
    <App/>
</ThemeProvider> */}