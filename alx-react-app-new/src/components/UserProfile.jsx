import './UserProfile.css';

const UserProfile = (props) => {
  return (
    <div style={{ border: '2px solid #ccc', borderRadius: '10px', padding: '15px', margin: '20px auto', maxWidth: '400px' }}>
      <h2 style={{ color: 'teal', marginBottom: '10px' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p style={{ fontStyle: 'italic', color: '#555' }}>{props.bio}</p>
    </div>
  );
};

export default UserProfile;