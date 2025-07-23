import {create} from 'zustand';
import { persist, createJSONStorage} from 'expo-zustand-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

axios.defaults.baseURL = 'https://backend-recepcion.onrender.com';

type Login = {
    user:any;
    login:(correo:String,password:String)=>void;
    logout:()=>void;
}

export const useLogin = create<Login>(
    persist(
        (set)=>({
            user:0,
            login:async(correo:String,password:String)=>{
                try{
                    const {data} = await axios.post('/auth/login',{
                        correo,
                        password
                    });
                    set((state)=>({user:data}));
                }
                catch(error)
                {
                    console.log(error);
                }
                
            },
            logout:()=>set({user:null}),
        }),
        {
            name:'app-recepcion-storage',
            storage:createJSONStorage(()=>AsyncStorage),
        }
    )
);