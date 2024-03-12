"use client";
import { useState } from 'react';
import generateSequence from '@/lib/generateSequence';

const SequenceView = () => {
  const [sequence, setSequence] = useState([]);


  const [increment1, setIncrement1] = useState(0);
  const [start1, setStart1] = useState(0);
  const [increment2, setIncrement2] = useState(0);
  const [start2, setStart2] = useState(0);

  //Generate the Sequence
  const handleGenerateSequence = () => {
    const generatedSequence = generateSequence(increment1, start1);
    setSequence(generatedSequence);
  };



  //Handling Number Inputs
  const handleIncrementChange1 = (event) => {
    setIncrement1(parseInt(event.target.value, 10));
  };


  const handleStartChange1 = (event) => {
    setStart1(parseInt(event.target.value, 10));

  };

  const handleIncrementChange2 = (event) => {
    setIncrement2(parseInt(event.target.value, 10));
  };


  const handleStartChange2 = (event) => {
    setStart2(parseInt(event.target.value, 10));

  };





  return (
    <>

      <section>

        <div className="overflow-x-auto m-6">

          <button
          className="bg-slate-700 text-white rounded px-2 py-1 m-2"
          onClick={handleGenerateSequence}>Generate Sequence</button>

          <table className="border border-black border-collapse text-center text-sm">
            <thead>
              <tr className="bg-gray-200">
                <td className="border border-black border-collapse w-16">Line No.</td>
                <td className="border border-black border-collapse">
                  <form id="pairInputs1">
                    <input
                      id="unit1"
                      type="number"
                      min={1}
                      max={9}
                      className="w-12 block border outline-gray-700 focus:outline-black text-center m-2 rounded"
                      value={increment1}
                      onChange={handleIncrementChange1}
                    />
                    <input
                      id="tens1"
                      type="number"
                      min={10}
                      max={99}
                      className="w-12 block border outline-gray-700 focus:outline-black text-center m-2 rounded"
                      value={start1}
                      onChange={handleStartChange1}
                    />
                  </form>
                </td>
                <td className="border border-black border-collapse">
                  <form id="pairInputs2">
                    <input
                      id="unit2"
                      type="number"
                      min={1}
                      max={9}
                      className="w-12 block border outline-gray-700 focus:outline-black text-center m-2 rounded"
                      value={increment2}
                      onChange={handleIncrementChange2}
                    />
                    <input
                      id="tens2"
                      type="number"
                      min={10}
                      max={99}
                      className="w-12 block border outline-gray-700 focus:outline-black text-center m-2 rounded"
                      value={start2}
                      onChange={handleStartChange2}
                    />
                  </form>
                </td>
              </tr>
            </thead>
            <tbody>
              {sequence.map((value, index) => (
                <tr key={index} className="border border-black border-collapse">
                  <td className="border border-black border-collapse w-16 text-sm">
                    Line {index + 1}
                  </td>
                  <td className="border border-black border-collapse">
                    {sequence[index]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default SequenceView;