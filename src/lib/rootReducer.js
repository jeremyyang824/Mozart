'use strict';

import { combineReducers } from 'redux';

//import reducers
import home from '../containers/HomeRedux';
import mainMenu from '../containers/MainMenuRedux';

const rootReducer = combineReducers({
  home,
  //mainMenu
});

export default rootReducer;