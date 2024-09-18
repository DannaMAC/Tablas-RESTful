const express = require('express');

function list(req, res, next) {
    res.send('Respond with lista');
}

function suma(req, res, next) {
    const n1 = parseInt(req.param('n1'));
    const n2 = parseInt(req.param('n2'));
    const resu = n1 + n2;
    res.send(`El resultado de ${n1} + ${n2} es ${resu}`);
}

function multiplica(req, res, next) {
    const n1 = parseInt(req.body.n1);
    const n2 = parseInt(req.body.n2);
    const resu = n1 * n2;
    res.send(`El resultado de ${n1} * ${n2} es ${resu}`);
}

function divide(req, res, next) {
    const n1 = parseInt(req.body.n1);
    const n2 = parseInt(req.body.n2);
    const resu = n1 / n2;
    res.send(`El resultado de ${n1} / ${n2} es ${resu}`);
}

function potencia(req, res, next) {
    const n1 = parseInt(req.body.n1);
    const n2 = parseInt(req.body.n2);
    const resu = n1 ** n2;
    res.send(`El resultado de ${n1} elevado a ${n2} es ${resu}`);
}

function resta(req, res, next) {
    const n1 = parseInt(req.param('n1'));
    const n2 = parseInt(req.param('n2'));
    const resu = n1 - n2;
    res.send(`El resultado de ${n1} - ${n2} es ${resu}`);
}


module.exports = {list, suma, multiplica, divide, potencia, resta};
