const axios = require('axios');

exports.find = async () => {
    const path= '/peoples';
    const { data } = await axios.get(path);

    return data;
}


// exports.findById = async id => {
//     const path= '/peoples';

//     const { data: [data] } = await axios(path);
//     data.thumbnail = this.getThumbnailLink(data.thumbnail);
//     return data;
//   }
