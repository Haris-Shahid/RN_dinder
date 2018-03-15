import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';

import { Picker, Item, Icon } from 'native-base';

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: Number(this.props.value),
            type: this.props.type

        }
        this.emit(this.state.value);
        this.GetPickerSelectedItemValue = this.GetPickerSelectedItemValue.bind(this)
    }

    componentWillMount() {
        if (this.props.name && Platform.OS === 'android') {
            if (this.props.dropDownType[0]) {
                if (this.props.dropDownType[0].name === 'Select Part') {
                    return this.props.dropDownType
                }
                else {
                    this.props.dropDownType.unshift({
                        id: 0,
                        name: this.props.name,
                        full_name: this.props.name,
                        item: this.props.name

                    })
                }
            }
            else {
                this.props.dropDownType.unshift({
                    id: 0,
                    name: this.props.name,
                    full_name: this.props.name,
                    item: this.props.name

                })
            }

        }
    }

    GetPickerSelectedItemValue(itemvalue) {
        const id = parseInt(itemvalue)
        this.setState({ value: itemvalue });
        this.emit(id)
    }

    emit(id) {
        if (this.props.getProperty) {
            this.props.getProperty(this.getLanguage(id))
        }
    }

    render() {
        return (
            <View>
                <Picker
                    placeholder={this.props.name}
                    mode="dropdown"
                    headerStyle={{ backgroundColor: "#16334c" }}
                    headerBackButtonTextStyle={{ color: "#fff", marginLeft: -20 }}
                    headerTitleStyle={{ color: '#fff', alignSelf: 'center', marginLeft: 50, width: '100%' }}
                    textStyle={{ color: '#fff', fontSize: 12, paddingLeft: 8 }}
                    style={{ height: 35, color: '#fff', width: '110%' }}
                    selectedValue={
                        this.props.defaultValue === '' ?
                            null
                            :
                            this.props.defaultValue
                    }
                    onValueChange={this.GetPickerSelectedItemValue}
                >

                    {this.state.type === 'user' ?
                        this.props.dropDownType.map((item, i) => {
                            return <Item label={item.full_name} value={item.id} key={item.id} />
                        }) :
                        this.state.type === 'location' ?
                            this.props.dropDownType.map((item, i) => {
                                return <Item label={item.name} value={item.id} key={item.id} />
                            }) :
                            this.state.type === 'meter' ?
                                this.props.dropDownType.map((item, i) => {
                                    return <Item label={item.item} value={item.id} key={item.id} />
                                }) :
                                this.state.type === 'inventory' ?
                                    this.props.dropDownType.map((item, i) => {
                                        return <Item label={item.name} value={item.id} key={item.id} />
                                    }) :
                                    this.props.dropDownType.map((item, i) => {
                                        return <Item label={item.name} value={item.id} key={item.id} />
                                    })}

                </Picker>
                <Icon onPress={this.GetPickerSelectedItemValue} name="md-arrow-dropdown" style={{
                    color: '#fff', fontSize: 20,
                    position: 'absolute',
                    left: this.props.left,
                    paddingTop: 7,
                    top: 0,
                    height: 35,
                    borderLeftColor: '#fff',
                    borderStyle: 'dashed',
                    paddingLeft: 5,
                    borderLeftWidth: 0.4
                }} />
            </View>

        );

    }
    getLanguage(id) {
        return this.props.dropDownType.filter(lang => lang.id === id)[0];
    }
}

const styles = {
    inputDiv: {
        borderStyle: 'dashed',
        borderWidth: 1,
        borderRadius: 0,
        borderColor: '#fff',
        marginBottom: 8,
        height: 35,
        width: '100%',
        marginLeft: 2

    },
    input: {
        color: '#fff',
        fontSize: 12
    },
};

export default DropDown;
