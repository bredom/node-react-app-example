import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container'>
      <ul>
        <li>
          <Link to='/todos'>Todos</Link>
        </li>
        <li>
          <Link to='/about'>About </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
