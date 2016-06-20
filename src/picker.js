import React, {
  Component,
  PropTypes,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  Picker,
  Dimensions,
} from 'react-native';
import countries from './prefix';

const PickerItem = Picker.Item;

const SCREEN_WIDTH = Dimensions.get('window').width;

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
  basicContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  modalContainer: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    backgroundColor: '#F5FCFF',
  },

  buttonView: {
    width: SCREEN_WIDTH,
    padding: 8,
    borderTopWidth: 0.5,
    borderTopColor: 'lightgrey',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  bottomPicker: {
    width: SCREEN_WIDTH,
  },
});

const propTypes = {
  buttonColor: PropTypes.string,
  itemStyle: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  selectedValue: PropTypes.string,
  transparent: PropTypes.bool,
  style: View.propTypes.style,
  styleValue: Text.propTypes.style,
  disabled: PropTypes.bool,
  styleLabel: Text.propTypes.style,
};

const defaultProps = {
  buttonColor: '#007AFF',
  transparent: true,
  selectedValue: 'IT',
};

class CustomPicker extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      label: this.props.selectedValue,
      prefix: '',
    };

    this.onPressSubmit = this.onPressSubmit.bind(this);
  }

  componentDidMount() {
    this.setPrefix();
  }

  onPressSubmit() {
    this.setPrefix();

    this.setState({
      modalVisible: false,
    });
  }

  setPrefix() {
    countries.map(
      (country) => {
        if (country.iso2.toUpperCase() === this.state.label) {
          return this.setState({
            prefix: country.dialCode,
          });
        }
        return null;
      }
    );
  }


  renderItem(country) {
    const label = country.name;
    const value = country.iso2.toUpperCase();

    return (
      <PickerItem
        key={value}
        label={label}
        value={value}
      />
    );
  }

  render() {
    const modalBackground = {
      backgroundColor: this.props.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff'
    };
    return (
      <View>
        <TouchableWithoutFeedback
          onPress={() => {
            this.setState({
              modalVisible: true,
            });
          }}
          disabled={this.props.disabled}
        >
          <View ref={'SELECT'} style={[styles.container, this.props.style]}>
            <Text style={[styles.label, this.props.styleLabel]}>{this.state.label}</Text>
            <Text style={[styles.label, this.props.styleValue]}>{this.state.prefix}</Text>
          </View>
        </TouchableWithoutFeedback>
        <Modal
          animationType={'fade'}
          transparent={this.props.transparent}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({
              modalVisible: false,
            });
          }}
        >
          <View style={[styles.basicContainer, modalBackground]}>
            <View style={styles.modalContainer}>
              <View style={styles.buttonView}>
                <TouchableOpacity onPress={this.onPressCancel}>
                  <Text style={{ color: this.props.buttonColor }}>
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onPressSubmit}>
                  <Text style={{ color: this.props.buttonColor }}>
                    Done
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.mainBox}>
                <Picker
                  style={styles.bottomPicker}
                  selectedValue={this.state.label}
                  onValueChange={(value) => this.setState({ label: value })}
                  itemStyle={this.props.itemStyle}
                  mode={'dialog'}
                >
                  {countries.map(
                    country => this.renderItem(country)
                  )}
                </Picker>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

CustomPicker.propTypes = propTypes;
CustomPicker.defaultProps = defaultProps;

export default CustomPicker;
