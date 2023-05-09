let log = new Log(document.querySelector('.log'));

let char = new Knight("Thalles");
let monster = new LittleMonster();

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

stage.start();
