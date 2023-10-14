import C1 from './components/C1';
import './App.css';

function App() {
  const colors=[
    {backgroundColor:'red'},
    {backgroundColor:'blue'},
    {backgroundColor:'green'},
    {backgroundColor:'yellow'},
    {backgroundColor:'pink'},
    {backgroundColor:'brown'},
    {backgroundColor:'darkblue'},
    {backgroundColor:'darkgreen'},
    {backgroundColor:'aqua'},
    {backgroundColor:'gray'},
    {backgroundColor:'orange'},
    {backgroundColor:'purple'}
  ]
  return (
    <div>
      <C1 colors={colors}></C1>
    </div>
  );
}

export default App;
