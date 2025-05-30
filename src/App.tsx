import reactLogo from "./assets/images/react.svg";
import flutterLogo from "./assets/images/flutter.svg";
import kotlinLogo from "./assets/images/kotlin.svg";
import swiftLogo from "./assets/images/swift.svg";

import androidMeetingPhoto from "./assets/images/about/android-meeting.webp";
import goodbyeDinnerPhoto from "./assets/images/about/goodbye-dinner.webp";

import ncsuguessrScreenshot from "./assets/images/projects/ncsuguessr.png";
import gpaiScreenshot from "./assets/images/projects/gpai.png";

import Header from "./components/Header";
import Background from "./components/Background";
import Landing from "./components/Landing";
import Section from "./components/Section";
import Footer from "./components/Footer";

import H2 from "./components/headings/H2";
import P from "./components/P";

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
          <P>
            The NC State App Development Club is a student-led organization
            focused on building real-world software through hands-on experience.
            We bring together developers of all skill levels to work on mobile
            apps for the NC State community.
          </P>

          <P>
            Whether you're new to coding or looking to sharpen your skills, our
            club provides opportunities to design beautiful user interfaces,
            contribute to full-stack projects, and learn modern development
            tools and practices.
          </P>

          <P>
            Our goal is to help NC State students become confident, capable
            software engineers through practical experience and a strong
            developer community.
          </P>

          <P>
            <strong>Come build with us.</strong>
          </P>
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
          <P>
            Members can join one of four specialized teams based on their
            interests and preferred tech stack. Each team focuses on a different
            platform and gives students hands-on experience building real apps
            in a collaborative environment.
          </P>

          <div
            id="teams-grid"
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5"
          >
            <div>
              <h3>
                <img src={swiftLogo} alt="Swift Logo" />
                iOS Team (Swift)
              </h3>
              <P>
                Learn the ins and outs of building sleek, performant iOS apps
                using Swift and Xcode. Perfect for Apple enthusiasts who want to
                dive deep into the iOS ecosystem.
              </P>
            </div>
            <div>
              <h3>
                <img src={kotlinLogo} alt="Kotlin Logo" />
                Android Team (Kotlin)
              </h3>
              <P>
                Develop native Android apps with Kotlin, the modern language of
                choice for Android development. Great for those who want full
                control over the Android experience.
              </P>
            </div>
            <div>
              <h3>
                <img src={reactLogo} alt="React Logo" />
                React Native Team
              </h3>
              <P>
                Build cross-platform mobile apps using TypeScript and React
                Native. Ideal for web developers looking to transition into
                mobile without starting from scratch.
              </P>
            </div>
            <div>
              <div>
                <h3>
                  <img src={flutterLogo} alt="Flutter Logo" />
                  Flutter Team
                </h3>
                <P>
                  Use Dart and Flutter to create beautiful, fast apps for both
                  iOS and Android from a single codebase. Great for those who
                  want to explore Google's modern UI toolkit.
                </P>
              </div>
            </div>
          </div>

          <P>
            Each team meets weekly, works on real projects, and contributes to
            the overall success of the club. No prior experience required — just
            curiosity and a willingness to learn.
          </P>
        </Section>
        <Section id="projects">
          <H2>Projects</H2>
          <div id="projects-grid">
            <div>
              <div>
                <h3>NCSUGuessr</h3>
                <P>
                  <i>Spring 2025 - Present</i>
                </P>
                <P>
                  A location guessing game where players identify places around
                  NC State University based on campus images. It offers a fun
                  and interactive way to explore and test knowledge of the
                  university's landmarks.
                </P>
              </div>
              <img src={ncsuguessrScreenshot} alt="NCSUGuessr home screen." />
            </div>
            <div>
              <div>
                <h3>GPAi</h3>
                <P>
                  <i>Fall 2024 - Present</i>
                </P>
                <P>
                  A mobile application that help students forecast their GPA and
                  receive personalized academic advice. By uploading a PDF
                  transcript, users can track their academic progress and make
                  informed decisions regarding their courses and grades.
                </P>
              </div>
              <img src={gpaiScreenshot} alt="NCSUGuessr home screen." />
            </div>
          </div>
        </Section>
        <Section id="apply">
          <H2>Apply</H2>
          <P>
            Applications for Fall 2025 will open within the few weeks of the
            semester.
          </P>
          <P>
            In the meantime, please feel free to{" "}
            <a href="https://forms.gle/K1SBAP8dNEnqwUSv7" className="underline">
              submit your resume
            </a>{" "}
            to express your interest in joining!
          </P>
        </Section>
      </main>
      <Footer />
    </>
  );
}

export default App;
