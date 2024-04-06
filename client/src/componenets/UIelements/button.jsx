/** @format */
import "./../../styles/button.css";

import PropTypes from "prop-types";

export function Button({ data }) {
  return (
    <>
      <button className='btn'> {data}</button>
    </>
  );
}

export function ButtonBack() {
  return (
    <>
      <button id='back'>
        <svg
          height='16'
          width='16'
          xmlns='http://www.w3.org/2000/svg'
          version='1.1'
          viewBox='0 0 1024 1024'>
          <path d='M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z'></path>
        </svg>
        <span>Back</span>
      </button>
    </>
  );
}

export function ButtonSend({ data }) {
  // Your code here
  return (
    <>
      <button>
        <div className='svg-wrapper-1'>
          <div className='svg-wrapper'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='24'
              height='24'>
              <path fill='none' d='M0 0h24v24H0z'></path>
              <path
                fill='currentColor'
                d='M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z'></path>
            </svg>
          </div>
        </div>
        <span>{data}</span>
      </button>
    </>
  );
}

Button.propTypes = {
  data: PropTypes.string.isRequired,
};
ButtonSend.propTypes = {
  data: PropTypes.string.isRequired,
};
