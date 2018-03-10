import React, { Component } from 'react';
import { Container, Content, Icon, Button } from 'native-base';
import { inject } from 'mobx-react';
import Match from "../components/match_component";

@inject("stores")
export default class MatchScreen extends Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = ({ navigation }) => ({
        headerRight: <Button transparent onPress={() => navigation.navigate('Post')} >
            <Icon name="camera" style={{ color: '#fff' }} size={28} />
        </Button>
    })

    render() {
        return (
            <Container>
                <Content contentContainerStyle={{ flex: 1 }} scrollEnabled={false} style={{backgroundColor: '#858585'}} >
                    <Match stores={this.props.stores} />
                </Content>
            </Container>
        )
    }
}