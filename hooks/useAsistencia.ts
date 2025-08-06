import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLogin } from '@/app/store/loginStore';



/**
 * To support static rendering, this value needs to be re-calculated on the client side for web
 */
export function useAsistencia() {
  const [listaAsistencia,setListaAsistencia] = useState([]);
  const {user} = useLogin();

  useEffect(() => {
  
  }, []);

  const obtenerLista = async(id:String|number)=>{
    try {
      const {data} = await axios.get('/registro/usuario/'+id);
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  const registar_entrada = async(id:String|number)=>{
    try {
      const token = user.token;
      const {data} = await axios.post('/registro/registrar-entrada',  
        { 
          codigo_qr:'ADMICION'
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }


  return {
    listaAsistencia,
    setListaAsistencia,
    obtenerLista,
    registar_entrada
  };
}
