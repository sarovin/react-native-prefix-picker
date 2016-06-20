
# React Native Prefix Picker [![Build Status](https://img.shields.io/circleci/project/sarovin/react-native-prefix-picker/master.svg?style=flat)]() [![react-native-prefix-picker](https://img.shields.io/npm/dt/react-native-prefix-picker.svg?style=flat)](https://www.npmjs.org/package/react-native-prefix-picker) [![Codacy Badge](https://img.shields.io/codacy/1116573675bb49339b9fd0ee71bcd665/master.svg?style=flat)](https://www.codacy.com/app/sarovin86/react-native-prefix-picker) [![npm version](https://img.shields.io/npm/v/react-native-prefix-picker.svg?style=flat)](https://www.npmjs.com/package/react-native-prefix-picker) [![Gitter](https://badges.gitter.im/sarovin/react-native-prefix-picker.svg)](https://gitter.im/sarovin/react-native-prefix-picker?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
A simple iOS and Android picker for React Native

## Introduction
React Native Prefix Picker is simple, customizable and easy to use Picker in React Native. Works with both Android and IOS.

## NEW VERSION
Now the prefixs are preloaded

## Installation
```
npm i react-native-prefix-picker --save
```

## Demo
<p align="center">
  <img src ="https://raw.githubusercontent.com/sarovin/react-native-prefix-picker/master/picker.gif" />
</p>

## Usage
```
import React, {
  Component,
  View,
  Text,
} from 'react-native';
import { Select} from 'react-native-prefix-picker';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      prefix: '',
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
        }}
      >
        <Picker
          style={{
            width: 80,
            height: 64,
            marginRight: 8,
          }}
          styleLabel={{
            fontSize: 14,
          }}
          styleValue={{
            fontSize: 14,
          }}
          transparent
          onSubmit={(option) => {
            this.setState({
              prefix: option,
            });
          }}
        />
        <Text
          style={{
            fontSize: 40,
            textAlign: 'center',
            margin: 10,
            color: '#f87f1d',
          }}
        >
          TEST
        </Text>
      </View>
    );
  }
}

export default Login;
```

## Configuration

##### Picker:
| Property | Type | Default | Description |
|---------------|----------|--------------|----------------------------------------------------------------|
| style | object | | Custom styles to be applied if supplied |
| styleLabel | object | | Custom styles to be applied if supplied |
| styleValue | object | | Custom styles to be applied if supplied |
| itemStyle | object | | Custom styles to be applied if supplied. |
| buttonColor | string | #007AFF | Custom styles to be applied if supplied. |
| disabled | bool | false | If true, disable all interactions for this component. |
| selectedValue | string | null | The default value. |
| onSubmit | function | required | function will be called when item button is pressed |
| transparent | bool | false | Transparent style for Modal |
