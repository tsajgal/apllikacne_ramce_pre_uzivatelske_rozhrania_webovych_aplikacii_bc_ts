import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email, tel) =>
    db.ref(`users/${id}`).set({
        username,
        email,
        tel,
    });

export const onceGetUsers = () =>
    db.ref('users').once('value');

// Other Entity APIs ...

export const doCreateReservation = (id, username, year, tel, email, number_people, day_com, day_end) =>
    db.ref(`users/${id}`).set({
        username,
        year,
        tel,
        email,
        number_people,
        day_com,
        day_end,
    });

export const onceGetReservation = () =>
    db.ref(`users/`).once('value');


export const doCreateArticle = (id, username, article_text) =>
    db.ref(`articles/${id}`).set({
        username,
        article_text,
    });

export const onceGetArticle = () =>
    db.ref(`articles/`).once('value');


export const doCreateQuestion = (id, username, email, question_text) =>
    db.ref(`question/${id}`).set({
        username,
        email,
        question_text,
    });

export const onceGetQuestion = () =>
    db.ref(`question/`).once('value');

