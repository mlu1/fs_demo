import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <header className = "header">
      <div className = "container-filled">
        <div className= "row"> 
            <div className='col-xs-3 col-lg-2'> 
              <div className="header__logo">
                <font>estore</font>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="input-group">
                <div className = "input-group-prepend">
                    <select className ="form-control btn btn-success dropdown-toggle">
                      <option>ALL</option>
                      <option>MEN</option>
                      <option>Woman</option>
                      <option>Kids</option>
                    </select>
                </div>  
                <input type="text" className="form-control"/> 
                <div className="input-group-append">
                    <button className="btn btn-success"> 
                      <i className="fa fa-search"></i>
                    </button>
                </div>
              </div>
              <div className="col-xl-6 col -lg-7">
                  <div className="header__right">
                    <div className="auth">
                      <a href="a">Sign in</a>
                      <a href="a">Sign Up</a>
                    </div>
                    <div>
                      <ul className ="widget"> 
                        <li><i className="fa fa-heart"></i></li>
                        <li><i className="fa fa-shopping-cart"></i></li>
                      </ul>
                    </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </header>
  );
}

export default App;
