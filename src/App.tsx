import reactLogo from "./assets/images/react.svg";
import flutterLogo from "./assets/images/flutter.svg";
import kotlinLogo from "./assets/images/kotlin.svg";
import swiftLogo from "./assets/images/swift.svg";

import androidMeetingPhoto from "./assets/images/about/android-meeting.png";
import goodbyeDinnerPhoto from "./assets/images/about/goodbye-dinner.png";

import ncsuguessrScreenshot from "./assets/images/projects/ncsuguessr.png";
import gpaiScreenshot from "./assets/images/projects/gpai.png";

import Header from "./components/Header";
import Background from "./components/Background";
import Landing from "./components/Landing";
import Section from "./components/Section";
import Footer from "./components/Footer";

import H2 from "./components/headings/H2";

function App() {
  return (
    <>
      <Header />
      <Background />
      <main
        id="main"
        className="flex flex-col justify-center items-center space-y-8 mb-12"
      >
        <Landing />
        <Section id="about">
          <H2>About Us</H2>
          <p>
            The NC State App Development Club is a student-led organization
            focused on building real-world software through hands-on experience.
            We bring together developers of all skill levels to work on mobile
            apps for the NC State community.
          </p>

          <p>
            Whether you're new to coding or looking to sharpen your skills, our
            club provides opportunities to design beautiful user interfaces,
            contribute to full-stack projects, and learn modern development
            tools and practices.
          </p>

          <p>
            Our goal is to help NC State students become confident, capable
            software engineers through practical experience and a strong
            developer community.
          </p>

          <p className="text-lg">
            <strong>Come build with us.</strong>
          </p>
          <div
            id="about-images"
            className="grid grid-cols-1 md:grid-cols-2 mb-4 mt-4 gap-4"
          >
            <img src={androidMeetingPhoto} alt="Android Team" />
            <img src={goodbyeDinnerPhoto} alt="Goodbye Dinner" />
          </div>
        </Section>
        <Section id="teams">
          <H2>Our Teams</H2>
          <p className="mb-6">
            Members can join one of four specialized teams based on their
            interests and preferred tech stack. Each team focuses on a different
            platform and gives students hands-on experience building real apps
            in a collaborative environment.
          </p>

          <div
            id="teams-grid"
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5"
          >
            <div>
              <h3>
                <img src={swiftLogo} alt="Swift Logo" />
                iOS Team (Swift)
              </h3>
              <p>
                Learn the ins and outs of building sleek, performant iOS apps
                using Swift and Xcode. Perfect for Apple enthusiasts who want to
                dive deep into the iOS ecosystem.
              </p>
            </div>
            <div>
              <h3>
                <img src={kotlinLogo} alt="Kotlin Logo" />
                Android Team (Kotlin)
              </h3>
              <p className="mb-5">
                Develop native Android apps with Kotlin, the modern language of
                choice for Android development. Great for those who want full
                control over the Android experience.
              </p>
            </div>
            <div>
              <h3>
                <img src={reactLogo} alt="React Logo" />
                React Native Team
              </h3>
              <p className="mb-5">
                Build cross-platform mobile apps using TypeScript and React
                Native. Ideal for web developers looking to transition into
                mobile without starting from scratch.
              </p>
            </div>
            <div>
              <div>
                <h3>
                  <img src={flutterLogo} alt="Flutter Logo" />
                  Flutter Team
                </h3>
                <p className="mb-5">
                  Use Dart and Flutter to create beautiful, fast apps for both
                  iOS and Android from a single codebase. Great for those who
                  want to explore Google's modern UI toolkit.
                </p>
              </div>
            </div>
          </div>

          <p>
            Each team meets weekly, works on real projects, and contributes to
            the overall success of the club. No prior experience required — just
            curiosity and a willingness to learn.
          </p>
        </Section>
        <Section id="projects">
          <H2>Projects</H2>
          <div id="projects-grid">
            <div>
              <div>
                <h3>NCSUGuessr</h3>
                <p>
                  <i>Spring 2025 - Present</i>
                </p>
                <p>
                  A location guessing game where players identify places around
                  NC State University based on campus images. It offers a fun
                  and interactive way to explore and test knowledge of the
                  university's landmarks.
                </p>
              </div>
              <img src={ncsuguessrScreenshot} alt="NCSUGuessr home screen." />
            </div>
            <div>
              <div>
                <h3>GPAi</h3>
                <p>
                  <i>Fall 2024 - Present</i>
                </p>
                <p>
                  A mobile application that help students forecast their GPA and
                  receive personalized academic advice. By uploading a PDF
                  transcript, users can track their academic progress and make
                  informed decisions regarding their courses and grades.
                </p>
              </div>
              <img src={gpaiScreenshot} alt="NCSUGuessr home screen." />
            </div>
          </div>
        </Section>
        <Section id="apply">
          <H2>Apply</H2>
          <p>
            Applications for Fall 2025 will open within the few weeks of the
            semester.
          </p>
          <p>
            In the meantime, please feel free to{" "}
            <a href="https://forms.gle/K1SBAP8dNEnqwUSv7" className="underline">
              submit your resume
            </a>{" "}
            to express your interest in joining!
          </p>
        </Section>
      </main>
      <Footer />
    </>
  );
}

export default App;
