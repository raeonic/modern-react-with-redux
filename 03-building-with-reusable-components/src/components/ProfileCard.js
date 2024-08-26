function ProfileCard({ title, handle, image, description }) {
  // 1. Deconstructing props inline...
  // function ProfileCard(props) {...
  // const { title, handle } = props;

  // 2. Deconstructing props in Header...
  // function ProfileCard({ title, handle }) {...

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="pda logo" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <div className="title is-4">Title: {title}</div>
          <div className="subtitle is-6">Title: {handle}</div>
        </div>
        <div className="content">{description}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
