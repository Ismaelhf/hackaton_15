import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import CustomModal from '../componenst/core/Modal';
import Api from '../api';

const Reservation = ({navigation, route}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [valueName, onChangeTextName] = React.useState('');
  const [valueMail, onChangeTextMail] = React.useState('');
  const [valueAmount, onChangeTextAmount] = React.useState('');

  const item = route.params.item.item;
  //   console.warn(route);

  const sendPayment = () => {
    const parameters = {
      title: item.title,
      description: item.description,
      image: item.image,
      id: item.id,
      typeService: item.typeService,
      name: valueName,
      mail: valueMail,
      amount: valueAmount,
    };
    Api.serviceApi
      .createReservation(parameters)
      .then((data) => {
        if (data.errors) {
          setErrorMessage(data.errors);
          setIsVisible(true);
        } else {
          console.warn('Create success service');
          navigation.navigate('Home');
          //   console.warn('Payment Api');
        }
      })
      .catch((e) => {
        setErrorMessage(e.errors);
        setIsVisible(true);
      });
  };

  return (
    <>
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
          <Text style={styles.desp}>Tipo de Servicio: {item.typeService}</Text>
          <Text style={styles.desp}>Titulo: {item.title}</Text>
          <View style={styles.contentText}>
            <Text style={styles.desp}>Nombre: </Text>
            <TextInput
              style={styles.inputText}
              keyboardType="default"
              onChangeText={(text) => onChangeTextName(text)}
              value={valueName}
            />
          </View>
          <View style={styles.contentText}>
            <Text style={styles.desp}>Correo: </Text>
            <TextInput
              style={styles.inputText}
              keyboardType="email-address"
              onChangeText={(text) => onChangeTextMail(text)}
              value={valueMail}
            />
          </View>
          <View style={styles.contentText}>
            <Text style={styles.desp}>Cantidad: </Text>
            <TextInput
              style={styles.inputText}
              keyboardType="numeric"
              onChangeText={(text) => onChangeTextAmount(text)}
              value={valueAmount}
            />
          </View>
        </View>
        <View style={styles.btnReserve}>
          <TouchableOpacity style={styles.btnReservation} onPress={sendPayment}>
            <View>
              <Text style={styles.btnText}>Guardar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
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
  inputText: {
    height: 20,
    width: 150,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 2,
    justifyContent: 'center',
  },
  contentText: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Reservation;
