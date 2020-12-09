import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings183770Navigator from '../features/Settings183770/navigator';
import Settings183762Navigator from '../features/Settings183762/navigator';
import UserProfile183760Navigator from '../features/UserProfile183760/navigator';
import UserProfile183729Navigator from '../features/UserProfile183729/navigator';
import Tutorial183728Navigator from '../features/Tutorial183728/navigator';
import NotificationList183700Navigator from '../features/NotificationList183700/navigator';
import Settings183699Navigator from '../features/Settings183699/navigator';
import Settings183691Navigator from '../features/Settings183691/navigator';
import UserProfile183689Navigator from '../features/UserProfile183689/navigator';
import UserProfile183658Navigator from '../features/UserProfile183658/navigator';
import Tutorial183657Navigator from '../features/Tutorial183657/navigator';
import NotificationList183629Navigator from '../features/NotificationList183629/navigator';
import Settings183628Navigator from '../features/Settings183628/navigator';
import Settings183620Navigator from '../features/Settings183620/navigator';
import UserProfile183618Navigator from '../features/UserProfile183618/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings183770: { screen: Settings183770Navigator },
Settings183762: { screen: Settings183762Navigator },
UserProfile183760: { screen: UserProfile183760Navigator },
UserProfile183729: { screen: UserProfile183729Navigator },
Tutorial183728: { screen: Tutorial183728Navigator },
NotificationList183700: { screen: NotificationList183700Navigator },
Settings183699: { screen: Settings183699Navigator },
Settings183691: { screen: Settings183691Navigator },
UserProfile183689: { screen: UserProfile183689Navigator },
UserProfile183658: { screen: UserProfile183658Navigator },
Tutorial183657: { screen: Tutorial183657Navigator },
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
