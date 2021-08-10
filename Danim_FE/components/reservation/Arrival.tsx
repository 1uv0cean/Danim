import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

class ArrivalPicker extends Component {
  styles = StyleSheet.create({
    stopPicker: {
      width: '80%',
      marginLeft: 20,
      marginBottom: 20,
    },
    stopText: {
      fontSize: 18,
    },
  });

  state = {
    stop: '정류장을 선택해주세요.',
  };

  render() {
    return (
      <View>
        <Picker
          style={this.styles.stopPicker}
          selectedValue={this.state.stop}
          onValueChange={(val, idx) => this.setState({stop: val})}>
          <Picker.Item
            style={this.styles.stopText}
            label="정류장을 선택해주세요."
            value="arrival"
          />
          <Picker.Item label="문래동시점" value="문래동시점" />
          <Picker.Item label="두산위브진주아파트" value="두산위브진주아파트" />
          <Picker.Item label="문래롯데캐슬" value="문래롯데캐슬" />
          <Picker.Item label="문래중학교" value="문래중학교" />
          <Picker.Item label="영문초등학교" value="영문초등학교" />
          <Picker.Item
            label="문래힐스테이트아파트"
            value="문래힐스테이트아파트"
          />
          <Picker.Item label="문래역" value="문래역" />
          <Picker.Item label="당산동진로아파트" value="당산동진로아파트" />
          <Picker.Item label="김안과병원" value="김안과병원" />
          <Picker.Item label="영등포시장" value="영등포시장" />
          <Picker.Item
            label="영등포시장로터리방면"
            value="영등포시장로터리방면"
          />
          <Picker.Item label="신길역" value="신길역" />
          <Picker.Item label="신길역1호선" value="신길역1호선" />
        </Picker>
      </View>
    );
  }
}
export default ArrivalPicker;
