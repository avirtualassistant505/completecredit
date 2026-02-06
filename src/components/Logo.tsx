export function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} relative overflow-hidden flex items-center justify-center`}>
      <img
        src="/whatsapp_image_2026-01-30_at_10.18.42_pm.jpeg"
        alt="Complete Credit Treatment Logo"
        className="w-[200%] h-[200%] object-cover object-center"
        style={{
          objectPosition: 'center 45%',
        }}
      />
    </div>
  );
}
