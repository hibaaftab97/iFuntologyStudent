import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import ScrollWrapper from '../../../components/ScrollWrapper';
import allImages, { generalImages, icons } from '../../../assets/images';
import BackgroundBox from '../../../components/BackgroundBox';
import theme from '../../../utils/theme';
import { vh, vw } from '../../../units';
import CommonButton from '../../../components/Button';
import StudentBox from '../../../components/StudentBox';
import CircleArrowBox from '../../../components/CircleArrowBox';
import TextWrapper from '../../../components/TextWrapper';

const TestListScreen = props => {

    const data = [{
        name: "Chrisitian Marker",
        email: "christiamarker@gmail.com",
        course: "Barbertology"
    },
    {
        name: "Chrisitian Marker",
        email: "christiamarker@gmail.com",
        course: "Barbertology"
    },]

    const footer = () => {
        return (
            <View style={{
                width: 60 * vw,
                marginTop: 4 * vh,
                flexDirection: 'row', justifyContent: 'space-evenly'
            }}>
                <TextWrapper style={styles.headerText}>Chapter</TextWrapper>
                <TextWrapper style={styles.headerText}>Chapter</TextWrapper>




            </View>
        )
    }
    return (
        <View style={{ flex: 1 }}>

            <BackgroundBox bgColor
                backbutton
                onPress={() => props.navigation.pop()}
                headerText="View Test">




            </BackgroundBox>
            <ScrollWrapper avoidKeyboard={true}
            >
                <View style={{}}>
                    <FlatList data={data}
                        style={{}}
                        contentContainerStyle={{ alignItems: 'center', }}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={styles.customeStyle}
                                onPress={()=>  props.navigation.navigate("TestScreen")}>
                                    <View style={{ flexDirection: "row" }}>
                                        <TextWrapper style={styles.headerText}>Unit:</TextWrapper>
                                        <TextWrapper style={styles.value}>abc</TextWrapper>


                                    </View>

                                    <View style={{ flexDirection: "row" }}>
                                        <TextWrapper style={styles.headerText}>Chapter:</TextWrapper>
                                        <TextWrapper style={styles.value}>abc</TextWrapper>


                                    </View>
                                    <View style={{ flexDirection: "row" ,justifyContent:'space-between'}}>
                                        <View  style={{ flexDirection: "row" }} >
                                            <TextWrapper style={styles.headerText}>Created Date:</TextWrapper>
                                            <TextWrapper style={styles.value}>abc</TextWrapper>
                                        </View>

                                        

                                    </View>
                                </TouchableOpacity>
                            )
                        }} />



                </View>

            </ScrollWrapper>
        </View>

    );
};
export default TestListScreen;
