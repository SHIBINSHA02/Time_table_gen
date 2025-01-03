import React, { Component } from 'react';
import Createnew from  './Createnew';

export default class Home extends Component {
  render() {
    return (
      <div className="h-screen flex flex-col items-center justify-center p-6 ">
        <h1 className="text-4xl font-bold mb-6">My Projects</h1>
        <Createnew />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mt-6">
          {/* Project Card Example */}
          <div className="border rounded-lg shadow-lg p-4 bg-gradient-to-r">
            <h2 className="text-xl font-semibold mb-2">Project 1</h2>
            <p className="text-gray-600 mb-4">This is a brief description of Project 1.</p>
            <button
              className=" text-white p-2 rounded-lg"
              style={{
                backgroundColor:'#973ED7',
              }}
              onClick={() => (window.location.href = '/project1')}
            >
              View Project
            </button>
          </div>

          <div className="border rounded-lg shadow-lg p-4 bg-gradient-to-r">
            <h2 className="text-xl font-semibold mb-2">Project 2</h2>
            <p className="text-gray-600 mb-4">This is a brief description of Project 2.</p>
            <button
              className=" text-white p-2 rounded-lg" 
              style={{
                backgroundColor:'#973ED7',
              }}
              onClick={() => (window.location.href = '/project2')}
            >
              View Project
            </button>
          </div>
        </div>
      </div>
    );
  }
}
