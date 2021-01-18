/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Tourism from '../componenst/Tourism/Tourism';
import Housing from '../componenst/Housing/Housing';
import Foods from '../componenst/Foods/Foods';

import {tourismData} from '../data/tourismData';
import {housingData} from '../data/housingData';
import {foodsData} from '../data/foodsData';

import Api from '../api';

const Stack = createStackNavigator();

const Home = ({navigation}) => {
  const [serviceTourism, setServiceTourism] = useState([]);
  const [serviceHousing, setServiceHousing] = useState([]);
  const [serviceFoods, setServiceFoods] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    Api.serviceApi
      .getTourism()
      .then((data) => {
        if (data.errors) {
          // console.warn('get api order error', data);
          setError(data.errors);
        } else {
          // console.warn('get api order', data);
          setServiceTourism(data);
        }
      })
      .catch((e) => {
        console.warn('get api order catch', e);
        setError(e.errors);
      });
  }, []);
  useEffect(() => {
    Api.serviceApi
      .getTourism()
      .then((data) => {
        if (data.errors) {
          // console.warn('get api order error', data);
          setError(data.errors);
        } else {
          // console.warn('get api order', data);
          setServiceTourism(data);
        }
      })
      .catch((e) => {
        console.warn('get api order catch', e);
        setError(e.errors);
      });

    Api.serviceApi
      .getHousing()
      .then((data) => {
        if (data.errors) {
          // console.warn('get api order error', data);
          setError(data.errors);
        } else {
          // console.warn('get api order', data);
          setServiceHousing(data);
        }
      })
      .catch((e) => {
        console.warn('get api order catch', e);
        setError(e.errors);
      });

    Api.serviceApi
      .getFoods()
      .then((data) => {
        if (data.errors) {
          // console.warn('get api order error', data);
          setError(data.errors);
        } else {
          // console.warn('get api order', data);
          setServiceFoods(data);
        }
      })
      .catch((e) => {
        console.warn('get api order catch', e);
        setError(e.errors);
      });
  }, []);
  // const goToOrder = (item) => {
  //   console.warn('goToOrder item', item);
  //   navigation.navigate('OrderDetail', item);
  // };

  // console.warn(serviceTourism);

  return (
    <>
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.banner}
            source={{
              uri:
                'https://www.wamanadventures.com/wp-content/uploads/2019/11/10-D%C3%8DAS-PERU-EXPRESS-%E2%80%93-LIMA-ICA-CUSCO-PUNO.jpg',
            }}
          />
        </View>
        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Que hacer en Perú</Text>

          <ScrollView horizontal={true}>
            <Tourism data={serviceTourism} navigation={navigation} />
          </ScrollView>

          <Text style={styles.titulo}>Mejores alojamientos</Text>
          <View>
            <Housing data={serviceHousing} navigation={navigation} />
          </View>

          <Text style={styles.titulo}>Platos</Text>
          <View style={styles.listado}>
            <Foods data={serviceFoods} navigation={navigation} />
          </View>

          <View style={styles.button}>
            <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
              <Text style={styles.contact}>Contactanos</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20,
  },
  contact: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20,
    color: 'blue',
    textAlign: 'center',
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  button: {
    backgroundColor: '#56A2DC',
    marginBottom: 10,
  },
  contact: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20,
    color: '#fff',
    textAlign: 'center',
  },
});

export default Home;
