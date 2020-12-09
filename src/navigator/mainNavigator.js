import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList183629Navigator from '../features/NotificationList183629/navigator';
import Settings183628Navigator from '../features/Settings183628/navigator';
import Settings183620Navigator from '../features/Settings183620/navigator';
import UserProfile183618Navigator from '../features/UserProfile183618/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList183629: { screen: NotificationList183629Navigator },
Settings183628: { screen: Settings183628Navigator },
Settings183620: { screen: Settings183620Navigator },
UserProfile183618: { screen: UserProfile183618Navigator },

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
