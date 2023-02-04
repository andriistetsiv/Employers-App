import EmployersListItem from '../Employers-list-item/Employers-list-item';
import './Employers-list.css'

const EmployersList = ({data}) => {

  const elements = data.map (item => {
    return (
      <EmployersListItem name={item.name} salary={item.salary} />
    )
  } )

  return (
   <ul className="app-list list-group">
      {elements}
   </ul>
  )
}

export default EmployersList