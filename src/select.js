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
    borderWidth: 0,
    borderStyle: 'solid',
    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
    borderBottomWidth: 1,
  },
});

const propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  pickerRef: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  style: PropTypes.object,
  styleText: PropTypes.object,
  disabled: PropTypes.bool,
};

const defaultProps = {
  width: 200,
  height: 40,
};

class Select extends Component {

  constructor(props) {
    super(props);

    this.pageX = 0;
    this.pageY = 0;

    const selected = props.selected;

    this.state = {
      value: selected,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      value: props.selected,
    });
  }

  render() {
    const { pickerRef, width, height, style, styleText } = this.props;
    const dimensions = { width, height };

    return (
      <TouchableWithoutFeedback
        onPress={() => { pickerRef().show(); }}
        disabled={this.props.disabled}
      >
        <View ref={SELECT} style={[styles.container, style, dimensions]}>
          <Text style={styleText} >{this.state.value}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
