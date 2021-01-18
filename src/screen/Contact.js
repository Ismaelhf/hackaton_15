import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

const Contact = () => {
  return (
    <View style={styles.item}>
      <View>
        <Image
          style={styles.ciudad}
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/794753207306166272/TAEMQXGa_400x400.jpg',
          }}
        />
      </View>
      <View style={styles.text}>
        <Text style={styles.desp}>Numero de contacto: 1125482</Text>
        <Text style={styles.desp}>Correo: agencia@gmail.com</Text>
        <Text style={styles.desp}>Dirección: calle 158 cercado de Lima</Text>
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
    textAlign: 'center',
  },
});

export default Contact;
