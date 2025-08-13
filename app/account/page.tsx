export default function AccountPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Account</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
            <p className="text-gray-600">Manage your personal details and preferences</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Order History</h2>
            <p className="text-gray-600">View your past orders and track current ones</p>
          </div>
        </div>
      </div>
    </main>
  );
}
