import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import TextWrapper from '../TextWrapper';
import styles from './styles';
import { vh, vw } from '../../units';
import theme from '../../utils/theme';
import GeneralTextInput from '../TextInputs/GeneralTextInput';
import { icons } from '../../assets/images';


const QuizBox = props => {

    

    return (
        <View style={styles.customStyle}>
            <TextWrapper  style={{color:'black'}}>Question</TextWrapper>

               
            {Array.apply(0, new Array(4)).map((item, index) => {
                return (
                    <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:2*vh }} >
                        <TouchableOpacity
                            onPress={()=>props.onChangeAnswer(index+1)}>
                            <View style={styles.outer}>
                               {props.item.answer===index+1?<View style={styles.inner}>

                                </View>:null}
                            </View>
                        </TouchableOpacity>

                            <TextWrapper style={styles.text}>Option {index+1}</TextWrapper>



                    </View>
                );
            })}
        </View>
    );
};

export default QuizBox;
