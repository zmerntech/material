import {
  Button,
  Box
} from "@mui/material";

import {
  red,
  cyan,
  deepOrange,
  lightGreen,
  indigo
} from "@mui/material/colors";

import {
  createTheme,
  ThemeProvider
} from "@mui/material/styles";

import 'material-icons/iconfont/material-icons.css';

const App = ()=>{
  const theme = createTheme({
    palette: {
      primary: {
        main: cyan['A400']
      },
      secondary: red,
      warning: {
        main: deepOrange['A400']
      },
      error: {
        main: red[200]
      },
      success: {
        main: lightGreen['A400']
      }
    }
  })

  return (
    <>
      <ThemeProvider theme={theme}>

        <Button 
          variant="contained" 
          size="large" 
          sx={{
            backgroundColor: "secondary.light"
          }}
        >Button</Button>

        <Box sx={{width: 400, height: 200, bgcolor: "success.main"}}></Box>
      </ThemeProvider>
      
      
    </>
  );
}
export default App;