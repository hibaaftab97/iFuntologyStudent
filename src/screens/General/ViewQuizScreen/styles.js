import { StyleSheet } from 'react-native';
import { Fonts } from '../../../assets/fonts';
import { vh, vw } from '../../../units/index';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({


  content: {
    // alignItems:'center'
    // justifyContent:'flex-end'
  },
  headerText:{
    fontSize:2*vh,
    color:theme.primary
  },
  value:{
    fontSize:2*vh,
    color:theme.black,
    marginLeft:2*vw
  },
  customeStyle:{
    width:90*vw,
    backgroundColor:'white',
    paddingVertical:2*vh,
    paddingHorizontal:2*vw,
    marginBottom:vh,
    marginTop:2*vh,
    elevation:vh,
    borderRadius:1.5*vh,
    justifyContent:'center'
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
export default styles;
