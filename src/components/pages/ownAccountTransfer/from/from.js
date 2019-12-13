import React from 'react'

import { Text, View, ImageBackground, Image, TextInput, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';

import { Col, Row, Grid } from "react-native-easy-grid";
import { styles } from '../ownAccStyle';
import Icon from 'react-native-vector-icons/Ionicons';
const From = (props) => {
    const { render, data } = props
    handleFromTouch = () => {
        props.handleFromTouch();
    }
    if (!props.render) {
        return (
            <Col style={styles.account}>
                <Text style={styles.text}>From:</Text>
                <TouchableOpacity style={styles.iconBut} onPress={() => this.handleFromTouch()}>
                    <Icon name={'ios-cash'} size={70} color={'rgba(255,255,255,0.7)'} />
                </TouchableOpacity>
            </Col>
        )
    }
    return (
        <Col style={styles.account}>
            <Text style={styles.text}>From:</Text>
            <TouchableOpacity style={styles.iconBut} onPress={() => this.handleFromTouch()}>
                <Icon name={'ios-cash'} size={40} color={'rgba(255,255,255,0.7)'} />
                <Text style={styles.text}>{data.acc_type}</Text>
                <Text style={styles.text}>Available Balance</Text>
                <Text style={styles.text}>{data.balance}</Text>
            </TouchableOpacity>
        </Col>
    )
}

export default From;
