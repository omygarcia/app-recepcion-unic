import React, { useEffect, useState } from 'react';import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useLogin } from './store/loginStore';
import { Picker } from '@react-native-picker/picker';



export default function App() {
  const router = useRouter();
  const {login,user,loginErrors} = useLogin();

  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading,setIsloading] = useState(false);

  const [form,setForm] = useState({
    id_visitante:"",
    id_tipovisitante:"",
    nombres:"",
    apellidos:"",
    genero:"",
    telefono:"",
    email:"",
    motivo_visita:""
  });

  useEffect(()=>{
    setCorreo("sistemas.ayto.puebla@gmail.com");
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
          <Text style={styles.titulo1}>Registro Visitante</Text>
          <Text style={styles.label}>Tipo Visitante:</Text>
          <Picker
                selectedValue={form.id_tipovisitante}
                onValueChange={(value:any) => setForm({...form,id_tipovisitante:value})}
                style={{backgroundColor:"#ffffff"}}
              >
                <Picker.Item label="Estudiante" value="1" />
                <Picker.Item label="Visita" value="2" />
          </Picker>
          <Text style={styles.label}>Nombres:</Text>
          <TextInput
            style={styles.input}
            placeholder="Introduce tu nombre"
            value={form.nombres}
            onChangeText={(value)=>setForm({...form,nombres:value})}
          />
          <Text style={styles.label}>Apellidos:</Text>
          <TextInput
            style={styles.input}
            placeholder="Introduce tu apellido"
            value={form.apellidos}
            onChangeText={(value)=>setForm({...form,apellidos:value})}
          />
          <Text style={styles.label}>Genero:</Text>
          <Picker
                selectedValue={form.genero}
                onValueChange={(value:any) => setForm({...form,genero:value})}
                style={{backgroundColor:"#ffffff"}}
              >
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Femenino" value="Femenino" />
          </Picker>
          <Text style={styles.label}>Telefono:</Text>
          <TextInput
            style={styles.input}
            placeholder="Introduce tu telefono"
            value={form.telefono}
            onChangeText={(value)=>setForm({...form,telefono:value})}
            keyboardType='phone-pad'
          />
          <Text style={styles.label}>E-mail:</Text>
          <TextInput
            style={styles.input}
            placeholder="Introduce tu correo"
            value={form.email}
            onChangeText={(value)=>setForm({...form,email:value})}
            keyboardType='email-address'
          />
          <Text style={styles.label}>Motivo visita:</Text>
          <TextInput
            style={styles.input}
            placeholder="Motivo visita"
            value={form.motivo_visita}
            onChangeText={(value)=>setForm({...form,motivo_visita:value})}
          />
          <TouchableOpacity style={styles.boton} onPress={login1} disabled={isLoading}>
            <Text style={styles.botonTexto}>Registrar</Text>
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