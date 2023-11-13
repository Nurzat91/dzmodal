import { useState } from 'react'
import Modal from './components/Modal/Modal';
import Movie from './components/Movie/Movie';
import {Props} from './types';


function App() {

  const [movies] = useState<Props[]>([
    { id: 1, title: ' Story of Kunning Palace', year: 2023, genre: 'Drama, Fantasy',image: "https://cdn.yesasia.ru/wp-content/uploads/2023/11/008t7yzply1hjmlnpmwh7j31jk2o2npf.jpg"},
    { id: 2, title: 'Mulan', year: 1998, genre: 'Drama, Adventures, Fantasy', image: "https://sun9-1.userapi.com/impf/c623828/v623828077/214b6/QwXkQS5lDMg.jpg?size=456x600&quality=96&sign=a99f6fa7235832e7a631b1704f2d29bc&type=album"},
    { id: 3, title: 'Alchemy of Souls', year: 2022, genre: 'Fantasy', image: "https://doramakun.ru/thumbs/users/9205/111-FOTO/2022/News/Gf2BHy7taAk-min_1668280698-1338.jpg"},
  ]);

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
      setShowModal(true);
    };
   const closeModal = () => {
      setShowModal(false);
   }
   
  return (
    <div className="container">
      <h2>Movie List</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {movies.map((movie) => (
          <Movie
            id={movie.id}
            image={movie.image}
            title={movie.title}
            year={movie.year}
            genre={movie.genre}
            onOpenModal={openModal}
          />
        ))}
      </div>

      <Modal
        show={showModal}
        onClose={closeModal}
        title="Some kinda modal title">
        <div className="modal-body">
          <p>What connects them together is that all three series are fantasy</p>
        </div>
      </Modal>
    </div>
  )
}

export default App
