
import Back from "./Components/Back";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Front from "./Components/Front";

function App() {

    return (
        <BrowserRouter>
        <Routes>
        <Route index element={<Front show="all"/>} /> {/*b.show yra propsas kuri perduodam i Front.jsx*/}
        <Route path="documentary" element={<Front show="documentary"/>} /> {/*b.show yra propsas kuri perduodam i Front.jsx*/}
        <Route path="family" element={<Front show="family"/>} /> {/*b.show yra propsas kuri perduodam i Front.jsx*/}
        <Route path="animation" element={<Front show="animation"/>} /> {/*b.show yra propsas kuri perduodam i Front.jsx*/}
        <Route path="drama" element={<Front show="drama"/>} />
        <Route path="horror" element={<Front show="horror"/>} />
        <Route path="admin" element={<Back/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default App;


/* kaip pasileisti projekta
xamp start-> start-> Admin
http://localhost/phpmyadmin/
phpMyAdmin
New -> irasom pavadinima i pirma laukeli gtarkim(turi buti pavadinime mazosios raides):
sernas -> Create
Name: trees(daugiskaita pavadinimas); Number of columns: 4 (kiek stulpeliu norim);
GO

Name     Type             Length      Anttributes        Index        A_I     
id       MEDIUMINT                    UNSIGNED           PRIMARY     x(varnele)
name     VARCHAR           50
heigt    DECIMAL           4.2 (bus 4skaiciai ir du is ju po kablelio)
type     TINYINT                      UNSIGNED
SAVE

Insert
Column     Function    Value  
id                    
name                    Egle
heigt                   8.22
type                    2

Column     Function    Value  
id                    
name                    Pusis
heigt                   6.12
type                    2
GO (pirma o ne paskutini)
Browse -paziuresim ka irasem
Insert- galim dar irasyti

Column     Function    Value  
id                    
name                    Kriause
heigt                   1.22
type                    1

Column     Function    Value  
id                    
name                    Berzas
heigt                   23.45
type                    1
GO (pirma o ne paskutini)
(jei norim paredaguoti einam i Structure -> change(sruktura keisim); Browse ->edit (medzius paredaguoti))

VSC 
node -v (galima pasitikrint ar reacta turim)
sukuriam folderi server
cd server
https://expressjs.com/en/starter/installing.html (galima pasiziureti)
npm init -y   (sukurs package.json)
npm install express    -> web serveris kuris paleidzia node
susikuriam App.js server folderyje
ir .gitignore su /node_modules
I App.js isidadam koda ir jame pakeiciam porta is port = 3000 i port = 3003
const express = require('express')
const app = express()
const port = 3003

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

terminale stabdom serveri ir isnaujo pasileidziam:
npm i nodemon
ir package.json irasom prie script:
"start": "nodemon app.js"
terminale: npm start         po kiekvieno puslapio perkrovimo atsinaujins puslapio info.  einam i http://localhost:3003/ ir turi ten rasyti Hello World


npm i cors
app.js irasom const cors = require('cors');   app.use(cors());
npm i mysql
app.js irasom:
const mysql = require('mysql');


const con = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '',
database: 'sernas',    <-duomenu bazes pavadinimas
});

app.use(express.urlencoded({
extended: true
}));

app.use(express.json());

app.get('/trees-manager', (req, res) => {        <- http://localhost:3003/trees-manager api puslapio pavadinimas
// SELECT column1, column2, ...
// FROM table_name;
const sql = `
SELECT
*
FROM trees     <- lenteles pavadinimas(issitrint komentara sita nes nepasileis)
`;
con.query(sql, function(err, result) {
if (err) throw err;
res.json(result);
});
});

npm start    ir susirandam puslapi http://localhost:3003/trees-manager pasiziurim ar gaunam info
--------------
npm start
susikuriam teva react (toki pat kaip server)
spaudziam terminale desineje +
numeta mus i Reactas
cd react
npx create-react-app r2
cd r2
npm start    (atidarys puslapi su reacto zenkliuku)
einam i r2 -> src -> index.js
terminale apatineje juostoje paspaudziam ant JavaScript ir pasirenkam JavaScript React ir uzkomentuojam 9 ir 11eilutes  //
ir uzdarom index.js

r2 -> src -> App.js pervadinam i App.jsx
ir istrinam pirma importa ir istrinam <div></div> vidu

terminale dar karta spaudziam +
cd react
cd r2
npm i axios
(cia paspaudus npm start ir Y pasikeite man portas i kita 3001 nezinau ar tai gerai)

-----------------------------------
kaip pasileistu kad veiktu puslapis(kai pradedam darba):
(serverio dalis)
ir grystam i pirma node arba powershell
ir dirbam Reactas/server
npm start
(matyrumem taip langa mazdaug pries pasileidziant
[nodemon] 2.0.16
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
Example app listening on port 3003)

(fronto dalis)
o antrame node arba powershell
react/r2 
npm start
(matyrumem taip langa mazdaug pries pasileidziant
You can now view r2 in the browser.
Local:            http://localhost:3000        
On Your Network:  http://172.17.254.132:3000   
Note that the development build is not optimized.
To create a production build, use npm run build. 
webpack compiled successfully)
Ir dar i github susipusinu
*/
/*bootstrap linkas
https://getbootstrap.com/docs/4.6/components/buttons/ 

Susikuriam react/r2 folderi Components ir jame faila Create.jsx


Copinu nuo darbo viska paziuresiu ar suveiks


fonts   font-family:
https://.google.com/specimen/Akshar
ir is ten nukopinam <link.....> ir ji ikopinam i react/r2/public/index.html , kur nors <heado> viduje
ir tada 
body {
  font-family: 'Akshar', sans-serif;
}
isimetam i src App.css
      arba
isirasom scss:
App.css pervadinam i App.scss
tada App.jsx vietoje importo App.css irasom import './App.scss';
terminala su scss ismetam i siuksliu deze(kur node raso kaireje-front-endo dali)
ir spaudziam + terminale
nueinam i recta/r2
npm i sass   (cia galim rasyti kaip css failiuke, gal :D )
npm start
turetu uzsikraut be klaidu
---------------------------------------
2022.05.19
savo App.jsx failiuka permetem i Componentus ir pervadinom Back.jsx (ir ten jo viduje pasikeiciam funkcijos pavadinima)
ir kelius issitaisom import { useEffect, useState } from 'react';
import axios from 'axios';
import '../bootstrap.css';
import '../back.scss';           //ir app.scss pervadinam i back.scss o tam naujam App.jsx sukursim app.scss
import Create from './Create';
import TreeLine from './TreeLine';
import Modal from './Modal';

o src susikurem nauja App.jsx su:
import Back from "./Components/Back";
//import { BrowserRouter, Routes, Route, } from "react-router-dom";
//import Front from "./Components/Front";

function App() {

    return (
        //<BrowserRouter>
        //<Routes>
       // <Route index element={<Front show="all"/>} />
       // <Route path="leaf" element={<Front show="leaf"/>} />
       // <Route path="spike" element={<Front show="spike"/>} />
       // <Route path="palm" element={<Front show="palm"/>} />
        //<Route path="admin" element={<Back/>}></Route>
       // </Routes>
       // </BrowserRouter>
       <Back></Back>
    )
}
export default App;
pasitikrinam ar veikia http://localhost:3000/

einam i 
https://reactrouter.com/
read the Docs
arba cia iskart https://reactrouter.com/docs/en/v6/getting-started/overview
terminale kur fronto dalis instaliuojam :
control c     tada y  (butinai nukilinam nes kitaip neveiks- arba per pliusiuka nauja atsidaryti ir ten pasileisti)
npm install react-router-dom@6
npm start

componentuose susikuriam faila Front.jsx it ten parasom labas

tada savo App.jsx susikelaim visa info back ir front (viskas turi taip ir vadintis)
import Back from "./Components/Back";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Front from "./Components/Front";

function App() {

    return (
        <BrowserRouter>
        <Routes>
        <Route index element={<Front show="all"/>} />           //http://localhost:3000/ cia atvaizduos viska ka sukurem back.jsx
        <Route path="leaf" element={<Front show="leaf"/>} />    //http://localhost:3000/leaf  cia jei reiks galima isrusiuotai atvaizduoti tik leaf naujame puslapyje
        <Route path="spike" element={<Front show="spike"/>} />  //http://localhost:3000/spike  cia jei reiks galima isrusiuotai atvaizduoti tik spike naujame puslapyje
        <Route path="palm" element={<Front show="palm"/>} />    //http://localhost:3000/palm   cia jei reiks galima isrusiuotai atvaizduoti tik palm naujame puslapyje
        <Route path="admin" element={<Back/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default App;

pasiziurim ar veikia:
dabar musu back dalis bus http://localhost:3000/admin
o http://localhost:3000/ cia bus ka klientai matys dabar labas

einam daryti Front.jsx
susikuriam dar componentuose Front folderi ir jame FreeLine.jsx
kuris ieis i Front.app vidu ir ten viska susirasom ko reik
navbara ir kokia info norim kad atvaizduotu

(//b pasirasius useEfecta reik eiti server/app.js ir ten ji apsirasyti
app.get("/trees-list/all", (req, res) => {
        const sql = `
        SELECT
        *
        FROM trees
    `;
        con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });

})

app.get("/trees-list/:cat", (req, res) => {
    if (req.params.cat != "all") {
    const sql = `
            SELECT
            *
            FROM trees
            WHERE type = ?
        `;
    con.query(sql, [['leaf','spike','palm'].indexOf(req.params.cat) + 1], (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  }
});)
*/
/*

Dar galim i react/r2/public/index.html isikelti  i body> vidu
    <!--d.cia rodykles ikelem-->
	    <svg style="display:none" xmlns="http://www.w3.org/2000/svg">
	      <symbol id="arrow" viewBox="0 0 512 512"><path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"/></symbol>
	    </svg>

Ji naudosim Front.jsx
                       <svg className="up">
                            <use xlinkHref="#arrow"></use> 
                        </svg>
                        <svg className="down">
                            <use xlinkHref="#arrow"></use> {/*d.cia bus rodykles is googles svg arrow ir front.scss pasisukam kaip mums reik
                        /*</svg>
                        </div>





Ir srifta i <head> vidu

    <link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Akshar:wght@400;600&family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet">

O ji isikelt i savo css */
