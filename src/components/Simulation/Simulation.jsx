const Simulation = ({props}) => {
  console.log(props);
  return (
    <div style={{color: "black"}} data-testid='Simulation'>
      <h1>The simulation is about to start!</h1>
    </div>
  );
};

export default Simulation;
