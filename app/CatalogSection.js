export default function CatalogSection() {
  return (
    <section
      id="catalog"
      className="bg-gradient-to-t from-green-100 to-white text-white py-16 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h1
          className="lg:text-5xl md:text-5xl  text-4xl font-extrabold text-green-900 mb-8 fancy-shadow"
          style={{ fontFamily: "Poppins" }}
        >
          Daftar Harga Layanan
        </h1>

        <div className="space-y-8 text-left shadow-lg bg-green-600 rounded-xl p-10">
          {[
            {
              title: "Quick clean",
              desc: "Midsole, Outsole, Upper",
              price: "20K",
            },
            {
              title: "Deep clean",
              desc: "Midsole, Outsole, Upper, Insole",
              price: "25K",
            },
            {
              title: "Quick clean white shoes",
              desc: "Midsole, Outsole, Upper",
              price: "25K",
            },
            {
              title: "Deep clean white shoes",
              desc: "Midsole, Outsole, Upper, Insole",
              price: "30K",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex justify-between items-center ${
                index !== 3 ? "border-b border-green-500 pb-4" : ""
              }`}
            >
              <div>
                <h3
                  className="text-2xl font-bold"
                  style={{ fontFamily: "Poppins" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm opacity-80"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {item.desc}
                </p>
              </div>
              <span
                className="text-2xl font-extrabold"
                style={{ fontFamily: "Poppins" }}
              >
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
