import React from "react";
import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
const CardMovie = ({ oneMovie }) => {
    return (
        <Col xs="12" sm="6" md="4" lg="3" className="my-1">
            <Link to={`/movie/${oneMovie.id}`}>
                <div className="card">
                    <img src={`https://image.tmdb.org/t/p/w500/` + oneMovie.poster_path} className="card__image" alt="hu" />
                    <div className="card__overlay">
                        <div className="overlay__text text-center w-100 p-2">
                            <p>اسم الفيلم : {oneMovie.title}</p>
                            <p>تاريخ الاصدار:{oneMovie.release_date}</p>
                            <p>عدد المقيمين:{oneMovie.vote_count}</p>
                            <p>التقييم:{oneMovie.vote_average} </p>
                        </div>
                    </div>
                </div>
            </Link>
        </Col >
    );
};

export default CardMovie;