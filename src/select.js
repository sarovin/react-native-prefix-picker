import React, {
  Component,
  PropTypes,
} from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
} from 'react-native';

const SELECT = 'SELECT';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 50,
    height: 64,
    borderWidth: 0,
    borderStyle: 'solid',
    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  label: {
    margin: 7,
  },
});

const propTypes = {
  pickerRef: PropTypes.func.isRequired,
  style: View.propTypes.style,
  styleValue: Text.propTypes.style,
  disabled: PropTypes.bool,
  styleLabel: Text.propTypes.style,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
};

class Select extends Component {

  constructor(props) {
    super(props);

    this.pageX = 0;
    this.pageY = 0;
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => { this.props.pickerRef().show(); }}
        disabled={this.props.disabled}
      >
        <View ref={SELECT} style={[styles.container, this.props.style]}>
          {
            this.props.label ?
              <Text style={[styles.label, this.props.styleLabel]}>{this.props.label}</Text> :
              null
          }
          <Text style={[styles.label, this.props.styleValue]}>{this.props.value}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

Select.propTypes = propTypes;

export default Select;
