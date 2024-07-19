// Import React and necessary hooks
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Example functional component using React hooks
const App = () => {
    // State variables for interactive elements
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Event handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Example: Submit data to backend or perform other actions
        console.log('Form submitted:', { name, email, message });
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="border border-gray-300 rounded-md py-2 px-3 w-full"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="border border-gray-300 rounded-md py-2 px-3 w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                        <textarea
                            id="message"
                            className="border border-gray-300 rounded-md py-2 px-3 w-full"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

// Render the App component into the root div
ReactDOM.render(<App />, document.getElementById('root'));



export default App;
