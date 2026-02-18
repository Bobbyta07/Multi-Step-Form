function Finish() {
  return (
    <div className="mt-8 rounded-2xl bg-slate-50 p-6 shadow-sm border border-slate-200">
      {/* Plan Section */}
      <div className="flex items-start justify-between pb-4 border-b border-slate-200">
        <div className="space-y-1">
          <h3 className="font-Ubuntu text-lg font-semibold text-slate-900">
            Arcade <span className="font-medium text-slate-500">(Monthly)</span>
          </h3>
          <p className="text-sm font-medium text-slate-500 underline cursor-pointer hover:text-slate-700 transition">
            Change
          </p>
        </div>

        <p className="font-Ubuntu text-base font-semibold text-slate-900">
          +$1/mo
        </p>
      </div>

      {/* Add-ons */}
      <div className="space-y-4 pt-4">
        <div className="flex justify-between items-center text-sm">
          <h3 className="font-Ubuntu text-slate-500">Online Service</h3>
          <p className="font-medium text-slate-700">+$1/mo</p>
        </div>

        <div className="flex justify-between items-center text-sm">
          <h3 className="font-Ubuntu text-slate-500">Larger storage</h3>
          <p className="font-medium text-slate-700">+$2/mo</p>
        </div>
      </div>
    </div>
  );
}

export default Finish;
