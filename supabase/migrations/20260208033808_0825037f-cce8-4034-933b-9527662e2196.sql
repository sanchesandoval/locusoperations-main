CREATE TABLE public.leak_finder_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  answers jsonb NOT NULL,
  category_scores jsonb NOT NULL,
  score integer NOT NULL,
  result_label text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.leak_finder_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts"
  ON public.leak_finder_submissions
  FOR INSERT
  WITH CHECK (true);