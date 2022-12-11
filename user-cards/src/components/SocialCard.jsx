import '../css/SocialCard.css'
import Location from './Location'

const SocialCard = ({ userData }) => {
  return (
    <>
      <div className="card">
        <div className="card__title">
          {userData.name.first} {userData.name.last}
        </div>
        <div className="card__body">
          <Location location={userData.location} />
          <div className="card__image">
            <img src={userData.picture.medium} alt='' />
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialCard;
