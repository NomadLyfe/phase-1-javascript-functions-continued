function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity='go to the office') {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(highLight = '*') {
    return function(adj = 'special') {
        return `You are ${highLight}${adj}${highLight}!`;
    };
}
