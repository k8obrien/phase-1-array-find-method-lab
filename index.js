function superbowlWin(record){
    const win = record.find(element => element.result === "W");
    if (win === undefined){
        return undefined;
    } 
    return win.year;
}