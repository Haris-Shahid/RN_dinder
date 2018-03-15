import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, AsyncStorage, ActivityIndicator } from 'react-native';
import { Icon } from 'native-base';
import DropDown from './DropDown.js';


class Add extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      qty: '',
      price: '',
      shareholders: [{ part_id: '', qty: '', price: '' }],
      user: '',
      dataSource: [
        {
          id: 1,
          name: 'part1'
        },
        {
          id: 2,
          name: 'part2'
        },
        {
          id: 3,
          name: 'part3'
        },
        {
          id: 4,
          name: 'part4'
        }
      ],
      partID: 0
    };
    this.getPart = this.getPart.bind(this);
    this.handleAddShareholder = this.handleAddShareholder.bind(this);
    this.handleShareholderQtyChange = this.handleShareholderQtyChange.bind(this);
    this.handleShareholderPriceChange = this.handleShareholderPriceChange.bind(this);
    this.handleRemoveShareholder = this.handleRemoveShareholder.bind(this);
    this.handleShareholderNameChange = this.handleShareholderNameChange.bind(this);

  }

  async getPart(partID, idx) {
    await this.setState({
      partID: partID.id,
    });
    const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, part_id: partID.id };
    });

    this.setState({ shareholders: newShareholders });
    
  };

  handleShareholderPartChange = (idx) => (e) => {
    const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, part_id: e };
    });

    this.setState({ shareholders1: newShareholders });
    // console.log(this.state.shareholders)

  }
  handleShareholderNameChange = (idx) => (e) => {
    const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, name: e };
    });

    this.setState({ shareholders: newShareholders });
    // console.log(this.state.shareholders)

  }

  handleShareholderQtyChange(idx, pid, qty) {
    const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, part_id: pid, qty: qty };
    });

    this.setState({ shareholders: newShareholders });
    // console.log(this.state.shareholders)
  }

  handleShareholderPriceChange = (idx) => (e) => {
    const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, price: e };
    });

    this.setState({ shareholders: newShareholders });
  }


  handleAddShareholder() {
    this.setState({ shareholders: this.state.shareholders.concat([{ part_id: '', qty: '', price: '' }]) });
    // console.log(this.state.shareholders)
  }

  handleRemoveShareholder(idx) {
    this.setState({ shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx) });
    // console.log(this.state.shareholders)
  }

  render() {
    if (this.state.loading)
      return <ActivityIndicator size="large" color="#0000ff" />;
    return (
      <View style={{ flexDirection: 'row', backgroundColor: 'red' }}>
        <View style={{ width: '90%' }}>
          {this.state.shareholders.map((shareholder, idx) => {
            return (
              <View key={idx} style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <DropDown dropDownType={this.state.dataSource} getProperty={(V) => this.getPart(V, idx)} type="parts" left={'84%'} name="Select Part" defaultValue={shareholder.part_id} />
                </View>
                <TextInput style={{ flex: 1 }} type="text" placeholder="Quantity" value={shareholder.qty} onChangeText={qty => this.handleShareholderQtyChange(idx, this.state.partID, qty)} />
                <TextInput style={{ flex: 1 }} type="text" placeholder="Price" value={shareholder.price} onChangeText={this.handleShareholderPriceChange(idx)} />
                <TouchableOpacity style={{ justifyContent: 'center', width: '8%', borderWidth: 0, backgroundColor: '#fff', height: 35, marginLeft: 2 }} onPress={() => this.handleRemoveShareholder(idx)}>
                  <Text style={{ alignSelf: 'center' }}>
                    <Icon name="md-remove" style={{ color: '#000' }} /></Text>
                </TouchableOpacity>
              </View>
            )
          }

          )}
        </View>
        <View style={{ width: '10%' }}>
          <TouchableOpacity style={{ justifyContent: 'center', width: '80%', borderWidth: 0, backgroundColor: '#fff', height: 35, marginLeft: 2 }}
            onPress={this.handleAddShareholder}>
            <Text style={{ alignSelf: 'center' }}>
              <Icon name="md-add" style={{ color: '#000' }} /></Text>
          </TouchableOpacity>
        </View>
      </View>

    )
  }
}

export default Add;
