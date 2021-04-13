const fs = require("fs")
const chalk = require("chalk")


const loadNotes = ()=> {
    try {
    const data = fs.readFileSync('data.json');
    const DataJSON = data.toString();
    return JSON.parse(DataJSON);
    }
    catch(e){
        return [];
    }
}

const saveNotes = (dataFile) => {
    const dataJSON = JSON.stringify(dataFile)
    fs.writeFileSync('data.json', dataJSON)
}

// const getNotes  = (title) =>{
//     const notes = loadNotes();
//     const reqNote = notes.filter((notes) =>{
//         return notes.title === title
//     })

//     console.log(reqNote[0].body)
// } 

const addNotes = (title, body) =>{
    const data = loadNotes();
    const dupliNote = data.find((data) => data.title === title)

    console.log(dupliNote)
    if(!dupliNote){
        data.push({
            title: title,
            body: body
        }) 

        saveNotes(data);
        console.log(chalk.bgGreen.black("Notes Added!"));
    }
    else{
        console.log(chalk.bgRed.black("Title already taken"));
    }
}


const rmvnotes = (title)=> {
    
    const notes = loadNotes();
    if(notes.length !== 0){
        const rmvtitle = notes.filter((note) => note.title !== title)
        console.log(chalk.bgGreen.black("Note Removed"))   
        saveNotes(rmvtitle);
    }
    else{
        console.log(chalk.bgRed.black("Your notes are empty"))
    }
}

const listnotes = () => {
    console.log(chalk.bgBlue.red("Your Notes \n"))
    const notes = loadNotes()
    var cnt=1;
    notes.forEach(note => {
        console.log(chalk.bgYellow.red(cnt+". " + note.title));
        console.log( "   "+ chalk.bgGreen.red(note.body + "\n"));
        cnt++;
    });
}

const readnotes = (title) =>{
    const data = loadNotes();
    const reqData = data.find((data) => data.title === title)
    if(!reqData){
        console.log(chalk.red.inverse("Note not found"))
    }
    else{
    console.log(chalk.bgCyan.yellow.bold.inverse("  " + reqData.title + "  "))
    console.log("  "+reqData.body+"  ")
    }
}
module.exports = {
    
    addNotes,
    rmvnotes,
    listnotes,
    readnotes
}