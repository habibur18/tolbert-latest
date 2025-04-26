export default function GDRFormReview({ formData, formattedPhone }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-primary">Review Your Information</h3>
      <div className="bg-gray-50 p-4 rounded-lg space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="font-medium">{formData.fullName}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium">{formData.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-medium">{formattedPhone}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">ZIP Code</p>
            <p className="font-medium">{formData.zipCode}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Door Type</p>
            <p className="font-medium capitalize">{formData.doorType.replace("-", " ")}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Door Width</p>
            <p className="font-medium capitalize">{formData.doorWidth.replace("-", " ")}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Timeframe</p>
            <p className="font-medium capitalize">{formData.urgency.replace("-", " ")}</p>
          </div>
        </div>
        {formData.description && (
          <div>
            <p className="text-sm text-gray-500">Additional Details</p>
            <p className="font-medium">{formData.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
