import React, { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import Post from "./Post";

export default class Feed extends Component {
  render() {
    const fotos = [
      { id: 1, usuario: "rafael" },
      { id: 2, usuario: "alberto" },
      { id: 3, usuario: "vitor" }
    ];
    return (
      <FlatList
        style={styles.container}
        keyExtractor={item => item.id + ""}
        data={fotos}
        renderItem={({ item }) => <Post foto={item} />}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
});
