// // // import React from 'react';
// // import {Text, View, StyleSheet} from 'react-native';

// // const styles = StyleSheet.create({
// //   center: {
// //     alignItems: 'center',
// //   },
// // });

// // // type GreetingProps = {
// // //   name: string;
// // // };

// // const Greeting = (props) => {
// //   return (
// //     <View style={styles.center}>
// //       <Text>Hello {props.name}!</Text>
// //     </View>
// //   );
// // };

// // const LotsOfGreetings = () => {
// //   return (
// //     <View style={[styles.center, {top: 50}]}>
// //       <Greeting name="Rexxar" />
// //       <Greeting name="Jaina" />
// //       <Greeting name="Valeera" />
// //     </View>
// //   );
// // };

// // export default LotsOfGreetings;
// import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
// import { useState, React } from "react";



// const app = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <View style={{paddingTop:50}}>
//       <Text style={styles.container} >you clicked {count} many times</Text>
//       <Button onPress={() => setCount(count + 1)} title="click me" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     textAlign: "center",
//     textShadowColor:'yellow'
//   },
// });
// export default app;
import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

class App extends Component {
  state = {
    count: 0,
  };

  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text>Click me</Text>
        </TouchableOpacity>
        <View>
          <Text>You clicked {this.state.count} times</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginBottom: 10,
  },
});

export default App;
