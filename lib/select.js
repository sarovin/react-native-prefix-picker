import React, {
  Dimensions,
  StyleSheet,
  Component,
  TouchableWithoutFeedback,
  View,
  Text
} from 'react-native'

const window = Dimensions.get('window')

const SELECT = 'SELECT'

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    borderStyle: 'solid',
    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
    borderBottomWidth: 1,
  }
})

class Select extends Component {

  constructor(props) {
    super(props);

    this.pageX = 0;
    this.pageY = 0;

    let selected = props.selected;

    this.state = {
      value: selected
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      value: props.selected
    });
  }

  _onPress(){
    const { optionListRef } = this.props;

    optionListRef().show()
  }

  render() {
    const { width, height, defaultValue, style, styleOption, styleText } = this.props;
    const dimensions = { width, height };

    return (
      <TouchableWithoutFeedback onPress={this._onPress.bind(this)}>
        <View ref={SELECT} style={[styles.container, style, dimensions ]}>
          <Text style={styleText} >{this.state.value}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

Select.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  optionListRef: React.PropTypes.func.isRequired,
}

Select.defaultProps = {
  width: 200,
  height: 40,
}

export default Select
