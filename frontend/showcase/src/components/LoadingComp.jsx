function LoadingComponents() {
  return (
    <>
      <div className="flex-1 px-6 py-20 md:px-16">
        <div className="mx-auto max-w-6xl border border-white/10 bg-[#0e0e16] p-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-500 animate-pulse">
            Loading...
          </p>
          <p className="mt-3 text-gray-400">Connecting to server...</p>
        </div>
      </div>
    </>
  );
}

export default LoadingComponents;
