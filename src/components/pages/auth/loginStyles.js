import { StyleSheet, Dimensions } from "react-native";
const { width: WIDTH } = Dimensions.get('window');

export const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 100
    },
    logo: {
        width: 120,
        height: 120,
        borderRadius: 20
    },
    logoText: {
        color: 'white',
        fontSize: 30,
        fontWeight: '500',
        marginTop: 10,
        opacity: 1,
    },
    inputView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10
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
        marginTop:5,
        marginBottom:5
    },
    btnEye:{
        position:'absolute',
        top:15,
        right:37
    },
    btnLogin:{
        width:WIDTH-55,
        height:45,
        borderRadius:25,
        borderRadius:15,
        backgroundColor:'#432577',
        justifyContent:'center',
        marginTop:20
    },
    text:{
        color:'rgba(255,255,255,0.7)',
        fontSize:15,
        textAlign:'center'
    }

});
