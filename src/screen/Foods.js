import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

const Foods = ({route, navigation}) => {
  const item = route.params.item.item;
  // console.warn(item.title);
  return (
    <View style={styles.item}>
      <View>
        <Image
          style={styles.ciudad}
          source={{
            uri: item.image,
          }}
        />
      </View>

      <View style={styles.text}>
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.desp}>{item.description}</Text>
      </View>
      <View style={styles.btnReserve}>
        <TouchableOpacity
          style={styles.btnReservation}
          onPress={() => navigation.navigate('Reservation', {item: {item}})}>
          <View>
            <Text style={styles.btnText}>Reserva</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
  },
  ciudad: {
    width: '100%',
    height: 300,
  },

  text: {
    marginHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  desp: {
    textAlign: 'justify',
  },
  ///////////
  btnReserve: {
    marginTop: 15,
    alignItems: 'center',
  },
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

export default Foods;
