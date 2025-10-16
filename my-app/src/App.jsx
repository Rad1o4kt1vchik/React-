import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Book from '../components/pages/Book';
import AddBook from '../components/pages/AddBook';

const App = () => (
  <Router>
    <header>
      <nav>
        <Link to="/book">Book</Link>
        <Link to="/addbook">Add Book</Link>
      </nav>
    </header>
    <Routes>
      <Route path="/book" element={<Book />} />
      <Route path="/addbook" element={<AddBook />} />
      <Route path="*" element={<h2>404 - Page Not Found</h2>} />
    </Routes>
  </Router>
);

export default App;
