import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  font-family: "Arial";
  font-weight: 400;
  letter-spacing: 2px;
  text-align: center;
  flex: 1;
`;

const Content = styled.Text`
  font-size: 16px;
  font-family: "Arial";
  flex: 2;
`;

const Item = styled.View`
  flex: 1;
  border: 1px solid #ccc;
  margin: 2px 0;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
  background-color: #fff;
  width: 80%;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

export default class App extends Component {
  render() {
    return (
      <Container>
        <View style={styles.whiteSpace}></View>
        <Item>
          <Title>Monster Hunter: World Iceborne</Title>
          <Content>
            Addictive in the best way. The game is amazing, and multiplayer
            could be smoother to get together. However, so long as it is not a
            main story mission, things are easy to join.
          </Content>
        </Item>
        <View style={styles.whiteSpace}></View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  whiteSpace: {
    flex: 1,
    backgroundColor: "white"
  }
});
