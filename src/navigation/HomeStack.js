import * as React from 'react';
import {Easing} from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/General/HomeScreen';
import CourseDetailScreen from '../screens/General/CourseDetailScreen';
import InviteStudentScreen from '../screens/General/InviteStudentScreen';
import StudentListScreen from '../screens/General/StudentListScreen';
import StudentDetailScreen from '../screens/General/StudentDetailScreen';
import PackageDetailScreen from '../screens/General/PackageDetailScreen';
import PurchaseOrderScreen from '../screens/General/PurchaseOrderScreen';
import SelectChapterScreen from '../screens/General/SelectChapterScreen';
import CreateQuizScreen from '../screens/General/CreateQuizScreen';
import ViewQuizScreen from '../screens/General/ViewQuizScreen';
import TestScreen from '../screens/General/TestScreen';
import TestListScreen from '../screens/General/TestListScreen';
import ResultScreen from '../screens/General/ResultScreen';


function HomeStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="HomeScreen"
        component={HomeScreen}
      /> 
       <Stack.Screen
        options={{headerShown: false}}
        name="CourseDetailScreen"
        component={CourseDetailScreen}
      /> 
      <Stack.Screen
        options={{headerShown: false}}
        name="InviteStudentScreen"
        component={InviteStudentScreen}
      /> 
       <Stack.Screen
        options={{headerShown: false}}
        name="StudentListScreen"
        component={StudentListScreen}
      /> 
      <Stack.Screen
        options={{headerShown: false}}
        name="StudentDetailScreen"
        component={StudentDetailScreen}
      /> 
       <Stack.Screen
        options={{headerShown: false}}
        name="PackageDetailScreen"
        component={PackageDetailScreen}
      /> 
      <Stack.Screen
        options={{headerShown: false}}
        name="PurchaseOrderScreen"
        component={PurchaseOrderScreen}
      /> 
      <Stack.Screen
        options={{headerShown: false}}
        name="SelectChapterScreen"
        component={SelectChapterScreen}
      /> 
      <Stack.Screen
        options={{headerShown: false}}
        name="CreateQuizScreen"
        component={CreateQuizScreen}
      /> 
       <Stack.Screen
        options={{headerShown: false}}
        name="ViewQuizScreen"
        component={ViewQuizScreen}
      /> 
       <Stack.Screen
      options={{headerShown: false}}
      name="TestListScreen"
      component={TestListScreen}
    /> 

<Stack.Screen
        options={{headerShown: false}}
        name="TestScreen"
        component={TestScreen}
      /> 
      <Stack.Screen
        options={{headerShown: false}}
        name="ResultScreen"
        component={ResultScreen}
      /> 
    </Stack.Navigator>
  );
}

export default HomeStack;
