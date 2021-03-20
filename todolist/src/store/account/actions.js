import axios from 'axios';

export function login(){
    axios.post("http://138.68.74.39/api/login?email=toto@toto.com&password=totototo ", {
        name: "toto",
        password: 'tototototo'
    })
    .then(response => {
        //this.info = response
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    });
}

export function register(){
    axios.post("http://138.68.74.39/api/register?name=toto&email=toto@toto.com&password=totototo", {
            name: "toto",
            email: "toto@toto.com",
            password: "totototo"
        })
        .then(response => {
            //this.info = response
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        });
}
