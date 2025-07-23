import React, { useState } from 'react';import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';


const encabezados = ['Nombre', 'Edad', 'Correo', 'Teléfono', 'Dirección', 'País'];
const datos = [
  ['Juan', '28', 'juan@mail.com', '555-1234', 'Calle 1', 'México'],
  ['Ana', '32', 'ana@mail.com', '555-5678', 'Calle 2', 'Chile'],
  ['Luis', '25', 'luis@mail.com', '555-9012', 'Calle 3', 'Argentina'],
];



export default function App() {
  const router = useRouter();

  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const lectorQR = async() => {
    //alert(`Texto enviado: ${correo}`);
    router.push('/(tabs)');
  };

  const listaAsistencia = async() => {
    //alert(`Texto enviado: ${correo}`);
    router.push('/(tabs)');
  };


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={{width:'100%',height:70, backgroundColor:'#ffffff',display:'flex',alignItems:'center'}}>
            <Image source={require('../assets/images/log-unic.png')} style={{width:170,height:70}} />
        </View>
        <View style={{width:'100%',padding:10}}>
          <View style={{height:20}} />
          <Text style={styles.titulo1}>Lista de Asistencia</Text>
          <View style={{height:10}} />
            <ScrollView horizontal style={styles.scroll}>
              <View>
                <View style={styles.row}>
                  {encabezados.map((col, i) => (
                    <Text key={i} style={[styles.cell, styles.header]}>{col}</Text>
                  ))}
                </View>
                {datos.map((fila, i) => (
                  <View key={i} style={styles.row}>
                    {fila.map((dato, j) => (
                      <Text key={j} style={styles.cell}>{dato}</Text>
                    ))}
                  </View>
                ))}
              </View>
            </ScrollView>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1ff',
    color:"#ffffff",
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titulo1:{
    color: "#5c585a",
    fontSize:20,
    fontWeight:'800',
    textAlign:'center'
  },
  titulo2:{
    color: "#5c585a",
    fontSize:15
  },
  label:{
    color:'#5c585a',
    fontWeight:700
  },
  input: {
    height: 40,
    backgroundColor:'white',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
   botonPanel: {
    backgroundColor: "#f7fbffff",
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    width:'40%',
    height:120
  },
  botonTexto: {
    color: '#212121ff',
    fontWeight: 'bold',
  },
    scroll: {
    margin: 16,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 120,
    padding: 8,
    borderWidth: 1,
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#f1f8ff',
    fontWeight: 'bold',
  },
});