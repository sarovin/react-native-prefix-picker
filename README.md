# React Native Prefix Picker
A simple iOS and Android picker for React Native

## Introduction
React Native Prefix Picker is simple, customizable and easy to use Picker in React Native. Works with both Android and IOS.

## Installation
```
npm i react-native-prefix-picker --save
```

## Usage

```
import React, {
  Component,
  View,
  Text,
} from 'react-native';
import { Select, Picker } from 'react-native-prefix-picker';

const options = ['39', '1', '2', '3'];

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      prefix: options[0],
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          marginTop: 80,
          padding: 20,
        }}>
        <Select
          ref="SELECT1"
          optionListRef={() => this.refs.picker}
          width={60}
          height={45}
          style={{
            marginRight: 10,
            padding: 6,
          }}
          styleText={{
            color: '#333333',
            fontSize: 20,
            fontFamily: 'Avenir-Roman',
          }}
          selected={this.state.prefix}
        />
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
            color: '#f87f1d',
          }}>
          TEST
        </Text>
        <Picker
          ref={'picker'}
          options={options}
          onSubmit={(option) => {
            this.setState({
              prefix: option,
            });
          }}/>
      </View>
    );
  }
}

export default Login;
```

## Demo
<p align="center">
  <img src ="https://raw.githubusercontent.com/sarovin/react-native-prefix-picker/master/picker.gif" />
</p>

- Inspired by https://github.com/alinz/react-native-dropdown and https://github.com/puredazzle/react-native-simple-picker
