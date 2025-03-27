// app/events/[event]/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Event Not Found</h1>
      <p className="text-xl text-gray-700 mb-6">
        The event you are looking for does not exist.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Back to Events
      </Link>
    </div>
  );
}