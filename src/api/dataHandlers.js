import axios from 'axios';
// Fetch and parse XML data
export const fetchXMLData = async()=>{
    try{
        const response = await axios.get('/db/gentilicios.xml');
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response.data, "text/xml");
        console.log(xmlDoc)
        return xmlDoc;
    }catch(err){
        console.error('Error fetching XML', err)
        throw err;
    }
}