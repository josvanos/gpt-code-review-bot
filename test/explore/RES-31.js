import { db } from "./db";

function comment4() {
    return "<script> hi </script>";
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


db.comments.addMultiple([comment1(), comment2(), comment3(), comment4()]);