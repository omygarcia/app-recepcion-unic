import React, { useEffect, useState } from 'react';import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useLogin } from './store/loginStore';
import { push } from 'expo-router/build/global-state/routing';


export default function App() {
  const router = useRouter();

  const {user, logout} = useLogin();

  useEffect(()=>{
    console.log('user: ',user);
  },[]);

  const lectorQR = async() => {
    //alert(`Texto enviado: ${correo}`);
    router.push('/(tabs)');
  };

  const listaAsistencia = async() => {
    //alert(`Texto enviado: ${correo}`);
    router.push('/asistencia');
  };

  const registroVisitante = async() => {
    //alert(`Texto enviado: ${correo}`);
    router.push('/registro');
  };

  const scannerVisitante = async() => {
    //alert(`Texto enviado: ${correo}`);
    router.push('/scanner');
  };

  const actionLogout = async() =>{
      await logout();
      router.push('/login');
  }

  const goListaVisitas = async() =>{
      router.push('/visitas');
  }

  const goDocumentos = async() =>{
      router.push('/documentos');
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={{width:'100%',height:70, backgroundColor:'#ffffff',display:'flex',alignItems:'center'}}>
            <Image source={require('../assets/images/log-unic.png')} style={{width:170,height:70}} />
            <TouchableOpacity onPress={actionLogout}>
                <Text>Salir</Text>
            </TouchableOpacity>
        </View>
        <View style={{width:'100%',padding:10}}>
          <View style={{height:20}} />
          <Text style={styles.titulo1}>Panel de Administración</Text>
          <Text style={styles.titulo1}>Bienvenido(a): {user?.usuario?.nombres}</Text>
          <View style={{height:10}} />
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',flexWrap:'nowrap'}}>
            <TouchableOpacity style={styles.botonPanel} onPress={lectorQR}>
              <Image source={require('../assets/images/panel/qrcode_scan_icon96.png')} style={{width:70,height:70}} />
              <View style={{height:10}} />
              <Text style={styles.botonTexto}>Checar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botonPanel} onPress={listaAsistencia}>
              <Image source={require('../assets/images/panel/list_notes_930.png')} style={{width:70,height:70}} />
              <View style={{height:10}} />
              <Text style={styles.botonTexto}>Asistencia</Text>
            </TouchableOpacity>
          </View>
          <View style={{height:10}} />
          {user != null && user.usuario.rol == 'ADMIN'?(
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',flexWrap:'nowrap'}}>
            <TouchableOpacity style={styles.botonPanel} onPress={registroVisitante}>
              <Image source={require('../assets/images/panel/addusergroup_1251.png')} style={{width:70,height:70}} />
              <View style={{height:10}} />
              <Text style={styles.botonTexto}>Registro Visitante</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botonPanel} onPress={scannerVisitante}>
              <Image source={require('../assets/images/panel/barcode_scanner_4249.png')} style={{width:70,height:70}} />
              <View style={{height:10}} />
              <Text style={styles.botonTexto}>Scannear Visitante</Text>
            </TouchableOpacity>
          </View>
          ):(<View style={{height:10}} />)}
           <View style={{height:10}} />
          {user != null && user.usuario.rol == 'ADMIN'?(
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',flexWrap:'nowrap'}}>
            <TouchableOpacity style={styles.botonPanel} onPress={goListaVisitas}>
              <Image source={require('../assets/images/panel/users_12820.png')} style={{width:70,height:70}} />
              <View style={{height:10}} />
              <Text style={styles.botonTexto}>Lista Visitantes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botonPanel} onPress={goDocumentos}>
              <Image source={require('../assets/images/panel/folder_my_documents_15435.png')} style={{width:70,height:70}} />
              <View style={{height:10}} />
              <Text style={styles.botonTexto}>Documentos</Text>
            </TouchableOpacity>
          </View>
          ):(<View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',flexWrap:'nowrap'}}>
            <TouchableOpacity style={styles.botonPanel} onPress={goDocumentos}>
              <Image source={require('../assets/images/panel/folder_my_documents_15435.png')} style={{width:70,height:70}} />
              <View style={{height:10}} />
              <Text style={styles.botonTexto}>Documentos</Text>
            </TouchableOpacity>
          </View>)}
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
});