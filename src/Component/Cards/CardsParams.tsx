
import SingleCard from './SingleCard';

const CardsParams = () => {

    const data = [
        {    
            name : "Hasibur Rahman Safin",
            Age : "21",
            dream : "To Become a web developer",
        },
        {
            name : "Mahi Rahman",
            Age : "21",
            Dream : "TogotoUSA"
        }
    ]
    return (
        <div className=' grid grid-cols-2 gap-10 '>
            {data.map(item => <SingleCard  item={item}  />)}
        </div>
    );
};

export default CardsParams;