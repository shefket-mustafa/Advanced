function wordsUpperCase(string){

    let words = string.match(/\b\w+\b/g);

    const wordsToUpper= words.map(word=> word.toUpperCase());

    console.log(wordsToUpper.join(", "));

}
wordsUpperCase(`Hi, how are you?`);