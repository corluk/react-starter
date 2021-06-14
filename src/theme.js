import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";
// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: blue,
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },

  layout: {
      grid: {
        container: {
            display: "grid",
            gridTemplateRows: "auto auto auto",
            padding: "10px",
        }
      }
  }
});

export default theme;
