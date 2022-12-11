import '../css/PhoneNumber.css'

const PhoneNumber = ({ number, type }) => {
  return (
    <>
      <div className="phone-number">
        <p>{type}: {number}</p>
      </div>
    </>
  );
};

export default PhoneNumber;