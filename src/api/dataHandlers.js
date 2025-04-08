import axios from 'axios';
import {complementaryFields} from "../../public/db/complementaryFields"

export const fetchXMLData = async()=>{
    let definitionsArray=[];

    try{
        const response = await axios.get('/db/gentilicios.xml');
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response.data, "text/xml");
        const definitionElements = xmlDoc.getElementsByTagName("Lemma");

        const getExamples = (currentDefinition, allExamples)=>{
            let limit = allExamples.length;
            let counter = 0;
            while(counter < limit) {
                let example ={
                    example: '',
                    source: ''
                }
                example['example'] = allExamples[counter].getElementsByTagName("Example.Example")[0]?.innerHTML;
                example["source"] = allExamples[counter].getElementsByTagName("Example.Source")[0]?.textContent;
                currentDefinition.examples.push(example)
                counter += 1;
            }
            
        }
        const getDefinitions=(currentSense, allDefinitions)=>{
            let limit = allDefinitions.length;
            let counter = 0;
            while(counter < limit) {
                let definition ={
                    acepción: '',
                    definición: '',
                    utc:'',
                    examples:[]
                }
                definition["acepción"]=allDefinitions[counter].getElementsByTagName("Definition.Acepción")[0]?.textContent;
                definition["definición"]=allDefinitions[counter].getElementsByTagName("Definition.Definición")[0]?.innerHTML;
                definition["utc"]=allDefinitions[counter].getElementsByTagName("Definition.UTC")[0]?.textContent;
                let allExamples = allDefinitions[counter].getElementsByTagName("Example");

                currentSense.definitions.push(definition)
                getExamples(definition, allExamples)
                counter += 1;
            }
        }
        const getSenses=(currentLemma, allSenses)=>{
            let limit = allSenses.length;
            let counter = 0;
            while(counter < limit) {
                let sense = {
                    senseNumber: '',
                    categoríaGramatical: '',
                    definitions:[]
                }
                
                sense["senseNumber"] = allSenses[counter].getElementsByTagName("Sense.SenseNumber")[0]?.textContent;
                sense["categoríaGramatical"] = allSenses[counter].getElementsByTagName("Sense.Categoría.Gramatical")[0]?.textContent;
                let allDefinitions = allSenses[counter].getElementsByTagName("Definition");
                currentLemma.sense.push(sense)
                getDefinitions(sense, allDefinitions)
                counter += 1;
            }

        }

        const getLemmas =()=>{
            let limit = definitionElements.length;
            let counter = 0;
            while(counter < limit) {
                let lemma = {
                    lemmaSign: '',
                    observations:'',
                    variants:'',
                    sense:[]
                }
                lemma["lemmaSign"]= definitionElements[counter].getElementsByTagName("Lemma.LemmaSign")[0]?.textContent;
                complementaryFields.map(function(currentLemma){
                    if(currentLemma.lemmaSign === lemma.lemmaSign){
                        lemma["observations"] = currentLemma.observations;
                        lemma["variants"] = currentLemma.variants;
                    }
                })
                let allSenses = definitionElements[counter].getElementsByTagName("Sense");
                definitionsArray.push(lemma)
                getSenses(lemma, allSenses)
                counter += 1;
            }
        }

        getLemmas();
        console.log(definitionsArray[63],definitionsArray[46],definitionsArray[70])
        return definitionsArray;
    }catch(err){
        console.error('Error converting XML into JSON', err)
        throw err;
    }
}

export const fetchTableData = async()=>{
    try{
        const response = await axios.get('/db/_tablaDeGentilicios.json');
        const regionsArray = response.data.regions;
        return regionsArray;
    }catch(err){
        console.error('Error fetching tableData', err)
        throw err;
    }
}