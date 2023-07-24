import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, FlatList, Image } from 'react-native';
import styles from './styles';
import ScrollWrapper from '../../../components/ScrollWrapper';
import BackgroundBox from '../../../components/BackgroundBox';
import { vh, vw } from '../../../units';
import TextWrapper from '../../../components/TextWrapper';
import CommonButton from '../../../components/Button';
import EnterKits from '../../../components/Modal/EnterKits';
import { getChapter, getUnits } from '../../../utils';
import GeneralTextInput from '../../../components/TextInputs/GeneralTextInput';
import theme from '../../../utils/theme';
import QuizBox from '../../../components/QuizBox';
import { icons } from '../../../assets/images';

const TestScreen = props => {

    const [data, setData] = useState([{
        question: "",
        points: "",
        answer: 1
    },
    {
        question: "",
        points: "",
        answer: 1
    }

    ]);


    const renderItem = ({ item, index }) => {
        return (
            <QuizBox item={item}
                onChangeAnswer={(ind) => {
                    console.log("jjj" + ind, index);
                    let items = [...data];
                    let item = {
                        ...items[index],
                        answer: ind
                    }

                    items[index] = item;
                    setData(items);

                }} />

        )
    }

    console.log("data", data.length);

    return (
        <View style={{ flex: 1 }}>
            <BackgroundBox bgColor
                backbutton
                onPress={() => props.navigation.pop()}
                headerText="Test">


            </BackgroundBox>

            <ScrollWrapper avoidKeyboard={true}
                contentContainerStyle={styles.content}>

                <View style={{ paddingHorizontal: 5 * vw }}>
                  <TextWrapper  style={{color:'black'}}>Test Name</TextWrapper>
                </View>


                <View style={{ marginTop: 2 * vh }}>
                    <FlatList data={data}

                        contentContainerStyle={{ alignItems: 'center' }}

                        keyExtractor={item => item}
                        renderItem={renderItem} />
                    
                    <View style={{ alignItems: 'center' }}>
                        <CommonButton text="Next"
                            onPress={() => { props.navigation.navigate("ResultScreen",{
                                type:'test'
                            }) }}
                            colors
                            startColor="#C4A472"
                            endColor="#947037" />
                    </View>


                </View>
            </ScrollWrapper>
        </View>

    );
};
export default TestScreen;
