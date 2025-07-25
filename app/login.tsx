import React, { useEffect, useState } from 'react';import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useLogin } from './store/loginStore';


export default function App() {
  const router = useRouter();
  const {login,user,loginErrors} = useLogin();

  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading,setIsloading] = useState(false);

  useEffect(()=>{
    setCorreo("luis.ramirez@unic.edu.mx");
    setPassword("123456");
  },[]);

  const login1 = async() => {
    //alert(`Texto enviado: ${correo}`);
    setIsloading(true);
    await login(correo,password);
    console.log('user: ',user);
    if(user != null)
    {
      setIsloading(false);
      router.push('/panel');
    }
    else{
      setIsloading(false);
      alert("Revisa tu correo o contraseña");
    }
    
  };


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={{width:'100%',height:70, backgroundColor:'#ffffff',display:'flex',alignItems:'center'}}>
           <Image source={require('../assets/images/log-unic.png')} style={{width:170,height:70}} />
        </View>
        <View style={{width:'100%',padding:10}}>
          <View style={{height:20}} />
           {isLoading && (<Image source={require('../assets/images/loading-bar-dorado.gif')} style={{width:'90%',height:25}} />)}
          <Text style={styles.titulo1}>Acceso al Sistema</Text>
          <Text style={styles.label}>Correo:</Text>
          <TextInput
            style={styles.input}
            placeholder="Introduce tu correo"
            value={correo}
            onChangeText={setCorreo}
            keyboardType='email-address'
          />
          <Text style={styles.label}>Contraseña:</Text>
          <TextInput
            style={styles.input}
            placeholder="Introduce tu password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.boton} onPress={login1} disabled={isLoading}>
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
   boton: {
    backgroundColor: "#b09242",
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    width:'100%'
  },
  botonTexto: {
    color: 'white',
    fontWeight: 'bold',
  },
});