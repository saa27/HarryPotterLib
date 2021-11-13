import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LibraryScreen from '../screens/LibraryScreen';
import CharacterDetailsScreen from '../screens/CharacterDetailScreen';

const HarryPotterNavigator = createStackNavigator(
    {
        Library: LibraryScreen,
        Detail: CharacterDetailsScreen,
    },
    {
        defaultNavigationOptions: {
            headerShown: false,
        },
    }
);

export default createAppContainer(HarryPotterNavigator);
