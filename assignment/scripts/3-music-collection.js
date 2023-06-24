console.log('***** Music Collection *****')

 let collection = [];
   
/**
 * 
 * @param {string} title tile of the album
 * @param {string} artist artist of the album
 * @param {number} yearPublished year album was published
 * @returns {object} the new created album
 */

 function addToCollection(title, artist, yearPublished) {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
        };

        collection.push(album);

        return album;
 }

 addToCollection('Hope', 'NF', 2023);
 addToCollection('Journey to the Sum', 'Aries', 2020)

 console.log('This is my collection:',collection);

console.log('---- Show collection ----');

 function showCollection() {
    if (collection.length === 0){
        console.log('collection is empty');
    } else {
        for (i = 0; i < collection.length; i++) {
            
            console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
        }
    }
 }

console.log('--Show me the collection--');
 showCollection();

 console.log('---Find By Artist---');

/**
 * 
 * @param {string} artist artist you are searching for
 */


 function findByArtist(artist) {

  let artistResults = [];
    
    for (i = 0; i < collection.length; i++) {
        if (collection[i].artist === artist){
            artistResults.push(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
            return artistResults;
        }  
    }
    return artistResults;
 }

 console.log(findByArtist('NF'));
 console.log(findByArtist('Hoobastank'));