-- Create table for storing leak finder quiz submissions
CREATE TABLE public.leak_finder_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  score INTEGER NOT NULL,
  tier TEXT NOT NULL,
  answers JSONB NOT NULL,
  email TEXT
);

-- Enable RLS (but allow public inserts since this is a landing page with no auth)
ALTER TABLE public.leak_finder_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert submissions (public landing page)
CREATE POLICY "Allow public inserts"
ON public.leak_finder_submissions
FOR INSERT
WITH CHECK (true);

-- No select/update/delete policies - data only accessible via Lovable Cloud backend UI