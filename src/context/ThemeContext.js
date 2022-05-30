import React, {useState} from 'react';

export const themes = {
    dark: {
        forground: '#242526',
        background: '#fff',
        backgroundNav: '#555'
    },
    light: {
        forground: '#fff',
        background: '#242526',
        backgroundNav: '#242424'
    }, 
};

//tell context what properties to expect 
export const ThemeContext = React.createContext({
    themes: {},
    toggleTheme: () => {}
});


export const ThemeProvider = (props) => {
    //state
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        setTheme((previousThemeValue)=> 
          previousThemeValue === themes.dark ? themes.light : themes.dark
        );
      };

    //JSX
    return (
        <ThemeContext.Provider value={{theme: theme, toggleTheme: toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );

}