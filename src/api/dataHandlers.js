import axios from 'axios';
// Fetch and parse XML and convert it into JSON
export const fetchXMLData = async()=>{
    let definitionsArray=[]
  
    try{
        const response = await axios.get('/db/gentilicios.xml');
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response.data, "text/xml");
        const definitionElements = xmlDoc.getElementsByTagName("Lemma");
        
        const getBolds = (bolds, def)=>{
            const limit = bolds.length;
            let counter = 0;
            while (counter < limit){
                def.bolds.push(bolds[counter]?.textContent || '')
                counter += 1;
            }
        }

        const getDefiniciones = (currentElement, currentArray)=>{
            let limit = currentElement.getElementsByTagName("Definition").length;
            let counter = 0;
            while(counter < limit) {
                let def ={
                    acepcion:'',
                    definicion:'',
                    UTC :'',
                    example: '',
                    source: '',
                    adHoc: '',
                    bolds:[]
                }
           def["acepcion"]= currentElement.getElementsByTagName("Definition.Acepción")[counter]?.textContent || '';
            def["definicion"]= currentElement.getElementsByTagName("Definition.Definición")[counter]?.textContent || '';
            def["UTC"]= currentElement.getElementsByTagName("Definition.UTC")[counter]?.textContent || '';
            def["example"]= currentElement.getElementsByTagName("Example.Example")[counter]?.textContent || '';
            def["source"]= currentElement.getElementsByTagName("Example.Source")[counter]?.textContent || '';
            def["adHoc"]= currentElement.getElementsByTagName("Example.Ad.hoc")[counter]?.textContent || '';
            let bolds = currentElement.getElementsByTagName("Bold");
            if(bolds.length > 0){
                getBolds(bolds, def)
            }
            currentArray.definiciones.push(def)
            counter += 1;
            }
        }

        const getSenseNumbers = (currentElement,senseNums,lemma)=>{
            let limit = senseNums.length;
            let counter = 0;
            while(counter < limit){
                let sensenum = {
                    number:'',
                    definiciones:[]
                }
                sensenum["number"] = senseNums[counter]?.textContent || '';
                let sense = currentElement.getElementsByTagName("Sense")[counter]
                getDefiniciones(sense,sensenum)
                lemma.senseNumbers.push(sensenum)
                counter += 1;
            }
            
        }

        const getLemma = ()=>{
            Array.from(definitionElements).map(
                (el) => {     
                  const lemma = {
                      lemmaSign: '',
                      categoriaGramatical : '',
                      senseNumbers:[],
                      definiciones:[]
                  }   
                  lemma["lemmaSign"]= el.getElementsByTagName("Lemma.LemmaSign")[0]?.textContent || '';
                  lemma["categoriaGramatical"]= el.getElementsByTagName("Sense.Categoría.Gramatical")[0]?.textContent || '';
                  let senseNums = el.getElementsByTagName("Sense.SenseNumber");
                  
                  if(senseNums.length > 0) {
                    getSenseNumbers(el, senseNums, lemma)
                }else{
                    getDefiniciones(el,lemma);
                  };
                  definitionsArray.push(lemma);
                  }
              );
        }

        getLemma();
        return definitionsArray;
    }catch(err){
        console.error('Error converting XML into JSON', err)
        throw err;
    }
}