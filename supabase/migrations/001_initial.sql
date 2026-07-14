
create extension if not exists pgcrypto;
create type public.user_role as enum ('customer','employee','manager','owner');
create type public.order_status as enum ('draft','pending_payment','paid_review','approved','printing','quality_check','ready','completed','cancelled');
create table public.branches(id text primary key,name text not null,address text,location_detail text,phone text,email text,status text default 'open',vacation_start date,vacation_end date,created_at timestamptz default now());
create table public.profiles(id uuid primary key references auth.users(id) on delete cascade,full_name text,email text unique,phone text,role public.user_role not null default 'customer',branch_id text references public.branches(id),is_active boolean default true,created_at timestamptz default now(),updated_at timestamptz default now());
create table public.user_branch_access(user_id uuid references public.profiles(id) on delete cascade,branch_id text references public.branches(id) on delete cascade,primary key(user_id,branch_id));
create table public.settings(key text primary key,value jsonb not null,updated_by uuid references public.profiles(id),updated_at timestamptz default now());
create table public.premade_designs(id uuid primary key default gen_random_uuid(),name text not null,category text,tags text[] default '{}',image_url text,thumbnail_url text,product_types text[] default '{}',print_areas text[] default '{}',is_active boolean default true,is_featured boolean default false,created_at timestamptz default now());
create table public.design_drafts(id uuid primary key default gen_random_uuid(),customer_id uuid references public.profiles(id),product_type text,garment_source text default 'store',print_area text,canvas_json jsonb,preview_url text,original_files jsonb,updated_at timestamptz default now());
create table public.orders(id uuid primary key default gen_random_uuid(),order_number text unique not null,customer_id uuid references public.profiles(id),branch_id text references public.branches(id),design_id uuid references public.design_drafts(id),product_type text,size text,color text,quantity int default 1,subtotal numeric(10,2) default 0,shipping_cost numeric(10,2) default 0,total numeric(10,2) default 0,fulfillment text check(fulfillment in ('pickup','shipping')),shipping_address jsonb,payment_method text default 'cash_app',payment_proof_url text,payment_verified_by uuid references public.profiles(id),payment_verified_at timestamptz,status public.order_status default 'draft',customer_approved boolean default false,notes text,estimated_ready_at timestamptz,tracking_number text,created_at timestamptz default now(),updated_at timestamptz default now());
create table public.loyalty_transactions(id uuid primary key default gen_random_uuid(),customer_id uuid references public.profiles(id),order_id uuid references public.orders(id),points int not null,reason text,created_by uuid references public.profiles(id),created_at timestamptz default now());
create table public.discount_requests(id uuid primary key default gen_random_uuid(),customer_id uuid references public.profiles(id),reason text,requested_for date,amount_type text,amount numeric(10,2),status text default 'pending',approved_by uuid references public.profiles(id),created_at timestamptz default now());
create table public.audit_logs(id bigint generated always as identity primary key,actor_id uuid references public.profiles(id),action text not null,target_type text,target_id text,metadata jsonb,created_at timestamptz default now());
insert into public.branches(id,name,address,location_detail,phone,email) values
('galleria','Galleria Mall','2922 Watson Blvd, Centerville, GA 31028','Custom teez kiosk inside the food court','646-658-8061','centervillecustomtshirt@gmail.com'),
('valdosta','Valdosta Mall','1700 Norman Dr, Valdosta, GA','In front of Shoe Dept and rue21','470-406-0712','customteezval@gmail.com'),
('tifton','Tifton Mall','458 Virginia Ave N, Tifton, GA','In front of Belk and behind Discount Diamonds','470-406-0712','customstyletees1@gmail.com') on conflict do nothing;
insert into public.settings(key,value) values
('business_hours','{"mon_sat":"10:00-20:00","sun":"12:00-18:00"}'),
('shipping','{"enabled":true,"free_threshold":69.99,"provider":"Pirate Ship"}'),
('payment','{"online":["cash_app"],"in_store":["cash","card"],"cash_app_number":"6466588061"}'),
('features','{"morning_mode":true,"premade_designs":true,"nfc":true,"loyalty":true,"shipping":true}') on conflict do nothing;
alter table public.profiles enable row level security;alter table public.orders enable row level security;alter table public.design_drafts enable row level security;alter table public.premade_designs enable row level security;alter table public.branches enable row level security;
create policy "public branches" on public.branches for select using (true);
create policy "public active designs" on public.premade_designs for select using (is_active=true);
create policy "own profile" on public.profiles for select using (auth.uid()=id);
create policy "own drafts" on public.design_drafts for all using (auth.uid()=customer_id) with check (auth.uid()=customer_id);
create policy "own orders" on public.orders for select using (auth.uid()=customer_id);
