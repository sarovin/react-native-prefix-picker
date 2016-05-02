
# React Native Prefix Picker [![Build Status](https://img.shields.io/travis/sarovin/react-native-prefix-picker/master.svg?style=flat)](https://travis-ci.org/sarovin/react-native-prefix-picker) [![react-native-prefix-picker](https://img.shields.io/npm/dt/react-native-prefix-picker.svg)](https://www.npmjs.org/package/react-native-prefix-picker) [![Codacy Badge](https://api.codacy.com/project/badge/grade/1116573675bb49339b9fd0ee71bcd665)](https://www.codacy.com/app/sarovin86/react-native-prefix-picker) [![npm version](https://badge.fury.io/js/react-native-prefix-picker.svg)](http://badge.fury.io/js/react-native-prefix-picker)
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
  <img src ="https://raw.githubusercontent.com/sarovin/react-native-prefix-picker/master/picker-1.gif" />
</p>

## Usage
```
import React, {
  Component,
  View,
  Text,
} from 'react-native';
import { Select, Picker } from 'react-native-prefix-picker';

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
        <Select
          ref="SELECT1"
          pickerRef={() => this.refs.picker}
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
          }}
        >
          TEST
        </Text>
        <Picker
          ref={'picker'}
          selectedValue={'IT'}
          onSubmit={(option) => {
            this.setState({
              prefix: option,
            });
          }}
        />
      </View>
    );
  }
}

export default Login;
```

## Configuration
##### Select:
| Property | Type | Default | Description |
|---------------|----------|--------------|----------------------------------------------------------------|
| width | number | 200 | Width of the selection |
| height | number | 40 | Height of the selection |
| pickerRef | function | required | Reference to <Picker /> to display the selection menu |
| selected | string | required | The value to be displayed. |
| style | object | | Custom styles to be applied if supplied |
| styleText | object | | Custom styles to be applied if supplied |
| disabled | bool | false | If true, disable all interactions for this component. |

##### Picker:
| Property | Type | Default | Description |
|---------------|----------|--------------|----------------------------------------------------------------|
| buttonColor | string | #007AFF | Custom styles to be applied if supplied. |
| selectedValue | string | null | The default value. |
| itemStyle | object | | Custom styles to be applied if supplied. |
| onSubmit | function | required | function will be called when item button is pressed |
| transparent | bool | false | Transparent style for Modal |

