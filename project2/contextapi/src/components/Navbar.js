import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

class Navbar extends React.Component {
  render() {
    return (
      <AuthContext.Consumer>{(authContext)=>{
        return(
          <ThemeContext.Consumer>
          {(themecontext) => {
              const { isDarkTheme, darkTheme, lightTheme } = themecontext;
              const {isLoggedIn,changeAuthStatus} = authContext;
              const theme = isDarkTheme ? darkTheme : lightTheme;
              console.log(theme.background)
            return (
              <nav
                  style={{
                    background: theme.background,
                    color: theme.text,
                    height: "120px",
                  }}
                >
                <h2 style={{ textAlign: "center" }}>CubePilot Academy</h2>
                <p onClick={changeAuthStatus} style = {{textAlign:'center'}}>{isLoggedIn?'logged in':'not logged in'}</p>
                <div className="ui three buttons">
                  <button className="ui button">Overview</button>
                  <button className="ui button">Contact</button>
                  <button className="ui button">Support</button>
                </div>
              </nav>
            );
          }}
          </ThemeContext.Consumer>
          )
        }}
      </AuthContext.Consumer>
      
    );
  }
}

export default Navbar;
