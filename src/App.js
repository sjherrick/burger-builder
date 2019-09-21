import React from 'react';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
    </div>
  );
}

// class App extends React.Component {
//   state = {
//     show: true
//   };

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({show:false});
//     }, 5000);
//   }
  
//   render() {
//     return (
//       <div>
//         <Layout>
//           {this.state.show ? <BurgerBuilder /> : null}
//         </Layout>
//       </div>
//     )
//   }
// }

export default App;
