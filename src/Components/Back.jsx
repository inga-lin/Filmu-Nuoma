import { useEffect, useState } from 'react';
import axios from 'axios';
//import '../bootstrap.css';
//import '../back.scss';
import Create from './Create';
import MovieEdit from './MovieEdit';
import Modal from './Modal';

// cia Tree List lentele

function Back() {

  const [movies, setMovies] = useState([]);//--parsisiunciam kazkokiu daliku 
  //3)funkcija kuri is createData komponento paims informacija kuria reikia issiusti ir irasys serveri
  const [createData, setCreateData] = useState(null);//3 
  const [editData, setEditData] = useState(null);//10. ir ji perduosim per Modal ir ten pasiimsim

  const [deleteId, setDeleteId] = useState(null);//8trinimo buttonas

  const [modalData, setModalData] = useState(null);//9. setModalDataperduodam i komponenta Modal ir TreeLine

  const [lastUpdate, setLastUpdate] = useState(Date.now()); //liks useState//7.cia bus data kada pirma karta reactas uzsikrauna puslapi

  // Read 
  useEffect(() => {
    axios.get('http://localhost:3004/filmai-manager')
      .then(res => {
        console.log(res.data);
        setMovies(res.data);//padarom kad per cia pasiimam savo movies is serverio
      })
  }, [lastUpdate]); //7.

  //Create
  //3)funkcija kuri is createData komponento paims informacija kuria reikia issiusti ir irasys serveri
  //3)useEffect pas mus vyks kai pasikeis creatoData
  useEffect(() => {
    if (null === createData) { //3)jeigu createData yra === null nieko nedarom ir einam lauk is cia
      return;
    }
    axios.post('http://localhost:3004/filmai-manager', createData)//3)kai jis  jau tures kazka naujo tai ta nauja info dedam i 'http://localhost:3003/movies-manager', createData //post-isiusti
    .then(res => {
      console.log(res);  //3)console.log(res) pasiziurim ka mums servas atsakys
      setLastUpdate(Date.now()) }); //7paskutinis pakeitimas turi buti dabartine Data
  },[createData])

  //10Edit 
  useEffect(() => {
    if (null === editData) {
      return;
    }
    axios.put('http://localhost:3004/filmai-manager'+ editData.id, editData) //
    .then(res => {
      console.log(res);
      setLastUpdate(Date.now());//7paskutinis pakeitimas turi buti dabartine Data
    });

  },[editData]);


  //8 Delete buttonas ir tai dar apsirasyti app.js serverio puseje
  useEffect(() => {
    if (null === deleteId) {
      return;
    }
    axios.delete('http://localhost:3004/filmai-manager' + deleteId.id, ) //cia nepamirsti prie http galo prirasyti / ir prideti deleteId objekta su savybe id(jis istrins visa eilutes info) //delete-istrinti
    .then(res => {
      console.log(res);
      setLastUpdate(Date.now());//7paskutinis pakeitimas turi buti dabartine Data
    });

  },[deleteId])


  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Create setCreateData={setCreateData}></Create> {/*3 perduodam setCreateData i Create.jsx*/}
        </div>
        <div className="col-8">
          <div className="card m-2">
            <div className="card-header">
              <h2>Movie List</h2>
            </div>
            <div className="card-body">
              <ul className="list-group">
                {
                  movies.map(m => <MovieEdit key={m.id} movie={m} setDeleteId={setDeleteId} setModalData={setModalData}></MovieEdit>)
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Modal setEditData={setEditData} setModalData={setModalData} modalData={modalData}></Modal>{/*9.jis setModalData ir dar ziuri ka pasetinam modalData(pasirodo kai turim ka parodyti) */}
    </>
  );
}

export default Back;