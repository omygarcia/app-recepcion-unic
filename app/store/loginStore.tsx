import {create} from 'zustand';
import { persist, createJSONStorage} from 'expo-zustand-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

axios.defaults.baseURL = 'https://backend-recepcion.onrender.com';

type Login = {
    user:any|null;
    loginErrors:any;
    login:(correo:String,password:String)=>void;
    logout:()=>void;
}

export const useLogin = create<Login>(
    persist(
        (set)=>({
            user:null,
            loginErrors:[],
            login:async(correo:String,password:String)=>{
                try{
                    const {data} = await axios.post('/auth/login',{
                        correo,
                        password
                    });

                    console.log(data?.errors);

                    if(data?.errors !== undefined)
                    {
                        set((state)=>({loginErrors: data?.errors}));
                        set((state)=>({user:null}));
                    }
                    else{
                        set((state)=>({loginErrors: []}));
                        set((state)=>({user:data}));
                    }
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