import { useState, useEffect } from 'react';
import { supabase, getConnectionStatus } from '@/lib/supabase';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, XCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

export function SupabaseStatus() {
  const [status, setStatus] = useState<'connected' | 'disconnected' | 'checking'>('checking');
  const [message, setMessage] = useState('Checking connection...');
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const checkConnection = async () => {
      if (!supabase) {
        setStatus('disconnected');
        setMessage(getConnectionStatus());
        setShowAlert(true);
        return;
      }

      try {
        const { error } = await supabase.from('signature_programs').select('count').limit(1);
        if (error) {
          setStatus('disconnected');
          setMessage(`Database error: ${error.message}`);
          setShowAlert(true);
        } else {
          setStatus('connected');
          setMessage('Connected to Supabase');
          setShowAlert(false);
        }
      } catch (err) {
        setStatus('disconnected');
        setMessage('Failed to connect to database');
        setShowAlert(true);
      }
    };

    checkConnection();
  }, []);

  const isProd = typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.PROD;
  if (isProd) {
    return null; // Don't show in production
  }


  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Badge 
              variant={status === 'connected' ? 'default' : 'destructive'}
              className="cursor-help"
              onClick={() => status === 'disconnected' && setShowAlert(!showAlert)}
            >
              {status === 'connected' && <CheckCircle2 className="h-3 w-3 mr-1" />}
              {status === 'disconnected' && <XCircle className="h-3 w-3 mr-1" />}
              {status === 'checking' && <AlertCircle className="h-3 w-3 mr-1 animate-pulse" />}
              {status === 'connected' ? 'DB Connected' : 'DB Disconnected'}
            </Badge>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-xs">{message}</p>
            {status === 'disconnected' && (
              <p className="text-xs mt-1 text-yellow-200">Click for setup help</p>
            )}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {showAlert && status === 'disconnected' && (
        <div className="fixed bottom-20 right-4 z-50 max-w-md animate-in slide-in-from-bottom-5">
          <Alert variant="destructive" className="bg-red-50 border-red-200">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle className="flex items-center justify-between">
              Supabase Not Connected
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowAlert(false)}
                className="h-6 w-6 p-0"
              >
                ×
              </Button>
            </AlertTitle>
            <AlertDescription className="space-y-2">
              <p className="text-sm">{message}</p>
              <div className="flex flex-col gap-2 mt-3">
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => window.open('/setup-guide.html', '_blank')}
                  className="w-full justify-start"
                >
                  <ExternalLink className="h-3 w-3 mr-2" />
                  Open Setup Guide
                </Button>
                <p className="text-xs text-muted-foreground">
                  Or run: <code className="bg-black/10 px-1 rounded">npm run setup</code>
                </p>
              </div>
            </AlertDescription>
          </Alert>
        </div>
      )}
    </>
  );
}
