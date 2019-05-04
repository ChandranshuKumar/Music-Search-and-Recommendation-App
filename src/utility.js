import axios from 'axios';

const getInfo = (artistName) => {
    return new Promise( (resolve,rej)=>{
        let url = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=a42ef348483d2b81473f835ebd8b192e&format=json`;
        axios.get(url)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                rej(err)
            })
    })
}

// const getTopTracks = (artistName) => {
//     let url = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=a42ef348483d2b81473f835ebd8b192e&format=json`;
//     axios.get(url)
//         .then(res => {
//             return 
//         })
// }

export {getInfo}