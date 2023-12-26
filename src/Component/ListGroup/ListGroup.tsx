const ListGroup = () => {
  const list = ["newYork", "Dhaka", "Delhi", "Kolkata", "Hello World"];
  return (
    <div>
      <ul className=" list-none">
        {list.map((item, index) => (
          <li onClick={() => console.log("clicked", item, index)} key={index} className=" text-lg p-3 border-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
