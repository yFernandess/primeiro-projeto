import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import About from './screens/About';
import Produtos from './screens/Produtos';
import Estoque from './screens/Estoque';
import Cart from './screens/Cart';
import Cep from './screens/Cep';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='HomeScreen'>
    //     <Stack.Screen name='HomeScreen' component={Home} options={{ title: 'Home Page' }} />
    //     <Stack.Screen name='AboutScreen' component={About} options={{ title: 'About Page' }} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='HomeScreen' component={Home} options={{ title: "Home" }} />
        <Tab.Screen name='ProdutosScreen' component={Produtos} options={{ title: "Produtos" }} />
        <Tab.Screen name='EstoqueScreen' component={Estoque} options={{ title: "Estoque" }} />
        <Tab.Screen name='CartScreen' component={Cart} options={{ title: "Cart" }} />
        <Tab.Screen name='AboutScreen' component={About} options={{ title: "About" }} />
        <Tab.Screen name='CepScreen' component={Cep} options={{ title: "Cep" }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}