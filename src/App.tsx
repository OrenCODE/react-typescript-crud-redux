import React, { Fragment, useEffect } from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';

import SearchBar from './components/layout/searchBar.component';
import Logs from './components/logs/logs.component';
import AddButton from './components/layout/addButton.component';
import AddLogModal from './components/logs/addLogModal.component';
import EditLogModal from './components/logs/editLogModal.component';
import AddTechModal from './components/techs/addTechModal.component';
import TechListModal from './components/techs/techListModal.component';

export default function App() {

  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddButton />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
}
