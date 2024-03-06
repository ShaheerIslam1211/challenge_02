import React from 'react';
import { useState } from 'react';

export default function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const date = new Date('March 01 2024');
  date.setDate(date.getDate() + count);

  function handleNext() {
    const nextCurrentStep = step + 1;
    if (step <= nextCurrentStep) setStep(step + 1);
  }

  function handlePrevious() {
    const previousCurrentStep = step - 1;
    if (step >= previousCurrentStep) setStep(step - 1);
  }

  function handleNextCount() {
    setCount(count + step);
  }

  function handlePreviousCount() {
    setCount(count - step);
  }

  function handleScroll(event) {
    setStep(Number(event.target.value));
  }

  return (
    <>
      <div>
        <div className='step'>
          <div className='slidecontainer'>
            <p>Default step range slider:</p>
            <input
              type='range'
              min='0'
              max='10'
              value={step}
              onChange={handleScroll}
            ></input>
            <span> {step} </span>
          </div>

          {/* <button
            className='btn btn-dark'
            onClick={handlePrevious}
          >
            -
          </button>
          <span> Step: {step} </span>
          <button
            className='btn btn-success'
            onClick={handleNext}
          >
            +
          </button> */}
        </div>

        <div className='count'>
          <button
            className='btn btn-dark'
            onClick={handlePreviousCount}
          >
            -
          </button>
          <input
            className='input'
            type='text'
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          ></input>
          {/* <span> Count: {count} </span> */}
          <button
            className='btn btn-success'
            onClick={handleNextCount}
          >
            +
          </button>
        </div>

        <p className='date'>
          <span>
            {count === 0
              ? 'Today is '
              : count > 0
              ? `${count} days from today is `
              : `${count} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>

        <button
          style={{ marginLeft: '40%' }}
          className='btn btn-dark'
          onClick={(e) => {
            setCount(0);
            setStep(0);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}
