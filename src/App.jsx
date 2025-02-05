import Header from './Header.jsx'
import JeffContact from './components/JeffContact.jsx';
import JeffHeader from './components/JeffHeader.jsx';
import JeffSkill from './components/JeffSkills.jsx';
import JeffWE from './components/JeffWE.jsx';
function App() {
  

  return (
  <>
    <JeffHeader/>
    <JeffContact email="jeffieracal123@gmail.com" phone="09387222890" address="Brgy 6, Banadero, Legazpi City Albay"/>
    <JeffSkill/>
    <JeffWE/>
  </>
    
  );
}

export default App
