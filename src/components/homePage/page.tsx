export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="px-6 py-20 text-center bg-green-50">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700">AgriMitra</h1>
        <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-600">
          Smart dairy and rural business management platform for milkmen. Track customers, milk
          delivery, and payments easily.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg">Get Started</button>
          <button className="px-6 py-3 border border-green-600 text-green-600 rounded-lg">
            Learn More
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">Powerful Features</h2>

        <div className="grid md:grid-cols-3 gap-10">
          <FeatureCard
            title="Customer Management"
            desc="Add, edit and manage all your customers in one place."
          />
          <FeatureCard
            title="Daily Milk Entry"
            desc="Track daily milk delivery with automatic calculations."
          />
          <FeatureCard title="Payment Tracking" desc="Monitor payments and pending dues easily." />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 text-white text-center py-16">
        <h3 className="text-2xl font-semibold">Start managing your dairy business today</h3>
        <button className="mt-6 px-6 py-3 bg-white text-green-600 rounded-lg">
          Create Free Account
        </button>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} AgriMitra. All rights reserved.
      </footer>
    </main>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
