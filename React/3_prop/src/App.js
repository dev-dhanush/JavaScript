import './App.css';

import PersonDefaultDemo from './Components/DefaultProp'

import ArrayProps from './Components/ArrayAsProps'

import PersonBasicDetails from './Components/PersonBasicDetails_FunctionComponent'

// import PersonJobDetails from './Components/PersonJobDetails_FunctionComponent'

import ParentSampleRenderProps from './Components/RenderPropDemo'

import PersonCompany from './Components/RenderPropAdvanceDemoWithStateAndSubChild'

import GrandParent from './Components/Live';
import GrandParents from './Components/LiveMine';

function App() {
  return (
    <>
    {/* Default Prop - Class Componet with Props */}
    {/* <div >
      <PersonDefaultDemo></PersonDefaultDemo>
      <PersonDefaultDemo name="Abhishek Pujara" gender="Male"></PersonDefaultDemo>
      <PersonDefaultDemo name="Nidhi Pujara" gender="Female"></PersonDefaultDemo>
      <PersonDefaultDemo name="Jay Poojara" gender="Male"></PersonDefaultDemo>
    </div> */}

    {/* // Array as Props */}
    {/* <ArrayProps></ArrayProps> */}

    {/* Functional Component Prop */}
    {/* <div>
      <PersonBasicDetails></PersonBasicDetails>
    </div> */}

    {/* Render Props */}
    {/* <ParentSampleRenderProps/> */}

    {/* Render Props */}
    {/* <PersonCompany/> */}

    <GrandParents />
    </>
  );
}

export default App;
