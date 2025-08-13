import { useLogin } from '@/app/store/loginStore';
import axios from 'axios';
import { useEffect, useState } from 'react';


type Visitante = {
  id_visitante:string,
  id_tipovisitante:string,
  nombres: string,
  apellidos: string,
  genero: string,
  telefono: string,
  email: string,
  motivo_visita: string,
}


const useVisitante = () =>{
    const [visitas,setVisitas] = useState<Visitante[]>([]);
    const {user} = useLogin();

    const listaVisitas = async()=>{
        try{
            const {data} = await axios.get('/visitante');
            console.log('data',data);
            return data;
        }
        catch(error)
        {
            console.log("ERROR: ");
            console.log(error);
            return [];
        }
    }

    const agregar_visitante = async(form:any)=>{
         try{
            const {data} = await axios.post('/visitante/create',form);
            console.log('data',data);
            return data;
        }
        catch(error)
        {
            console.log("ERROR: ");
            console.log(error);
            return [];
        }
    }

    const registar_entrada = async(form:any)=>{
         try{
            const {data} = await axios.post('/registro/registar-entrada',form);
            console.log('data',data);
            return data;
        }
        catch(error)
        {
            console.log("ERROR: ");
            console.log(error);
            return [];
        }
    }

    const eliminar_visita = async(id:string)=>{
        try {
            const {data}  = await axios.delete('/visitante/delete/'+id);
            console.log('data',data);
            return data;
        } catch (error) {
             console.log("ERROR: ");
            console.log(error);
            return [];
        }
    }

    return{
        listaVisitas,
        visitas,
        setVisitas,
        agregar_visitante,
        eliminar_visita
    }
}

export default useVisitante;