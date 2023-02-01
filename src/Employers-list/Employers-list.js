import EmployersListItem from '../Employers-list-item/Employers-list-item';
import './Employers-list.css'

const EmployersList = () => {
  return (
   <ul className="app-list list-group">
        <EmployersListItem/>
        <EmployersListItem/>
        <EmployersListItem/>
   </ul>
  )
}

export default EmployersList