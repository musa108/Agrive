import Header from "../Landing_page/Header";

const About = () => {
  return (
    <main className="">
      <Header />
      <div className="flex flex-col justify-center my-10  max-w-[1020px]">
        <h1 className="text-2xl font-bold">About Us</h1>
        <div className="">
          <h2 className="font-semibold text-xl">
            Empowering Farmers, Connecting Communities
          </h2>
          <p className="">
            At Agrive, we are on a mission to transform the agricultural sector
            by bridging the gap between local farmers, investors, and consumers.
            Our platform is built on the idea that with the right support,
            tools, and connections, farmers can thrive, investors can make
            meaningful impacts, and consumers can access fresh, locally-grown
            produce.{" "}
          </p>
        </div>
        <div className="">
          <h2 className="font-semibold text-xl">Our Vision</h2>
          <p className="">
            We envision a future where agriculture is no longer just an industry
            but a thriving ecosystem where all stakeholders—farmers, investors,
            and consumers—work together for mutual benefit. We strive to create
            a seamless environment for local farmers to grow their businesses,
            secure funding, and reach a broader market. By fostering direct
            connections between farmers and investors, we aim to encourage
            sustainable agricultural practices while delivering fresh produce to
            consumers at affordable prices.
          </p>
        </div>
        <div className="">
          <h2 className="font-semibold text-xl">What We Do</h2>
          <p className="">We provide a unique online platform where:</p>
          <ul className="list-disc">
            <li className="">
              Farmers can showcase their farms, receive investments for their
              agricultural projects, and access resources to improve their
              productivity.
            </li>
            <li className="">
              Investors can explore a variety of farming opportunities and
              contribute to the growth of sustainable agriculture, while also
              earning returns from their investments.
            </li>
            <li className="">
              Consumers can purchase fresh, locally-sourced produce directly
              from farmers, ensuring they have access to healthier, more
              sustainable food options.
            </li>
          </ul>
          <p className="">
            Our platform is designed to facilitate transparent, secure, and
            mutually beneficial transactions between all parties, with an
            emphasis on community, sustainability, and economic growth.
          </p>
        </div>
        <div className="">
          <h2 className="font-semibold text-xl">Our Story</h2>
          <p className="">
            Agrive was founded with the belief that agriculture holds the key to
            unlocking economic opportunities in regions like Nigeria. After
            seeing how many farmers struggled to secure funding and connect with
            reliable consumers, we decided to build a solution that would
            streamline these processes. Our team is passionate about supporting
            local farmers and creating a community that values quality,
            sustainability, and innovation.
          </p>
        </div>
        <div className="">
          <h2 className="font-semibold text-xl">Our Values</h2>
          <ul className=" list-disc">
            <li className="">
              Community Impact: We are committed to supporting local farmers and
              ensuring they have the resources and support they need to grow.
            </li>
            <li className="">
              Sustainability: We prioritize environmentally friendly and
              sustainable farming practices, believing that agriculture should
              nourish both people and the planet.s.
            </li>
            <li className="">
              Transparency: We believe in open communication and transparency in
              every transaction on our platform.ble food options.
            </li>
            <li className="">
              Innovation: We leverage technology to create innovative solutions
              that make farming more efficient, profitable, and accessible.
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="font-semibold text-xl">
            Join Us in Making a Difference
          </h2>
          <p className="">
            Whether you`re a farmer looking for investment, an investor
            interested in supporting local agriculture, or a consumer wanting to
            buy fresh produce, Agrive is the place where you can make an impact.
            We invite you to be part of the movement to revolutionize the
            agricultural landscape and help build a sustainable future.
          </p>
        </div>
      </div>
    </main>
  );
};
export default About;
