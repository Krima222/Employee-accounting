import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-forms/employees-add-forms';

import './app.css';

function App() {

    const data = [
        {name: 'Anna', salary: 800, increase: true, id: 1},
        {name: 'Stas', salary: 3000, increase: false, id: 2},
        {name: 'Anna', salary: 5000, increase: false, id: 3},
    ];
    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;