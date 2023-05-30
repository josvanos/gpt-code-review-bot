function comment4() {
    return "my president!";
}

function comment3() {
    return "hi";
}

function comment2() {
    return "hello";
}

function comment1() {
    return "ju!";
}


db.commments.addMultiple([comment1(), comment2(), comment3(), comment4()]);