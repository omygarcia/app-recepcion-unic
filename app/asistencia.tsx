import React, { use, useEffect, useState } from 'react';import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useAsistencia } from '@/hooks/useAsistencia';
import {DataTable} from 'react-native-paper';



const encabezados = ['Fecha', 'Hora Entrada', 'Hora Salida', 'Area', 'Dirección', 'País'];
const datos = [
  ['Juan', '28', 'juan@mail.com', '555-1234', 'Calle 1', 'México'],
  ['Ana', '32', 'ana@mail.com', '555-5678', 'Calle 2', 'Chile'],
  ['Luis', '25', 'luis@mail.com', '555-9012', 'Calle 3', 'Argentina'],
];

type Empleado = {
  id_empleado:Number,
  nombres:string,
  apellidos:string,
  cargo:string,
  departamento:string,
  email:string
}

type Registro = {
  id_registro:Number,
  fecha_cita:string,
  hora_ingreso:string,
  hora_salida:string,
  id_visitante:Number,
  id_empleado:Number,
  id_area:Number,
  empleado:Empleado
}

export default function App() {
  const router = useRouter();
  const {listaAsistencia,setListaAsistencia,obtenerLista} = useAsistencia();
  const [lista,setLista] = useState<Registro[]>([]);

  useEffect(()=>{
    const cargar = async()=>{
      const data = await obtenerLista(1);
      setListaAsistencia(data);
      setLista(data);
    }
    cargar();
  },[]);


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={{width:'100%',height:70, backgroundColor:'#ffffff',display:'flex',alignItems:'center'}}>
            <Image source={require('../assets/images/log-unic.png')} style={{width:170,height:70}} />
        </View>
        <ScrollView style={{width:'100%'}}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Fecha</DataTable.Title>
                <DataTable.Title>Hora Entrada</DataTable.Title>
                <DataTable.Title>Hora Salida</DataTable.Title>
                <DataTable.Title>Empleado</DataTable.Title>
              </DataTable.Header>

              {lista.map((usuario, index) => (
                <DataTable.Row key={index}>
                  <DataTable.Cell>{usuario.fecha_cita}</DataTable.Cell>
                  <DataTable.Cell>{usuario.hora_ingreso}</DataTable.Cell>
                  <DataTable.Cell>{usuario.hora_salida}</DataTable.Cell>
                  <DataTable.Cell>{usuario.empleado.nombres} {usuario.empleado.apellidos}</DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
        </ScrollView>
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