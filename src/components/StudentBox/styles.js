import {StyleSheet} from 'react-native';
import { Fonts } from '../../assets/fonts';
// import {Fonts} from '../../../assets/fonts/index';
import {vw, vh} from '../../units/index';
import theme from '../../utils/theme';

export default style = StyleSheet.create({
    
    scroll: {
        flex: 1,
      },
      buttonContainer: {
        width: vw * 80, height: vh * 7,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1.5 * vh
      },
     label:{
        fontSize:1.5*vh,
        color:theme.lightgrey,
        fontFamily:Fonts.Gilroy_Medium
     },
    
      box:{
        width: 80 * vw, borderColor: "#B73EFF",
        borderRadius: 1.5*vh, paddingVertical: 4*vh,
        paddingHorizontal:3*vw,
        borderWidth: 0.5 * vw,
        marginTop:2*vh
      },
      value:{
        fontSize:1.5*vh,
        color:theme.blue,
        fontFamily:Fonts.Gilroy_Bold,
        width:30*vw,
     },
     viewDetails:{
      fontSize:1.5*vh,
      color:'#626262',
      fontFamily:Fonts.Gilroy_Medium
    },
    
      row:{
        width: 30 * vw, 
        alignItems:'center',
        borderColor: "#626262",
        borderRadius: 1.5*vh, paddingVertical: 1* vh,
        borderWidth: 0.5 * vw
      }
});
