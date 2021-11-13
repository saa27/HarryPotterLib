import { createAppContainer } from 'react-navigation';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element/build/v4'

import LibraryScreen from '../screens/LibraryScreen';
import CharacterDetailsScreen from '../screens/CharacterDetailScreen';

const HarryPotterNavigator = createSharedElementStackNavigator(
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
