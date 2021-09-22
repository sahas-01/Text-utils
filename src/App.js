import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar text="TextUtils" />
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    </>
  );
}

export default App;
