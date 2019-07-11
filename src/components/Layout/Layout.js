import React, { Component, Fragment} from 'react';
import Navegation from './Navegation';
import Footer from './Footer';

class Layout extends Component {
   render() {
      return (
         <Fragment>
            <Navegation/>
               <div className="container">
                  {this.props.children}
               </div>
               <Footer/>
         </Fragment>
      );
   }
}

export default Layout;