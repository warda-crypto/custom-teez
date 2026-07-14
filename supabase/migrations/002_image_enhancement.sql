-- Image enhancement workflow.
-- Original customer uploads remain unwatermarked.
-- Only the customer-facing preview of artwork enhanced by Custom Teez is watermarked.

alter table public.design_drafts
  add column if not exists enhancement_requested boolean not null default false,
  add column if not exists enhancement_status text not null default 'not_requested'
    check (enhancement_status in ('not_requested','requested','in_review','completed','declined')),
  add column if not exists enhanced_preview_url text,
  add column if not exists enhanced_print_file_url text,
  add column if not exists enhancement_notes text,
  add column if not exists enhanced_by uuid references public.profiles(id),
  add column if not exists enhanced_at timestamptz;

comment on column public.design_drafts.enhanced_preview_url is
  'Customer-facing enhanced preview. The rendered preview must include the Custom Teez watermark.';
comment on column public.design_drafts.enhanced_print_file_url is
  'Private production file without watermark. Staff/manager/owner access only.';

-- Keep production files private. Customer policies should never expose enhanced_print_file_url directly.
