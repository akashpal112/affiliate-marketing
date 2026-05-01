'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Affiliate {
  _id: string;
  link: string;
  clicks: number;
  conversions: number;
  commission: number;
}

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [affiliates, setAffiliates] = useState<Affiliate[]>([]);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  useEffect(() => {
    if (session) {
      fetchAffiliates();
    }
  }, [session]);

  const fetchAffiliates = async () => {
    const res = await fetch('/api/affiliate');
    if (res.ok) {
      const data = await res.json();
      setAffiliates(data);
    }
  };

  const createAffiliateLink = async () => {
    const productId = prompt('Enter product ID');
    if (productId) {
      const res = await fetch('/api/affiliate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
      });
      if (res.ok) {
        fetchAffiliates();
      }
    }
  };

  if (status === 'loading') return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold">Dashboard</h1>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700">Welcome, {session?.user?.name}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8">
            <button
              onClick={createAffiliateLink}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Create Affiliate Link
            </button>
          </div>
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {affiliates.map((affiliate) => (
                <li key={affiliate._id}>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {affiliate.link}
                        </p>
                        <p className="text-sm text-gray-500">
                          Clicks: {affiliate.clicks} | Conversions: {affiliate.conversions} | Commission: ${affiliate.commission}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}