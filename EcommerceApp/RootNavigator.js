import Ionicons from "react-native-vector-icons/Ionicons"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Products from './screens/BottomTabs/Products';
import Cart from './screens/BottomTabs/Cart';
import 'react-native-gesture-handler';
import Home from "./screens/BottomTabs/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Account from './screens/BottomTabs/Account';
import Notifications from './screens/BottomTabs/Notifications';
import WishList from "./screens/BottomTabs/WishList";
import { useFonts } from "expo-font";
import { COLORS, FONTS, SIZES, SHADOWS } from "./constants/theme";
import Details from "./screens/Details";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator({ navigation }) {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: { height: 55, borderTopColor: "gray", paddingBottom: 5 },
                tabBarLabelStyle: { fontSize: SIZES.small, fontFamily: FONTS.medium },
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home-sharp'
                            : 'home-outline';
                    } else if (route.name === 'Notifications') {
                        iconName = focused ? 'notifications-sharp' : 'notifications-outline';
                    }
                    else if (route.name === "Account") {
                        iconName = focused ? 'person-sharp' : 'person-outline'
                    }
                    else if (route.name === "Cart") {
                        iconName = focused ? 'cart' : 'cart-outline'
                    }
                    else if (route.name === "WishList") {
                        iconName = focused ? 'heart' : 'heart-outline'
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.gray,
            })}
            initialRouteName='Home'>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Notifications' component={Notifications} />
            <Tab.Screen name='Account' component={Account} />
            <Tab.Screen name="WishList" component={WishList} />
            <Tab.Screen name='Cart' component={Cart} />
        </Tab.Navigator>
    )
}

export default function RootNavigator() {
    const [loaded] = useFonts({
        InterBold: require("./assets/fonts/Inter-Bold.ttf"),
        InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
        InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
        InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
        InterLight: require("./assets/fonts/Inter-Light.ttf"),
        PoppinsLight: require("./assets/fonts/Poppins-Light.ttf"),
        PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
        PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
        PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
        PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    })

    if (!loaded) return null;
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='TabNavigator'>
                <Stack.Screen name='TabNavigator' component={TabNavigator} />
                <Stack.Screen name="Details" component={Details} />
                <Stack.Screen name="Products" component={Products} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}