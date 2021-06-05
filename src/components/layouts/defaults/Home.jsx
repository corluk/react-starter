import React , {useState , useRef} from "react";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem  from '@material-ui/core/MenuItem';
import AppBar from "@material-ui/core/AppBar"
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Hidden from  "@material-ui/core/Hidden"
import Grid from  "@material-ui/core/Grid"
import { makeStyles } from '@material-ui/core/styles';
const WrapperContainer = styled.div`
        display:flex; 
        flex-wrap:wrap;
        color :white;
        background-color: blue;
        justify-content : center;

  `
const Wrapper =styled.div`
    flex-grow: 1;
    display:flex; 
    justify-content: space-evenly; 
`
  const Inner = styled.div`

    flex-grow:0;
  `
  const Inner2 = styled.div`

  flex-grow:2;
`
  const StyledHeader = styled.header`
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        background-color: blue;
        color:white;
    `
    
  const InnerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `

  const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });
export default ()=>{
    const [showSidebar, setShowSidebar] = useState(false);
    const [anchorEl , setAnchorEl] =  useState(null)
 
    const handleClick = (event)=> {
      console.log(anchorEl);
      setAnchorEl(event.currentTarget)
      console.log(anchorEl);
    }
    const handleClose = ()=> setAnchorEl(null); 
    const classes = useStyles()
  return <>
    <AppBar position="static"  color="secondary">
      <Grid xs={6} >  <Typography variant="caption" color="inherit">
                React & Material-UI Sample Application
                </Typography></Grid>
            <Grid xs={6}> 
            <Hidden mdDown={true} implementation="css"> 
    <Button color="primary"   onClick={handleClick}> Menu Should show  </Button>
     
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
     
      getContentAnchorEl={null}
  anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
  transformOrigin={{vertical: 'top', horizontal: 'center'}}
      
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
      <MenuItem onClick={handleClose}>Logout</MenuItem>
    </Menu>
    </Hidden>

            </Grid>
      </AppBar>
               
               
   
          
   
  </>
   
};
