import { useState } from 'react'
import Modal from './components/Modal/Modal';
import Movie from './components/Movie/Movie';
import {ButtonProps, MovieProps, AlertProps} from './types';
import Alert from './components/Alert/Alert';


function App() {

  const [movies] = useState<MovieProps[]>([
    { id: 1, title: ' Story of Kunning Palace', year: 2023, genre: 'Drama, Fantasy',image: "https://cdn.yesasia.ru/wp-content/uploads/2023/11/008t7yzply1hjmlnpmwh7j31jk2o2npf.jpg"},
    { id: 2, title: 'Mulan', year: 1998, genre: 'Drama, Adventures, Fantasy', image: "https://sun9-1.userapi.com/impf/c623828/v623828077/214b6/QwXkQS5lDMg.jpg?size=456x600&quality=96&sign=a99f6fa7235832e7a631b1704f2d29bc&type=album"},
    { id: 3, title: 'Alchemy of Souls', year: 2022, genre: 'Fantasy', image: "https://doramakun.ru/thumbs/users/9205/111-FOTO/2022/News/Gf2BHy7taAk-min_1668280698-1338.jpg"},
  ]);

  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState<AlertProps[]>([
    {id: 1, title: 'I go on too many dates. But I cant make em stay. At least thats what people say, mm-mm'},
  ]);
  const [showAlert2] = useState<AlertProps[]>([
    {id: 2, title: ' I stay out too late. Got nothin in my brain. Thats what people say, mm-mm. Thats what people say, mm-mm '},
  ]);
  const openModal = () => {
      setShowModal(true);
    };
  const closeModal = () => {
      setShowModal(false);
  }
  const closeAlert = (id: number) => {
    const deleteMovies = showAlert.filter((alert) => alert.id !== id);
    setShowAlert(deleteMovies);
  };
   const handleContinue = () => {
     const maxId = Math.max(...showAlert.map(alert => alert.id), 0);
     closeModal();
     setShowAlert((prevAlerts) => [
         ...prevAlerts,
         { id: maxId + 1,  title: "Thats what people say, mm-mm"},
     ]);
   };

   const handleClose = () => {
     closeModal();
   };

  const buttons: ButtonProps[] = [
      { type: 'primary', label: 'Continue', onClick: handleContinue },
      { type: 'danger', label: 'Close', onClick: handleClose },
  ];

  return (
    <div className="container">
      <h2>Movie List</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {movies.map((movie) => (
          <Movie
            key={movie.id}
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
        title="Chinese dramas"
        buttons={buttons}>
        <div className="modal-body">
          <p>What connects them together is that all three series are fantasy</p>
        </div>
      </Modal>

      {showAlert.map((alert) => (
         <Alert key={alert.id} type="warning" onDismiss={() => closeAlert(alert.id)}>
           {alert.title}
         </Alert>
      ))}
       {showAlert2.map((alert) => (
          <Alert key={alert.id} type="danger" >
            {alert.title}
          </Alert>
       ))}

    </div>
  )
}

export default App
