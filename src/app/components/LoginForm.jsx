"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === 'SeqManager' && password === 'blockbuster') {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      router.push('/sequenceView');
    } else {
      alert('Invalid username or password');
    }
  }


  return (
    <>

      <section class="flex items-center justify-center min-h-screen bg-gray-200">
        <div class="main bg-white rounded-lg shadow-md p-10 transition-transform w-96 text-center">
          <h3 class="animate-bounce text-lg my-2">SeqManager Credentials ⚜️ </h3>
          <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter SQManager"
              class="block w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400" required />

            <input placeholder="Enter SQPassword" type="password" value={password} onChange={(e) => setPassword(e.target.value)}
              class="block w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400" required />

            <div class="flex justify-center items-center">
              <button type="submit" class="bg-gray-600 text-white py-3 px-6 rounded-md cursor-pointer transition-colors duration-300 hover:bg-gray-500">
                Submit
              </button>
            </div>
          </form>

        </div>
      </section>

    </>
  )
}

export default LoginForm;