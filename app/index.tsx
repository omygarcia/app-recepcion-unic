import React, { useState } from 'react';import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';


export default function App() {
  const router = useRouter();

  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const login = async() => {
    //alert(`Texto enviado: ${correo}`);
    router.push('/login');
  };


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
            <View style={{width:'100%',height:70, backgroundColor:'#ffffff',display:'flex',alignItems:'center'}}>
                <Image source={require('../assets/images/log-unic.png')} style={{width:170,height:70}} />
            </View>
            <Image source={require('../assets/images/banner1.jpeg')} style={{width:'100%',height:'100%'}} />
            <View style={styles.cajaEncima}>
                <Text style={styles.texto2}>Bienvenido al Sistema de Recepción UNIC</Text>
                <Text style={styles.texto}>Gestiona tu acceso de manera rápida y segura</Text>
                <View style={{height:10}}></View>
                <TouchableOpacity style={styles.boton} onPress={login}>
                    <Text style={styles.botonTexto}>Ingresar</Text>
                </TouchableOpacity>
            </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#335280',
    backgroundColor: '#ffffff',
    color:"#ffffff",
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titulo1:{
    color: "#ffffff",
    fontSize:20
  },
  titulo2:{
    color: "#eb8b24",
    fontSize:15
  },
  label:{
    color:'white',
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
   boton: {
    backgroundColor: "#b09242",
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    width:'90%'
  },
  botonTexto: {
    color: 'white',
    fontWeight: 'bold',
  },
    cajaEncima: {
    position: 'absolute',
    top:'15%',
    width: '100%',
    height: '50%',
    backgroundColor: '#00000030',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    marginTop:94
  },
  texto: {
    color: 'white',
    fontWeight: 'bold',
  },
  texto2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:22,
    textAlign:'center'
  },

});