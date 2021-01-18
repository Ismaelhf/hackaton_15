import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const Initial = ({navigation}) => {
  return (
    <View style={styles.item}>
      <View style={styles.imgView}>
        <Image
          style={styles.imgStyle}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnhCu79Qt_rEB2-QPk3xYw0CBIXGfN2B8bdQ&usqp=CAU',
          }}
        />
      </View>

      <View style={styles.textView}>
        <Text style={styles.textTitle}>Live Tracking</Text>
        <Text style={styles.textDeps}>
          Real time tracking of your food on the app after ordered.
        </Text>
      </View>

      <View style={styles.btn}>
        <TouchableOpacity
          style={styles.btnTouch}
          onPress={() => navigation.navigate('Login')}>
          <View>
            <Text style={styles.btnText}>Log in</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.btn}>
        <TouchableOpacity
          style={styles.btnTouch}
          onPress={() => navigation.navigate('CreateAccount')}>
          <View>
            <Text style={styles.btnText}>Create Account</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: '#fff',
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
    alignItems: 'center',
  },
  btnTouch: {
    backgroundColor: '#F15B5D',
    width: '70%',
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',
  },
});

export default Initial;
