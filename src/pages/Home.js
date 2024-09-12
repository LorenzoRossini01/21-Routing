import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("sadad");
  }
  return (
    <>
      <h1>Home Page</h1>
      <button className="button" onClick={navigateHandler}>
        See Error Page
      </button>
    </>
  );
};

export default HomePage;
