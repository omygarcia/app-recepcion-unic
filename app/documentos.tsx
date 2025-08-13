import React, { useEffect, useState } from 'react';import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Linking } from 'react-native';
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

  const openCartelInformativo = async() => {
    //alert(`Texto enviado: ${correo}`);
    Linking.openURL('https://drive.google.com/file/d/13yPFC3p67q_9QO-nnIg_naeRKL_sv1ra/view?usp=sharing');
  };

  const openSolicitudServicios = async() => {
    //alert(`Texto enviado: ${correo}`);
    Linking.openURL('https://drive.google.com/file/d/1HoB1dXYDEAKoFTTpLpW3MBGbswRhVZPT/view?usp=sharing');
  };

  const openModulosDetallados = async() => {
    //alert(`Texto enviado: ${correo}`);
    Linking.openURL('https://docs.google.com/document/d/1yCtUoWzyFqmc2SsG7XpPro2M4jApi9dL/edit?usp=sharing&ouid=112692167205747745358&rtpof=true&sd=true');
  };

  const actionLogout = async() =>{
      await logout();
      router.push('/login');
  }

  const openConvenio = async() =>{
      Linking.openURL('https://docs.google.com/document/d/11tZ25v3C979IlmoXngTKLRt8sRlv89B3/edit?usp=sharing&ouid=112692167205747745358&rtpof=true&sd=true');
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
          <Text style={styles.titulo1}>Documentos Unic</Text>
          <Text style={styles.titulo1}>Bienvenido(a): {user?.usuario?.nombres}</Text>
          <View style={{height:10}} />
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',flexWrap:'nowrap'}}>
            <TouchableOpacity style={styles.botonPanel} onPress={openCartelInformativo}>
              <Image source={require('../assets/images/panel/folder_my_documents_15435.png')} style={{width:70,height:70}} />
              <View style={{height:10}} />
              <Text style={styles.botonTexto}>Cartel Informativo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botonPanel} onPress={openSolicitudServicios}>
              <Image source={require('../assets/images/panel/folder_my_documents_15435.png')} style={{width:70,height:70}} />
              <View style={{height:10}} />
              <Text style={styles.botonTexto}>Solicitud de Servicios</Text>
            </TouchableOpacity>
          </View>
          <View style={{height:10}} />
          {user != null && user.usuario.rol == 'ADMIN'?(
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',flexWrap:'nowrap'}}>
            <TouchableOpacity style={styles.botonPanel} onPress={openModulosDetallados}>
              <Image source={require('../assets/images/panel/folder_my_documents_15435.png')} style={{width:70,height:70}} />
              <View style={{height:10}} />
              <Text style={styles.botonTexto}>Modulos Detallados</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botonPanel} onPress={openConvenio}>
              <Image source={require('../assets/images/panel/folder_my_documents_15435.png')} style={{width:70,height:70}} />
              <View style={{height:10}} />
              <Text style={styles.botonTexto}>Convenio a Marzo 2025</Text>
            </TouchableOpacity>
          </View>
          ):(<View style={{height:10}} />)}
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