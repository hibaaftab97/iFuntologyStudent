import * as React from 'react';
import {Easing} from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import SubscriptionPlanScreen from '../screens/Auth/SubscriptionPlan';
import LoginScreen from '../screens/Auth/LoginScreen';
import ForgotPasswordScreen from '../screens/Auth/ForgotPasswordScreen';
import TermsConditionScreen from '../screens/Auth/TermsConditionScreen';


function AuthStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
       <Stack.Screen
        options={{headerShown: false}}
        name="LoginScreen"
        component={LoginScreen}
      /> 
     
       <Stack.Screen
        options={{headerShown: false}}
        name="SubscriptionPlanScreen"
        component={SubscriptionPlanScreen}
      /> 
       
      <Stack.Screen
        options={{headerShown: false}}
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      /> 
       <Stack.Screen
        options={{headerShown: false}}
        name="TermsConditionScreen"
        component={TermsConditionScreen}
      /> 
    </Stack.Navigator>
  );
}

export default AuthStack;
