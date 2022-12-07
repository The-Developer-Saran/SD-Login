
import React from 'react';
import Login from './Screens/loginScreen';
import Second from './Screens/second';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

function App(){

  return(
    <>
    <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="login" component={Login} options={{headerTitle: 'Reg', headerShown: false}}/>
                <Stack.Screen name="Sec" component={Second} options={{headerTitle: 'Home', headerShown: true}}/>
            </Stack.Navigator>
        </NavigationContainer>
    
    </>
  );
}
export default App;
