import { StyleSheet, Dimensions } from "react-native";
const { width: WIDTH } = Dimensions.get('window');

export const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null
    },
    row40:{
        justifyContent:'space-around'
        // borderWidth: 1,
        // borderColor: '#000000',
    },
    row10:{
        // justifyContent:'center',
        // alignItems:'center'
    },
    row50:{
      justifyContent:'center',
        alignItems:'center'  
    },
    account:{
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    iconBut:{
        width: 170, 
        height: 200, 
        backgroundColor: 'transparent',
        justifyContent:'center',
        alignItems:'center',
        borderWidth: 1,
        borderColor: '#ffffff',
    },
    text:{
        color:'rgba(255,255,255,0.7)',
        fontSize:20,
        textAlign:'center'
    },
    
    btnLogin:{
        width:WIDTH-55,
        height:45,
        borderRadius:25,
        borderRadius:15,
        backgroundColor:'#432577',
        justifyContent:'center',
        marginTop:20,
        
    },
    inputView: {
       
    },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 15,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0,0,0,0.35)',
        color: 'rgba(255,255,255,0.7)',
        marginHorizontal: 25,
        // marginTop:5,
        // marginBottom:5
    },
    btnEye:{
        position:'absolute',
        top:15,
        right:37
    },
    
    btnPro:{
        width:155,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'green',
        paddingLeft:5,
        borderRadius:10,
    },
    btnCan:{
        width:155,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'grey',
        paddingRight:5, 
        borderRadius:10,
    }

});
