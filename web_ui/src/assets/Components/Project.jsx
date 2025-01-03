import React, { Component } from 'react';

class Project extends Component {
  state = {
    activeTab: 'admin', // Set default tab to 'admin'
  };

  handleTabChange = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const { activeTab } = this.state;

    return (
      <div className="p-6">
        <div className="flex space-x-4 mb-6">
          <button
            className={`px-4 py-2 rounded-md text-white ${
              activeTab === 'admin' ? 'bg-teal-500' : 'bg-gray-200'
            } hover:bg-teal-400`}
            onClick={() => this.handleTabChange('admin')}
          >
            Admin Panel
          </button>
          <button
            className={`px-4 py-2 rounded-md text-white ${
              activeTab === 'teacher' ? 'bg-teal-500' : 'bg-gray-200'
            } hover:bg-teal-400`}
            onClick={() => this.handleTabChange('teacher')}
          >
            Teacher Panel
          </button>
          <button
            className={`px-4 py-2 rounded-md text-white ${
              activeTab === 'class' ? 'bg-teal-500' : 'bg-gray-200'
            } hover:bg-teal-400`}
            onClick={() => this.handleTabChange('class')}
          >
            Class Panel
          </button>
        </div>

        <div className="border border-gray-300 rounded-lg p-6">
          {activeTab === 'admin' && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Admin Panel</h2>
              <p className="text-gray-700">Monitor tasks and manage the project.</p>
            </div>
          )}
          {activeTab === 'teacher' && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Teacher Panel</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Teacher Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-400"
                >
                  Save Teacher
                </button>
              </form>
            </div>
          )}
          {activeTab === 'class' && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Class Panel</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Class Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-400"
                >
                  Save Class
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Project;
