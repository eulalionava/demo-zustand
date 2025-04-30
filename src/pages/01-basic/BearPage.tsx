import { useShallow } from 'zustand/shallow';
import { WhiteCard } from '../../components';
import { useBearsStore } from '../../stores';

export const BearPage = () => {
  

  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">

        <BlackBears/>

        <PolarBears/>

        <PandaBears/>

        <BearsDisplay/>
      </div>

    </>
  );
};

export const BlackBears = ()=>{
  const blackBears = useBearsStore(state=>state.blackBears);
  const incrementBlackBears = useBearsStore(state=>state.increaseBlackBears);

  return (
    <WhiteCard centered>
      <h2>Osos Negros</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={()=>incrementBlackBears(+1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10">{blackBears}</span>
        <button onClick={()=>incrementBlackBears(-1)}>-1</button>
      </div>

    </WhiteCard>
  )
}

export const PolarBears = ()=>{
  const polarBears = useBearsStore(state=>state.polarBears);
  const incrementPolarBears = useBearsStore(state=>state.increasePolarBears);

  return (
    <WhiteCard centered>
      <h2>Osos Polares</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={()=>incrementPolarBears(+1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10">{polarBears}</span>
        <button onClick={()=>incrementPolarBears(+1)}>-1</button>

      </div>
    </WhiteCard>
  )
}

export const PandaBears = ()=>{
  const pandaBears = useBearsStore(state=>state.pandaBears);
  const incrementPandaBears = useBearsStore(state=>state.increasePandaBears);

  return (
    <WhiteCard centered>
      <h2>Osos Pandas</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={()=>incrementPandaBears(+1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10">{pandaBears}</span>
        <button onClick={()=>incrementPandaBears(-1)}>-1</button>
      </div>

    </WhiteCard>
  )
}



export const BearsDisplay = () => {
  const bears = useBearsStore(state=>state.bears);
  const doNothing = useBearsStore(useShallow(state=>state.doNothing));
  const addBear = useBearsStore(useShallow(state=>state.addBear));
  const clearBears = useBearsStore(useShallow(state=>state.clearBears));

  return (
    <WhiteCard>
      <h1>Osos</h1>
      <button onClick={doNothing}>Do Nothin</button>
      <button className='mt-2' onClick={addBear}>Agregar oso</button>
      <button className='mt-2' onClick={clearBears}>Borrar osos</button>
      <pre>
        {JSON.stringify(bears,null,2)}
      </pre>
    </WhiteCard>
  )
}
