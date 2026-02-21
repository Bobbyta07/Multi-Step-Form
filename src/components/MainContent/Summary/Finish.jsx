import { plansText, yearlyPlans, extensions } from '../../data';

function Finish(props) {
  const planList = props.formData.checked ? yearlyPlans : plansText;

  const selectedPlanData = planList.find(
    (plan) => plan.id === props.formData.selectedPlan
  );

  const selectedAddOns = extensions.filter((extension) =>
    props.formData.addOns.includes(extension.id)
  );

  return (
    <div className="mt-8 rounded-2xl bg-slate-50 p-6 shadow-sm border border-slate-200">
      {/* Plan Section */}

      <div className="flex items-start justify-between pb-4 border-b border-slate-200">
        <div className="space-y-1">
          <h3 className="font-Ubuntu text-lg font-semibold text-slate-900">
            {selectedPlanData.textHead}
            <span className="font-medium text-slate-500">
              ({props.formData.checked ? 'Yearly' : 'Monthly'})
            </span>
          </h3>
          <p className="text-sm font-medium text-slate-500 underline cursor-pointer hover:text-slate-700 transition">
            Change
          </p>
        </div>

        <p className="font-Ubuntu text-base font-semibold text-slate-900">
          {selectedPlanData.textValue}
        </p>
      </div>

      {/* Add-ons */}
      <div className="space-y-4 pt-4">
        {selectedAddOns.map((addOn) => (
          <div className="flex justify-between items-center text-sm">
            <h3 className="font-Ubuntu text-slate-500">{addOn.name}</h3>
            <p className="font-medium text-slate-700">{addOn.price}</p>
          </div>
        ))}

        {/* <div className="flex justify-between items-center text-sm">
          <h3 className="font-Ubuntu text-slate-500">Larger storage</h3>
          <p className="font-medium text-slate-700">+$2/mo</p>
        </div> */}
      </div>
    </div>
  );
}

export default Finish;
