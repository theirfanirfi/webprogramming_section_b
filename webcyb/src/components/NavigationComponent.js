import {Link} from 'react-router-dom'
const NavigationComponent = () => {

    return (
        <ul>
            <li><Link to="/students">Students</Link></li>
            <li><Link to="/todos">Todos</Link></li>
        </ul>
    )
}

export default NavigationComponent;