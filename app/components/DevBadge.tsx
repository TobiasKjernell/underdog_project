export default function DevBadge() {
  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 rounded-full border-2 border-red-500 bg-red-50/90 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.15em] text-red-600 shadow-lg shadow-red-500/40 ring-4 ring-red-500/20 backdrop-blur">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600" />
      </span>
      Development
    </div>
  );
}
