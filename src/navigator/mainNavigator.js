import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings167630Navigator from '../features/Settings167630/navigator';
import Settings167558Navigator from '../features/Settings167558/navigator';
import BlankScreen0167555Navigator from '../features/BlankScreen0167555/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings167630: { screen: Settings167630Navigator },
Settings167558: { screen: Settings167558Navigator },
BlankScreen0167555: { screen: BlankScreen0167555Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
