// code your solution here
function superbowlWin(records) {
    // use the find metho to look for a winning record

    const winningRecord = records.find(record => record.result === 'W');
    return winningRecord ? winningRecord.year : undefined;
}
const winningYear = superbowlWin(record);
console.log(winningYear);