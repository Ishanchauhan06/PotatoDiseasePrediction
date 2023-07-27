import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import { PrimaryNav, MenuLink, Menu, Hamburger } from '../Header/Navelement'
import cblogo from "../../cblogo.png";
const Navbar = () => {
  return (
    <>
      <PrimaryNav>
      <Avatar src={cblogo}></Avatar>
        <Hamburger />
        <h1>Potato Disease Classifier</h1>
        <Menu>
          <MenuLink to="/" activeStyle>
            Home
          </MenuLink>
          <MenuLink to="/cure" activeStyle>
            Cure of Disease
          </MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default Navbar


/* <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Potato Disease Classification
          </Typography>
          <div className={classes.grow} />
          <Avatar src={cblogo}></Avatar>
        </Toolbar>
      </AppBar> */