import { Row } from "react-bootstrap"
import React from "react"
import CardMovie from "./CardMovie"
const MoviesList = ({ movies }) => {
    console.log(movies);
    return (
        <Row className="mt-3">
            {movies.length >= 1 ? (movies.map((oneMovie) => {
                return (
                    <CardMovie key={oneMovie.id} oneMovie={oneMovie} />
                )
            })) : <h2>no movies</h2>}
        </Row>
    )

}
export default MoviesList;