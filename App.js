import React from 'react';
import { Provider } from 'react-redux'; 
//Dùng chạy 1
//import Contacts from './src/Contacts';
//import Profile from './src/Profile';
//Dùng để chạy 2,3,4
import Store from './store';
//import DrawerNavigator from './2/routes';
//import DrawerNavigator from './3/routes';
import DrawerNavigator from './4/routes';

const App = () =>{
  return(
      //Dùng chạy 1
      //<Contacts/>
      //<Profile/>
      //Dùng để chạy 2,3,4
      <Provider store={Store}>
        <DrawerNavigator/>
      </Provider>
  )
}

export default App;