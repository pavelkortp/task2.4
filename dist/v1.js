import { itemsRouter } from "./items-router.js";
import { data } from "./data.js";
import { app } from "./index.js";
app.use('/api/v1/items', itemsRouter);
app.post('/api/v1/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            res.status(400).json({ 'error': 'not found' });
        }
        else {
            res.json({ 'ok': true });
        }
    });
});
app.post('/api/v1/register', (req, res) => {
    const user = req.body;
    if (user.login == undefined || user.pass == undefined) {
        res.status(400).json({ 'error': 'not found' });
    }
    req.session.registered = true;
    req.session.login = user.login;
    req.session.pass = user.pass;
    data.users.push({
        login: user.login,
        pass: user.pass,
        items: []
    });
    res.send({ 'ok': true });
});
app.post('/api/v1/login', (req, res) => {
    const user = req.body;
    req.session.registered = true;
    req.session.login = user.login;
    req.session.pass = user.pass;
    if (data.users.find((e) => e.login == user.login && e.pass == user.pass)) {
        res.send({ 'ok': true });
    }
    else {
        res.status(400).send({ 'error': 'not found' });
    }
});