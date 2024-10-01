import {LiveThemingControls} from "@/components/experiments/live-theming-controls";
import "./styles.css";

const LiveThemingPage = () => {
  return (
    <main id="live-theming-experiment">
      <div className="h-screen font-sans">
        <div className="flex h-full">
          <div className="basis-[300px] p-12 border-r border-neutral-200">
            <LiveThemingControls />
          </div>
          <div className="flex flex-1 p-12">
            <div className="grid grid-cols-6 gap-8 max-w-[1400px] m-auto">
              <h1 className="col-start-3 col-span-3 text-5xl">Live Theming with CSS Variables and JavaScript: A Modern Approach</h1>
              <p className="col-start-3 col-span-4 text-lg">Web design has evolved significantly over the years, with customization and personalization becoming key elements of user experience. Live theming—the ability for users to switch between different themes in real time—is a feature that's gaining widespread popularity. Whether it’s for dark mode, accessibility features, or personalized color schemes, live theming can enhance usability and engagement. Two essential technologies enabling this are CSS variables (custom properties) and JavaScript.</p>
              <div className="col-start-1 col-span-2">
                <h2 className="text-xl mb-2">What is Live Theming?</h2>
                <p>Live theming refers to changing the appearance of a website or
                  application without reloading the page. Users can toggle between different styles, such as light and
                  dark modes or custom color schemes, in a seamless and instant fashion. This provides not only
                  aesthetic benefits but also functional advantages, such as reducing eye strain in low-light
                  environments.</p>
              </div>
              <div className="col-start-3 col-span-2 row-start-3">
                <h2 className="text-xl mb-2">The Role of CSS Variables</h2>
                <p>CSS variables (also known as custom properties) play a pivotal
                  role
                  in live theming by enabling dynamic theming capabilities within stylesheets. Unlike static CSS, CSS
                  variables allow you to define reusable values that can be updated globally throughout your
                  stylesheets.</p>
              </div>
              <div className="col-start-5 col-span-2 row-start-3">
                <h2 className="text-xl mb-2">Why Use JavaScript?</h2>
                <p>While CSS variables handle the styling aspect, JavaScript is what
                  brings live theming to life. JavaScript allows developers to detect user actions, such as clicking a
                  button or selecting a theme from a dropdown menu. Once a theme is selected, JavaScript can update the
                  CSS variables with the corresponding values for the chosen theme. This creates a smooth and responsive
                  user experience.</p>
              </div>
              <ul className="grid grid-cols-subgrid col-start-1 col-span-6">
                <li>
                  <h3 className="mb-1 text-md font-medium">Improved Accessibility</h3>
                  <p className="text-sm">
                    Users can switch between themes that suit their visual preferences. This is especially useful for
                    those with visual impairments or who prefer high contrast or low brightness settings.
                  </p>
                </li>
                <li>
                  <h3 className="mb-1 text-md font-medium">Better User Experience</h3>
                  <p className="text-sm">
                    Offering live theming shows attention to user comfort and personalization,
                    which can lead to higher engagement and retention rates.
                  </p>
                </li>
                <li>
                  <h3 className="mb-1 text-md font-medium">Brand Consistency</h3>
                  <p className="text-sm">
                    Websites or applications that offer multiple themes for different environments
                    (such as light and dark modes) maintain visual consistency without needing separate stylesheets.
                  </p>
                </li>
                <li>
                  <h3 className="mb-1 text-md font-medium">Enhanced Performance</h3>
                  <p className="text-sm">
                    Since CSS variables are evaluated in the browser and JavaScript is used only to
                    update these variables, live theming is more efficient than swapping out entire stylesheets.
                  </p>
                </li>
                <li>
                  <h3 className="mb-1 text-md font-medium">Dark Mode</h3>
                  <p className="text-sm">
                    One of the most common uses of live theming, allowing users to switch between light and dark
                    interfaces based on their environment or preference.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LiveThemingPage;