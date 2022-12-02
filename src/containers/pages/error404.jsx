
import Header from '../layout/header';
import { Link } from 'react-router-dom'
import '../../styles/error404.css'
import '../../styles/index.css'

function Error() {
  return (
      <>
      <div className='margin'>
        <Header />
        <div className='column'>
            <h1 className='title-error'>404</h1>
            <span className='info-error'>Oups! La page que vous demandez n'existe pas.</span>
            <Link className='home-link' to="/">Retournez vers la page d'accueil</Link>
        </div>
        </div>
      </>
  );
}
 
export default Error