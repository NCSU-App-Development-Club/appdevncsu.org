import reactLogo from '../../assets/images/react.svg'
import flutterLogo from '../../assets/images/flutter.svg'
import kotlinLogo from '../../assets/images/kotlin.svg'
import swiftLogo from '../../assets/images/swift.svg'

export default function Landing() {
  return (
    <div
      id="landing"
      className="min-h-screen flex flex-grow items-center justify-center px-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl items-center">
        <div className="grid grid-cols-2 grid-rows-2 w-48 h-48 md:w-60 md:h-60 items-center justify-items-center justify-self-center">
          <img
            src={kotlinLogo}
            alt="Kotlin"
            className="w-16 md:w-20 fade-in-1 opacity-0"
          />
          <img
            src={swiftLogo}
            alt="Swift"
            className="w-16 md:w-20 fade-in-2 opacity-0"
          />
          <img
            src={reactLogo}
            alt="React"
            className="w-16 md:w-20 fade-in-3 opacity-0"
          />
          <img
            src={flutterLogo}
            alt="Flutter"
            className="w-16 md:w-20 fade-in-4 opacity-0"
          />
        </div>

        <div className="text-center md:text-right animate-slide-in md:mr-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            App Development Club
          </h1>
          <p className="text-xl text-gray-300">
            @ North Carolina State University
          </p>
        </div>
      </div>
    </div>
  )
}
