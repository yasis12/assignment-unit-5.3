console.log('***** Music Collection *****')
 let collection = [];
   
/**
 * 
 * @param {string} title 
 * @param {string} artist 
 * @param {number} yearPublished 
 * @returns 
 */

 function addToCollection(title, artist, yearPublished) {
    let albumn = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
        };
        collection.push(albumn);
        return albumn
 }

 addToCollection('Hope', 'NF', 2023);
 console.log('This is my collection:',collection);

 function showCollection {
    if (collection === 0){
        console.log('collection is empty');
    } else {
        for (i = 0; i < collection.length; i++) {
            let albumn
        }
    }
 }