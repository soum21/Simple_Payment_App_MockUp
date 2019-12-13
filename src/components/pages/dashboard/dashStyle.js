import { StyleSheet, Dimensions } from "react-native";
const { width: WIDTH } = Dimensions.get('window');

export const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,

    },
    row25:{
        marginTop:10,
        justifyContent:'center',
        alignItems:'center',
    },
    row50:{
        
    },
    row14:{
        justifyContent:'center',
        alignItems:'center'
    },
    dashButton:{
        width: 150, 
        height: 150, 
        backgroundColor: 'transparent',
        justifyContent:'center',
        alignItems:'center',
        borderWidth: 1,
        borderColor: '#ffffff',
 
    },
    textInfo1:{
       color:'yellow',
        fontSize:40,
        fontWeight:'400',
        textAlign:'center'    
    },
    textInfo:{
        color: 'rgba(255,255,255,0.7)',
        fontSize:23,
        textAlign:'center',
        fontWeight:'400',
    }
});
