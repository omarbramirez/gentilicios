export const handleSearching = (input, database)=>{
    let databasefiltered =[]
    if(input.length === 0) return databasefiltered
    if(database?.length > 0){
         database.map(lemma => {
            let limit= input.length
            let fragment = lemma.lemmaSign.slice(0,limit)
            if(fragment === input){
                console.log(fragment, input)
                databasefiltered.push(lemma)
            }
        })
        return databasefiltered
    }
}