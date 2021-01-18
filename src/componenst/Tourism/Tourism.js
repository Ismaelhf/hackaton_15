import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Tourism = ({data, navigation}) => {
  return (
    <>
      {data.map((item) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Tourism', {
              item: {item},
              navigation: {navigation},
            })
          }>
          <View>
            <Text>{item.title}</Text>
            <Image
              style={styles.ciudad}
              source={{
                uri: item.image,
              }}
            />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
});
export default Tourism;
