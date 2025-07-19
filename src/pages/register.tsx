import React from 'react';
import { useHistory, Link as RouterLink } from 'react-router-dom';
import { Card, CardBody, Input, Button, Link, addToast } from '@heroui/react';
import { Icon } from '@iconify/react';
import { useAuth } from '../contexts/auth-context';

const RegisterPage: React.FC = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const { register } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      addToast({
        title: "Error",
        description: "Please fill in all fields",
        severity: "danger",
      });
      return;
    }

    if (password !== confirmPassword) {
      addToast({
        title: "Error",
        description: "Passwords do not match",
        severity: "danger",
      });
      return;
    }

    try {
      setIsLoading(true);
      await register(name, email, password, 'mentee'); // Default role to mentee
      addToast({
        title: "Success",
        description: "Your account has been created. Please check your email to verify your account.",
        severity: "success",
      });
      history.push('/dashboard');
    } catch (error: any) {
      addToast({
        title: "Error",
        description: error.message || "Failed to create account",
        severity: "danger",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-200px)] py-8 px-2 sm:py-12 sm:px-4 bg-gray-50 dark:bg-gray-900">
      <Card className="w-full max-w-sm sm:max-w-md card-shadow border-none mx-2 sm:mx-0">
        <CardBody className="p-4 sm:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Create an account</h1>
            <p className="text-gray-600 text-sm sm:text-base">Join MentorHub to connect with mentors and mentees</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              value={name}
              onValueChange={setName}
              startContent={
                <Icon icon="lucide:user" className="text-default-400 text-lg" />
              }
              isRequired
            />
            
            <Input
              type="email"
              label="Email"
              placeholder="Enter your email"
              value={email}
              onValueChange={setEmail}
              autoComplete="email"
              startContent={
                <Icon icon="lucide:mail" className="text-default-400 text-lg" />
              }
              isRequired
            />
            
            <Input
              type="password"
              label="Password"
              placeholder="Create a password"
              value={password}
              onValueChange={setPassword}
              autoComplete="new-password"
              startContent={
                <Icon icon="lucide:lock" className="text-default-400 text-lg" />
              }
              isRequired
            />
            
            <Input
              type="password"
              label="Confirm Password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onValueChange={setConfirmPassword}
              autoComplete="new-password"
              startContent={
                <Icon icon="lucide:lock" className="text-default-400 text-lg" />
              }
              isRequired
            />

            <Button 
              type="submit" 
              color="primary" 
              className="w-full"
              isLoading={isLoading}
            >
              Create Account
            </Button>
          </form>

          <p className="text-center mt-6 sm:mt-8 text-xs sm:text-sm text-gray-600">
            Already have an account?{' '}
            <Link as={RouterLink} to="/login" color="primary">
              Sign in
            </Link>
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default RegisterPage;
