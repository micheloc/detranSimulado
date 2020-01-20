import axios from 'axios'

/// Obter na api... 
// Importar os arquivos também. 
const api = axios.create({baseURL: 'http://localhost:40080/api/'});

api.interceptors.request.use(async (config) => {
    try
    {
        const token = await localStorage.getItem('access_token');

        if(token)
        {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }catch(err)
    {
        console.log(err);
    }
})

export default api;