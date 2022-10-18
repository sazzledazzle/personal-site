import ProfileMobile from "../assets/images/profile-sarah-round.png";
import ProfileMobile2x from "../assets/images/profile-sarah-round-2x.png";
import ProfileDesktop from "../assets/images/profile-sarah-lg.png";
import ProfileDesktop2x from "../assets/images/profile-sarah-lg-2x.png";

const ProfileImage = () => {
  return (
    <picture>
      <source media="(min-width: 700px)" srcSet={`${ProfileDesktop} 700w, ${ProfileDesktop2x} 1400w`} />
      <source srcSet={`${ProfileMobile} 250w, ${ProfileMobile2x} 500w`} />
      <img src={ProfileMobile} alt="Headshot of Sarah Clements smiling" />
    </picture>
  );
};

export default ProfileImage;
