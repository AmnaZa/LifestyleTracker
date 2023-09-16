import React, { useState } from 'react';
import LoginModal from './LoginModal';

function ParentComponent() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div>
      {/* Your other components/content */}
      
      <button onClick={openLoginModal}>Open Login Modal</button>

      <LoginModal
        isOpen={isLoginModalOpen}
        onRequestClose={closeLoginModal}
        setUser={setUser}
        user={user}
      />
    </div>
  );
}

export default ParentComponent;
