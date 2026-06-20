-- FrameCut Studio — Supabase Schema
-- Run this in the Supabase SQL Editor

-- Leads / Contact Form submissions
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  service TEXT,
  language TEXT DEFAULT 'pt',
  origin TEXT DEFAULT 'contact_form',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (form submissions)
CREATE POLICY "Allow public inserts" ON leads
  FOR INSERT WITH CHECK (true);

-- Only authenticated users (admins) can read leads
CREATE POLICY "Allow authenticated reads" ON leads
  FOR SELECT USING (auth.role() = 'authenticated');

-- Index for common queries
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);
CREATE INDEX IF NOT EXISTS leads_email_idx ON leads (email);

-- Optional: Newsletter subscriptions
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  language TEXT DEFAULT 'pt',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public newsletter inserts" ON newsletter_subscriptions
  FOR INSERT WITH CHECK (true);
