import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import Carousell from '../Carousell/Carousell';
import Esfera1 from '../Esfera/Esfera1';

class Home extends Component {
   render() {
      return (
         <Layout>
            <div >
               <Carousell/>
               <Esfera1/>
            </div>
         </Layout>
      );
   }
}
export default Home;