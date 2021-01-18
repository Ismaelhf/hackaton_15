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

const Reservation = ({route, navigation}) => {
  const item = route.params.item.item;
  console.warn(item);
  return (
    <>
      <TouchableOpacity
        style={styles.btnReservation}
        onPress={() => navigation.navigate('Reservation', {item: {item}})}>
        <View>
          <Text style={styles.btnText}>Reserva</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  btnReservation: {
    backgroundColor: '#007ACC',
    width: 100,
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
});
export default Reservation;
