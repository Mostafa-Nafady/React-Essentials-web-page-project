
const reactDescription = ["Fundamentals", "core", "cursial"];
function getRandomInt(max)
{
  return Math.floor(Math.random()*(max+1))
}


export default function Header()
{
  const changeWords = reactDescription[getRandomInt(2)];
  const img = "src/assets/react-core-concepts.png";
  return (
     <header>
        <img src={img} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {changeWords} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
  
}