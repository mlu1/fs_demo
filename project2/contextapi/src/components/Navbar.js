import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class Navbar extends React.Component {
  static contextType = ThemeContext;
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
            const { isDarkTheme, darkTheme, lightTheme } = context;
            const theme = isDarkTheme ? darkTheme : lightTheme;
          return (
            <nav
              style={{
                background: theme.background,
                color: theme.text,
                height: "120px",
              }}
            >
              <h2 style={{ textAlign: "center" }}>CubePilot Academy</h2>
              <div className="ui three b">
                <button className="ui button">Overview</button>
                <button className="ui button">Contact</button>
                <button className="ui button">Support</button>
              </div>
            </nav>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;
