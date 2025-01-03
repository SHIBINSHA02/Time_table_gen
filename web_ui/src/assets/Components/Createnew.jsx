import React, { useState } from 'react';

const Createnew = () => {
  // State to control the visibility of the modal and to store form data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  // Function to handle modal open
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to handle modal close
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle form submission (you can later handle it to send data to an API)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Project Created!\nName: ${projectName}\nDescription: ${projectDescription}`);
    closeModal();
  };

  return (
    <div>
      {/* Button to open modal */}
      <button
        className="bg-gradient-to-r from-[#FDC8C4] to-[#AFD8D2] text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-lg transform transition-all hover:scale-105 hover:from-[#E79FA0] hover:to-[#CAEBE4] focus:outline-none"
        onClick={openModal}
      >
        Create New Project
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">Create a New Project</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="projectName" className="block text-lg mb-2">
                  Project Name
                </label>
                <input
                  type="text"
                  id="projectName"
                  className="w-full p-2 border rounded-lg"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="projectDescription" className="block text-lg mb-2">
                  Project Description
                </label>
                <textarea
                  id="projectDescription"
                  className="w-full p-2 border rounded-lg"
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#FDC8C4] to-[#AFD8D2] text-white py-2 px-6 rounded-lg text-lg font-semibold shadow-lg transform transition-all hover:scale-105 hover:from-[#E79FA0] hover:to-[#CAEBE4]"
                >
                  Create
                </button>
                <button
                  type="button"
                  className="bg-gray-500 text-white py-2 px-6 rounded-lg text-lg font-semibold shadow-lg"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Createnew;
