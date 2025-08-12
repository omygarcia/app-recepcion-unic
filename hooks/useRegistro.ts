import { useLogin } from '@/app/store/loginStore';
import axios from 'axios';
import { useState } from 'react';




axios.defaults.headers.common.Authorization = 'Bearer ';

const useRegistro = () =>{
    const [registros,setRegistros] = useState([]);
    const [misRegistros,setMisRegistros] = useState([]);
    const {user} = useLogin();
    const listarRegistros = async()=>{
        try{
            const {data} = await axios.get('/registro/usuario/'+user.usuario.id_empleado,
                {
                    headers:{
                        Authorization:"Bearer "+user.token
                    }
                }
            );
             console.log('id: ',user.usuario.id_empleado);
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
            const {data} = await axios.post('/registro/registar-entrada',form,{
                headers:{
                    Authorization:"Bearer "+user.usuario.token
                }
            });
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
        listarRegistros,
        setRegistros,
        registros,
        registar_entrada,
        misRegistros,
        setMisRegistros
    }
}

export default useRegistro;