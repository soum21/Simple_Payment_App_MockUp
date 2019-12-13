import React from 'react'

import { Text, View, ImageBackground, Image, TextInput, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';

import { Col, Row, Grid } from "react-native-easy-grid";
import { styles } from '../ownAccStyle';
import Icon from 'react-native-vector-icons/Ionicons';
const Mymodal = (props) => {
    const { data, show } = props
    executeChange = () => {
        props.executeChange()
    }
    handlePickerSelect = (account, key) => {
        props.handlePickerSelect(account, key)
    }
    return (
        <Modal transparent={true} visible={show} onRequestClose={() => console.log("close")} >
            <View
                style={{
                    margin: 20, padding: 20,
                    backgroundColor: '#efefef',
                    bottom: 20,
                    left: 20,
                    right: 20,
                    position: 'absolute'

                }}>
                <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => this.executeChange()}>
                    <Icon name={'ios-close'} size={26} color={'#000000'}
                    />
                </TouchableOpacity>
                <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Select Account Type</Text>
                {
                    data.map((account, key) => {
                        return (
                            <TouchableOpacity style={{ paddingTop: 4, paddingBottom: 4 }} key={key} onPress={() => this.handlePickerSelect(account, key)}>
                                <Text>{account.acc_type}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </Modal>
    )
}

export default Mymodal;
