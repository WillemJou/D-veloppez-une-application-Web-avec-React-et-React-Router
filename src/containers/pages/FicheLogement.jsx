import Header from '../layout/header'
import ApartmentSheets from '../../components/apartmentSheets'
import Footer from '../layout/footer'
import "../../assets/data.json"
import '../../styles/index.css'

function FicheLogement() {  
  
  
  return (
    <>
    <div className='margin'>
    <Header />
    <ApartmentSheets />
    </div>
    <Footer />
    </>
  )
}

export default FicheLogement;