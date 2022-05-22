import { useState } from "react";

//cia Add New movie lentele

function Create({setCreateData}) { //{/*3pasiimam per cia savo setCreateData is App.jsx*/}
    //kadangi turim 3 irasymo laukelius tai turim juos sukontroliuoti(movie title)
    const [title, setTitle] = useState('');//(movie title-)
    const [price, setPrice] = useState('');//(movie price)
    const [category, setCategory] = useState('1');//(movie category ir kadangi jis uzstatytas su pasirinkimu tai parasom '1')
    const [rating, setRating] = useState('');
    // 1)ir i visus imputus surasomju reiksmes (value={title}, value={category}, value={category})

    //4kai paspaudziam mygtuka mes i serveri isiunvcia informacija apie nauja suvesta zmogaus irasa
    //4kas nutinka kai paspaudziam ant mygtuko
    const buttonHandler = () => {
        setCreateData({ //4cia sukonstruojam objekta kuris vissiskai turi atitikti pagal musu serverio lenteles pavadinimus(vietoje title turetu buti name pagal mano serveri) o id nereik nes serveris automatiskai ji sukuria
            title,
            price,
            category,
            rating,
        });
        setTitle(''); //7. kai visa info issiunciam padarom kad lentele vel butu tuscia
        setPrice('');//7. kai visa info issiunciam padarom kad lentele vel butu tuscia
        setCategory(1);//7. kai visa info issiunciam padarom kad lentele vel butu ant pirmo pasirinkimo
        setRating('');

    }//4)ir ji perduodam i buttona onClick={buttonHandler} ir einam i server-App.js

    //2)apsirasom funkcija kuri gauna event(is pildomos lenteles(Add New movie)) ir which-kuri norim kad jis kontruoliuotu
    //2per cia galesim rasyti i lentele
    const inputHandler = (e, which) => {
        switch(which) {
            case 'title': //2jeigu jis yra title tai tada setinam tai ka gaunam is setTitle(e.target.value);
            setTitle(e.target.value);
            break;
            case 'price': //2jeigu jis yra 'price' tai tada setinam tai ka gaunam is setPrice(e.target.value.replace(/,/g, '.')-sitas padaro kad kablelius pavestu i taska);
            setPrice(e.target.value.replace(/,/g, '.'));
            break;
            case 'category': //2jeigu jis yra 'category' tai tada setinam tai ka gaunam is setCategory(e.target.value);;
            setCategory(e.target.value);
            break;
            case 'rating': //2jeigu jis yra 'price' tai tada setinam tai ka gaunam is setPrice(e.target.value.replace(/,/g, '.')-sitas padaro kad kablelius pavestu i taska);
            setRating(e.target.value.replace(/,/g, '.'));
            break;
            default: //2ir juos sukisam irgi i imputus(onChange={e => inputHandler(e, 'title')},onChange={e => inputHandler(e, 'price')}, onChange={e => inputHandler(e, 'category')})
        }
    }

    return (
        <div className="card m-2">
            <div className="card-header">
                <h2>Add New movie</h2>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label>movie title</label>
                    <input category="text" className="form-control" onChange={e => inputHandler(e, 'title')} value={title} />
                    <small className="form-text text-muted">Add new movie name here.</small>
                </div>
                <div className="container p-0">
                    <div className="row">
                        <div className="col-4">
                            <div className="form-group">
                                <label>movie price</label>
                                <input category="text" className="form-control" onChange={e => inputHandler(e, 'price')} value={price} />
                                <small className="form-text text-muted">Movie price.</small>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="form-group">
                                <label>movie category</label>
                                <select className="form-control" onChange={e => inputHandler(e, 'category')} value={category}>
                                    <option value="1">Documentary</option>
                                    <option value="2">Family</option>
                                    <option value="3">Animation</option>
                                    <option value="4">Drama</option>
                                    <option value="5">Horror</option>
                                </select>
                                <small className="form-text text-muted">Movie category.</small>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-group">
                                <label>Movie rating</label>
                                <input category="text" className="form-control" onChange={e => inputHandler(e, 'price')} value={rating} />
                                <small className="form-text text-muted">Movie rating.</small>
                            </div>
                        </div>
                        <div className="buttons">
                        <button category="button" className="btn btn-outline-primary m-3" onClick={buttonHandler}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Create;