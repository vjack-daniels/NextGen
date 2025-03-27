import React, { useState } from 'react';

function HomeInput({ onSubmit }) {
  const [address, setAddress] = useState('');
  const [materials, setMaterials] = useState('');
  const [blueprintFile, setBlueprintFile] = useState(null);
  const [homeImageFile, setHomeImageFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ address, materials, blueprintFile, homeImageFile });
  };

  const handleBlueprintUpload = (e) => {
    setBlueprintFile(e.target.files[0]);
  };

  const handleHomeImageUpload = (e) => {
    setHomeImageFile(e.target.files[0]);
  };

  return (
    <div>
      <h2>Enter Your Home Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Address: </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Building Materials: </label>
          <input
            type="text"
            value={materials}
            onChange={(e) => setMaterials(e.target.value)}
            required
          />
        </div>
        <div className="file-upload">
          <h3>Upload Blueprint/Plan of Your Home:</h3>
          <input type="file" accept="image/*" onChange={handleBlueprintUpload} />
        </div>
        <div className="file-upload">
          <h3>Upload a Picture of Your Home:</h3>
          <input type="file" accept="image/*" onChange={handleHomeImageUpload} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HomeInput;
