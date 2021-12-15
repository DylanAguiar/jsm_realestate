import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi =async(url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '3c34b034dfmsh4459ea73a62ea0dp106d8cjsnb67cb939d799'
          }
    });

    return data;
}