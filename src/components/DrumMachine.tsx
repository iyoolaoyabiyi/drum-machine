export default function DrumMachine({children}: {children: React.ReactNode}) {
  return (
    <div id="drum-machine" className="container mx-auto p-10 max-w-2xl border-2 border-gray-300 rounded-lg">
      {children}
    </div>
  )
}