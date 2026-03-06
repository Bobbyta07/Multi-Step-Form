function Total(props) {
  const { selectedPlanData, selectedAddOns } = props;
  const addOnsTotal = selectedAddOns.reduce((total, addOn) => {
    const price = parseInt(addOn.price.replace(/[^0-9]/g, ''));
    return total + price;
  }, 0);
  const planPrice = parseInt(selectedPlanData.textValue.replace(/[^0-9]/g, ''));
  const totalPrice = planPrice + addOnsTotal;

  return (
    <div className="flex justify-between items-center mt-6 mb-10 md:mb-20 p-4">
      <p className="font-Ubuntu font-medium text-slate-500">
        Total (per {props.checked ? 'year' : 'month'})
      </p>
      <p className="font-Ubuntu font-bold text-blue-950 ">
        +${totalPrice}/{props.checked ? 'yr' : 'mo'}
      </p>
    </div>
  );
}

export default Total;
