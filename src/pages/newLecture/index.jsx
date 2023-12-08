import styles from "./style.module.scss";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from "components/header.jsx"
import Stepper from "./stepper.jsx"
import Form from "./form.jsx"

export default () => {
  const theme = createTheme({
    palette: {
      themeColor: {
        main: '#5E99F1',
        light: '#C4DAFC',
        dark: '#3874CB',
        contrastText: '#000000',
      },
    },
  });

  return (
    <div>
      <Header />
      <ThemeProvider theme={theme}>
        <div>
          {/* <Stepper /> */}
          <Form />
        </div>
        
      </ThemeProvider>
    </div>
  );
};
