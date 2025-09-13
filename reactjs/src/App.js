import Card from './Components/Cards'
import {data} from './data'

export default function App() {

    console.log(data)
    const showdata = data.map((el) => <Card title={el.title} desc={el.description} />)
    return (
        <div className="App">
            <div>{showdata}</div>
        </div>
    ) ;
}