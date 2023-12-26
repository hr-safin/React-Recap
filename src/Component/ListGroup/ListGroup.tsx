const ListGroup = () => {
  const list = ["newYork", "Dhaka", "Delhi", "Kolkata", "Hello World"];
  return (
    <div>
      <ul className=" list-none">
        {list.map((item) => (
          <li className=" text-lg p-3 border-2">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
