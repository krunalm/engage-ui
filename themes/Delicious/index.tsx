import * as React from 'react';
import { ThemeProvider } from 'react-css-themr';

const contextTheme = {
  PLabel: require('./Label.scss'),
  PLabelled: require('./Labelled.scss'),
  PTextField: require('./TextField.scss'),
};

export default (props: any) => {
    return (
        <ThemeProvider theme={contextTheme}>
            {props.children}
        </ThemeProvider>
    )
}