import Breadcrumbs from '@/components/breadcrumbs';

export default function ListingsPage() {
  return (
    <main className="px-4 py-3">
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Dashboard', href: '/dashboard' },
          { label: 'Listings', href: '/dashboard/listings', active: true },
        ]}
      />
    </main>
  );
}
