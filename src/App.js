import './App.css';
import Person from './components/Person';

const personOne = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 45,
  hairColor: 'Black'
}

const personTwo = {
  firstName: 'John',
  lastName: 'Smith',
  age: 88,
  hairColor: 'Black'
}

const personThree = {
  firstName: 'Millard',
  lastName: 'Fillmore',
  age: 50,
  hairColor: 'Brown'
}

const personFour = {
  firstName: 'Maria',
  lastName: 'Smith',
  age: 62,
  hairColor: 'Brown'
}

function App() {
  return (
    <fieldset>
      <legend>Big Inversion</legend>
      <Person firstName ={personOne.firstName} lastName ={personOne.lastName} age ={personOne.age} hairColor ={personOne.hairColor}/>
      <Person firstName ={personTwo.firstName} lastName ={personTwo.lastName} age ={personTwo.age} hairColor ={personTwo.hairColor}/>
      <Person firstName ={personThree.firstName} lastName ={personThree.lastName} age ={personThree.age} hairColor ={personThree.hairColor}/>
      <Person firstName ={personFour.firstName} lastName ={personFour.lastName} age ={personFour.age} hairColor ={personFour.hairColor}/>
    </fieldset>
  );
}

export default App;
