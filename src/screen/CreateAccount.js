import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Api from '../api';

const CreateAccount = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [valueName, onChangeTextName] = React.useState('');
  const [valueMail, onChangeTextMail] = React.useState('');
  const [valuePassword, onChangeTextPassword] = React.useState('');
  const [valuePhone, onChangeTextPhone] = React.useState('');

  const sendPayment = () => {
    const parameters = {
      name: valueName,
      mail: valueMail,
      password: valuePassword,
      phone: valuePhone,
    };
    if (
      valueName != '' ||
      valueMail != '' ||
      valuePassword != '' ||
      valuePhone != ''
    ) {
      Api.serviceApi
        .createAccount(parameters)
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
    } else {
      alert('llene todos los campos');
    }
  };

  return (
    <View style={styles.item}>
      <View style={styles.textView}>
        <Text style={styles.textTitle}>Create your Account</Text>
      </View>

      <View style={styles.contentText}>
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          keyboardType="default"
          onChangeText={(text) => onChangeTextName(text)}
          value={valueName}
        />
      </View>
      <View style={styles.contentText}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={(text) => onChangeTextMail(text)}
          value={valueMail}
        />
      </View>
      <View style={styles.contentText}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          keyboardType="password"
          onChangeText={(text) => onChangeTextPassword(text)}
          value={valuePassword}
        />
      </View>
      <View style={styles.contentText}>
        <TextInput
          style={styles.inputText}
          placeholder="Phone"
          keyboardType="numeric"
          onChangeText={(text) => onChangeTextPhone(text)}
          value={valuePhone}
        />
      </View>

      <View style={styles.btn}>
        <TouchableOpacity style={styles.btnTouch} onPress={sendPayment}>
          <View>
            <Text style={styles.btnText}>Log in</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.textView}>
        <Text style={styles.textDeps}>
          By Clicking Sign up you to the our Terms and conditions
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  imgView: {
    marginVertical: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    width: 300,
    height: 300,
  },
  textView: {
    marginVertical: 15,
    marginHorizontal: '20%',
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 10,
    color: '#CE6B6C',
  },
  textDeps: {
    textAlign: 'center',
    color: '#B8B8B8',
    marginBottom: 15,
  },
  ///////////
  btn: {
    marginTop: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  btnTouch: {
    backgroundColor: '#F15B5D',
    width: '80%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',
  },

  contentText: {
    marginHorizontal: '10%',
    // borderColor: '#000',
    borderRadius: 22,
    // borderWidth: 1,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
});

export default CreateAccount;
