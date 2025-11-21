'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/auth/use-auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { toast } from 'sonner';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signIn(email, password);
      toast.success('Welcome to AMT Portal!');
    } catch (error) {
      toast.error('Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-gradient-to-br from-amt-very-dark via-amt-dark to-amt-blue-gray p-4'>
      <Card className='w-full max-w-md border-amt-blue-gray/20'>
        <CardHeader className='space-y-1'>
          <div className='mb-4 flex items-center justify-center'>
            <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-amt-red text-xl font-bold text-amt-white'>
              AMT
            </div>
          </div>
          <CardTitle className='bg-gradient-to-r from-amt-red to-amt-accent bg-clip-text text-center text-2xl font-bold text-transparent'>
            Welcome to AMT Portal
          </CardTitle>
          <CardDescription className='text-center'>
            Sign in to access the AnalyzeMyTeam Platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='your@email.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='password'>Password</Label>
              <Input
                id='password'
                type='password'
                placeholder='••••••••'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <Button
              type='submit'
              className='w-full bg-amt-red hover:bg-amt-red/90'
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>

          <div className='mt-6 rounded-lg border border-amt-accent/20 bg-amt-accent/10 p-4'>
            <p className='mb-2 text-sm font-medium'>Demo Credentials:</p>
            <ul className='space-y-1 text-xs text-muted-foreground'>
              <li>denauld@analyzemyteam.com / demo</li>
              <li>courtney@analyzemyteam.com / demo</li>
              <li>mel@analyzemyteam.com / demo</li>
              <li>alexandra@analyzemyteam.com / demo</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
