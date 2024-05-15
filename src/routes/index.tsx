import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from '../pages/home'
import { Inbox } from '../pages/inbox'
import { New } from '../pages/new'
import { Profile } from '../pages/profile'
import { Search } from '../pages/search'

const Tab = createBottomTabNavigator();

export function Routes () {
    return (
       <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
            />
             <Tab.Screen
                name="Inbox"
                component={Inbox}
            />
            <Tab.Screen
                name="New"
                component={New}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
            />
            <Tab.Screen
                name="Search"
                component={Search}
            />
       </Tab.Navigator> 
    )
}

