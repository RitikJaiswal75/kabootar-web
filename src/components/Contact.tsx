const Contact = () => {
  return (
    <section id="contact" className="container mx-auto px-5 text-lg">
      <h2 className="text-xl sm:text-3xl font-bold text-emerald-600 mb-4">
        Contact
      </h2>
      For feedback, support, or contributions, reach out to us at{" "}
      <a href="mailto:kabootar@ritik.cc" className="text-emerald-400 underline">
        kabootar@ritik.cc
      </a>{" "}
      or visit our{" "}
      <a
        href="https://github.com/RitikJaiswal75/kabootar"
        target="_blank"
        className="text-emerald-400 underline"
      >
        GitHub repository
      </a>
      .
    </section>
  );
};

export default Contact;
