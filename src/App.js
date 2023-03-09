import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import MoviesList from './components/MoviesList';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PaginationBar from './components/Pagination';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MovieDetail from './components/MovieDetails';


function App() {

  const [movies, setMovies] = useState([])
  const [PageNo, setPageNo] = useState(0)

  //get all movie by axiox
  const getAllMovies = async () => {
    const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=f902aa8db85df527028e8a852ae6b6b8&language=ar');
    setMovies(res.data.results)
    console.log(res.data);
    setPageNo(res.data.total_pages - 35000)
  }
  useEffect(() => {
    getAllMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps, no-undef

  }, [])

  //get current page
  const getPage = async (pageNo) => {       //اخدتو من الهاندل الي ب pagination 
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f902aa8db85df527028e8a852ae6b6b8&language=ar&page=${pageNo}`);
    setMovies(res.data.results)
  }


  //to search in api
  const search = async (word) => {
    if (word === "") {
      getAllMovies();
      console.log("hh");
      console.log(movies);
    } else {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f902aa8db85df527028e8a852ae6b6b8&query=${word}&language=ar`);
      setMovies(res.data.results)
      setPageNo(res.data.total_pages)
    }
  }


  return (
    <div className="App font color-body">
      <NavBar search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MoviesList movies={movies} />} />
            <Route path='/movie/:id' element={<MovieDetail />} />
          </Routes>
        </BrowserRouter>
        <PaginationBar getPage={getPage} PageNo={PageNo} />
      </Container>
    </div>
  );
}

export default App;
