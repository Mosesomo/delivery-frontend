import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const clientId = import.meta.env.VITE_REACT_GOOGLE_CLIENT
const api_uri = import.meta.env.VITE_REACT_API_URI

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const responseGoogle = async (credentialResponse) => {
    console.log(credentialResponse);
    const { credential } = credentialResponse;

    try {
      // Send the credential (id_token) to backend for verification and to fetch user data
      const res = await axios.post(`${api_uri}/google/auth/`, { id_token: credential });
      
      // Store the user data in sessionStorage
      localStorage.setItem('user', JSON.stringify(res.data));
      
      // Redirect to the manage customers page or wherever needed
      navigate('/manage-customers');
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  };

  const onFailure = (error) => {
    if (error.error === 'popup_closed_by_user') {
      alert('Login popup closed. Please try again.');
    } else {
      console.error('Login failed:', error);
    }
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="flex items-center justify-center">
        <div className="w-[372px] md:w-[498px] p-2 md:p-6 mt-12">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-600">Log In</h2>
          <div className="bg-white shadow-lg text-gray-700 font-semibold rounded-lg p-7 mb-4 border-[1px]">
            <GoogleLogin
              onSuccess={responseGoogle}
              onError={onFailure}
              useOneTap
              className="w-full flex items-center justify-center bg-white shadow-lg text-gray-700 font-semibold rounded-lg p-2 mb-4 border-[1px]"
            />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;