const animals = ["Cat", "Dog", "Elephant", "Cow", "Eagle"];

function AnimalFilter() {
  const filteredAnimals = animals.filter((animal) => animal.startsWith("E"));

  return (
    <ul>
      {filteredAnimals.map((animal, index) => (
        <li key={index}>{animal}</li>
      ))}
    </ul>
  );
}

export default AnimalFilter;
