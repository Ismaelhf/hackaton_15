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

const Login = ({navigation}) => {
  const [valueMail, onChangeTextMail] = React.useState('');
  const [valuePassword, onChangeTextPassword] = React.useState('');
  const [serviceTourism, setUsers] = useState([]);
  const [error, setError] = useState('');

  const sendPayment = () => {
    // const parameters = {
    //   mail: valueMail,
    //   password: valuePassword,
    // };
    Api.serviceApi
      .getUser()
      .then((data) => {
        if (data.errors) {
          // console.warn('get api order error', data);
          setError(data.errors);
        } else {
          //   setUsers(data);

          for (let index = 0; index < data.length; index++) {
            const item = data[index];
            if (item.mail == valueMail && item.password == valuePassword) {
              navigation.navigate('Home');
              //   console.warn('correcto');
              break;
            }
          }
        }
      })
      .catch((e) => {
        // console.warn('get api order catch', e);
        alert('Datos incorrectos');
        setError(e.errors);
      });
  };

  return (
    <View style={styles.item}>
      <View style={styles.textView}>
        <Text style={styles.textTitle}>Log in your account</Text>
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
          secureTextEntry
        />
      </View>

      <View style={styles.btn}>
        <TouchableOpacity style={styles.btnTouch} onPress={sendPayment}>
          <View>
            <Text style={styles.btnText}>Log in</Text>
          </View>
        </TouchableOpacity>
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

export default Login;
