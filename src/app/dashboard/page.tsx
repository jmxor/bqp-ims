import Breadcrumbs from '@/components/breadcrumbs';

export default function DashboardPage() {
  return (
    <main className="px-4 py-3">
      <Breadcrumbs
        breadcrumbs={[{ label: 'Dashboard', href: '/dashboard', active: true }]}
      />
    </main>
  );
}
