-- BCE early-access waitlist
-- Written to from chdigitals.com.au only (via service role key in API route).
-- Lives in the BCE Supabase project alongside clarity_brain_dumps.

create table if not exists public.bce_waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  name text,
  business_name text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_content text,
  utm_term text,
  referrer text,
  user_agent text,
  created_at timestamptz not null default now()
);

create unique index if not exists idx_bce_waitlist_email_unique
  on public.bce_waitlist (lower(email));

create index if not exists idx_bce_waitlist_created_at
  on public.bce_waitlist (created_at desc);

alter table public.bce_waitlist enable row level security;

-- No anon policies: all writes go through CH Digital site API route using the
-- service role key. Read access is admin-only via Supabase Studio.

comment on table public.bce_waitlist is
  'Early-access waitlist captured from chdigitals.com.au /bce page.';
