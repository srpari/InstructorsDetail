import './App.css';
import Instructor from './components/instructors'
import Reviews from './components/reviews'

function App() {
  return (
    <div className="App">
      <main>
      <section className="container">
      <div className='title'>
          <h2>Our Instructors</h2>
          <div className='underline'></div>         
      </div>   
      <Instructor/>
      </section>
      </main>
      {/* <section className="reviews">
        <Reviews/>
      </section> */}
    </div>
  );
}

export default App;
