import React, { useState } from 'react';
import { View, } from 'react-native';
import styles from './styles';
import { vh, vw } from '../../../units';
import ScrollWrapper from '../../../components/ScrollWrapper';
import GeneralTextInput from '../../../components/TextInputs/GeneralTextInput';
import CommonButton from '../../../components/Button';
import BackgroundBox from '../../../components/BackgroundBox';
import * as Progress from 'react-native-progress';
import TextWrapper from '../../../components/TextWrapper';
import { Fonts } from '../../../assets/fonts';

const ResultScreen = props => {
    return (
        <View style={{ flex: 1 }}>
            <BackgroundBox headerText="Score"
                bgColor
                type="drawer">
            </BackgroundBox>
            <ScrollWrapper avoidKeyboard={true}
            >
                {props.route.params?.type == 'quiz' ? <View>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between', paddingHorizontal: 7 * vw
                    }}>
                        <TextWrapper style={styles.rightLabel}>Right Answer</TextWrapper>
                        <TextWrapper style={styles.rightAnswer}>1</TextWrapper>

                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Progress.Bar progress={1}
                            borderRadius={2 * vh}
                            color='green'
                            width={90 * vw}
                            height={2 * vh} />
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        marginTop: 2 * vh,
                        justifyContent: 'space-between', paddingHorizontal: 7 * vw
                    }}>
                        <TextWrapper style={[styles.rightLabel, { color: 'red' }]}>Wrong Answer</TextWrapper>
                        <TextWrapper style={[styles.rightAnswer, { color: 'red' }]}>1</TextWrapper>

                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Progress.Bar progress={1}
                            color='red'
                            borderRadius={2 * vh}

                            width={90 * vw}
                            height={2 * vh} />
                    </View>

                    <View style={{ alignItems: 'center', marginTop: 4 * vh }}>

                        <TextWrapper style={{ color: 'black' }}>Quiz Score</TextWrapper>
                        <TextWrapper style={{ color: 'black' }}>1/3</TextWrapper>




                    </View>
                </View>
                    : <View style={{ alignItems: 'center', marginTop: 4 * vh }}>

                        <TextWrapper style={[styles.rightLabel, { color: 'red', fontSize: 4 * vh, fontFamily: Fonts.Gilroy_Bold }]}>Fail</TextWrapper>
                    </View>}
                <View style={{ alignItems: 'center' }}>

                    <CommonButton text="Continue"
                        onPress={() => {
                            if(props.route.params.type=='quiz'){
                                props.navigation.navigate("ViewQuizScreen")

                            }
                            else{
                            props.navigation.navigate("TestListScreen")

                            }
                        }
                        }
                        buttonStyle={{ marginTop: 2 * vh }} />
                </View>
            </ScrollWrapper>
        </View>

    );
};
export default ResultScreen;
