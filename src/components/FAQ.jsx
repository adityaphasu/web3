const FAQ = () => {
  return (
    <div className="my-5 flex flex-col gap-4 p-5 rounded-lg justify-center backdrop-blur bg-white/5 text-white">
      <h2 className="text-2xl font-bold underline">Frequently Asked Questions</h2>
      <div className="flex flex-col gap-4 text-start">
        <div>
          <h3 className="text-lg font-semibold">1. Who created this database and why?</h3>
          <div className="text-sm text-white/70 flex flex-col gap-1">
            <p>
              This is a project created by{" "}
              <a
                href="https://www.google.com/url?q=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmariannacharalambous%2F"
                target="_blank"
                className="text-blue-500 hover:underline">
                Marianna Charalambous
              </a>
              , with a background in grants and crypto, and{" "}
              <a
                href="https://www.linkedin.com/in/androniki-menelaou-7994aa60/"
                target="_blank"
                className="text-blue-500 hover:underline">
                Androniki Menelaou
              </a>
              , with expertise in data analytics and AI. Over coffee, wine and shared enthusiasm, we
              decided to build something meaningful for the community.
            </p>
            <p>
              The idea came from a common frustration: finding a{" "}
              <span className="font-semibold text-slate-50">
                reliable, up-to-date resource for ACTIVE and UPCOMING grant opportunities.{" "}
              </span>
              Many existing databases are static, created once and forgotten. We wanted to change
              that by ensuring this database stays relevant and genuinely useful for Web3 projects
              seeking funding.
            </p>
            <p>
              This database is made available as one of the free resources provided by{" "}
              <a
                href="http://www.cornarolabs.xyz"
                target="_blank"
                className="text-blue-500 hover:underline">
                Cornaro Labs
              </a>
              , a consulting firm specializing in helping Web3 projects secure funding and grow.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">2. How can I navigate the database?</h3>
          <p className="text-sm text-white/70">
            You can filter grant opportunities by ecosystem, topics for funding, and active or
            upcoming opportunities. Make sure to scroll through the table vertically to view all
            opportunities.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">3. How often is the database updated?</h3>
          <p className="text-sm text-white/70">
            The database is updated{" "}
            <span className="font-semibold text-slate-50"> every 48 hours</span> to ensure it
            contains the most accurate and active grant opportunities available.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            4. Does this database show past/expired grant opportunities?
          </h3>
          <p className="text-sm text-white/70">
            No, this database is focused exclusively on showcasing{" "}
            <span className="font-semibold text-slate-50">ACTIVE</span> and{" "}
            <span className="font-semibold text-slate-50">UPCOMING</span> grant opportunities. We
            ensure its relevance by{" "}
            <span className="font-semibold text-slate-50">
              regularly reviewing and updating the information
            </span>{" "}
            to keep it current.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            5. Who do I contact if I have questions or find an error?
          </h3>
          <p className="text-sm text-white/70">
            If you have any questions, spot an error, or want to share feedback, feel free to reach
            out to us at{" "}
            <a href="mailto:marianna@cornarolabs.xyz" className="text-blue-500">
              marianna@cornarolabs.xyz
            </a>
            . We’re here to help and appreciate your input to make this resource even better!
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            6. Can I add a new grant program to the database?
          </h3>
          <p className="text-sm text-white/70">
            Absolutely! If you’re aware of an active or upcoming Web3 grant program that isn’t
            listed here, we’d love to hear about it. Please email us the details at{" "}
            <a href="mailto:marianna@cornarolabs.xyz" className="text-blue-500">
              marianna@cornarolabs.xyz
            </a>
            , and we’ll review and add it to the database.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">7. Is this the final version of the database?</h3>
          <p className="text-sm text-white/70">
            Not at all! This is just version 1 of what we are building—simple yet functional. We
            wanted to share it with the community as{" "}
            <span className="font-semibold text-slate-50">
              we continue to work on a more advanced and polished version that will include
              additional features and improvements. Stay tuned for updates!
            </span>
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">8. Is this database free to use?</h3>
          <p className="text-sm text-white/70">
            YES! Our goal is to support the Web3 ecosystem by providing open access to funding
            opportunities. However, if you’d like to support our work and the community, consider
            sharing the database!
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">9. Are there any other free resources?</h3>
          <p className="text-sm text-white/70">
            Yes! You may subscribe to our newsletter,{" "}
            <a
              href="https://www.google.com/url?q=https%3A%2F%2Fcornarolabs.substack.com"
              target="_blank"
              className="text-blue-500 hover:underline">
              CL Web3 Grants
            </a>
            , featuring curated grant opportunities for Web3 projects. In{" "}
            <a
              href="https://cornarolabs.substack.com"
              target="_blank"
              className="text-blue-500 hover:underline">
              CL Web3 Grants
            </a>
            , you’ll find new grant opportunities, insider tips for writing winning applications,
            pitch competitions, and events to elevate your Web3 journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
