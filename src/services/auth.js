const auth = {
    isAuth: false,
    async check()
    {
        const token = localStorage.getItem('access_token');
        const expire_date = localStorage.getItem('.expires');

        if(token){
            var dt = new Date(expire_date);
            if(Date.now() > dt)
                return this.isAuth = false;
            return this.isAuth = true;
        }
        else
        return this.isAuth = false;
    },
    async Login(result)
    {
        for(var key in result) {
            await localStorage.setItem(key,result[key]);
        }
    },
    async LogOut()
    {
        await localStorage.clear();
    }
}

export default auth;