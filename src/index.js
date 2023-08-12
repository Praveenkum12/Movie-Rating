import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import StarRating from './StarRating';

// function Test() {
//   const [movierating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating
//         maxStar={10}
//         message={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
//         defaultRating={3}
//         color={'blue'}
//         onSetRating={setMovieRating}
//       />
//       <p>This movie was rated {movierating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Test />
    <StarRating
      maxStar={5}
      message={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
    /> */}
  </React.StrictMode>
);
