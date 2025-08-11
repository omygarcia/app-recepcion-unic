import { useLogin } from '@/app/store/loginStore';
import axios from 'axios';
import { useState } from 'react';

const {user} = useLogin();


axios.defaults.headers.common.Authorization = 'Bearer ';

const useRegistro = () =>{
    const [registros,setRegistros] = useState([]);
    const [misRegistros,setMisRegistros] = useState([]);
    const listaraRegistros = async()=>{
        try{
            const {data} = await axios.get('/registro');
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

    return{
        listaraRegistros,
        setRegistros,
        registros,
        registar_entrada,
        misRegistros,
        setMisRegistros
    }
}

export default useRegistro;