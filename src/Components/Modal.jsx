import { useEffect, useState } from "react";
import star from '../img/star.svg';
//Modalo lentele
function Modal({setModalData, modalData, setEditData}) {
//modalData visas medis ant modalo
//9. is Create.jsx nusikopinam dali kodo
//Edit movie
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('1');
    const [rating, setRating] = useState('');
    const [id, setId] = useState('0');//11 pradinis bus 0

    const buttonHandler = () => {
        setEditData({ //10 cia turi tu
            title,
            price,
            category,
            rating,
            id//11
        });
        setModalData(null);//11kai uzpildom modalo lentele ji turi nusinulint(issitrinti duomenys)
    }

    const inputHandler = (e, which) => {
        switch(which) {
            case 'title': 
            setTitle(e.target.value);
            break;
            case 'price': 
            setPrice(e.target.value.replace(/,/g, '.'));
            break;
            case 'category': 
            setCategory(e.target.value);
            break;
            case 'rating': //2jeigu jis yra 'price' tai tada setinam tai ka gaunam is setPrice(e.target.value.replace(/,/g, '.')-sitas padaro kad kablelius pavestu i taska);
            setRating(e.target.value.replace(/,/g, '.'));
            break;
            default:
        }
    }

    useEffect(() => {
        if (modalData === null) { //9jeigu modalData === null modale nebus duomenu ir uzsidarys modalas
            setTitle('');
            setPrice('');
            setCategory(1);
            setRating('');
        } else { // 9priesingu atveju pas mus modalas atsidarineje ir matysis duomenys is anksciau suvestu
            setTitle(modalData.title);
            setPrice(modalData.price);
            setCategory(modalData.category);
            setRating(modalData.rating);
            setId(modalData.id);//11
        }
    }, [modalData])

    if (modalData === null) { //9.jeigu modalData === null modalo nebus // jeigu modal data yra objektas turesim ka parodyti
        return null;
    }

    return (
        <div className="modal modal-dialog-centered" id="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit movie</h5>
                        <button category="button" className="close" onClick={() => setModalData(null)}>{/*paspaudus x per setModalData(null) bus uzdaroma modallentele */}
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
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
                                            <small className="form-text text-muted">movie price.</small>
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
                                            <small className="form-text text-muted">movie category.</small>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label>Movie rating</label>
                                            <img className="star" style={{ width: "45px", height: "45px" }} src={star} alt="star"></img>
                                            <input category="text" className="form-control" onChange={e => inputHandler(e, 'rating')} value={rating} />
                                            <small className="form-text text-muted">Movie rating.</small>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button category="button" className="btn btn-outline-primary m-3" onClick={buttonHandler}>Save</button>{/*11. nusinulina duomenys is modalo ir uzsidaro lenteles paspaudus save*/}
                        <button category="button" className="btn btn-outline-danger m-3"  onClick={() => setModalData(null)}>Cancel</button>{/*paspaudus Cancel per setModalData(null) bus uzdaroma modal lentele */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;