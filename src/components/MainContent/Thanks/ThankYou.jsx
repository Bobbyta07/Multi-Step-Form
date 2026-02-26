function ThankYou() {
  return (
    <div className="flex flex-col items-center gap-4 mb-20">
      <img src="/images/icon-thank-you.svg" alt="Thank You" />
      <h2 className="font-Ubuntu font-bold text-2xl text-blue-950">
        Thank you!
      </h2>
      <p className="font-Ubuntu font-normal text-slate-500">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        <a
          href="mailto:test@gmail.com"
          className="text-blue-800 hover:underline ml-1"
        >
          test@gmail.com
        </a>
      </p>
    </div>
  );
}

export default ThankYou;
