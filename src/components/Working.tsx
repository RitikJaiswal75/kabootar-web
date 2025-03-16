const Working = () => {
  return (
    <section id="working" className="container mx-auto px-5 ">
      <h2 className="text-xl sm:text-3xl font-bold text-emerald-600 mb-4">
        How It Works
      </h2>
      <ul>
        <li className="text-lg border-b-gray-800 border-b-2 py-2 text-amber-400">
          <i className="ri-alarm-warning-line text-3xl">&nbsp;</i>
          <span> Make sure both sender and receiver are </span>
          <span className="font-bold"> on same Wi-fi </span>
        </li>
        <li className="text-lg border-b-gray-800 border-b-2 py-2">
          <i className="ri-file-add-line text-3xl">&nbsp;</i>
          <span className="font-bold"> Install Kabootar </span>
          <span> on the </span>
          <span className="font-bold"> receiver's device </span>
          <span> (pc)</span>
        </li>
        <li className="text-lg border-b-gray-800 border-b-2 py-2">
          <i className="ri-file-add-line text-3xl">&nbsp;</i>
          <span> Open the </span>
          <span className="font-bold"> link </span>
          <span> shown on the </span>
          <span className="font-bold"> receiver's device </span>
          <span> on </span>
          <span className="font-bold">Sender's device</span>
        </li>
        <li className="text-lg border-b-gray-800 border-b-2 py-2">
          <i className="ri-file-add-line text-3xl">&nbsp;</i>
          <span className="font-bold"> Send files </span>
          <span>
            from the sender's mobile or PC directly to the receiver's PC over
            the local network.
          </span>
        </li>
        <li className="text-lg border-b-gray-800 border-b-2 py-2">
          <i className="ri-file-add-line text-3xl">&nbsp;</i>
          <span className="font-bold"> Enjoy hassle-free sharing </span>
          <span>without worrying about installation on the sender's side.</span>
        </li>
        <li className="text-lg border-b-gray-800 border-b-2 py-2">
          <i className="ri-file-add-line text-3xl">&nbsp;</i>
          <span>Checkout how to install</span>
          <span className="font-bold">
            <a
              href="https://github.com/RitikJaiswal75/kabootar/releases/tag/v0"
              target="_blank"
            >
              here
            </a>
            .
          </span>
        </li>
      </ul>
    </section>
  );
};

export default Working;
