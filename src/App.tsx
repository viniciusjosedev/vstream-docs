import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('about');
	const [isOnline, setIsOnline] = useState(true)

	useEffect(() => {
		(async () => {
			const response = await fetch('https://vstream-api.vinion.dev/status');

			setIsOnline(response.ok)
		})()
	}, []) 

  return (
    <main className="flex flex-col min-h-screen w-full bg-gray-900 text-gray-100">
      <header className="bg-gray-800 p-6 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <h1 className="text-3xl font-bold text-indigo-400">vstream-api</h1>
            <span className={`ml-4 px-3 py-1 bg-${isOnline ? 'green' : 'red'}-600 text-white text-xs rounded-full`}>{isOnline ? 'ONLINE' : 'OFFLINE'}</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="https://github.com/viniciusjosedev/vstream-api" className="hover:text-indigo-400 transition-colors">GitHub</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="container mx-auto p-6 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
              <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">Navigation</h2>
              <ul className="space-y-2">
                {['about', 'features', 'installation', 'usage', 'contact'].map((tab) => (
                  <li key={tab}>
                    <button
                      onClick={() => setActiveTab(tab)}
                      className={`w-full text-left px-4 py-2 rounded ${
                        activeTab === tab ? 'bg-indigo-600 text-white' : 'hover:bg-gray-700'
                      } transition-colors`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              {activeTab === 'about' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-indigo-400">About vstream-api</h2>
                  <p className="mb-4">
                    The <strong>vstream-api</strong> is an API developed to interact with YouTube videos. 
                    This project is currently in Beta development status and aims to fetch video information and download them.
                  </p>
                  <p>
                    In addition to the code being open source, the API is public, anyone can access it at: 
                    <a href="https://vstream-api.vinion.dev" className="text-indigo-400 ml-2 hover:underline">vstream-api.vinion.dev</a>
                  </p>
                </div>
              )}

              {activeTab === 'features' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-indigo-400">Features</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Retrieve video information from YouTube</li>
                    <li>Download videos in selected formats</li>
                    <li>Public API access for anyone</li>
                    <li>Built with NestJS for robust performance</li>
                  </ul>
                  
                  <div className="mt-6 bg-gray-700 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">NestJS</span>
                      <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">@distube/ytdl-core</span>
                      <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">TypeScript</span>
                      <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">Docker</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'installation' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-indigo-400">Installation</h2>
                  
                  <div className="space-y-4">
                    <p>To install and run this project locally, follow the steps below:</p>
                    
                    <div className="mt-4">
                      <div className="mb-2">1. Clone the repository:</div>
                      <div className="bg-gray-900 p-3 rounded font-mono text-sm">
                        git clone https://github.com/viniciusjosedev/vstream-api.git
                      </div>
                    </div>
                    
                    <div>
                      <div className="mb-2">2. Navigate to the project directory:</div>
                      <div className="bg-gray-900 p-3 rounded font-mono text-sm">
                        cd vstream-api
                      </div>
                    </div>
                    
                    <div>
                      <div className="mb-2">3. Install dependencies:</div>
                      <div className="bg-gray-900 p-3 rounded font-mono text-sm">
                        npm install
                      </div>
                    </div>
                    
                    <div>
                      <div className="mb-2">4. Start the server:</div>
                      <div className="bg-gray-900 p-3 rounded font-mono text-sm">
                        npm run start
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <div className="mb-2">Or use Docker:</div>
                      <div className="bg-gray-900 p-3 rounded font-mono text-sm">
                        npm run docker:up
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'usage' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-indigo-400">How to Use</h2>
                  
                  <p className="mb-4">
                    The API allows you to interact with YouTube videos through simple API calls. 
                    Here's the basic workflow:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-700 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">1. Get your token</h3>
                      <div className="bg-gray-900 p-3 rounded font-mono text-sm mb-2">
                        POST /auth/generate-simple-token
                      </div>
                      <p>This will return an access token to use in subsequent requests.</p>
                    </div>
                    
                    <div className="bg-gray-700 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">2. Get video information</h3>
                      <div className="bg-gray-900 p-3 rounded font-mono text-sm mb-2">
                        GET /video/info?url=youtube.com/watch?v=xxx&fields=title,channel,thumbnail,formats
                      </div>
                      <p>This provides information about the video, including available formats.</p>
                    </div>
                    
                    <div className="bg-gray-700 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">3. Download the video</h3>
                      <div className="bg-gray-900 p-3 rounded font-mono text-sm mb-2">
                        POST /video/download
                      </div>
                      <p>Choose a format URL from the previous response and download the video.</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <p className="text-yellow-400">
                      Note: For detailed download examples using JavaScript (browser or Node.js), see the complete {' '}
											<a 
												href='https://github.com/viniciusjosedev/vstream-api?tab=readme-ov-file#how-to-use' 
												target='__blank'
												className='italic underline'
											>
												documentation
											</a>
											.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'contact' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-indigo-400">Contact</h2>
                  
                  <p className="mb-6">
                    For more information, contact the project's creator:
                  </p>
                  
                  <div className="bg-gray-700 p-6 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-xl font-bold">
                        VJ
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold">Vinicius José</h3>
                        <a href="mailto:viniciusjosedev@gmail.com" className="text-indigo-400 hover:underline">
                          viniciusjosedev@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">License</h3>
                    <p>This project is licensed under the Educational Use License.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 p-6 shadow-inner mt-8">
        <div className="container mx-auto text-center text-gray-400">
          <p>© 2025 vstream-api | Created by Vinicius José</p>
          <p className="mt-2 text-sm">
            Status: <span className={`text-${isOnline ? 'green' : 'red'}-400`}>{isOnline ? 'Online' : 'Offline'}</span> | 
            <a href="https://github.com/viniciusjosedev/vstream-api" className="ml-2 hover:text-indigo-400 transition-colors">
              View on GitHub
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}

export default App;