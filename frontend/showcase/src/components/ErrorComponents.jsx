function ErrorComponents() {
  return (
    <>
      <div className="flex-1 px-6 py-20 md:px-16">
        <div className="mx-auto max-w-6xl border border-red-400/30 bg-[#0e0e16] p-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-red-400">
            Oops!
          </p>
          <p className="mt-3 text-gray-400">
            Something went wrong — but we’ll fix it soon.
          </p>
        </div>
      </div>
    </>
  );
}

export default ErrorComponents;
