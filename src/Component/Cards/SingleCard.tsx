

const SingleCard = ({name, age, dream}) => {
    return (
        <div className=' border-2 p-4'>
            <h2>Name : {name}</h2>
            <h2>Age : {age}</h2>
            <h2>Dream : {dream}</h2>
        </div>
    );
};

export default SingleCard;