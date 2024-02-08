import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure} from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure('Molimo vas popunite sva polja.'));
    }
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      if(res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (

    <div className='min-h-screen mt-20'>
      <div className='flex justify-center p-3 max-w-3xl mx-auto'> 
        <div>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit} >
            <div>
              <Label value='Tvoja email adresa' />
              <TextInput type='email' placeholder='Email' id='email' onChange={handleChange} />
            </div>
            <div>
              <Label value='Tvoja lozinka' />
              <TextInput type='password' placeholder='********' id='password' onChange={handleChange} />
            </div>
            <Button gradientDuoTone='purpleToBlue' type='submit' disabled={loading} >
              {
                loading ? (
                  <>
                    <Spinner size='sm' />
                    <span className='pl-3'>Ucitavanje...</span>
                  </>
                ) : (
                  'Prijavite se'
                )
              }
            </Button>
            <OAuth />
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Nemate profil?</span>
            <Link to='/sign-up' className='text-blue-800 hover:underline'>
              Registrujte se
            </Link>
          </div>
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}