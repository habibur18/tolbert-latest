export default function StorageBinRacksStepsSection() {
  return (
    <div className="bg-green-100 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-4xl md:text-5xl font-medium text-gray-700">
          Get a <span className="text-green-600">complimentary</span> assessment.
        </p>
        <h2 className="text-2xl font-bold text-green-800">
          As easy as <span className="text-green-600">One. Two. Three.</span>
        </h2>
      </div>
      <div className="mt-8 flex flex-col md:flex-row justify-center gap-6 px-4">
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-md text-center w-full md:w-1/3">
          <div className="w-12 h-12 mx-auto flex items-center justify-center border-2 border-white rounded-full text-xl font-bold">1</div>
          <p className="mt-4">Fill out an inquiry form</p>
        </div>
        <div className="bg-green-600 text-white p-6 rounded-lg shadow-md text-center w-full md:w-1/3">
          <div className="w-12 h-12 mx-auto flex items-center justify-center border-2 border-white rounded-full text-xl font-bold">2</div>
          <p className="mt-4">Speak with our garage specialist</p>
        </div>
        <div className="bg-green-700 text-white p-6 rounded-lg shadow-md text-center w-full md:w-1/3">
          <div className="w-12 h-12 mx-auto flex items-center justify-center border-2 border-white rounded-full text-xl font-bold">3</div>
          <p className="mt-4">Enjoy your new garage</p>
        </div>
      </div>
    </div>
  );
}
