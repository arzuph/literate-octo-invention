import { useContext} from 'react'
import { CalcContext} from '../context/CalcContext';
const MyScreen = () => {
    const { calc } = useContext(CalcContext);
    return (
        <div className="screen" max={70} mode="single">{calc.num ? calc.num : calc.res}</div>
    )
}
export default MyScreen