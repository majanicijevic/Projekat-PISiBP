import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Molimo vas popunite sva polja.');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok) {
        navigate('/sign-in');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (

    <div className='min-h-screen mt-20'>
      <div className='flex justify-center p-3 max-w-3xl mx-auto'> 
        <div>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit} >
            <div>
              <Label value='Tvoje korisnicko ime' />
              <TextInput type='text' placeholder='Korisnicko ime' id='username' onChange={handleChange} />
            </div>
            <div>
              <Label value='Tvoja email adresa' />
              <TextInput type='email' placeholder='Email' id='email' onChange={handleChange} />
            </div>
            <div>
              <Label value='Tvoja lozinka' />
              <TextInput type='password' placeholder='Lozinka' id='password' onChange={handleChange} />
            </div>
            <Button color='gray' type='submit' disabled={loading} >
              {
                loading ? (
                  <>
                    <Spinner size='sm' />
                    <span className='pl-3'>Ucitavanje...</span>
                  </>
                ) : (
                  'Registrujte se'
                )
              }
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Vec imate profil?</span>
            <Link to='/sign-in' className='text-blue-800'>
              Prijavite se
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