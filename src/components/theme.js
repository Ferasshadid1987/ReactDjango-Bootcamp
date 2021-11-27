import { lightBlue, purple } from "@mui/material/colors";
import {createTheme} from "@mui/material/styles"

const theme = createTheme({
    palette: {
      primary: purple,
      secondary:lightBlue
     
    },
    colors: {
        bgColor:"#3e3e3e",
        bgLightColor:"#888",
        bgLighterColor: '#DADADA',
        mainAccentColor:"#fecc01"
    }
  });

  export default theme