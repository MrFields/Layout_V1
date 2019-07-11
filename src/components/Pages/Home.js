import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import Carousell from '../Carousell/Carousell';

class Home extends Component {
   render() {
      return (
         <Layout>
            <div >
               <Carousell/>
            </div>
         </Layout>
      );
   }
}
export default Home;