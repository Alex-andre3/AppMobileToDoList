import axios from 'axios';


export function load({ commit }){
    axios.get('json/immo.json')
            .then(response => {
                commit("load", response.data);
            })

}


export function login(){
    axios.post('http://138.68.74.39/api/login', {}, {
        params: {
            email: 'toto@toto.com',
            password: 'totototo'
        }
    })
    .then(response => {
        this.info = response
        console.log(response),
        console.log(response.token)
    })
    .catch(error => {
        console.log(error)
    });
}

export function register(){
    axios.post('http://138.68.74.39/api/register', {}, {
        params: {
            name: 'bonjour123test',
            email: 'bonjour123test@toto2.com',
            password: 'totototo'
        }
    })
        .then(response => {
            this.info = response,
            console.log(response),
            console.log(response.token)
        })
        .catch(error => {
            console.log(error)
        });
}
