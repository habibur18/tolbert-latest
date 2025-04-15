import Image from "next/image";
export default function CommunityFocused() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Committed to Our Dallas Community</h2>
          <p className="text-lg text-gray-600">At Tolbert Garage Door, we're proud to be an active part of the Dallas community, supporting local initiatives and providing reliable service to our neighbors.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="h-56 bg-gray-200 rounded-lg overflow-hidden mb-4">
              <Image src="/gate/support-local business.jpeg" alt="Tolbert Garage Door community event" width={400} height={300} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-2">Local Business Support</h3>
            <p className="text-gray-600 mb-4">We partner with other local businesses to strengthen our Dallas economy and provide comprehensive home services to our community.</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="h-56 bg-gray-200 rounded-lg overflow-hidden mb-4">
              <Image src="/gate/Charity Initiatives.png" alt="Tolbert Garage Door charity work" width={400} height={300} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-2">Charity Initiatives</h3>
            <p className="text-gray-600 mb-4">We regularly donate a portion of our proceeds to local charities and participate in community improvement projects throughout Dallas.</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="h-56 bg-gray-200 rounded-lg overflow-hidden mb-4">
              <Image src="/gate/local-jobs-for-local-people.jpg" alt="Tolbert Garage Door team members" width={400} height={300} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-2">Local Employment</h3>
            <p className="text-gray-600 mb-4">We're proud to create jobs for Dallas residents and provide ongoing training and career development for our team members.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
